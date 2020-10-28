console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// show day on currentDay
document.querySelector("#currentDay").textContent = moment().format("dddd");

// change color of text area depending on whether it's past, present, or future
console.log(moment().format("H"));

var hour = $(".hour");
var plan = $("textarea");

for (var i = 0; i < hour.length; i++) {
    if (parseInt(hour[i].id) < moment().format("H")) {
        plan[i].classList.add("past");    
    }
    else if(parseInt(hour[i].id) == moment().format("H")) {
        plan[i].classList.add("present");
    }
    else if(parseInt(hour[i].id) > moment().format("H")) {
        plan[i].classList.add("future");
    }
};

// save events using local storage
var saveBtn = $(".saveBtn");
for (var j = 0; j < saveBtn.length; j++) {
    saveBtn[j].addEventListener("click", savePlans);
}