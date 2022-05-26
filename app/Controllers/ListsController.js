//Public
export class ListsController {
  constructor() {
    ProxyState.on("lists", _draw);
    _draw()
  }


}