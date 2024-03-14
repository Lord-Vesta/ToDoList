const addBtn = document.querySelector("#Add-Button");
const TaskInput = document.querySelector("#AddTasks input");
const taskContainer = document.querySelector("#Tasks");
const error = document.getElementById("error");
const completedCounter = document.getElementById("completed-counter");

let items = [];
items = JSON.parse(localStorage.getItem("todo-list")) || [];

function Clearall() {
  localStorage.clear("todo-list");
  taskContainer.remove();
  // listItems();
  completedTasks = 0;
  display(completedTasks);
}

function addTodo() {
  let item = TaskInput.value.trim();
  console.log(item);
  let flag = false;
  items.forEach((Element) => {
    if (Element.value == item) {
      flag = true;
    }
  });
  if (item === "") {
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
  } else if (flag == true) {
    alert("The task you have entered is same, enter a different task");
  } else {
    items.push({
      id: items.length + 1,
      value: item,
      completed: false,
    });

    localStorage.setItem("todo-list", JSON.stringify(items));
    listItems();
    TaskInput.value = "";
    completedTasks++;
    display(completedTasks);
  }
}

function listItems() {
  let list = "";
  items.forEach(function (item, index) {
    const checked = item.completed ? "checked" : "";
    const completedStyle = item.completed
      ? "text-decoration: line-through;"
      : "";

    list += `
    <div class='task'>

      <label class="${checked}">
        <input class="Checkbox${index} Checkbox" 
        onclick='CheckboxItem(${index})' type="checkbox" ${checked}>
        <span class="${index} tasktext" style="${completedStyle}">${item.value}</span>
      </label>
    <div>
    <span class = "edit-btn" onclick='EditItem(${index})'>
      <i class="fa-solid fa-pen-to-square"></i>
    </span>
    <span class="delete-btn" onclick='deleteItem(${index})'>
      <i class="fa-solid fa-trash"></i>
    </span>
    </div>
    </div>
    <hr>
    `;
  });
  taskContainer.innerHTML = list;
  // console.log(list);
}

function CheckboxItem(index) {
  items[index].completed = !items[index].completed;

  if (items[index].completed) {
    completedTasks--;
  } else {
    completedTasks++;
  }
  display(completedTasks);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function deleteItem(index) {
  if (confirm("Are you sure you want to delete this task?"))
    items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
  completedTasks--;
  display(completedTasks);
}

function EditItem(index) {
  const update = prompt("Edit task:", items[index].value);
  if (update !== null) {
    items[index].value = update;
  }
  items[index].completed = false;
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

let completedTasks;
const display = () => {
  completedTasks = items.filter((items) => !items.completed).length;
  completedCounter.textContent = completedTasks;
};

addBtn.addEventListener("click", addTodo);
listItems();
display();
