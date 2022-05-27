import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

// Private

function _draw() {
  const lists = ProxyState.lists
  let template = ''
  lists.forEach(l => template += l.Template)

  document.getElementById('lists').innerHTML = template
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

  add() {
    const form = window.event.target
    console.log(form)

    const listData = {
      listName: form.listName.value,
      listColor: form.listColor.value
    }
    window.event.preventDefault()
    listsService.add(listData)
  }
}