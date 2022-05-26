//Public
export class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);
    _draw()
  }


}

