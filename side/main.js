// var oga = document.querySelector(".icon");
var call = document.querySelector(".call");
var bar = document.querySelector(".fa-bars");
var icon = document.querySelector(".icon");
var left = document.querySelector(".left")

function showInfo() {
    icon.classList.toggle("showw");
    icon.classList.toggle("hide");

}
// setTimeout(showInfo(), time);

function expand() {
    left.classList.toggle("small");
    left.classList.toggle("big");
}

// bar.addEventListener("click",expand);
bar.onclick = expand;



// scroll Top

var scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("active", window.scrollY >= 400);
});