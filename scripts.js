const clickMeBttn = document.getElementById("click-me-bttn");

clickMeBttn.addEventListener("click" , showFlower);

function showFlower(){
    const flowers = document.getElementById("container");

    clickMeBttn.style.display = "none";
    flowers.style.display = "block";
}