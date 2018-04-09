class Task {
  constructor (listTitle, description, priority){
    this.listTitle = listTitle;
    this.description = description;
    if (priority){this.priority = priority;}
    this.completed = false;
  }

  render(){
    let result = ""
    if (this.completed){
      result += `
        <li class="completed">
      `
    } else {
      result += `
        <li>
      `
    }

    result += `
        <input type="checkbox" data-list-title="${this.listTitle}" data-task-name="${this.description}" class="checkbox"></input>
        Task: ${this.description}
        <span class="right"><button data-list-title="${this.listTitle}" data-task-name="${this.description}" class="delete-task">
          💀
        </button></span>
    `
    if (this.priority){
      result += `        <br>
              Priority: ${this.priority}
      `
    }
    result += `
      </li>
      `
    return result;
  }
}
