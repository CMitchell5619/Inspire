import QuoteController from "./Controllers/QuoteController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js"
class App {

  constructor() {
  }
  weatherController = new WeatherController();
  todoController = new TodoController();
  quoteController = new QuoteController();
}

window["app"] = new App();
