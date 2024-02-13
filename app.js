const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();

const monthList = [
  "january",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// ....
const setYearMonth = () => {
  document.querySelector("#month > h3").textContent = monthList[currentMonth];
  document.querySelector("#year > h3").textContent = currentYear;
};


const getTime = () => {
  const currentDate = new Date();
  let hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  let timeType = "AM";
  if (hour > 12) {
    hour -= 12;
    timeType = "PM";
  }

  //   .....
  document.querySelector(
    "#time > h3"
  ).textContent = `${hour}:${minute}:${seconds} ${timeType}`;
  //   ....
};
setInterval(() => {
  getTime();
}, 1000);

// theme
const applyTheme = () => {
  const hour = new Date().getHours();

  if (hour >= 18 || hour <= 4) {
    document.getElementById("container").classList.remove("light-container");

    document.getElementById("container").classList.add("dark-container");
    document.querySelectorAll(".box").forEach((item) => {
      item.classList.remove("light-box");
      item.classList.add("dark-box");
    });
  } else {
    document.getElementById("container").classList.remove("dark-container");

    document.getElementById("container").classList.add("light-container");
    document.querySelectorAll(".box").forEach((item) => {
      item.classList.remove("dark-box");
      item.classList.add("light-box");
    });
  }
};
applySeasonTheme = () => {
  const month = new Date().getMonth();

  if (month === 0 || month === 1 || month === 2) {
    document.querySelector("#month > h3").style.color = "#96B6C5";
  } else if (month === 4 || month === 5 || month === 3) {
    document.querySelector("#month > h3").style.color = "#FF8080";
  } else if (month === 6 || month === 7 || month === 8) {
    document.querySelector("#month > h3").style.color = "#304D30";
  } else {
    document.querySelector("#month > h3").style.color = "#E36414";
  }
};

// call functions
setYearMonth();
applyTheme();
applySeasonTheme();
