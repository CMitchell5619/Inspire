export default class Task {
    constructor(data) {
        this.name = data.description
        this.id = data._id
        this.completed = data.completed


    }

    get Template() {
        return /*html*/`
    
        
        
        `
    }
}