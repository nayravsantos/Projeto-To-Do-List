// Seleção de Elementos
 
// Adiciona o formulário
const todoForm = document.querySelector("#todo-form");
// Adiciona tarefas
const todoInput = document.querySelector("#todo-input");
// Inclui novas tarefas
const todoList = document.querySelector("#todo-list");
// Formulário de edição
const editForm = document.querySelector("#edit-form");
// Campo de edição
const editInput = document.querySelector("#edit-input");
// Campo de cancelamento
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let oldInputValue;
 
 
 
// Funções
 
 
 
// Armazena o texto que vem pelo valor do input
const saveTodo = (text) => {
   // Estrutura da div todo-list
    // Div Geral
    const todo = document.createElement("div");
    todo.classList.add("todo");

  // Titulo
  const todoTitle = document.createElement("h3");
 // Aqui armazenamos o texto recepido da função saveTodo
 todoTitle.innerText = text;
 todo.appendChild(todoTitle);

   // Botão Feito
   const doneBtn = document.createElement("button");
   doneBtn.classList.add("finish-todo");
    // Em forma de texto o icone feito e introduzido aqui
     doneBtn.innerHTML = '<i class="bx bx-check"></i>';
     todo.appendChild(doneBtn);

     
