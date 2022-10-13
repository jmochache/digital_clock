setInterval(displayTime, 1000);
function displayTime(){
const timeNow = new Date();
var hoursOfDay = timeNow.getHours();
var minutes = timeNow.getMinutes();
var seconds = timeNow.getSeconds();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = weekDay[timeNow.getDay()];
var months = timeNow.toLocaleString("default", {months: "Long"})
var year = timeNow.getFullYear();
var period = "AM";

if (hoursOfDay > 12){
    hoursOfDay-=12;
    period = "PM";
}

if (hoursOfDay === 0){
    hoursOfDay = 12
    period = "AM"
}

hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

var time = hoursOfDay + ":" + minutes + ":" + seconds + period;
document.getElementById("clock").innerHTML = time + "" + today + "" + months + "" + year;

}

displayTime ();