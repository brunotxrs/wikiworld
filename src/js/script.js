const btn = document.querySelectorAll('[id^="btn-"]');
const asideFront = document.getElementById("front");
const asideBack = document.getElementById("back");
const asideRef = document.getElementById("ref");



btn[0].addEventListener("click", () => {
    btn[1].style.display = "flex";
    asideFront.style.display = "flex";
    btn[0].style.display = "none";

})

btn[1].addEventListener("click", () => {
    btn[0].style.display = "flex";
    btn[1].style.display = "none";
    asideFront.style.display = "none";
})


btn[2].addEventListener("click", () => {
    btn[3].style.display = "flex";
    asideBack.style.display = "flex";
    btn[2].style.display = "none";

})

btn[3].addEventListener("click", () => {
    btn[2].style.display = "flex";
    btn[3].style.display = "none";
    asideBack.style.display = "none";
})

btn[4].addEventListener("click", () => {
    btn[5].style.display = "flex";
    asideRef.style.display = "flex";
    btn[4].style.display = "none";

})

btn[5].addEventListener("click", () => {
    btn[4].style.display = "flex";
    btn[5].style.display = "none";
    asideRef.style.display = "none";
})