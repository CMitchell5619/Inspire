import { ProxyState } from "../AppState.js"
import { todoService } from "../Services/TodoService.js"

function _draw() {
    let tasks = ProxyState.tasks
    let template = ""
    tasks.forEach(task=> template += task.Template)
    document.getElementById("todos").innerHTML = template
}

export default class TodoController{
    constructor() {
        ProxyState.on('tasks', _draw)
    }

    createTask(event){
        event.preventDefault();
        console.log("creating task");
        let form = event.target
        let newTask = {description: form.task.value}
        console.log(newTask);
        todoService.createTask(newTask)
    }

    deleteTask(id){
        console.log(id, "help");
        todoService.deleteTask(id)
    }
}