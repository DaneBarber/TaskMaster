import { tasksService } from "../Services/TasksService.js";
import { ProxyState } from "../AppState.js";

export class TasksController {

  remove(id) {
    tasksService.remove(id)
  }

  taskChecked(id) {
    tasksService.taskChecked(id)
  }

  add(listId) {
    window.event.preventDefault()
    console.log('Task Service Add', listId)
    /**@type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const taskData = {
      listId,
      taskName: form.taskName.value,
      taskChecked: form.taskChecked.checked
    }
    console.log('Task Controller Add', taskData)
    tasksService.add(taskData)
  }
}

