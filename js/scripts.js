// =================================
// ||                             ||
// ||      Business Logic         ||
// ||                             ||
// =================================

  var btnID;
  var idToCollapse;

var categoryExpand = (function() {
  $("." + btnID).slideDown();
  $("button#" + btnID).off("mouseover");
  $("button#" + btnID).removeClass("coolBottom");
  $("button#" + btnID).addClass("bd-disabled");
  $("button#" + btnID).prop("disabled", true);
  $("#expand-" + btnID).removeClass("glyphicon glyphicon-chevron-down");
})

var categoryCollapse = (function(idToCollapse) {
  console.log("ID to Collapse -->  " + idToCollapse);
  $("." + idToCollapse).slideUp();
  console.log("after slideUp");
  $("button#" + idToCollapse).on("mouseover", categoryExpand);
  $("button#" + idToCollapse).removeClass("bd-disabled");
  $("button#" + idToCollapse).addClass("coolBottom");
  $("button#" + idToCollapse).prop("disabled", false);
  $("#expand-" + idToCollapse).addClass("glyphicon glyphicon-chevron-down");
})


var maxProfitHrsPerWeek = 40;
//future input
var driveTime = 3;
var estimatedJobFieldHrs = 120;
var settleTime = 1

var nonProductiveTimePerWk = driveTime + settleTime;
var productiveTimePerWk = maxProfitHrsPerWeek - nonProductiveTimePerWk;

var perDiemCalc =(function() {

})










// =================================
// ||                             ||
// ||    User Interface Logic     ||
// ||                             ||
// =================================

$(document).ready(function() {


//This function grabs the elements ID to correctly point the function
  $("button").mouseenter(function() {
    btnID = $(this).attr('id');
  })

//first instance only
  $("button#whatYouDo").mouseover(function(event) {
    event.preventDefault();
    categoryExpand(btnID);
  });
  $("button#whatYouNeed").mouseover(function(event) {
    event.preventDefault();
    categoryExpand(btnID);
  });

  //takes input from glyphicon and runs function
  $(".collapse").click(function(event) {
    event.preventDefault();
    idToCollapse = this.dataset.group;
    categoryCollapse(idToCollapse);
  })

  //Functions as expected
  $("button#whatYouNeed").click(function(event) {
    event.preventDefault();
    $(".whatYouNeed").toggle();
  });
});
