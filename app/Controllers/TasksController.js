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

  add(text, listId) {
    tasksService.add(text, listId)
  }
}

