// Current time and date displayed in jumbotron
function displayDate() {
  const date = moment().format("dddd, DD-MMM-YYYY");
  const time = moment().format("HH:mm:ss");
  $("#currentDay").text(date);
  $("#currentTime").text(time);
}

setInterval(displayDate, 1000);

// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
