# Desarrollo-WEB-1c-2022
Proyecto de la materia desarrollo web

El proyecto consistira en la creacion de una pagina web orientada a la venta de entradas para ir a conciertos.
Algun ejemplo de la misma puede ser www.passline.com

Objetivo y funcionalidad:
El objetivo principal va a ser la comodida y la simplesa. Quiero que la pagina le permita a el usuario sacar las entradas que quiera de manera facil y rapida.

Dentro de lo que es funcionalidad, me gustaria poder conectar la pagina web con SQLserver para poder almacer bases los conciertos/funciones que estan disponibles en la pagina. Tambien es necesario tener un registro de las entradas que se compran.

Los endpoints que se definieron son: 
//Endpoints Conciertos

router.get('/conciertos',getConciertos) // traer
router.get('/conciertos/:id',getConciertosByID) //buscar 1 concierto por ID

router.post('/conciertos',createConcierto) //crear un concierto

router.delete('/conciertos/:id',deleteConcierto) //eliminar un concierto

router.put('/conciertos/:id',updateConciertos) //Actualizar un concierto

//Endpoints Entradas

router.post('/conciertos/entradas/:id',createEntrada) //sacar una entrada



