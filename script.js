// Date
setInterval(() => {

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let dayToday = today.getDay();

  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];

  var dayName = dayNames[dayToday];


  console.log(day + " " + month + " " + year);

  let thisDay = document.querySelector(".day").innerHTML = day + "/";
  let thisMonth = document.querySelector(".month").innerHTML = month + 1 + "/";
  let thisYear = document.querySelector(".year").innerHTML = year;
  let thisDayName = document.querySelector(".day-name").innerHTML = dayName;



});

// TIME
setInterval(() => {


  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  if (hr > 12) {
    document.querySelector(".ampm").innerHTML = "PM";
  } else {
    document.querySelector(".ampm").innerHTML = "AM";
  }

  if (hr > 12) {
    hr = hr - 12;
  }

  if (hr < 10) {
    hr = "0" + hr;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  let hours = document.querySelector(".hours").innerHTML = hr + " : ";
  let minutes = document.querySelector(".minutes").innerHTML = min + " : ";
  let seconds = document.querySelector(".seconds").innerHTML = sec;


});
