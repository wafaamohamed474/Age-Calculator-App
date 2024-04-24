let dayBox = document.querySelector(".day");
let monthBox = document.querySelector(".month");
let yearBox = document.querySelector(".year");

let dayInput = document.getElementById("dayInput");
let monthInput = document.getElementById("monthInput");
let yearInput = document.getElementById("yearInput");

let daySpan = document.querySelector(".daySpan");
let monthSpan = document.querySelector(".monthSpan");
let yearSpan = document.querySelector(".yearSpan");

let today = new Date();
let ageByYears;
let mo;
let days;

let icon = document.querySelector(".icon");
icon.addEventListener("click", myFun);
function myFun() {
   

  ageByYears = today.getFullYear() - yearInput.value;
  mo = today.getMonth() - monthInput.value + 1;

  days = 0;

  if (mo < 0 || (mo === 0 && today.getDate() < dayInput.value)) {
    if (mo < 0) {
      days = today.getDate() - dayInput.value;
    }

    ageByYears--;
    mo += 12;

    if (today.getDate() < dayInput.value) {
      mo--;
      days = today.getDate() + 30 - dayInput.value;
    }
  } else {
    days = today.getDate() - dayInput.value;
  }

  daySpan.innerHTML = `${days}`;
  monthSpan.innerHTML = `${mo}`;
  yearSpan.innerHTML = `${ageByYears}`;
}
