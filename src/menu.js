var sidebar = false
let header = document.querySelector(".header-price")

function menu(){
    // let sidebar_element = document.createElement("div")
    let sidebar_element = document.querySelector(".sidebar")
    if (sidebar) {
        sidebar_element.style.left = "100%"
        sidebar_element.style.borderRadius = "100%"
        sidebar = false

        header.style.transition = "0.2s"
        header.style.filter = "blur(0px)"
    }
    else{
        sidebar_element.style.left = "0%"
        sidebar_element.style.borderRadius = "0%"
        sidebar = true

        header.style.transition = "1.5s"
        header.style.filter = "blur(8px)"
    }
}