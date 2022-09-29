const blackBackground = document.querySelector(".black"),
  loginBox = document.querySelector(".login"),
  btnLogin = document.getElementById("btnLogin"),
  lastName = document.querySelector(".lastName"),
  tel = document.getElementById("tel"),
  userHello = document.getElementById("userHello"),
  shanbe = document.getElementById("shanbe"),
  shanbe1 = document.getElementById("1shanbe"),
  shanbe2 = document.getElementById("2shanbe"),
  shanbe3 = document.getElementById("3shanbe"),
  shanbe4 = document.getElementById("4shanbe"),
  shanbe5 = document.getElementById("5shanbe"),
  shanbe6 = document.getElementById("jome"),
  days = document.getElementsByClassName("days");
let mainName, tel2;
let day = "shanbe",
  prevday = "3shanbe";
const Tasks = [
  {
    day: "shanbe",
    tasks: [
      {
        id: "0",
        taskName: "test1",
        taskTime: "12:10",
        isDone: true,
      },
      {
        id: "1",
        taskName: "test2",
        taskTime: "15:10",
        isDone: false,
      },
    ],
  },
  {
    day: "1shanbe",
    tasks: [
      {
        id: "2",
        taskName: "test1",
        taskTime: "12:10",
        isDone: true,
      },
      {
        id: "3",
        taskName: "test2",
        taskTime: "15:10",
        isDone: false,
      },
    ],
  },
  {
    day: "2shanbe",
    tasks: [
      {
        id: "4",
        taskName: "test1",
        taskTime: "12:10",
        isDone: true,
      },
      {
        id: "5",
        taskName: "test2",
        taskTime: "15:10",
        isDone: false,
      },
    ],
  },
  {
    day: "3shanbe",
    tasks: [
      {
        id: "6",
        taskName: "test1",
        taskTime: "12:10",
        isDone: true,
      },
      {
        id: "7",
        taskName: "test2",
        taskTime: "15:10",
        isDone: false,
      },
    ],
  },
  {
    day: "4shanbe",
    tasks: [
      {
        id: "8",
        taskName: "test1",
        taskTime: "12:10",
        isDone: true,
      },
      {
        id: "9",
        taskName: "test2",
        taskTime: "15:10",
        isDone: false,
      },
    ],
  },
  {
    day: "5shanbe",
    tasks: [
      {
        id: "10",
        taskName: "test1",
        taskTime: "12:10",
        isDone: true,
      },
      {
        id: "11",
        taskName: "test2",
        taskTime: "15:10",
        isDone: false,
      },
    ],
  },
  {
    day: "jome",
    tasks: [
      {
        id: "12",
        taskName: "test1",
        taskTime: "12:10",
        isDone: true,
      },
      {
        id: "13",
        taskName: "test2",
        taskTime: "15:10",
        isDone: false,
      },
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
    i.classList.add("activebtn");
    document.getElementById(prevday).classList.remove("activebtn");
  });
}
function update() {
  console.log("updated");
}
