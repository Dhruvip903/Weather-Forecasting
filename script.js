
const city = document.getElementById("cityName"); // Assuming your search bar has id="cityName"

const options = {
  method: 'GET',
  headers: {
    "X-RapidAPI-Key": "a173513e32msh17726ed826d53c8p179137jsnb02f328154f6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather =(city)=>{
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
  .then(response => response.json())
  .then((response) => {
console.log(response)
// cloud_pct.innerHTML = response.cloud_pct
temp.innerHTML = response.temp
temp2.innerHTML = response.temp
feels_like.innerHTML = response.feels_like
humidity.innerHTML = response.humidity
min_temp.innerHTML = response.min_temp
max_temp.innerHTML = response.max_temp
wind_speed.innerHTML = response.wind_speed
wind_speed2.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
wind_degrees2.innerHTML = response.wind_degrees
sunrise.innerHTML = response.sunrise
sunset.innerHTML = response.sunset
}) 
.catch (err => console.error(err)); 
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value); // Use city.value here
});
// getWeather("delhi"); // Initial call for Delhi


// shanghai 
const getWeatherplaces1 =(city)=>{
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
  .then(response => response.json())
  .then((response) => {
console.log(response)
cloud_pct1.innerHTML = response.cloud_pct
temp1.innerHTML = response.temp
feels_like1.innerHTML = response.feels_like
humidity1.innerHTML = response.humidity
min_temp1.innerHTML = response.min_temp
max_temp1.innerHTML = response.max_temp
wind_speed1.innerHTML = response.wind_speed
wind_degrees1.innerHTML = response.wind_degrees
sunrise1.innerHTML = response.sunrise
sunset1.innerHTML = response.sunset
}) 
.catch (err => console.error(err)); 
}
getWeatherplaces1("shanghai"); // Initial call for shanghai


// boston
const getWeatherplaces3 =(city)=>{
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
  .then(response => response.json())
  .then((response) => {
console.log(response)
cloud_pct3.innerHTML = response.cloud_pct
temp3.innerHTML = response.temp
feels_like3.innerHTML = response.feels_like
humidity3.innerHTML = response.humidity
min_temp3.innerHTML = response.min_temp
max_temp3.innerHTML = response.max_temp
wind_speed3.innerHTML = response.wind_speed
wind_degrees3.innerHTML = response.wind_degrees
sunrise3.innerHTML = response.sunrise
sunset3.innerHTML = response.sunset
}) 
.catch (err => console.error(err)); 
}
getWeatherplaces3("boston"); // Initial call for boston


// lucknow
const getWeatherplaces4 =(city)=>{
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
  .then(response => response.json())
  .then((response) => {
console.log(response)
cloud_pct4.innerHTML = response.cloud_pct
temp4.innerHTML = response.temp
feels_like4.innerHTML = response.feels_like
humidity4.innerHTML = response.humidity
min_temp4.innerHTML = response.min_temp
max_temp4.innerHTML = response.max_temp
wind_speed4.innerHTML = response.wind_speed
wind_degrees4.innerHTML = response.wind_degrees
sunrise4.innerHTML = response.sunrise
sunset4.innerHTML = response.sunset
}) 
.catch (err => console.error(err)); 
}
getWeatherplaces4("lucknow"); // Initial call for lucknow


// kolkata
const getWeatherplaces5 =(city)=>{
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
  .then(response => response.json())
  .then((response) => {
console.log(response)
cloud_pct5.innerHTML = response.cloud_pct
temp5.innerHTML = response.temp
feels_like5.innerHTML = response.feels_like
humidity5.innerHTML = response.humidity
min_temp5.innerHTML = response.min_temp
max_temp5.innerHTML = response.max_temp
wind_speed5.innerHTML = response.wind_speed
wind_degrees5.innerHTML = response.wind_degrees
sunrise5.innerHTML = response.sunrise
sunset5.innerHTML = response.sunset
}) 
.catch (err => console.error(err)); 
}
getWeatherplaces5("kolkata"); // Initial call for kolkata


getWeather("surat"); // Initial call for Delhi
