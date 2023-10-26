// When the user clicks the cat button 
// play a meow sound and show cat image and text
document.getElementById("catButton").addEventListener("click", function() {
  document.getElementById("messageLabel").innerHTML = "Cats Rule!";
  document.getElementById("petImage").src = "cat.jpg";
});

// When the user clicks the dog button 
// play a woof sound and shows dog image and text
document.getElementById("dogButton").addEventListener("click", function() {
  document.getElementById("messageLabel").innerHTML = "Dogs Rule!";
  document.getElementById("petImage").src = "dog.jpg";
});