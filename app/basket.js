


let trash = document.querySelectorAll(".trash");

back.addEventListener("click", function () {
    document.location = "?offerts";
});

function calcPrice() {
    fetch(`app/sites/calculate.php?oferts=${getCookie("oferts")}&cout=${getCookie("cout")}&size=${getCookie("size")}&ticket=${getCookie("ticket")}`)
        .then(result => result.json())
        .then(result => {
            cost = result.price;
            if (`${cost}.`.split(".")[1].length == 1) {
                price.textContent = `Zapłać (${cost}0 zł)`;
            } else {
                console.log('xd');
                price.textContent = `Zapłać (${cost} zł)`;
            }
        });
}


for (let i=0;i<trash.length;i++) {
    trash[i].addEventListener("click", function(){

        let cut = this.dataset.offert*1-1;
        let offert = getCookie("oferts").slice(1);
        let cout = getCookie("cout").slice(1);
        let size = getCookie("size").slice(1);
        offert = offert.split(",");
        size = size.split(",");
        cout = cout.split(",");
        offert.splice(cut,1);
        size.splice(cut,1);
        cout.splice(cut,1);
        if (offert.length > 0) {
            document.cookie = `oferts=,${offert}`;
        } else {
            document.cookie = "oferts=;expires=" 
            + new Date(0).toUTCString();
            document.location.reload();
        }

        if (cout.length > 0) {
            document.cookie = `cout=,${cout}`;
        } else {
            document.cookie = "cout=;expires=" 
            + new Date(0).toUTCString();
            document.location.reload();
        }

        if (size.length > 0) {
            document.cookie = `size=,${size}`;
        } else {
            document.cookie = "size=;expires=" 
            + new Date(0).toUTCString();
            document.location.reload();
        }
        trash[i].parentElement.parentElement.outerHTML = "";
        let trashdata = document.querySelectorAll(".trash");
        console.log(trashdata);
        for (let x=0;x<trashdata.length;x++) {
            trashdata[x].dataset.offert = x;
        }
        calcPrice();
    });
};

const modal = document.querySelector(".modal");
const modalOffert = document.querySelector(".modalOffert");

price.addEventListener("click", function() {revealModal();});
closeOffert.addEventListener("click", function() {hideModal();});

function hideModal() {
    modalOffert.style.transform = "translate(-50%, 200%)";
    window.setTimeout(function() {modal.style.opacity = "0";}, 100);
    window.setTimeout(function() {modal.style.display = "none";}, 400);
 }
 
 function revealModal() {
    modal.style.display = "block";
    window.setTimeout(function() {modal.style.opacity = "1";}, 10);
    window.setTimeout(function() {modalOffert.style.transform = "translate(-50%, -50%)";}, 100);
 }
 