// =================================
// ||                             ||
// ||      Business Logic         ||
// ||                             ||
// =================================
















// =================================
// ||                             ||
// ||    User Interface Logic     ||
// ||                             ||
// =================================

$(document).ready(function() {
  $("button#whatYouDo").click(function(event) {
    event.preventDefault();
    $(".whatYouDo").toggle();
  });
  $("button#whatYouNeed").click(function(event) {
    event.preventDefault();
    $(".whatYouNeed").toggle();
  });
});
