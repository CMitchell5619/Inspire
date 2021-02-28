import { ProxyState } from "../AppState.js"
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js"

class WeatherService {
    constructor() {
        this.getWeather()
    } 


async getWeather() {
    try {
       const res = await sandboxApi.get("weather")
       console.log(res.data)
       ProxyState.weather = new Weather(res.data)
    } catch (error) {
console.error(error);
    }
}

}

export const weatherService = new WeatherService()