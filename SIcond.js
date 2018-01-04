//Amazing variables
var SIcond = 0;
var SIcondUNIT = (1000000000000000000000000000000000000000000000/539000000000000000000000000000000000000000000);
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
function SIcounter() {
setInterval(function() {
  if (SIcond < 9) {
    SIcond++;
  } else {
    SIcond = 0;
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
}, SIcondUNIT * 1000);
}

//Get current date formatted for HTML
function SItimeFormWeb() {
setInterval(function() {
    var date = new Date();
    //Possibly redundent
    var SIcondDateFormWeb = date.getTime() * 500 / 1000000 + '';
    SIcondDateFormWeb = SIcondDateFormWeb.substring(0, SIcondDateFormWeb.indexOf("."));
    SIcondDateFormWeb = reverse(SIcondDateFormWeb).InsertAt(':',1).InsertAt(':',3).InsertAt(':',5).InsertAt(':',7).InsertAt(':',9).InsertAt(':',11).InsertAt(':',13).InsertAt(':',15);
    document.getElementById("time").innerHTML = reverse(SIcondDateFormWeb);
}, SIcondUNIT * 1000);
}

//Get current date formatted
function SItimeForm() {
    var date = new Date();
    //Possibly redundent
    var SIcondDateForm = date.getTime() * 500 / 1000000 + '';
    SIcondDateForm = SIcondDateForm.substring(0, SIcondDateForm.indexOf("."));
    SIcondDateForm = reverse(SIcondDateForm).InsertAt(':',1).InsertAt(':',3).InsertAt(':',5).InsertAt(':',7).InsertAt(':',9).InsertAt(':',11).InsertAt(':',13).InsertAt(':',15);
    return SIcondDateForm;
}

//Get current date unformatted
function SItimeNoForm() {
    var date = new Date();
    //Possibly redundent
    var SIcondDateNoForm = date.getTime() * 500 / 1000000 + '';
    SIcondDateNoForm = SIcondDate.substring(0, SIcondDate.indexOf("."));
    return SIcondDateNoForm;
}

//Sleep in Millonds
function sleep(millonds) {
  millonds = millonds * SIcondUNIT;
  var start = SItimeNoForm();
  for (var i = 0; i < 1e7; i++) {
    if ((SItimeNoForm - start) > millonds) {
      break;
    }
  }
}
