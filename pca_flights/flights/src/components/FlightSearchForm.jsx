import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FlightSearchForm() {
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: ''
  });
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.get('http://127.0.0.1:8000/flights/'+searchParams.origin+'/'+searchParams.destination+'/'+searchParams.departureDate+'/'+searchParams.returnDate);
      const responseArray = JSON.parse(response.data);
      if (Array.isArray(responseArray)) {
        setFlights(responseArray);
      } else {
        setFlights([]);
      }
    } catch (error) {
      console.error('Error al realizar la petición:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSearchParams({
      origin: '',
      destination: '',
      departureDate: '',
      returnDate: ''
    });
    setFlights([]);
  };

  return (
    <>
    <h1 className='pca-formflight-title'>Búsqueda de Vuelos</h1>
    <form className='pca-formflight' onSubmit={handleSubmit}>
      <input
        className='pca-formflight-input'
        type="text"
        name="origin"
        value={searchParams.origin}
        onChange={handleChange}
        placeholder="Origen"
      />
      <input
        className='pca-formflight-input'
        type="text"
        name="destination"
        value={searchParams.destination}
        onChange={handleChange}
        placeholder="Destino"
      />
      <input
        className='pca-formflight-input'
        type="date"
        name="departureDate"
        value={searchParams.departureDate}
        onChange={handleChange}
        placeholder="Fecha de salida"
      />
      <input
        className='pca-formflight-input'
        type="date"
        name="returnDate"
        value={searchParams.returnDate}
        onChange={handleChange}
        placeholder="Fecha de regreso"
      />
      <button className='pca-formflight-submit' type="submit">Buscar Vuelos</button>
      <button className='pca-formflight-clean' type="button" onClick={handleReset}>Limpiar</button>
    </form>

    {isLoading ? (
        <p>Cargando resultados...</p>
      ) : (
        flights.length > 0 && (
          <div className='pca-flight-results'>
            <h2>Resultados</h2>
            <ul>
              {flights.map((flight, index) => (
                <li key={index}>
                  <p>Origen: {flight.origen}</p>
                  <p>Destino: {flight.destino}</p>
                  <p>Fecha de Salida: {flight.fecha_salida}</p>
                  <p>Fecha de Regreso: {flight.fecha_regreso}</p>
                  <p>Aerolínea: {flight.aerolinea}</p>
                  <p>Precio: ${flight.precio}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
  </>
  );
}

export default FlightSearchForm;
