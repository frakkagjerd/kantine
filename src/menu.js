var sidebar = false
function menu(){
    // let rem = document.createElement("div") 
    let rem = document.querySelector(".sidebar")
    if (sidebar) {
        rem.style.left = "100%"
        rem.style.borderRadius = "100%"
        sidebar = false
    }
    else{
        rem.style.left = "0%"
        rem.style.borderRadius = "0%"
        sidebar = true
    }
}

