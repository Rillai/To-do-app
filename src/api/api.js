import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:3000/",
    withCredentials: true,
    responseType: "json"
})
export const tasksApi = {
    getTasks() {
        return instance.get(`tasks`)
            .then(response => { return response.data; })
    },
    deleteTask(taskId) {
        return instance.delete(`tasks/${taskId}`)
            .then(response => { return response.data; })
    },
    addTask(text, taskId) {
        return instance.post(`tasks/`, { id: taskId, task: text, isDone: false },)
            .then(response => { return response.data; })
    },
    isDone(taskId, isDone) {
        return instance.patch(`tasks/${taskId}`, { isDone: isDone })
            .then(response => { return response.data; })
    },
    updateNewTaskBody(taskId, text) {
        return instance.patch(`tasks/${taskId}`, { task: text })
            .then(response => { return response.data; })
    }
};