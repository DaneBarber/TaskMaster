import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.taskId = data.taskId || generateId()
    this.listId = data.listId
    this.taskName = data.taskName
    this.taskChecked = data.taskChecked
  }
  get Tasks() {
    let tasks = ProxyState.tasks.filter(t => t.listId == this.taskId)
    let template = ''
    tasks.forEach(t => template += t.Template)
    return template
  }
  get Template() {

    return /*html*/`
          <li>
            <span><input  type="checkbox" class="p-1" ${this.taskChecked == "true" ? "checked" : ""}> ${this.taskName}</span>
            <span class="mdi mdi-trash-can-outline text-danger" onclick="app.tasksController.remove('${this.taskId}')"></span>
          </li>
    `

  }


}