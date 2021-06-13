countdown = () => {
  const countdownDate = new Date("Jan 01, 2022 00:00:00").getTime();
  const presentDate = new Date().getTime();
  const difference = countdownDate - presentDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const weeks = days * 7;
  const months = weeks * 4;

  const monthText = Math.floor(difference / months);
  const weekText = Math.floor((difference % months) / weeks);
  const dayText = Math.floor((difference % weeks) / days);
  const hourText = Math.floor((difference % days) / hours);
  const minuteText = Math.floor((difference % hours) / minutes);
  const secondText = Math.floor((difference % minutes) / seconds);

  console.log(weekText);

  document.getElementById("month-text").innerText = monthText;
  document.getElementById("week-text").innerText = weekText;
  document.getElementById("day-text").innerText = dayText;
  document.getElementById("hour-text").innerText = hourText;
  document.getElementById("minute-text").innerText = minuteText;
  document.getElementById("second-text").innerText = secondText;
};

setInterval(countdown, 1000);
