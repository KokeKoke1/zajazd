
/* -------------------------- modal galery -------------------- */

const imgs = document.querySelectorAll(".col > img");
const modal = document.querySelector(".modal");
const modalGalery = document.querySelector(".modalGalery");
const modalClose = document.querySelector(".close");

for (let i=0;i<imgs.length;i++) {
    imgs[i].addEventListener("click", function() {
        modalGalery.src = imgs[i].src;
        revealModal();
    });
}
modalClose.addEventListener("click", function(){
    hideModal();
});

function hideModal() {
    modalGalery.style.transform = "translate(-50%, 200%)";
    window.setTimeout(function() {modal.style.opacity = "0";}, 100);
    window.setTimeout(function() {modal.style.display = "none";}, 400);
 }
 
 function revealModal() {
    modal.style.display = "block";
    window.setTimeout(function() {modal.style.opacity = "1";}, 10);
    window.setTimeout(function() {modalGalery.style.transform = "translate(-50%, -50%)";}, 100);
 }
 