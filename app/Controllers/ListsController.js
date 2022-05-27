import { ProxyState } from "../AppState.js";

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


}