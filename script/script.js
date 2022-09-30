// Get Elements
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

// Define Vars
let countTotal = 0;
let mainName, tel2, day, prevday;

// Data
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

// Login Box
btnLogin.addEventListener("click", () => {
    (mainName = lastName.value), (tel2 = tel.value);
    if (!isNaN(+tel2) && tel2.length == 11 && mainName) {
        loginBox.style.display = "none";
        blackBackground.style.display = "none";
        userHello.textContent = `سلام ${mainName}!`;
    } else alert('ورودی مشکل دارد!')
});

// Add Events to buttons of header (select a day)
for (let i of days) {
    i.addEventListener("click", () => {
        prevday = day;
        day = i.id;
        update();
    });
}

// Add number the counter div;
for (let i = 0; i <= 6; i++) {
    toDoCount[i].innerHTML = Tasks[i].tasks.length;
}


// Make task of a days and show them and change active btn of class and change the counter of header btns
function update() {
    // change the class of activebtn in the btns of header
    if (prevday) document.getElementById(prevday).classList.remove("activebtn");
    document.getElementById(day).classList.add("activebtn");

    // find the data of that days that selected
    const dayTask = Tasks.find((dayTask) => dayTask.day === day);

    // Make empty the tasks div
    tasks.innerHTML = "";

    // sorting by time the tasks
    dayTask.tasks.sort((a, b) => {
        return (
            Number(a.taskTime.split(":").join("")) -
            Number(b.taskTime.split(":").join(""))
        );
    });

    // make item for each task of a day
    for (let task of dayTask.tasks) {
        // make parent div element
        const item = document.createElement("div");
        item.id = task.id;
        item.classList.add("items");

        // make right div of element
        const rightItem = document.createElement("div");
        rightItem.classList.add("right-items");

        // make a check button of element
        const buttonCheck = document.createElement("button");
        buttonCheck.classList.add("main-btn", "border-btn");
        buttonCheck.innerHTML = `<i class="fas fa-check"></i>`;
        buttonCheck.addEventListener("click", () => {
            task.isDone = task.isDone ? false : true;
            update();
        });

        // add check button to the right div
        rightItem.appendChild(buttonCheck);

        // make div for the name of task
        const todoActivity = document.createElement("div");
        todoActivity.classList.add("todoactivity");
        todoActivity.textContent = task.taskName;

        // add task to the right div
        rightItem.appendChild(todoActivity);

        // add right div to the main div
        item.appendChild(rightItem);

        // make a left div
        const leftItem = document.createElement("div");
        leftItem.classList.add("left-items");

        // make div for show the time
        const timeTodo = document.createElement("div");
        timeTodo.classList.add("timetodo");
        timeTodo.textContent = task.taskTime;

        // add div of show the time to the left div
        leftItem.appendChild(timeTodo);

        // make div for the button of edit and delete
        const editDelete = document.createElement("div");
        editDelete.classList.add("edit-delete");

        // make the delete button
        const buttonDelete = document.createElement("button");
        buttonDelete.classList.add("main-btn");
        buttonDelete.innerHTML = `<i class="fas fa-trash"></i>`;
        buttonDelete.addEventListener("click", () => {
            const isSure = confirm('آیا مطمئن هستید؟');
            if (isSure) {
                dayTask.tasks.splice(
                    dayTask.tasks.findIndex((element) => element.id === task.id),
                    1
                );
                update();
            }
        });

        // add delete button to the div for the edit and delete
        editDelete.appendChild(buttonDelete);

        // make a edit button
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

        // add edit button to the div for the edit and delete
        editDelete.appendChild(buttonEdit);

        // add the div for the edit and delete to left div
        leftItem.appendChild(editDelete);

        // add left div to main div
        item.appendChild(leftItem);

        // add class of if isDone is true make change in style of task
        if (task.isDone) item.classList.add("checked");

        // append main div to div of task
        tasks.appendChild(item);
    }

    // change the counter in btn of header
    for (let i = 0; i <= 6; i++) {
        toDoCount[i].innerHTML = Tasks[i].tasks.length;
    }
}

// add events for delete all of a day
deleteAll.addEventListener("click", () => {
    if (day) {
        const isSure = confirm('آیا مطمئن هستید؟');
        if (isSure) {
            const dayTask = Tasks.find((dayTask) => dayTask.day === day);
            dayTask.tasks = [];
            update();
        }
    }
});

// add event for add task
addActivityButton.addEventListener("click", () => {
    if (day && taskForAdd.value && timeInput.value) {
        const dayTask = Tasks.find((dayTask) => dayTask.day === day);
        const temp = {
            id: countTotal,
            taskName: taskForAdd.value,
            taskTime: timeInput.value,
            isDone: false,
        };
        dayTask.tasks.push(temp);
        countTotal++;
        taskForAdd.value = '';
        update();
    }
});
