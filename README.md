PCA Flights
La aplicación está desarrollada en REACT para el front-end, FastAPI para el back-end y MySQL para la base de datos.

Base de datos:
1. Instalar 8.0.35 MySQL Community Server en el sistema.
2. Crear una base de datos llamada "DB_Fligths"
3. Dentro de la base de datos, crea una tabla llamada flights

Nota: Aunque no es una buena practica subir al repositorio los archivos .env, en este caso si se subió para facilitar la puesta en marcha de la aplicación. El archivo .env se encuentra en la siguiente dirección /backend/src/.env

Front-end:
1. Se debe clonar el repositorio completo al ordenador.
2. Tener instalado Node.js v20.10.0 y python3 v10.12.0
3. A traves de la consola del sistema, navegar hasta la carpeta /pca_flights/flights/
4. Luego introducir el comando "npm install" y dar enter
5. Cuando termine de instalar las dependencias, introducir el comando "npm run dev" para iniciar la aplicación de REACT
6. En la consola aparecerá la dirección y el puerto en el cual está escuchando la aplicación.

Back-end:
1. En una nueva instancia de la terminal del sistema, navegar hasta la carpeta PCAFlights/backend/
2. Se recomenienda crear un entorno virtual
3. Ejecutar el comando "pip install -r requirements.txt" para instalar las dependecias necesarias para la ejecución de la aplicación
4. Navegar hasta la carpeta /src y ejecutar el comando "uvicorn app:app --reload" 
