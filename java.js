const loader = document.querySelector(".loader-container");
const displayBody = document.querySelector(".display-body");

window.onload = function () {
    loader.style.visibility = "visible";
    // displayBody.style.display = "none"
    setTimeout(() => {
        loader.style.visibility = "hidden"
        loader.style.height = "0"
        loader.style.width = "10"
        loader.style.trasition = "all .2s linear"
        loader.classList.add("transition")
        displayBody.style.display = "block"
    }, 6000);
}