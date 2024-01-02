from pydantic import BaseModel
from typing import Optional

class Flight(BaseModel):
    id: Optional[int]
    origin: str
    destination: str
    departure_date: str
    arrival_date: str
    airline: str
    price: float
    is_reserved: Optional[int]

