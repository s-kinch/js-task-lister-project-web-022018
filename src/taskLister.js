class TaskLister {
  constructor(){
    this.lists = [];
  }


  renderTaskForm(){
    return `
      <div>
        <form id="create-task-form">
          <label for="parent-list">Pick a list:</label>
          <select id="parent-list">
            ${this.lists.map(list => `<option value="${list.title}">${list.title}</option>`).reverse().join("\n")}
          </select>
          <label for="new-task-description">What r u doing:</label>
          <input required type="text" id="new-task-description" placeholder="description">
          <label for="new-task-priority">Priority:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Add Task">
          </form>
      </div>
    `
  }

  render() {
    if (this.lists.length > 0){
      return `
        ${this.renderTaskForm()}
        <div id="lists">
          ${this.lists.map(list => list.render()).join("")}
        </div>
      `
    } else return ``
  }

  findByTitle(title){
    return this.lists.find(list => list.title === title);
  }

  newList(title){
    if (!this.lists.map(list => list.title).includes(title)){
      this.lists.push(new List(title));
    } else {
      alert("List titles must be unique.");
    }
  }

  newTask(listTitle, description, priority){
    this.findByTitle(listTitle).tasks.push(new Task(listTitle, description, priority));
  }

  deleteTask(listTitle, taskName){
    const l = this.findByTitle(listTitle);
    const t = l.tasks.find(task => task.description === taskName);
    l.tasks.splice(l.tasks.indexOf(t), 1);
  }

  deleteList(title){
    this.lists.splice(this.lists.indexOf(this.findByTitle(title)), 1);
  }

  toggleTask(listTitle, taskName){
    const t = this.findByTitle(listTitle).tasks.find(task => task.description === taskName);
    t.completed = !t.completed;
  }

}
