from models.ProductModel import Product,ProductOut
from config.database import product_collection,category_collection,user_collection,sub_category_collection
from fastapi import APIRouter, HTTPException, UploadFile, File,Form
from fastapi.responses import JSONResponse
from bson import ObjectId
import shutil
import os
from utils.CloudinaryUtil import upload_image

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

async def create_Product_withFile(
    name: str = Form(...),
    price: float = Form(...),
    category_id: str = Form(...),
    sub_category_id: str = Form(...),
    employee_id: str = Form(...),
    image: UploadFile = File(...),
    # description:str = Form(...),
    quantity:int = Form(...)
):
    try:
    
        os.makedirs(UPLOAD_DIR, exist_ok=True)

        file_ext = image.filename.split(".")[-1]
        file_path = os.path.join(UPLOAD_DIR, f"{ObjectId()}.{file_ext}")
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        image_url = await upload_image(file_path)
        
        product_data = {
            "name": name,
            "price": price,
            "category_id": str(ObjectId(category_id)),
            "sub_category_id": str(ObjectId(sub_category_id)),
            "employee_id": str(ObjectId(employee_id)),
            "image_url":image_url,
            # "description":description,
            "quantity":quantity
        }
        print(product_data)
        insertedProduct = await product_collection.insert_one(product_data)

        return JSONResponse(content={"message": "Product created successfully"}, status_code=201)
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")



async def get_products():
    try:
        products = await product_collection.find().to_list(None)

        def convert_objectid_to_str(data):
            if isinstance(data, ObjectId):
                return str(data)
            elif isinstance(data, dict):
                return {k: convert_objectid_to_str(v) for k, v in data.items()}
            elif isinstance(data, list):
                return [convert_objectid_to_str(i) for i in data]
            return data

        for prod in products:
            prod["_id"] = str(prod["_id"])
            prod["category_id"] = str(prod["category_id"])
            prod["sub_category_id"] = str(prod["sub_category_id"])
            prod["employee_id"] = str(prod["employee_id"])

            category = await category_collection.find_one({"_id": ObjectId(prod["category_id"])})
            if category:
                prod["category"] = convert_objectid_to_str(category)

            sub_category = await sub_category_collection.find_one({"_id": ObjectId(prod["sub_category_id"])})
            if sub_category:
                prod["sub_category"] = convert_objectid_to_str(sub_category)

            employee = await user_collection.find_one({"_id": ObjectId(prod["employee_id"])})
            if employee:
                prod["employee"] = convert_objectid_to_str(employee)

        return [ProductOut(**product) for product in products]

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred while fetching products")