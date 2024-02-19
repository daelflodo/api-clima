let URL = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = "4f3d73e8ba1a94be574dfa946d0b9079";
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const city = document.getElementById('ciudadEntrada').value
    if (city)
        fetchDatosClima(city)

})

const fetchDatosClima = (city) => {
    fetch(`${URL}?q=${city}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => showData(data))
        .catch(err => alert('Ingrese una ciudad existente')) 
}

const showData = (data) => {
    const divClimateData = document.getElementById('datosClima')
    divClimateData.innerHTML = ''

    const cityName = data.name;
    const countryName = data.sys.country;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon

    const cityTitle = document.createElement('h2')
    cityTitle.textContent = `${cityName}, ${countryName}`

    const temperatureInfo = document.createElement('p')
    temperatureInfo.textContent = `La temperatura es: ${Math.floor(temperature-difKelvin)}`

    const iconInfo = document.createElement('img')
    iconInfo.src=`https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripcion meteorologica es: ${description}` 

    divClimateData.appendChild(cityTitle)
    divClimateData.appendChild(temperatureInfo)
    divClimateData.appendChild(iconInfo)
    divClimateData.appendChild(descriptionInfo)

}


