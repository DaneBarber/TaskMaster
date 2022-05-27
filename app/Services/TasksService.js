import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TasksService {
  remove(taskId) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.taskId !== taskId)
  }
  add(taskData) {
    let task = new Task(taskData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }
}

export const tasksService = new TasksService()