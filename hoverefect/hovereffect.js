var box = document.getElementById("box");

box.addEventListener("mouseenter", function () {
    box.style.backgroundColor = "black";
});

box.addEventListener("mouseleave", function () {
    box.style.backgroundColor = "green";
});