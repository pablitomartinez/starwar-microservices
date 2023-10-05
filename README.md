# Microservicio de Star Wars API 🪐🚀

Este proyecto se enfoca en la creación de un microservicio de Star Wars API que se implementa utilizando Docker para facilitar la contenerización y se despliega en un servidor virtual VMware. Además, se utiliza Google Cloud para el almacenamiento de datos.
Se trata de una API de Star Wars, que maneja información sobre los personajes de la franquicia (Characters), las películas que se han lanzado (Films) y los planetas que aparecen en dichas películas (Planets)



### Gateway Principal: 
    /api

**Characters (Personajes):**
- GET /api/Characters: Obtiene una lista de todos los personajes.
- GET /api/Characters/{id}: Obtiene información sobre un personaje específico por su ID.
- POST /api/Characters: Crea un nuevo personaje proporcionando los datos necesarios.


**Films (Películas):**
- GET /Films: Obtiene una lista de todas las películas de Star Wars.
- GET /Films/{id}: Obtiene información sobre una película específica por su ID.
- POST /Films: Crea una nueva película proporcionando los datos necesarios.

**Planets (Planetas):**
- GET /Planets: Obtiene una lista de todos los planetas de Star Wars.
- GET /Planets/{id}: Obtiene información sobre un planeta específico por su ID.
- POST /aPlanets: Crea un nuevo planeta proporcionando los datos necesarios.

## Requisitos

- Docker instalado en tu máquina local.
- Acceso a una cuenta de Google Cloud para el almacenamiento de datos.

## Configuración

1. Clona este repositorio en tu máquina local:

    git clone https://github.com/pablitomartinez/starwar-microservices.git
    cd starwar-microservices


2. Configura las credenciales de Google Cloud para almacenamiento de datos en el archivo `.env`:

    MONGO_URI=RUTA DEL CLUSTER DE MONGODB