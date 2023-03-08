console.log("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by Nikita, Simon, Aleksander and Odin!");

function setLocation(_location){
    window.location.href=`${_location}`
}

const update = ()=>{
    if(localStorage.getItem("location") == window.location.href){
        requestAnimationFrame(update)
    }
    else{
        setLocation(window.location.href)
    }
}
requestAnimationFrame(update)
