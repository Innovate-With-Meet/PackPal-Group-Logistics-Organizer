from models.CategoryModel import Category,CategoryOut
from bson import ObjectId
from fastapi import APIRouter,HTTPException
from fastapi.responses import JSONResponse
from config.database import category_collection, sub_category_collection

async def addCategory(category:Category):
    savedCategory = await category_collection.insert_one(category.dict())
    return JSONResponse(content={"message":"category saved successfully!!"},status_code=201)


async def getAllCategories():
    categories = await category_collection.find().to_list()
    return [CategoryOut(**cat) for cat in categories]

async def deleteCategory(categoryId:str):
    subcategory = await category_collection.find({"_id" : ObjectId(categoryId)}).to_list()
    
    if subcategory:
        for subcat in subcategory:
            result = await sub_category_collection.delete_one({"category_id" : ObjectId(categoryId)})
            if result:
                category_to_be_del = category_collection.find_one({"_id": ObjectId(categoryId)})

                if category_to_be_del:
                    category_del = category_collection.delete_one({"_id": ObjectId(categoryId)})
                    if category_del:
                        return JSONResponse(status_code=200,content={"message1":"Category deleted successfully","message2" : "Subcategory which related to Category also deleted."})
                    else:
                        raise HTTPException(status_code=500,content={"message":"Category not deleted successfully"})
                else:
                    raise HTTPException(status_code=500,content={"message":"Category not deleted successfully"})
            
            else:
                raise HTTPException(status_code=500,content={"message":"Sub-Category not deleted successfully"})
    
    else:
        category = category_collection.find_one({"_id": ObjectId(categoryId)})
        
        if category:
            return JSONResponse(status_code=200,content={"message":"Category deleted successfully"})