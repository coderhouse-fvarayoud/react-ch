# Coderhouse | React

Proyecto para la plataforma Coderhouse.

Deploy: https://react-coderhouse.netlify.app/

## Descripción

Aplicación de eCommerce desarrollada como trabajo final del curso de React para la plataforma Coderhouse.

Los productos están alojados en una base de datos en Firebase, junto con sus imágenes. Las ordenes generadas
por los usuarios también se alojan en esta base de datos. Se deja un console.log() en la home para ver el array
de ordenes generadas y verificarlas sin tener que acceder a la base de datos.

En cuanto a los requerimientos extra, se agrega la funcion de chequear el stock antes de permitir al usuario agregar
un producto en su carro (aparece disabled el boton), las categorias dinamicas y el carrito persistente a través de localStorage.

## Instalación

1) Clonar el proyecto
2) Instalar dependencias:

```
npm install
# o
yarn install
```

3) Ejecutar la aplicación:

```bash
npm start
```

4) Abrir [http://localhost:3000](http://localhost:3000) para ver el proyecto.

## Dependencias

### tailwindcss
    Framework de estilos utilizado para el proyecto por preferencia.

### fontawesome
    Librería de íconos.

### firebase
    Librería para dar acceso a los servicios de Database de firebase.
  
### framer-motion
    Librería para generar animaciones y transiciones de estilos con facilidad.









