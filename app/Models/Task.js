export default class Task {
    constructor(data) {
        this.name = data.description
        this.id = data._id
        this.completed = data.completed || false


    }

    get Template() {
        return /*html*/`
        <div style="background-color: black;" class="card-body ${this.completed == true ? 'text-dark': 'text-light'}">
            <div class ="d-inline-flex" onclick="app.todoController.completeTask('${this.id}')">${this.name}</div>
            <button class="text-light close" onclick="app.todoController.deleteTask('${this.id}')"><span>&times;</span></button> 
        </div>
        
        
        `
    }
}
