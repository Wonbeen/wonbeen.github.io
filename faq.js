var faq = document.getElementById("question");
console.log("what the heck");
function displayThanks(){
  console.log("in");
  if(faq.value.length < 1){
    document.getElementById("questionss").innerHTML = "<h2>You did not type anything.</h2><br><h3>Try submitting again.</h3>"

  }
  else{
    document.getElementById("questionss").innerHTML ="<h2>Your question has been recieived.</h2><br><h3>We will get back to you shortly.</h3>"
  }
}
