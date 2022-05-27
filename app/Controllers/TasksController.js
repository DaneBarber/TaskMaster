import { tasksService } from "../Services/TasksService.js";
import { ProxyState } from "../AppState.js";

// Private

function _draw() {
  //draw stuff
}

//Public
export class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);
    _draw()
  }

  remove(id) {
    tasksService.remove(id)
  }

  add(listId) {
    window.event.preventDefault()
    console.log('Task Service Add', listId)
    /**@type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const taskData = {
      listId,
      taskName: form.taskName.value
    }
    console.log('Task Controller Add', taskData)
    tasksService.add(taskData)
  }
}

