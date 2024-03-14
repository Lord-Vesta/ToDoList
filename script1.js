// // taskContainer.addEventListener("click", (e) => {
// //     console.log(e.target);
// //   if (e.target.getElementByClassName == "Checkbox") {
// //     // const li =
// //     // e.classList.toggle("completed", Checkbox.checked);
// //     console.log(e);
// //   } else if (e.target.getElementByClassName == "fa-pen-to-square") {
// //     const taskSpan = li.querySelector("span");
// //     console.log(taskSpan);
// //     const update = prompt("Edit task:", taskSpan.textContent);
// //     if (update !== null) {
// //       taskSpan.textContent = update;
// //       li.classList.remove("completed");
// //     }
// //   }
// // });

// // const DeleteBtn = document.querySelectorAll(".Delete-Button");

// // DeleteBtn.forEach((button) => {
// //   button.addEventListener("click", () => {
// //     button.parentNode.parentNode.remove();
// //     incompleteTotalCount--;
// //     display(incompleteTotalCount);
// //     saveLocal();
// //   });
// // });

// // const Editbtn = document.querySelectorAll(".edit-button");

// // console.log(Editbtn);

// // Editbtn.forEach((button) => {
// //   //   console.log(button);

// //   button.addEventListener("click", (e) => {
// //     let targetElement = e.target;

// //     TaskInput.value =
// //       targetElement.parentElement.parentElement.previousElementSibling?.textContent.trim();

// //     targetElement.parentNode.parentNode.parentNode.remove();

// //     incompleteTotalCount--;
// //     display(incompleteTotalCount);
// //     // saveLocal();
// //   });
// // });

// // const saveBtn = document.querySelectorAll(".Checkbox");

// // console.log(saveBtn);

// // saveBtn.forEach((checkbox) => {
// //   //   console.log(checkbox.parentNode);
// //   checkbox.onclick = () => {
// //     checkbox.parentNode.style.textDecoration = "line-through";
// //     if (checkbox.checked) {
// //       completeTotalCount++;
// //     } else {
// //       completeTotalCount--;
// //     }
// //     display(completeTotalCount);
// //     // saveLocal();
// //   };
// // });

// // const deleteQuery = document.getElementsByClassName(".Delete-Button");

// // deleteBtn.addEventListener("click", function () {
// //     if (confirm("Are you sure you want to delete this task?")) {
// //       .remove();
// //       updateCounters();
// //     }
// //   });

// const itemsArray = localStorage.getItem("items")
//   ? JSON.parse(localStorage.getItem("items"))
//   : [];

// console.log(itemsArray);

// document.querySelector("#Add-Button").addEventListener("click", () => {
//   const item = document.querySelector("#txtItem");
//   createItem(item);
// });

// function display() {
//   let items = "";
//   for (let i = 0; i < itemsArray.length; i++) {
//     items += `<div class="item">
//         <div class="input-controller">
//             <span disabled>${itemsArray[i]}</span>
//             <div class="edit-controller">
//                 <span class="editbtn">edit</span>
//                 <span class="deleteBtn">delete</span>
//             </div>
//         </div>
//     </div>`;
//   }
//   document.querySelector("#Tasks").innerHTML = items;
//   activateDeleteListeners();
//   console.log(items);
//   //   activateeditListeners()
// }

// function activateDeleteListeners() {
//   let deleteBtn = document.querySelectorAll(".deleteBtn");
//   console.log(deleteBtn);
//   deleteBtn.forEach((db, i) => {
//     db.addEventListener("click", () => {
//       deleteItem(i);
//     });
//   });
// }

// function deleteItem(i) {
//   console.log(i);
//   itemsArray.splice(i, 1);
//   localStorage.setItem("items", JSON.stringify(itemsArray));
//   location.reload();
// }

// function createItem(item) {
//   itemsArray.push(item.value);
//   localStorage.setItem("items", JSON.stringify(itemsArray));
//   location.reload();
// }

// display();

// let obj = {
//   id:1,
//   id:2
// }

// obj.forEach((e)=>{
//   console.log(e)
// })

let a = ['a','b']
let b = []
a.forEach((e)=>{
  console.log(typeof e)  
})

// console.log(b)
