from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = "mongodb://localhost:27017"
DATABASE_NAME ="DAIICT_Hackathon_2025"

client = AsyncIOMotorClient(MONGO_URL)
db = client[DATABASE_NAME]
role_collection = db["roles"]
user_collection = db["users"]
state_collection = db["states"]
city_collection = db["cities"]
area_collection = db["areas"]
category_collection = db["categories"]
sub_category_collection = db["subcategories"]
product_collection = db["products"]
