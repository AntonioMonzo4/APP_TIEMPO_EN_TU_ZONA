Este proyecto web muestra el clima en tiempo real de la ubicación del usuario utilizando HTML, CSS y JavaScript. La aplicación está diseñada para ser simple y visualmente atractiva, ofreciendo detalles meteorológicos como la temperatura, la humedad y la presión atmosférica en la ubicación del usuario.

### HTML (`index.html`)

El archivo HTML define la estructura básica de la aplicación. Comienza con etiquetas meta para establecer la codificación de caracteres y la configuración de la vista en dispositivos móviles. Luego, incluye un título para la página y enlaces a fuentes externas: una fuente de Google Fonts (`Roboto`) y un archivo CSS (`index.css`) para los estilos.

Dentro del `<body>`, el atributo `onload="onLoad()"` ejecuta una función JavaScript cuando la página se carga para iniciar el proceso de obtención de datos climáticos. La estructura HTML incluye un elemento `<div>` con el ID `loader` que muestra un mensaje de "Loading..." mientras los datos se están cargando. Otro `<div>` con el ID `container` contiene la estructura principal para mostrar la información del clima, con elementos `<div>` para mostrar la ubicación, la fecha, la descripción del clima, la temperatura, la humedad y la presión.

Finalmente, el archivo JavaScript (`index.js`) se enlaza al final del documento para manejar la lógica de la aplicación.

### CSS (`index.css`)

El archivo CSS define los estilos visuales para la aplicación. Primero, se aplica la fuente `Roboto` globalmente, y luego se establecen estilos específicos para el cuerpo (`body`), centrándolo con flexbox y configurando un color de fondo oscuro.

El contenedor principal (`.contaier`) se diseña con un fondo claro, colores de texto oscuros y un relleno para separar los elementos. Este contenedor está inicialmente oculto (`display: none`) y se muestra solo cuando los datos del clima están disponibles. Los bloques internos se estilizan con un relleno adicional y colores de fondo alternos para dar contraste.

Para el elemento de carga (`.loader`), se crea una animación circular que rota continuamente para simular un indicador de progreso. La animación se define mediante `@keyframes` que hace que el círculo gire 360 grados repetidamente.

### JavaScript (`index.js`)

El archivo JavaScript es el núcleo funcional de la aplicación. Contiene la lógica para obtener la información meteorológica y actualizar la interfaz con los datos.

1. **Constante `APP_ID`**: Define una clave API para acceder a OpenWeatherMap, un servicio que proporciona datos climáticos.
   
2. **Función `fetchData`**: Utiliza la API de Geolocalización del navegador para obtener la latitud y longitud del usuario, y luego hace una solicitud a la API de OpenWeatherMap para obtener los datos climáticos en esas coordenadas. La respuesta se convierte en formato JSON y se pasa a la función `setWeatherData`.

3. **Función `setWeatherData`**: Formatea los datos recibidos de la API y los almacena en un objeto llamado `weatherData`, que incluye la ubicación, la descripción del clima, la temperatura, la humedad, la presión y la fecha actual. La función `setTextContent` se usa para actualizar el contenido de los elementos HTML en la página con esta información. Después, se llama a la función `cleanUp` para ocultar el cargador y mostrar el contenedor con los datos.

4. **Función `cleanUp`**: Oculta el elemento de carga y muestra el contenedor que contiene los datos meteorológicos, cambiando el estilo de `display` para hacerlo visible.

5. **Función `getDate`**: Devuelve la fecha actual en un formato específico (`día-mes-año`).

6. **Función `setTextContent`**: Toma un ID de elemento HTML y un texto, y actualiza el contenido del elemento con ese texto.

7. **Función `onLoad`**: Se ejecuta cuando la página se carga y utiliza la API de Geolocalización para obtener la ubicación del usuario, lo que desencadena la obtención de los datos climáticos.

### Resumen

En conjunto, los tres archivos crean una aplicación que muestra el clima en tiempo real de la ubicación actual del usuario. El HTML proporciona la estructura básica, el CSS estiliza la interfaz para hacerla visualmente atractiva, y el JavaScript gestiona la lógica para obtener, formatear y mostrar los datos climáticos. La experiencia de usuario se optimiza al utilizar un cargador animado mientras se cargan los datos y al actualizar automáticamente el contenido de la página cuando los datos están disponibles.
