const todolist = [];

function clearTodoList(){
    const todolistBody = document.getElementById("todolistBody");
    while(todolistBody.firstChild){
        todolistBody.removeChild(todolistBody.firstChild)
    }
}

function addTodoList(i, value) {
  const tr = document.createElement("tr");
  const tdButton = document.createElement("td");
  tr.appendChild(tdButton);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";
  buttonDone.onclick = function () {
    removeTodoList(i);
  };
  tdButton.appendChild(buttonDone);

  const tdTodo = document.createElement("td");
  tdTodo.textContent = value;
  tr.appendChild(tdTodo);

  const todolistBody = document.getElementById("todolistBody");
  todolistBody.appendChild(tr);
}

function removeTodoList(index) {
  todolist.splice(index, 1);
  displayTodoList();
}

function displayTodoList(){
    clearTodoList();

    todolist.forEach(function (value, i){
         const searchText = document
           .getElementById("search")
           .value.toLowerCase();

         if (value.toLowerCase().includes(searchText)) {
           addTodoList(i, value);
         }
    });

}

document.forms['todoForm'].onsubmit = function(event){
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todolist.push(todo);

    displayTodoList();
    document.forms['todoForm'].reset();
    
};

const searchInput = document.getElementById("search");
searchInput.onkeyup = function(){
    displayTodoList();
}

searchInput.onkeyup = function () {
    displayTodoList();
};

displayTodoList();

