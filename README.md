# Star Wars Spaceships

Este es un proyecto de una aplicación web que lista las naves espaciales del universo de Star Wars. Al hacer clic en cada nave, se despliega información detallada de la misma, incluyendo los pilotos y las películas en las que aparece. Para acceder al listado de naves, los usuarios deben registrarse o iniciar sesión.

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías:

- **[React](https://reactjs.org/)**: Biblioteca de JavaScript para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Herramienta para construir aplicaciones web de forma rápida.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades CSS para el diseño de la interfaz.
- **[React Query](https://tanstack.com/query/latest)**: Gestión de datos asíncronos y caché de solicitudes a la API.
- **Context API de React**: Para la gestión de estado global de la aplicación, como la autenticación.
- **[Firebase](https://firebase.google.com/)**: Utilizado para gestionar la autenticación de usuarios (registro e inicio de sesión).
- **APIs de Star Wars**:
  - **[SWAPI](https://swapi.dev/)**: Para obtener los datos de las naves espaciales, pilotos y películas.
  - **[Star Wars Visual Guide](https://starwars-visualguide.com/)**: Para obtener imágenes de las naves espaciales y otros elementos visuales del universo Star Wars.

## Características

- **Pantalla de bienvenida**: Al iniciar la aplicación, se muestra una pantalla de bienvenida.
- **Autenticación con Firebase**: Los usuarios deben registrarse o iniciar sesión mediante Firebase para acceder al listado de naves.
- **Listado de Naves Espaciales**: Una vez autenticado, los usuarios pueden ver un listado de naves espaciales.
- **Detalles de cada nave**: Al seleccionar una nave, se muestra información detallada:
  - Especificaciones de la nave.
  - Listado de pilotos y películas en las que aparece.
  - Las imágenes de las naves, pilotos y peliculas han sido obtenidas de **Star Wars Visual Guide**.
 
## APIs Utilizadas:
SWAPI: API pública de Star Wars para obtener datos detallados sobre las naves espaciales, pilotos y películas.
Star Wars Visual Guide: Utilizada para obtener imágenes de alta calidad de las naves espaciales y otros elementos visuales del universo Star Wars.


## Estado de Desarrollo
Este proyecto está en desarrollo y se pueden agregar más funcionalidades, como mejoras en la UI/UX, manejo avanzado de errores, y más detalles en la información visual y técnica de las naves espaciales, pilotos y películas.

## Instalación y Configuración

1. Clona este repositorio en tu máquina local:

   ```bash
        git clone https://github.com/marc-mp/S7-StarWars.git

 2. Instala las dependencias del proyecto:
        npm install
  
 3. Configura Firebase:
        Crea un proyecto en Firebase y habilita la autenticación por correo electrónico/contraseña.
        Copia tu configuración de Firebase y añádela en un archivo .env con el siguiente formato:
        VITE_FIREBASE_API_KEY=your_api_key
        VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
        VITE_FIREBASE_PROJECT_ID=your_project_id
        
 4. Ejecuta el proyecto en modo de desarrollo:
        npm run dev



