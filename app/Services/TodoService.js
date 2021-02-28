import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js"

class TodoService {
    constructor() {
        this.getTasks()
        
    }

    async getTasks() {
        try {
            const res = await sandboxApi.get('christophermitchell/todos/')
            ProxyState.tasks = res.data.map(rawTask => new Task(rawTask))
            console.log(ProxyState.tasks);
        } catch (error) {
            console.error(error);
        }
    }

    async createTask(newTask) {
        try {
            const res = await sandboxApi.post('christophermitchell/todos/', newTask)
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }
}

export const todoService = new TodoService()









