export default class Task {
    constructor(data) {
        this.name = data.description
        this.id = data._id
        this.completed = data.completed


    }

    get Template() {
        return /*html*/`
        <li class="list-group-item bg-dark text-light">${this.name}<button type="button" class="text-light close"
    onclick="app.todoController.deleteTask('${this.id}')"><span>&times;</span></button><input class="text-light close" id="completed" type="checkbox"></li>
        
        
        `
    }
}