//business logic

var leapYear = function(year) {
  if ((year % 100 !== 0) && (year % 4 === 0)) {
    return true;
  } else {
    return false;
  }
};




//front-end logic (user interface)
$(document).ready(function() {
  $("form#leap-year").submit(function() {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
