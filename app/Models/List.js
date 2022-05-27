import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js"

export class List {
  constructor(data) {
    this.listId = data.listId || generateId()
    this.listName = data.listName
    this.listColor = data.listColor

    if (!this.listName || !this.listColor)
      throw new Error("Each list needs a name and a color before it can be created");
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter(t => t.listId == this.listId)
    let template = ''
    tasks.forEach(t => template += t.Template)
    return template
  }
}