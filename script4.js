console.log("Starting my program!");
document.getElementById("greenButton").addEventListener("click", function(){
  document.getElementById("greenButton").style.width = "300px";
  document.getElementById("greenButton").innerHTML = "Now it's a SQUISHED green button!"
  document.getElementById("greenButton").style.fontFamily = "Impact";
  console.log("You clicked the button!");
});
//setProperty("yellowButton", "border-width", 10);
document.getElementById("yellowButton").style.borderWidth = "10px";
//setProperty("yellowButton","font-size",14);
document.getElementById("yellowButton").style.fontSize = "14pt";