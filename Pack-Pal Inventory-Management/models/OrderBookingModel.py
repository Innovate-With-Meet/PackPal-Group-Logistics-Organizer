from pydantic import BaseModel, Field, validator
from typing import List, Optional, Dict, Any
from bson import ObjectId
from datetime import datetime

class OrderItem(BaseModel):
    product_id: str
    product_name: str
    quantity: int
    price: float
    note: Optional[str] = None

    @validator("product_id", pre=True, always=True)
    def convert_objectid_to_str(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v


class OrderBooking(BaseModel):
    user_id: str
    items: List[OrderItem]
    status: str = "Ordered"
    total_price: Optional[float] = None
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = None

    @validator("user_id", pre=True, always=True)
    def convert_user_id(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v

    def calculate_total_price(self):
        self.total_price = sum(item.price * item.quantity for item in self.items)