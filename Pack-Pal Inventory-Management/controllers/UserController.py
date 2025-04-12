from models.UserModel import User,UserOut,UserLogin
from bson import ObjectId
from config.database import user_collection,role_collection
from fastapi import HTTPException
from fastapi.responses import JSONResponse
from fastapi import APIRouter, HTTPException, UploadFile, File,Form
from fastapi.responses import JSONResponse
import bcrypt
import shutil
import os

async def addUser(user:User):
    user.role_id = ObjectId(user.role_id)
    print("after type cast",user.role_id)
    result = await user_collection.insert_one(user.dict())
    return JSONResponse(status_code=201,content={"message":"User created successfully"})

async def getUserById(user_id:str):
    user = await user_collection.find_one({"_id":ObjectId(user_id)})
    print(user)
    if user is None:
        raise HTTPException(status_code=404,detail="User not found")
    
    if "role_id" in user and isinstance(user["role_id"], ObjectId):
        user["role_id"] = str(user["role_id"])
    
    role = await role_collection.find_one({"_id":ObjectId(user["role_id"])})
    
    if role:
        user["role_id"] = str(role["_id"])
        user["role"] = role
    
    return UserOut(**user)

async def getAllUsers():
    users = await user_collection.find().to_list(length=None)

    for user in users:
        if "role_id" in user and isinstance(user["role_id"], ObjectId):
            user["role_id"] = str(user["role_id"])
        
        role = await role_collection.find_one({"_id": ObjectId(user["role_id"])})  
        
        if role:
            role["_id"] = str(role["_id"])
            user["role"] = role

    return [UserOut(**user) for user in users]

async def loginUser(request:UserLogin):
    foundUser = await user_collection.find_one({"email":request.email})

    if foundUser is None:
        raise HTTPException(status_code=404,detail="User not found")
        
    if "password" in foundUser and bcrypt.checkpw(request.password.encode(),foundUser["password"].encode()):
        foundUser["_id"] = str(foundUser["_id"])
        foundUser["role_id"] = str(foundUser["role_id"])
        role = await role_collection.find_one({"_id":ObjectId(foundUser["role_id"])})
        foundUser["role"] = role
        print("foundUser",foundUser)
        return {"message":"user login success","user":UserOut(**foundUser)}
    else:
        raise HTTPException(status_code=404,detail="Invalid password")

async def deleteUser(user_id:str):
    user = await user_collection.find_one({"_id":ObjectId(user_id)})
    if user is None:
        raise HTTPException(status_code=404,detail="User not found")
    role = await role_collection.find_one({"_id":ObjectId(user["role_id"])})
    if role['name'] == "Admin":
        raise HTTPException(status_code=400,detail="Cannot delete admin user")
    await user_collection.delete_one({"_id":ObjectId(user_id)})
    return JSONResponse(status_code=200,content={"message":"User deleted successfully"})