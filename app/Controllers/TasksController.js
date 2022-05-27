import { tasksService } from "../Services/TasksService.js";

//Public
export class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);
    _draw()
  }

  remove() {
    tasksService.remove()
  }
}

