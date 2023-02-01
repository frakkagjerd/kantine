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
