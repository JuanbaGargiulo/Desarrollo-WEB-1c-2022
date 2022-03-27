# Desarrollo-WEB-1c-2022
Proyecto de la materia desarrollo web

El proyecto consistira en la creacion de una pagina web orientada a la venta de entradas para ir a conciertos.
Algun ejemplo de la misma puede ser www.passline.com

Objetivo y funcionalidad:
El objetivo principal va a ser la comodida y la simplesa. Quiero que la pagina le permita a el usuario sacar las entradas que quiera de manera facil y rapida.

Dentro de lo que es funcionalidad, me gustaria poder conectar la pagina web con SQLserver para poder almacer bases los conciertos/funciones que estan disponibles en la pagina. Esto es mas que nada para tener un registro de las entradas que se compran. Cada tabla tendra un campo DNI cono PK, nombre y ape, asiento, sector, etc..

Haciendo como un diagrama de secuencias de lo que seria la pagina: El usuario selecciona a que concierto quiere ir -> compra la entrada en un sector x(si es que todavia quedan, sino le aparecera el cartel de agotado) -> la pagina le pide al usuario que ingrese sus datos -> Los datos son ingresados a una tabla temporal hasta que se ingrese el pago(esto es un punto a crequear) -> el usuario paga la entrada -> se restan la cantidad de entradas que el usuario compro a las entradas disponibles para ese concierto y los datos se almacenan en la tabla del concierto correspondiente en su respectiva base -> El usuario recibe en pantalla un mensaje de que su pago ha sido confirmado y sus entradas se visualizan en su pantalla, donde va poder descargarlas -> se le envia un mail al usuario con sus entradas y su confirmacion de pago. 


