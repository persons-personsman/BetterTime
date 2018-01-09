//Amazing variables
var second = 0;
var secondUNIT = (1000000000000000000000000000000000000000000000/539000000000000000000000000000000000000000000);
var decond = 0;
var hectond = 0;
var kilond = 0;
var megond = 0;
var gigond = 0;

String.prototype.InsertAt=function(CharToInsert,Position){
     return this.slice(0,Position) + CharToInsert + this.slice(Position)
}

function reverse(s){
    return s.split("").reverse().join("");
}

//Counter or Stopwatch
function BTcounter() {
setInterval(function() {
  if (second < 9) {
    second++;
  } else {
    second = 0;
    hectond++;
  }
  if (hectond > 9) {
    hectond = 0;
    kilond++;
  }
  if (kilond > 9) {
    kilond = 0;
    megond++;
  }
  if (megond > 9) {
    megond = 0;
    gigond++;
  }
  document.getElementById("counter").innerHTML = (gigond + ":" + megond + ":" + kilond + ":" + hectond + ":" + SIcond);
}, secondUNIT * 1000);
}

//Get current date formatted for HTML
function BTFormWeb() {
setInterval(function() {
    var date = new Date();
    //Possibly redundent
    var BTDateFormWeb = date.getTime() * 500 / 1000000 + '';
    BTDateFormWeb = BTDateFormWeb.substring(0, BTDateFormWeb.indexOf("."));
    BTDateFormWeb = reverse(BTDateFormWeb).InsertAt(':',1).InsertAt(':',3).InsertAt(':',5).InsertAt(':',7).InsertAt(':',9).InsertAt(':',11).InsertAt(':',13).InsertAt(':',15);
    document.getElementById("time").innerHTML = reverse(BTDateFormWeb);
}, secondUNIT * 1000);
}

//Get current date formatted
function BTForm() {
    var date = new Date();
    //Possibly redundent
    var BTDateForm = date.getTime() * 500 / 1000000 + '';
    BTDateForm = BTDateForm.substring(0, BTDateForm.indexOf("."));
    BTDateForm = reverse(BTDateForm).InsertAt(':',1).InsertAt(':',3).InsertAt(':',5).InsertAt(':',7).InsertAt(':',9).InsertAt(':',11).InsertAt(':',13).InsertAt(':',15);
    return BTDateForm;
}

//Get current date unformatted
function BTNoForm() {
    var date = new Date();
    //Possibly redundent
    var BTDateNoForm = date.getTime() * 500 / 1000000 + '';
    BTDateNoForm = BTDateNoForm.substring(0, BTDateNoForm.indexOf("."));
    return BTDateNoForm;
}

//Sleep in Millonds
function sleep(millonds) {
  millonds = millonds * secondUNIT;
  var start = BTNoForm();
  for (var i = 0; i < 1e7; i++) {
    if ((BTNoForm() - start) > millonds) {
      break;
    }
  }
}
