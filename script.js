var randomBtn = document.getElementById("randomBtn");
var staticBtn = document.getElementById("staticBtn");

randomBtn.addEventListener("mouseover", function() {
    var positionX = Math.random() * window.innerWidth;
    var positionY = Math.random() * window.innerHeight;
    this.style.left = positionX + "px";
    this.style.top = positionY + "px";
});

staticBtn.addEventListener("click", function() {
    alert("Yey!");
});

randomBtn.addEventListener("click", function() {
    alert(":p");
});