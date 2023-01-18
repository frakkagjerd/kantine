let active = false;
let information;

let icon = document.getElementById("info-icon")

function infoClicked() {

    if (active == true) {
        icon.src="../src/square-check.svg";
        active = false
        information = false
    
    } else if (active == false) {
        icon.src="../src/square-regular.svg";
        active = true
        information = true
    }
}


function update() {

    if (active == true) {
        icon.src="../src/square-check.svg";
    } else if (active == false) {
        icon.src="../src/square-regular.svg";

    }
    requestAnimationFrame(update)
}

requestAnimationFrame(update)