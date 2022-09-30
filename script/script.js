const blackBackground = document.querySelector(".black"),
  loginBox = document.querySelector(".login"),
  btnLogin = document.getElementById("btnLogin"),
  lastName = document.querySelector(".lastName"),
  tel = document.getElementById("tel"),
  userHello = document.getElementById("userHello"),
  tasks = document.querySelector(".tasks"),
  editTask = document.querySelector(".editable"),
  finalEdit = document.getElementById("finalEdit"),
  editText = document.getElementById("editText"),
  days = document.getElementsByClassName("days"),
  toDoCount = document.getElementsByClassName("toDoCount"),
  deleteAll = document.getElementById("delete-all"),
  taskForAdd = document.querySelector(".task-for-add"),
  addActivityButton = document.getElementById("add-activity"),
  timeInput = document.querySelector(".time-input");
let countTotal = 0;
let mainName, tel2;
let day, prevday, editValue;
const Tasks = [
  {
    day: "shanbe",
    tasks: [
      //   {
      //     id: "0",
      //     taskName: "test1",
      //     taskTime: "12:10",
      //     isDone: true,
      //   },
      //   {
      //     id: "1",
      //     taskName: "test2",
      //     taskTime: "15:10",
      //     isDone: false,
      //   },
    ],
  },
  {
    day: "1shanbe",
    tasks: [
      //   {
      //     id: "2",
      //     taskName: "test3",
      //     taskTime: "12:10",
      //     isDone: true,
      //   },
      //   {
      //     id: "3",
      //     taskName: "test4",
      //     taskTime: "15:10",
      //     isDone: false,
      //   },
    ],
  },
  {
    day: "2shanbe",
    tasks: [
      //   {
      //     id: "4",
      //     taskName: "test5",
      //     taskTime: "10:10",
      //     isDone: true,
      //   },
      //   {
      //     id: "5",
      //     taskName: "test6",
      //     taskTime: "17:10",
      //     isDone: false,
      //   },
      //   {
      //     id: "4",
      //     taskName: "test5",
      //     taskTime: "15:10",
      //     isDone: true,
      //   },
      //   {
      //     id: "5",
      //     taskName: "test6",
      //     taskTime: "09:10",
      //     isDone: false,
      //   },
    ],
  },
  {
    day: "3shanbe",
    tasks: [
      //   {
      //     id: "6",
      //     taskName: "test1",
      //     taskTime: "12:10",
      //     isDone: true,
      //   },
      //   {
      //     id: "7",
      //     taskName: "test2",
      //     taskTime: "15:10",
      //     isDone: false,
      //   },
    ],
  },
  {
    day: "4shanbe",
    tasks: [
      //   {
      //     id: "8",
      //     taskName: "test1",
      //     taskTime: "12:10",
      //     isDone: true,
      //   },
      //   {
      //     id: "9",
      //     taskName: "test2",
      //     taskTime: "15:10",
      //     isDone: false,
      //   },
    ],
  },
  {
    day: "5shanbe",
    tasks: [
      //   {
      //     id: "10",
      //     taskName: "test1",
      //     taskTime: "12:10",
      //     isDone: true,
      //   },
      //   {
      //     id: "11",
      //     taskName: "test2",
      //     taskTime: "15:10",
      //     isDone: false,
      //   },
    ],
  },
  {
    day: "jome",
    tasks: [
      //   {
      //     id: "12",
      //     taskName: "test1",
      //     taskTime: "12:10",
      //     isDone: true,
      //   },
      //   {
      //     id: "13",
      //     taskName: "test2",
      //     taskTime: "15:10",
      //     isDone: false,
      //   },
    ],
  },
];

btnLogin.addEventListener("click", () => {
  (mainName = lastName.value), (tel2 = tel.value);
  if (!isNaN(+tel2) && tel2.length == 11 && mainName) {
    loginBox.style.display = "none";
    blackBackground.style.display = "none";
    userHello.textContent = `سلام ${mainName}!`;
  }
});

for (let i of days) {
  i.addEventListener("click", () => {
    prevday = day;
    day = i.id;
    update();
  });
}
for (let i = 0; i <= 6; i++) {
  toDoCount[i].innerHTML = Tasks[i].tasks.length;
}
function update() {
  if (prevday) document.getElementById(prevday).classList.remove("activebtn");
  document.getElementById(day).classList.add("activebtn");
  const dayTask = Tasks.find((dayTask) => dayTask.day === day);
  tasks.innerHTML = "";
  dayTask.tasks.sort((a, b) => {
    return (
      Number(a.taskTime.split(":").join("")) -
      Number(b.taskTime.split(":").join(""))
    );
  });
  for (let task of dayTask.tasks) {
    const item = document.createElement("div");
    item.id = task.id;
    item.classList.add("items");
    const rightItem = document.createElement("div");
    rightItem.classList.add("right-items");
    const buttonCheck = document.createElement("button");
    buttonCheck.classList.add("main-btn", "border-btn");
    buttonCheck.innerHTML = `<i class="fas fa-check"></i>`;
    buttonCheck.addEventListener("click", () => {
      task.isDone = task.isDone ? false : true;
      update();
    });
    rightItem.appendChild(buttonCheck);
    const todoActivity = document.createElement("div");
    todoActivity.classList.add("todoactivity");
    todoActivity.textContent = task.taskName;
    rightItem.appendChild(todoActivity);
    item.appendChild(rightItem);
    const leftItem = document.createElement("div");
    leftItem.classList.add("left-items");
    const timeTodo = document.createElement("div");
    timeTodo.classList.add("timetodo");
    timeTodo.textContent = task.taskTime;
    leftItem.appendChild(timeTodo);
    const editDelete = document.createElement("div");
    editDelete.classList.add("edit-delete");
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("main-btn");
    buttonDelete.innerHTML = `<i class="fas fa-trash"></i>`;
    buttonDelete.addEventListener("click", () => {
      dayTask.tasks.splice(
        dayTask.tasks.findIndex((element) => element.id === task.id),
        1
      );
      update();
    });
    //edit button
    editDelete.appendChild(buttonDelete);
    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("main-btn");
    buttonEdit.innerHTML = `<i class="fas fa-edit"></i>`;
    buttonEdit.addEventListener("click", () => {
      editTask.style.display = "flex";
      blackBackground.style.display = "block";
      editText.value = task.taskName;
      finalEdit.addEventListener("click", () => {
        task.taskName = editText.value;
        editTask.style.display = "none";
        blackBackground.style.display = "none";
        update();
      });
    });

    editDelete.appendChild(buttonEdit);
    leftItem.appendChild(editDelete);
    item.appendChild(leftItem);
    if (task.isDone) item.classList.add("checked");
    tasks.appendChild(item);
  }
  for (let i = 0; i <= 6; i++) {
    toDoCount[i].innerHTML = Tasks[i].tasks.length;
  }
}
deleteAll.addEventListener("click", () => {
  if (day) {
    const dayTask = Tasks.find((dayTask) => dayTask.day === day);
    dayTask.tasks = [];
    update();
  }
});
addActivityButton.addEventListener("click", () => {
  if (day) {
    const dayTask = Tasks.find((dayTask) => dayTask.day === day);
    const temp = {
      id: countTotal,
      taskName: taskForAdd.value,
      taskTime: timeInput.value,
      isDone: false,
    };
    dayTask.tasks.push(temp);
    countTotal++;
    update();
  }
});
