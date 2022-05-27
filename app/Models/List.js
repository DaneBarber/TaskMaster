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

  get Template() {

    let chosenColor = 'bg-'
    switch (this.listColor.toLowerCase()) {
      case 'red':
        chosenColor += 'danger'
        break
      case 'grey':
        chosenColor += 'secondary'
        break
      case 'yellow':
        chosenColor += 'warning'
        break
      case 'pink':
        chosenColor += 'info'
        break
      case 'green':
        chosenColor += 'success'
        break
    }

    return /*html*/`
                <div class="col-3 p-0" id="${this.listId}">
                  <div class="">
                    <div><span class="mdi mdi-close d-flex justify-content-end ${chosenColor} p-2" onclick="app.listsController.remove('${this.listId}')"></span></div>
                    <div>
                      <h3 class="card-title ${chosenColor} text-center m-0 p-0">${this.listName}</h3>
                    </div>
                    <div>
                      <h5 class="text-center ${chosenColor} text-light p-2 m=0" id="statistics">active/total</h5>
                    </div>
                  </div>
                  <div class="">
                    <div class="container bg-white">
                      <div id="tasks-list p-3">
                        <ul class="no-bullets">
                          ${this.Tasks}
                        </ul>
                      </div>
                      <div class="addings align-items-end">
                        <form class="d-flex align-items-center" onsubmit="app.tasksController.add('${this.listId}')">
                          <input class="form-control bg-light p-0" type="text" placeholder="Task name..." id="taskName" minlength="3" maxlength="50" required>
                          <button  type="submit" name=""  class="text-end p-0" >Add</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
    `
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter(t => t.listId == this.listId)
    let template = ''
    tasks.forEach(t => template += t.Template)
    return template
  }
}