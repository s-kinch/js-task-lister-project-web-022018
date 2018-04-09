document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const createListForm = document.getElementById("create-list-form");
  const listTitle = document.getElementById("new-list-title");
  const createTaskForm = document.getElementById("create-task-form");

  const app = new TaskLister();

  createListForm.addEventListener("submit", function(e){
    e.preventDefault();
    app.newList(listTitle.value);

    listDiv.innerHTML = app.render();
    listTitle.value = "";
  });

  listDiv.addEventListener("submit", function(e){
    e.preventDefault();

    app.newTask(document.getElementById("parent-list").value, document.getElementById("new-task-description").value, document.getElementById("new-task-priority").value);
    listDiv.innerHTML = app.render();
  });

  // add event listeners for delete buttons
  // const deleteListButtons = document.getElementsByClassName("delete-list")
  // const deleteTaskButtons = document.getElementsByClassName("delete-task")

  listDiv.addEventListener("click", function(e){
    if (e.target.className === "delete-list"){
      app.deleteList(e.target.dataset.title);
      listDiv.innerHTML = app.render();
    } else if (e.target.className === "delete-task"){
      app.deleteTask(e.target.dataset.listTitle, e.target.dataset.taskName);
      listDiv.innerHTML = app.render();
    } else if (e.target.className === "checkbox"){
      app.toggleTask(e.target.dataset.listTitle, e.target.dataset.taskName);
      listDiv.innerHTML = app.render();
    }
  })



});
