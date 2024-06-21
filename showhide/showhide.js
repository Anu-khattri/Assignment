function hide(){
    var box = document.getElementById("box");
    var  button = document.getElementById("hide");


if(box.style.display === "none"){
    box.style.display="block";
    button.innerText="HIDE";
}
else{
    box.style.display="none";
    button.innerText="SHOW";
}

console.log(button);
}