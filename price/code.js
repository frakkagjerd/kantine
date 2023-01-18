let active = false
let checked = false
let icon = document.getElementById("info-icon")

function infoClicked() {

    if (active == true) {
        icon.src="../src/square-regular.svg";
        active = false
        checked = false
    
    } else if (active == false) {
        icon.src="../src/square-check.svg";
        active = true
        checked = true
    }
}


function update() {

    if (active == true) {
        icon.src="../src/square-regular.svg";
    } else if (active == false) {
        icon.src="../src/square-check.svg";
    }

    requestAnimationFrame(update)
}

requestAnimationFrame(update)