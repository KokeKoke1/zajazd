
// ------------------------------- cookies -----------------------------
function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for(var i = 0; i <ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') {
       c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
 }

document.cookie = "path=/";
if (getCookie("ticket") == "") {
   document.cookie = "ticket=0";
} 
function deleteCookies() { 
   var allCookies = document.cookie.split(';'); 
   for (var i = 0; i < allCookies.length; i++) 
       document.cookie = allCookies[i] + "=;expires=" 
       + new Date(0).toUTCString(); 

}

// ------------------------- basket --------------------------

function howOffert() {
   let number = getCookie("oferts").split(",");
   basketOfferts.innerHTML = `<i class="icon-basket-1"></i> ${number.length-1}`;
}
howOffert();

// ------------------------ navbar ---------------------------

const right = document.querySelector(".upperNavbar > .right");
const modalDate = document.querySelector(".modal-date");
const navbar = document.querySelector(".navbar");
const btnNavbar = document.querySelector(".navbar > button");
const menuNavbar = document.querySelector(".navbar > .menu");
const upperNavbar = document.querySelector(".upperNavbar");
const logo = document.querySelector(".logo > img");

logo.addEventListener("click", function() {
   document.location = "..";
});

btnNavbar.addEventListener("click", function () {
   if (menuNavbar.style.display == "block") {
      menuNavbar.style.display = "none";
   } else {
      menuNavbar.style.display = "block";
   }
});

right.addEventListener("mouseover", function () {
   modalDate.style.transform = "translate(0,0)";
});
right.addEventListener("mouseout", function () {
   modalDate.style.transform = "translate(0,-500%)";
});

window.addEventListener("scroll", function () {
   if (innerWidth > 678) {
      if (this.scrollY > 30) {
         if (upperNavbar.style.display != "none") {  
            navbar.style.position = "fixed";
            upperNavbar.style.display = "none";
            logo.style.transform = "scale(1) translate(0px,0px)";
         }
      }
      else if (this.scrollY == 0) {
         if (upperNavbar.style.display != "block") {
            navbar.style.position = "absolute";
            upperNavbar.style.display = "block";
            logo.style.transform = "scale(2.5) translate(20px,15px)";
         }
      }
   }
})

// -------------------------------- status --------------------



const statusDiv = document.querySelector("#status");
status();
window.setInterval(status(), 5000);
function status() {
      let time = new Date;
      if (time.getHours() >= 19 || time.getHours() <= 5) {
         statusDiv.style.color = "red";
         statusDiv.textContent = "Zamkniete";
      } else {
         statusDiv.style.color = "green";
         statusDiv.textContent = "Otwarte";
      }
}


