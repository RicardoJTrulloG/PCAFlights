from config.db import conx
from models.flight import flights
from fastapi import Response
from starlette.status import HTTP_500_INTERNAL_SERVER_ERROR, HTTP_200_OK
from service.utils import adapterResponse
  
def createFlightService(newFlight):
    try:
        conx.execute(flights.insert().values(newFlight))
        conx.commit()

    except Exception:
        return { "status": Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR),  "message": "Server Error: Create Flight Service"}
    
    else:
        message = "Registro creado exitosamente"
        return { "status": Response(status_code=HTTP_200_OK),  "message": str(message) }
    
    
def getFlightService(origin: str, destiny: str, departureDate: str, arrivalDate: str):
    try:
        response = conx.execute(flights.select().filter(
            flights.c.origin == origin, 
            flights.c.destination == destiny, 
            flights.c.departure_date >= departureDate, 
            flights.c.arrival_date <= arrivalDate)).fetchall()
        return adapterResponse(response)
    
    except Exception:
        return { "status": Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR), "message": "Server Error: Consult Flights Service" }