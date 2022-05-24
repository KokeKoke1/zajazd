
/* --------------------------------- offerts ----------------------------- */


const modal = document.querySelector(".modal");
const modalOffert = document.querySelector(".modalOffert");
const todo = document.querySelectorAll(".todo");

let tymOfert = 1;
let price;

function disableOffert() {
    let time = new Date;
    if (time.getHours() >= 19 || time.getHours() <= 5) {
        for (let i=0;i<todo.length;i++) {
            todo[i].classList.add("disable");
        }
    }
}
disableOffert();
window.setInterval(function () {
    disableOffert();
}, 1000);


closeOffert.addEventListener("click", function() {
    hideModal();
});

costOffert.addEventListener("click", function() {
    if (document.querySelector('input[name="size"]:checked') != null) {
        document.cookie = `oferts=${getCookie("oferts")},${nextOffert.dataset.offert}`;
        document.cookie = `cout=${getCookie("cout")},${tymOfert}`;
        document.cookie = `size=${getCookie("size")},${document.querySelector('input[name="size"]:checked').value}`;
        window.setTimeout(function () {document.location = "?basket";}, 500);
    }
});


nextOffert.addEventListener("click", function() {
    if (document.querySelector('input[name="size"]:checked') != null) {
        document.cookie = `oferts=${getCookie("oferts")},${nextOffert.dataset.offert}`;
        document.cookie = `cout=${getCookie("cout")},${tymOfert}`;
        document.cookie = `size=${getCookie("size")},${document.querySelector('input[name="size"]:checked').value}`;
        howOffert();
    }
    hideModal();
});

for (let i=0;i<todo.length;i++) {
    todo[i].addEventListener("click", function(){
        // let time = new Date;
        // if (time.getHours() >= 19 || time.getHours() <= 5) {
        //     alert("Nie mozesz zamowic o tej godzinie.");
        //     return 0;
        // }
        component.innerHTML = `${this.dataset.name}<div>${this.dataset.component}</div>`;
        small.dataset.cost = this.dataset.smCost;
        medium.dataset.cost = this.dataset.medCost;
        big.dataset.cost = this.dataset.bigCost;
        nextOffert.dataset.offert = this.dataset.offert;
        revealModal();
    });
}
small.addEventListener("click", function() {
    price = small.dataset.cost;
    cost.textContent = `${price*more.value}`;
});
medium.addEventListener("click", function() {
    price = medium.dataset.cost;
    cost.textContent = `${price*more.value}`;
});
big.addEventListener("click", function() {
    price = big.dataset.cost;
    cost.textContent = `${price*more.value}`;
});
addOfert.addEventListener("click",
    function () {
        if (tymOfert < 9) {
            tymOfert++;
            more.value = tymOfert;
            if (price > 0) {
                cost.textContent = `${price*tymOfert}`;
            }
        }
    }
);
removeOfert.addEventListener("click",
    function () {
        if (tymOfert > 1) {
            tymOfert--;
            more.value = tymOfert;
            if (price > 0) {
                cost.textContent = `${price*tymOfert}`;
            }
        }
    }
);

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

