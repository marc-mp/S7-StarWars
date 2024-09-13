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

## Geting Started

$ npm create vite@latest my-proyect
select framework:    react
select variant:      javascript + SWC
$ cd my-project
$ npm install
$ npm run dev

Install Tailwind
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p

🗋 talilwind.config.js

 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 
🗋 index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

Install DaisyUI
$ npm i daisyui

🗋 talilwind.config.js

import daisyui from 'daisyui';
  plugins: [
    daisyui,
  ],

Install React Router
$ npm install react-router-dom

install firebase
$ npm install firebase


