const todoList = JSON.parse(localStorage.getItem('list')) || [{
  name: undefined,
  dueDate: undefined
}];
randerTodoList();

function randerTodoList()
{
  let todoListHTML = '';
  todoList.forEach((todoObject, index) =>{
    const { name, dueDate } = todoObject;
    const HTML = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-button js-delete-button">Delete</button>
    `;
    todoListHTML += HTML;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button').addEventListener('click', () => {
    addTodo();
  })
}

document.querySelector('.js-add-todo-button').forEach((deleteButton, index) => {
  deleteButton.addEventListener('click', () => {
    todoList.splice(index, 1);
    randerTodoList();
  })
});


function addTodo()
{
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name, dueDate});
  inputElement.value = '';

  localStorage.setItem('list', JSON.stringify(todoList));
  randerTodoList();
}