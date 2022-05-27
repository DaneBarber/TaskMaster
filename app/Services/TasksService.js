import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TasksService {
  remove(taskId) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.taskId !== taskId)
  }
  add(taskData) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
  }
}

export const tasksService = new TasksService()