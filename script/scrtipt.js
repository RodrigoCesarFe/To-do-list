const inputTask = document.querySelector('#form');
const btnAdd = document.querySelector('#add');
const listTask = document.querySelector('.list-tasks')

//Adicionar tarefa

btnAdd.addEventListener('click', () => {
    const itemTask = inputTask.value.trim();
    if(itemTask !==""){
        createTask(itemTask);
        inputTask.value = "";
    }
});

//criar tarefa nova
function createTask(text){
    const itemTask = document.createElement("ul")
    itemTask.innerHTML = ` <ul class="list-tasks">
    <li class="task">
        <i class="bi bi-check-circle-fill" id="completed"></i>
        <p>${text}</p>
        <i class="bi bi-x-circle-fill" id="x"></i>
    </li>
</ul>`;
  listTask.appendChild(itemTask)

  //deletar a tarefa

  const deleteBtn = itemTask.querySelector('.bi-x-circle-fill');
  deleteBtn.addEventListener('click', () => {
    itemTask.remove();
  });


  const completedBtn = itemTask.querySelector('.bi-check-circle-fill');
  const taskItem = itemTask.querySelector('.task');
  taskItem.addEventListener('click', () => {
      taskItem.classList.toggle('task-done');
    });
}

