class List {
  constructor(title){
    this.title = title;
    this.tasks = [];
  }

  render(){
    return `
      <div>
        <h2>
          ${this.title}
          <span class="right"><button data-title="${this.title}" class="delete-list">
            💀
          </button></span>
        </h2>
        <ul>
          ${this.tasks.map(task => task.render()).join("\n")}
        </ul>
      </div>
    `
  }
}
