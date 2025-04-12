from fastapi import APIRouter
from models.CategoryModel import Category,CategoryOut
from controllers import CategoryController

router = APIRouter()
@router.post("/add_category")
async def post_category(cat:Category):
    return await CategoryController.addCategory(cat)

@router.get("/get_all_categories")
async def get_all_categories():
    return await CategoryController.getAllCategories()

@router.delete("/delete_category_by_category_id/{categoryId}")
async def delete_category_by_category_id(categoryId:str):
    return await CategoryController.deleteCategory(categoryId)