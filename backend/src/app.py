from fastapi import FastAPI
from routes.flightRoute import flight
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title = "API Flights PCA Ingeniería",
    description = "API for consult, create and update flights",
    version = "0.1",
    openapi_tags = [{
        "name": "flights",
        "description": "flights routes"
    }]
)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
)


app.include_router(flight)

