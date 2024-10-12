// ID de la aplicación para la API de OpenWeatherMap
const APP_ID = '4090239d69cdb3874de692fd18539299';

// Función para obtener los datos del clima basados en la ubicación del usuario
const fetchData = position => {
    // Extrae la latitud y longitud de la posición geográfica
    const { latitude, longitude } = position.coords;

    // Realiza una solicitud a la API de OpenWeatherMap usando la latitud y longitud
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`)
        .then(response => response.json()) // Convierte la respuesta en formato JSON
        .then(data => setWeatherData(data)); // Llama a la función para establecer los datos del clima
}

// Función para configurar y mostrar los datos del clima en la interfaz
const setWeatherData = data => {
    // Crea un objeto 'weatherData' con la información relevante del clima
    const weatherData = {
        location: data.name, // Nombre de la ubicación
        description: data.weather[0].main, // Descripción general del clima (por ejemplo, "Clear")
        humidity: data.main.humidity, // Humedad
        pressure: data.main.pressure, // Presión atmosférica
        temperature: Math.floor(data.main.temp), // Temperatura redondeada
        date: getDate(), // Fecha actual formateada
    }

    // Recorre el objeto 'weatherData' y actualiza el contenido de los elementos en la página
    Object.keys(weatherData).forEach(key => {
        setTextContent(key, weatherData[key]);
    });

    // Realiza la limpieza final para mostrar los datos
    cleanUp();
}

// Función para cambiar el estado de la interfaz de carga a mostrar los datos
const cleanUp = () => {
    let container = document.getElementById('container'); // Obtiene el contenedor principal
    let loader = document.getElementById('loader'); // Obtiene el elemento del cargador

    loader.style.display = 'none'; // Oculta el cargador
    container.style.display = 'flex'; // Muestra el contenedor con los datos
}

// Función para obtener la fecha actual formateada como 'día-mes-año'
const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

// Función para actualizar el contenido de texto de un elemento HTML
const setTextContent = (element, text) => {
    document.getElementById(element).textContent = text; // Cambia el contenido del elemento con el ID proporcionado
}

// Función que se ejecuta al cargar la página
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData); // Obtiene la posición geográfica del usuario y llama a 'fetchData'
}
