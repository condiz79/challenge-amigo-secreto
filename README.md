<h1>Challenge de JavaScrip</h1>

- Estado del proyecto: <b>Terminado.</b>

  Este proyecto fue el primer desafío que se realizó en el curso Lógica de programación de <b>Alura Latam</b>. Es una aplicación sencilla que nos permitirá gestionar una lista de amigos y seleccionar al azar un amigo secreto.
  
<h2>Descripción del código</h2>

  El código de programación está contenido en un archivo llamado ```app.js```, se ejecuta automáticamente cuando cargamos la página ```index.html```. 
  
<h2>Resumen de la estructura del código de programación</h2>

- Inicialización de Variables: En esta sección del código, se definen las variables que utilizaremos donde iremos almacenando la lista de amigos, el campo de entrada para agregar amigos que recibiremos desde el cuadro de texto, la lista de amigos que se ira generando y pasaremos al archivo HTML y el resultado que nos entregara el sorteo.
  
- Función Actualizar lista de amigos: En esta función, actualizaremos el listado donde se almacenan los amigos que se van ingresando.

- Función Agregar Amigo: Esta función la utilizamos para ir agregando un amigo a la lista cuando hacemos clic en el botón <b>"Agregar"</b>. El código verifica que el nombre no esté vacío, que el nombre no sea un número y que ademas no esté ya ingresado en la lista de amigos.

- Función Sorteo Amigo: Esta función esta creada para selecciónar en forma aleatoria de la lista de amigos ingresada cuando hacemos clic en el botón <b>"Sorteo"</b>. El nombre del amigo seleccionado se muestra en la página del sorteo. Además aca validamos que la lista de amigos no esta vacia al momento de realizar el sorteo.

<h2>Modo de uso</h2>

- En el campo de ingreso "Escribe un nombre", ingresar el nombre de un amigo.
- Hacer clic en el botón <b>"Agregar"</b>, para ir añadiendo el nombre en el listado de amigos.
- Repetir los 2 pasos anteriores, para seguir agregando amigos.
- Una vez listo el ingreso de todos los amigos participantes del sorteo, hacer clic en el botón <b>"Sorteo"</b> para que el sistema seleccione un amigo secreto al azar.

Con esto ya tenemos una simple aplicación, la cual nos permite obtener un amigo secreto al azar.
