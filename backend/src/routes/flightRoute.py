from fastapi import APIRouter
from schema.flight import Flight
from controller.flightController import createFlightController, getFlightController

flight = APIRouter()

@flight.get("/", tags=["flights"])
def InfoApi():
    response = {
        "name": "Api v0.1 test Prueba técnica",
        "author": "Ricardo José Trullo Guerrero",
        "company": "PCA Ingeniería",
        "language": "Python",
        "framework": "FastApi",
        "documentation": "http://localhost:8000/docs"
    }
    return response

@flight.get("/flights/{origin}/{destiny}/{departureDate}/{arrivalDate}", tags=["flights"])
def getFlightRoute(origin: str, destiny: str, departureDate: str, arrivalDate: str):
    return getFlightController(origin, destiny, departureDate, arrivalDate)

@flight.post("/flights", tags=["flights"])
def createFlightRoute(flight: Flight):
    return createFlightController(flight)