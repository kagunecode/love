let yearField = document.getElementById("year");
let dayField = document.getElementById("day");
let hourField = document.getElementById("hour");
let minuteField = document.getElementById("minute");
let secondField = document.getElementById("second");

let interval;

// Convert to milisecond
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

var anniversary = new Date("20/02/2022");

const timeSinceFn = () => {
  const today = new Date();
  const timeSpan = today - anniversary;
  const years = Math.floor(timeSpan / year);
  const days = Math.floor((timeSpan % year) / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  yearField.innerHTML = years;
  dayField.innerHTML = days;
  hourField.innerHTML = hours;
  minuteField.innerHTML = minutes;
  secondField.innerHTML = seconds;
};

interval = setInterval(timeSinceFn, second);
