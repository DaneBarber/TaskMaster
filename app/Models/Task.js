import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
  }
}