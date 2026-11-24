# Ejercicio 05 - Servidor con Express

Ahora el currículum se sirve desde un servidor propio hecho con Node.js + Express 5, en vez de abrir el archivo directo en el navegador. El HTML se arma con plantillas EJS usando los mismos datos del ejercicio de JavaScript, pero ahora del lado del servidor.

## Cómo correrlo

Primero instalar las dependencias (express y ejs):

```
npm install
```

Para levantar el servidor:

```
npm start
```

Para desarrollo con recarga automática (usa `node --watch`, que ya viene con Node):

```
npm run dev
```

El currículum queda en http://localhost:3000/. Si se quiere otro puerto se puede pasar con la variable `PORT`, por ejemplo `PORT=8080 npm start`.

## Estructura

- `server.js`: configuración de express, archivos estáticos y el 404.
- `datos/curriculum.js`: los datos del cv (nombre, contacto, experiencia, habilidades, etc).
- `controladores/`: las funciones que responden a cada ruta.
- `rutas/curriculum.js`: define las rutas GET / y POST /contacto.
- `vistas/`: las plantillas EJS (currículum, gracias, 404 y los parciales).
- `public/`: css, js e imágenes que se sirven con express.static.

Lo separé parecido a modelo-vista-controlador como vimos en clase: `datos` sería el modelo, `vistas` las plantillas y `controladores` + `rutas` la parte que conecta las dos.

## Rutas

- `GET /`: muestra el currículum con los datos del módulo.
- `POST /contacto`: recibe el formulario de contacto, lo imprime en consola y muestra una página de agradecimiento. Si llega con algún campo vacío lo devuelve a la sección de contacto.
- Cualquier otra ruta responde con la página 404.

## Validación

- `npm start` arranca sin errores y el currículum se ve en http://localhost:3000/.
- Al enviar el formulario de contacto el servidor imprime en la terminal el nombre, correo y mensaje, y responde con la página de gracias mostrando lo que se recibió.
- Al entrar a una dirección que no existe (por ejemplo http://localhost:3000/hola) sale la página de error 404 con estado 404.

## Notas

- No hay base de datos, los datos viven en `datos/curriculum.js`.
- `node_modules` no se sube al repo, está en el `.gitignore`.
- El botón de modo claro/oscuro del ejercicio anterior se mantiene, ahora el `main.js` solo se encarga de eso porque el HTML ya viene armado desde el servidor.
