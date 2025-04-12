from fastapi import APIRouter
from models.SubCategoryModel import SubCategory
from controllers import SubCategoryController

router = APIRouter()
@router.post("/addSubCategory")
async def post_sub_category(sub_cat:SubCategory):
    return await SubCategoryController.addSubCategory(sub_cat)

@router.get("/getAllSubCategories")
async def get_all_sub_categories():
    return await SubCategoryController.getAllSubCategories()

@router.get("/getSubCategoryByCategoryId/{category_id}")
async def get_sub_category_by_category_id(category_id:str):
    return await SubCategoryController.getSubCategoryByCategoryId(category_id)

@router.delete("/delete_subcategory_by_subcategory_id/{subCategory_id}")
async def delete_subcategory_by_subCategory_id(subcategoryId:str):
    return await SubCategoryController.deleteSubCategoryBySubCategoryId(subcategoryId)

@router.delete("/delete_subcategory_by_category_id/{Category_id}")
async def delete_subcategory_by_Category_id(CategoryId:str):
    return await SubCategoryController.deleteSubCategoryByCategoryId(CategoryId)