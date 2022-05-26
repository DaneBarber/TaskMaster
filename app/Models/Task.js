import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.listId = data.listId
    this.title = data.title
    this.checked = data.checked
    this.color = data.color
  }

  get template() {
    return `
    <p class="d-flex justify-content-between" style="${this.color}"> <span> ${this.title}</span><span></span>
    <i class="mdi mdi-delete selectable px-3" onclick="app.itemsController.remove('${this.id}')"></i>
    </p>
    `
  }


}