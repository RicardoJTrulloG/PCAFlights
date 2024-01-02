import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function FlightRegistrationForm() {
  const [flightData, setFlightData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    arrivalDate: '',
    airline: '',
    price: ''
  });

  const handleChange = (e) => {
    setFlightData({ ...flightData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dataToSend = {
      "origin": flightData.origin,
      "destination": flightData.destination,
      "departure_date": flightData.departureDate,
      "arrival_date": flightData.arrivalDate,
      "airline": flightData.airline,
      "price": parseFloat(flightData.price),
      "is_reserved": 0
    };
    axios.post('http://127.0.0.1:8000/flights', dataToSend)
    .then(response => Swal.fire({
      title: "¡Éxito!",
      text: "Vuelo regsitrado exitosamente!",
      icon: "success"
    }))
    .catch(error => Swal.fire({
      title: "Error",
      text: "Ocurrió un error!",
      icon: "error",
      footer: "Comunicate con el administrador"
    }))
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };

  return (
    <>
    <h1 className='pca-formflight-title'>Registro de Vuelos</h1>
    <form className='pca-formflight' onSubmit={handleSubmit}>
      <input
        className='pca-formflight-input'
        type="text"
        name="origin"
        value={flightData.origin}
        onChange={handleChange}
        placeholder="Origen"
      />
      <input
        className='pca-formflight-input'
        type="text"
        name="destination"
        value={flightData.destination}
        onChange={handleChange}
        placeholder="Destino"
      />
      <input
        className='pca-formflight-input'
        type="date"
        name="departureDate"
        value={flightData.departureDate}
        onChange={handleChange}
      />
      <input
        className='pca-formflight-input'
        type="date"
        name="arrivalDate"
        value={flightData.arrivalDate}
        onChange={handleChange}
      />
      <input
        className='pca-formflight-input'
        type="text"
        name="airline"
        value={flightData.airline}
        onChange={handleChange}
        placeholder="Aerolínea"
      />
      <input
        className='pca-formflight-input'
        type="number"
        name="price"
        value={flightData.price}
        onChange={handleChange}
        placeholder="Precio"
      />
      <button className='pca-formflight-submit' type="submit">Registrar Vuelo</button>
      <button className='pca-formflight-clean' type="button" onClick={handleReset}>Limpiar</button>
    </form>
  </>
    
  );
}

export default FlightRegistrationForm;
