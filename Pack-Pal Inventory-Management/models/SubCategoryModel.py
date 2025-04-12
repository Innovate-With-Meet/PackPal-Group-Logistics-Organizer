from pydantic import BaseModel,Field,validator
from typing import List, Optional,Dict,Any
from bson import ObjectId

class SubCategory(BaseModel):
    name: str
    description: str
    category_id:str
    

class SubCategoryOut(SubCategory):
    id:str = Field(alias='_id')
    name: str
    description: str
    category_id: str
    category: Optional[Dict[str,Any]] = None
    
    @validator('id', pre=True, always=True)
    def convert_obectId(cls,v):
        if isinstance(v,ObjectId):
            return str(v)
        return v