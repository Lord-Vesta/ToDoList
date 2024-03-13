const addBtn = document.querySelector("#Add-Button");
const TaskInput = document.querySelector("#AddTasks input");
const taskContainer = document.querySelector("#Tasks");
const error = document.getElementById("error");
const uncompletedCounter = document.getElementById("uncompleted-counter");
const completedCounter = document.getElementById("completed-counter");

const saveLocal = () => {
  localStorage.setItem("data", taskContainer.innerHTML);
};

const fetchLocal = () => {
  taskContainer.innerHTML = localStorage.getItem("data");
};

let completeTotalCount = 0;
let incompleteTotalCount = 0;

const display = () => {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks =
    document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
};

const addtask = () => {
  const taskName = TaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
  } else {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class='task'>
    <label >
        <button class="Checkbox"><i class="fa-solid fa-check"></i></button>
        <span>${taskName}</span>
    </label>
    <div>
    <span class = "edit-btn">
    <i class="fa-solid fa-pen-to-square"></i>
    </span>
    <span class="delete-btn">
    <i class="fa-solid fa-trash"></i>
    </span>
    </div>
    </div>`;
    taskContainer.insertAdjacentElement("beforeend", li);
    console.log(li);
    TaskInput.value = "";
    incompleteTotalCount++;
    display(incompleteTotalCount, completeTotalCount);

    const deleteBtn = li.querySelector(".delete-btn");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const Checkbox = li.querySelector(".Checkbox");

    deleteBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this task?")) {
        li.remove();
      }
    });

    editBtn.addEventListener("click", () => {
      const update = prompt("Edit task:", taskSpan.textContent);
      if (update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
      }
    });

    // Checkbox.addEventListener("click", function () {
    //   li.classList.toggle("completed", Checkbox.checked);
    // });
    saveLocal();
    // console.log(taskContainer);
  }
};
fetchLocal();

addBtn.addEventListener("click", addtask);

taskContainer.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.getElementByClassName == "fa-check") {
    // const li =
    // li.classList.toggle("completed", Checkbox.checked);
    console.log(e);
  }
  else if(e.target){

  }
});

// const DeleteBtn = document.querySelectorAll(".Delete-Button");

// DeleteBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.parentNode.parentNode.remove();
//     incompleteTotalCount--;
//     display(incompleteTotalCount);
//     saveLocal();
//   });
// });

// const Editbtn = document.querySelectorAll(".edit-button");

// console.log(Editbtn);

// Editbtn.forEach((button) => {
//   //   console.log(button);

//   button.addEventListener("click", (e) => {
//     let targetElement = e.target;

//     TaskInput.value =
//       targetElement.parentElement.parentElement.previousElementSibling?.textContent.trim();

//     targetElement.parentNode.parentNode.parentNode.remove();

//     incompleteTotalCount--;
//     display(incompleteTotalCount);
//     // saveLocal();
//   });
// });

// const saveBtn = document.querySelectorAll(".Checkbox");

// console.log(saveBtn);

// saveBtn.forEach((checkbox) => {
//   //   console.log(checkbox.parentNode);
//   checkbox.onclick = () => {
//     checkbox.parentNode.style.textDecoration = "line-through";
//     if (checkbox.checked) {
//       completeTotalCount++;
//     } else {
//       completeTotalCount--;
//     }
//     display(completeTotalCount);
//     // saveLocal();
//   };
// });

// const deleteQuery = document.getElementsByClassName(".Delete-Button");

// deleteBtn.addEventListener("click", function () {
//     if (confirm("Are you sure you want to delete this task?")) {
//       .remove();
//       updateCounters();
//     }
//   });
