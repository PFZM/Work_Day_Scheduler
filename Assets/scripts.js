// Current time and date displayed in jumbotron
function displayDate() {
  const date = moment().format("dddd, DD-MMM-YYYY");
  const time = moment().format("HH:mm:ss");
  $("#currentDay").text(date);
  $("#currentTime").text(time);
}

setInterval(displayDate, 1000);

// function to check time and retrive items from local storage
function ckTimeAndRtrLs() {
  // get the current hour
  const currentHour = moment().hour();

  //   Loop for each time-block and get the #id (hour) compare it to the current time add class
  $(".time-block").each(function () {
    const hourOfTB = parseInt($(this).attr("id"));

    if (hourOfTB < currentHour) {
      $(this).addClass("past");
    }
    if (hourOfTB === currentHour) {
      $(this).addClass("present");
    }
    if (hourOfTB > currentHour) {
      $(this).addClass("future");
    }
    // check and retrieve values in local storage
    for (let i = 0; i < localStorage.length; i++) {
      const keyName = window.localStorage.key(i);
      if (keyName == hourOfTB) {
        const prevTask = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(prevTask);
        $(this).children("textarea").text(prevTask);
      }
    }
  });
}

ckTimeAndRtrLs();

// When button "save" is clicked, the event is saved in local storge
$("button").click(function () {
  const task = $(this).prev().val();
  localStorage.setItem(
    $(this).parent().attr("id"),
    JSON.stringify(task.trim())
  );
});
