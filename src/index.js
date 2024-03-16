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
function formstDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["sun", "Mon"; "Tue", "Wed", "Thu","Fri", "Sat"];

  return days[date.getDay()];
}

function getForcast(city) {
  let apiKey = a314ef9f24629aotd24ab8f701b0f5fc;
  let url = `https; //api.shecodes.io/weather/v1/forecast?query=${city} &key=${key}&units=metric`;
  axios(apiurl).then(displayForecast);
}
function displayforecast(response) {

let forecastHtml = "";

  response,data.daily.forEach(function (day, index) {
    if (index < 5) {
    forecastHtml =
      forecastHtml +
      `
     <div class="weather-forecast--day">
      <div class="weather-forecast-date">${ formatDay(day.time)}</div>
        
        <img src="${day.condition.icon-url}" class="weather-forecast-icon"  />
         <div class = "weather-forecast-temperatures">
              <div class = "weather-forecast-temperature">
                <strong>${Math.round(day.temperature.maximum)}°</strong>
                </div>
              </div class="weather-forecast-temperature">${Math.round(day.temperature.minimum</div>
              </div>
              </div>
   `;
  }
  });

  let forecast = document.querySelector("#forecast");
  foreElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
