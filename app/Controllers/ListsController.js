import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

// Private

function _draw() {
  //draw stuff
}

//Public
export class ListsController {
  constructor() {
    ProxyState.on("lists", _draw);
    _draw()
  }

  remove(id) {
    listsService.remove(id)
  }

  add(title, color) {
    listsService.add(title, color)
  }
}