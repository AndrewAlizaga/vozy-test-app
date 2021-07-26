# vozy-test-app
CRUD test using Nodejs, Express, MongoDB, Unit Tests with mocha &amp; Docker,

Hola Máximo :)

Estoy seguro que estarás más que satisfecho con esto, en fin, he aquí las instrucciones para dockerizar, 
donde ver los reportes de tests y una referencia a documentacion de API para testeo

Para dockerizar y correr la imagen

0) Descargar el proyecto con git y entrar a la carpeta del mismo

1) docker build . -t vozy-test

2) docker run -p 8000:8080 -d vozy-test 
(Puedes abrirlo al puerto de tu preferencia si no deseas usar el 8000)

3) Listo!, la app deberia estar en un contenedor vivo, redirigido de su puerto privado 8080, al puerto publico 8000 en tu ordenador


Puedes guiarte de la documentacion publicada con postman para hacer tus peticiones
https://documenter.getpostman.com/view/3678249/TzsZs8gL

o ser redirigido a la misma mediante este endpoint
/api/documentation

Puedes encontrar el reporte de unitTests en este folder (en un html a como fue específicado en el documento)

.../unitTests/API/mochawesome-report/mochawesome.html

Saludos!.

Andrew Alizaga
