function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = searchInput.value;

  searchCity(searchInput.value);
}

function refreshWater(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = a314ef9f24629aotd24ab8f701b0f5fc;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}{query}&key=${apikey}`;
  axios.get(apiUrl).then(refreshweather);
}

let searchFormElement = documemt.querySelector("#search-form");
searchFormElement.addEventListiner("Submit", handleSearchSubmit);

searchCity("Paris");
