let Images = document.getElementsByClassName("products");
let dropDown = document.getElementById("product_size");

dropDown.addEventListener("input", function (change) {
    let Value = change.target.value;
    for (i = 0; i < Images.length; i++)
    {
        Images[i].style.width = Value + "px";
        localStorage.setItem("product_size", Value);
    }
})

for (i = 0; i < Images.length; i++)
{
    let LS = localStorage.getItem("product_size");
    Images[i].style.width = LS + "px";
    dropDown.value = LS;
}
