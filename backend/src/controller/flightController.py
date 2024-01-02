from service.flightService import createFlightService, getFlightService
from fastapi import Response
from starlette.status import HTTP_406_NOT_ACCEPTABLE

def createFlightController(flight):
    try:
        newFlight = {
            "origin": flight.origin,
            "destination": flight.destination,
            "departure_date": flight.departure_date,
            "arrival_date": flight.arrival_date, 
            "airline": flight.airline,
            "price": flight.price,
            "is_reserved": flight.is_reserved
        }
        return createFlightService(newFlight)
    
    except Exception:
        return { "status": Response(status_code=HTTP_406_NOT_ACCEPTABLE),  "message": "Controller Error" }
    
def getFlightController(origin: str, destiny: str, departureDate: str, arrivalDate: str):
    return getFlightService(origin, destiny, departureDate, arrivalDate)
