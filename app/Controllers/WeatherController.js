import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

function _drawWeather() {
    let weather = ProxyState.weather
    console.log(weather);
    document.getElementById("weather").innerHTML = ProxyState.weather.Template
}
export default class WeatherController{
    constructor() {
        ProxyState.on("weather", _drawWeather)
    }

    getWeather() {
        weatherService.getWeather()
        console.log("hello from controller");
    }
}