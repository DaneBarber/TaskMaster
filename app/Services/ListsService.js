import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"

class ListsService {

  add(title, color) {
    console.log(title, color, "in the listService")
    const list = new List(title)
    ProxyState.lists = [...ProxyState.lists, list]
  }
  remove(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.listId !== id)
  }
}

export const listsService = new ListsService()