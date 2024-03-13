const addBtn = document.querySelector("#Add-Button");
const TaskInput = document.querySelector("#AddTasks input");
const taskContainer = document.querySelector("#Tasks");
const error = document.getElementById("error");
const CountValue = document.getElementById("TaskCount");

let TotalCount = 0;

const display = (TotalCount) => {
  CountValue.innerHTML = TotalCount;
};

const addtask = () => {
  const taskName = TaskInput.value.trim();
  error.style.display = "none";

  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 2000);
  }

  const task = `<div class="task">
  <div>
    <button id="Checkbox"><i class="fa-solid fa-check"></i></button>
    <span id="TaskText">${taskName}</span>
  </div>
  <div>
    <button class = "edit-button">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="Delete-Button">
        <i class="fa-solid fa-trash"></i>
    </button>
  </div>
</div>`;

  taskContainer.insertAdjacentHTML("beforeend", task);

  TotalCount++;
  display(TotalCount);

  TaskInput.value = "";
  saveLocal();
};

const saveLocal = () => {
  localStorage.setItem("data", Tasks.innerHTML);
};

const fetchLocal = () => {
  Tasks.innerHTML = localStorage.getItem("data");
};

fetchLocal();

addBtn.addEventListener("click", addtask);

const DeleteBtn = document.querySelectorAll(".Delete-Button");

//
// DeleteBtn.addEventListener('click',()=>{
//     console.log("yash")
// })

DeleteBtn.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.parentNode.remove();
    TotalCount--;
    display(TotalCount);
    saveLocal();
  });
});

const Editbtn = document.querySelectorAll(".edit-button");

console.log(Editbtn);

Editbtn.forEach((button) => {
  console.log(button);
  //   console.log(button.parentElement.previousElementSibling.textContent);
  button.addEventListener("click", (e) => {
    let targetElement = e.target;
    // console.log(
    //   targetElement.parentElement.parentElement.previousElementSibling.textContent.trim()
    // );
    TaskInput.value =
      targetElement.parentElement.parentElement.previousElementSibling?.textContent.trim();

    targetElement.parentNode.parentNode.parentNode.remove();

    TotalCount--;
    display(TotalCount);
    saveLocal();
  });
});
