import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js"



class TodoService {
    async deleteTask(id) {
        try {
            const res = await sandboxApi.delete(`christophermitchell/todos/${id}`)
            console.log(res);
            this.getTasks()
        } catch (error) {
            console.error(error);
        }
    }
    constructor() {
        this.getTasks()
        
    }

    async completeTask(id){
        let task = ProxyState.tasks.find(t=>t.id == id)
        task.completed = true
        try {
            let res = await sandboxApi.put("christophermitchell/todos/"+id, task )
            console.log(res.data);
            ProxyState.tasks = ProxyState.tasks

        } catch (error) {
            console.error(error)
        }
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
            console.log(res)
            this.getTasks()
        } catch (error) {
            console.error(error);
        }
    }
}

export const todoService = new TodoService()









