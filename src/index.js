function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElemement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElemement.innerHTML = `<img src="${response.data.condition.icon_url}" class= "weather-app-icon" />`;

  getforecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusrsday",
    "Friday",
    "Saturday",
  ];

  let day = [date.getDay()];

  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "a314ef9f24629aotd24ab8f701b0f5fc ";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

function getForcast(city) {
  let apiKey = a314ef9f24629aotd24ab8f701b0f5fc;
  let url = `https; //api.shecodes.io/weather/v1/forecast?query=${city} &key=${key}&units=metric`;
  axios(apiurl).then(displayForecast);
}
function displayforecast(response) {
  console.log(response.data);

  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
     <div class="weather-forecast--day">
      <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">⛅<div>
            <div class = "weather-forecast-temperatures">
              <div class = "weather-forecast-temperature">
                <strong>15</strong>
                </div>
              </div class="weather-forecast-temperature">9"</div>
              </div>
              </div>
   `;
  });

  let forecast = document.querySelector("#forecast");
  foreElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
