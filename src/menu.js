console.log("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by Nikita, Simon, Aleksander and Odin!");

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