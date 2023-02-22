var sidebar = false
function menu(){
    // let sidebar_element = document.createElement("div")
    let sidebar_element = document.querySelector(".sidebar")
    if (sidebar) {
        sidebar_element.style.left = "100%"
        sidebar_element.style.borderRadius = "100%"
        sidebar = false
    }
    else{
        sidebar_element.style.left = "0%"
        sidebar_element.style.borderRadius = "0%"
        sidebar = true
    }
}

var infoActive = false;
var infoIcon = document.querySelector('.info')

function info() {
    if (infoActive == false){
        infoActive = true;
        infoIcon.src="./../src/info-icon-white.svg";
    } else if (infoActive == true) {
        infoActive = false;
        infoIcon.src="./../src/info-icon-black.svg";
    }
}