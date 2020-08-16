//jshint esversion:6

exports.getDate = function() {

  const today = new Date();

  //options for displayed day/date/time,etc. is a JS object
  //see https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date for additional option keys examples.
  const options = {

    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  };

  return day = today.toLocaleDateString("en-US", options);
}


exports.getDay = function() {

  const today = new Date();

  //options for displayed day/date/time,etc. is a JS object
  //see https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date for additional option keys examples.
  const options = {

    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return day = today.toLocaleDateString("en-US", options);
}
