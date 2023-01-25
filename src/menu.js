var sidebar = false
function menu(){
    let rem = document.querySelector(".sidebar")
    if (sidebar) {
        rem.style.left = "100%"
        sidebar = false
    }
    else{
        rem.style.left = "0%"
        sidebar = true
    }
}

