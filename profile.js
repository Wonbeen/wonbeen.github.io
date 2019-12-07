var experience = document.getElementsByName("skill");
console.log("done");
console.log(experience[0].checked);
function sub(){
  console.log("in");
  if(experience[0].checked){
    document.getElementById("experience").innerHTML="<h2>Experience Level:</h2><br><h3>Beginner</h3>";
  }
  else if(experience[1].checked){
    document.getElementById("experience").innerHTML="<h2>Experience Level:</h2><br><h3>Intermediate</h3>";
  }
  else if(experience[2].checked){
    document.getElementById("experience").innerHTML="<h2>Experience Level:</h2><br><h3>Professional</h3>";
  }
}
var mes = document.getElementById("status-message");
function message(){
  if(mes.value.length > 10){
    document.getElementById("experience").innerHTML += "<h2>Status Message:</h2>" + mes.value;
  }
}
var interest = document.getElementById("styleInterest");
var display1 ="";
function sInterest(){
  for(var i = 0; i < interest.length; i++){
    if(interest[i].checked){
      display1 += interest[i].value + " ";
    }
  }
  interest.innerHTML = display1;
}
/*****************/
var locationP = document.getElementById("locationPref");
var display2 ="";
function locationPref(){
  for(var i = 0; i < locationP.length; i++){
    if(locationP[i].checked){
      display2 += locationP[i].value + " ";
    }
  }
  locationP.innerHTML = display2;
}
/*****************/
var person = document.getElementById("per");
var display3 ="";
function personaa(){
  for(var i = 0; i < person.length; i++){
    if(person[i].checked){
      display3 += person[i].value + " ";
    }
  }
  person.innerHTML = display3;
}
