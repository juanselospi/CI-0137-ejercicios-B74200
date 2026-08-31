# Ejercicio 01 - Servidor web local

## Servidor web seleccionado
Python HTTP Server (módulo `http.server` de Python 3)

## Razón de elección
Elegí Python HTTP Server porque no requiere instalar nada adicional, ya que viene incluido con Python 3. Además, mi grupo esta evaluando trabajar el proyecto del curso en Python HTTP server, así que me pareció más consistente usar la misma tecnología también para este ejercicio. Es un servidor simple pensado para pruebas locales, suficiente para lo que pide este ejercicio.

## Puerto utilizado
8080

## URL
http://localhost:8080/

## Configuración
Para que el servidor sirviera los archivos del repositorio usé la bandera `--directory`, que permite indicar la carpeta desde donde se sirve el contenido sin tener que ubicarme dentro de ella con `cd`, en mi computadora el path ser[ia]:

python3 -m http.server 8080 -d "/home/juanselospi/Desktop/VSCode/Desarollo de Aplicaciones Web/CI-0137-ejercicios-B74200"

Usé el puerto 8080 en vez del 80 porque en Linux los puertos menores a 1024 requieren permisos de administrador para poder usarlos.

## Motivo
Para el PI de redes y oper probamos python3 HTTP server con el puerto 8080, el puerto es porque uso fedora y linux tiene restricciones en puertos debajo del 1024.