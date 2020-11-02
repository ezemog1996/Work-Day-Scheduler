console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// show day on currentDay
document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");

// change color of text area depending on whether it's past, present, or future
console.log(moment().format("H"));

var timeBlock = $(".time-block");
var plan = $("textarea");

for (var i = 0; i < timeBlock.length; i++) {
    if (parseInt(timeBlock[i].id) < moment().format("H")) {
        plan[i].classList.add("past");
    }
    else if (parseInt(timeBlock[i].id) == moment().format("H")) {
        plan[i].classList.add("present");
    }
    else if (parseInt(timeBlock[i].id) > moment().format("H")) {
        plan[i].classList.add("future");
    }
};

// save events using local storage
var saveBtn = $(".saveBtn");
for (var j = 0; j < saveBtn.length; j++) {
    saveBtn[j].addEventListener("click", savePlans);
}

//get the data
var events = JSON.parse(localStorage.getItem("events"));
var timeBlockArray = $(".time-block");
//check if there is data
if (events) {
    //loop through each time block
    for (var i = 0; i < timeBlockArray.length; i++) {
        //for each timeblock loop thorugh data
        for (var k = 0; k < events.length; k++) {
            //check if timeBlobk ide match with data id
            if ($(timeBlockArray[i]).attr("id") === events[k].id) {
                $(timeBlockArray[i]).find("textarea").val(events[k].text);
            }
        }
    }
} else {
    events = [
        {
            id: "9",
            text: ""
        },
        {
            id: "10",
            text: ""
        }, 
        {
            id: "11",
            text: ""
        }, 
        {
            id: "12",
            text: ""
        },
        {
            id: "13",
            text: ""
        },
        {
            id: "14",
            text: ""
        }, 
        {
            id: "15",
            text: ""
        }, 
        {
            id: "16",
            text: ""
        },
        {
            id: "17",
            text: ""
        },
    ];
};


function savePlans(event) {
    //text id
    var id = $(event.target).closest(".time-block").attr("id");
    //get value
    var value = $(event.target).siblings("textarea").val();
    //update the data with new text
    for (var i = 0; i < events.length; i++) {
        if (events[i].id === id) {
            events[i].text = value;
        } 
    }
    //store data
    localStorage.setItem("events", JSON.stringify(events));
}