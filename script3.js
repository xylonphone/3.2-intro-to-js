console.log("Starting my program!");

document.getElementById("bigButton").addEventListener("click", function () {
  document.getElementById("bigButton").style.backgroundColor = "blue";
  document.getElementById("bigButton").style.height = "200px";
  document.getElementById("bigButton").innerHTML = "Now it's a bigger button!";
});

console.log("Ending my program!");