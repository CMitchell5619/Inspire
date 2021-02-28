import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js"
class App {

  constructor() {
  }
  weatherController = new WeatherController();
  todoController = new TodoController();
  quoteController = new QuoteController();
  imageController = new ImageController();
}

window["app"] = new App();
