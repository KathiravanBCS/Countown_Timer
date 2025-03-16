let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


function updatetime(){

  const currentyear = new Date().getFullYear();

  const newyear = new Date(`january 1 ${currentyear + 1} 00:00:00`);

  console.log(newyear);

  const currentdate = new Date();

  const differ = newyear - currentdate;

  const day = Math.floor(differ / 1000 / 60 / 60 / 24);

  const hour = Math.floor((differ / 1000 / 60 / 60) % 24);

  const minute = Math.floor((differ / 1000 / 60) % 60);

  const second = Math.floor((differ / 1000) % 60);

  days.innerHTML=day<10?"0"+day:day;
  hours.innerHTML=hour<10?"0"+hour:hour;
  minutes.innerHTML=minute<10?"0"+minute:minute;
  seconds.innerHTML=second<10?"0"+second:second;
}

setInterval(updatetime,1000);
