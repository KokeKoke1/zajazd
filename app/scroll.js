window.addEventListener("scroll", function () {
  if (this.scrollY > 447) {
     img1.classList.remove("right");
  }
  if (this.scrollY > 806) {
    img2.classList.remove("left");
 }
 if (this.scrollY > 1163) {
    img3.classList.remove("right");
 }
 if (this.scrollY > 70) {
    ball1.classList.remove("down");
    window.setTimeout(function () {ball2.classList.remove("down")}, 250);
    window.setTimeout(function () {ball3.classList.remove("down")}, 500);
 }
 })