
let cout = 0;

function updateSQL(id) {
    let HTMLo = new XMLHttpRequest();
    HTMLo.open("GET", `api.php?update&id=${id}`);
}

window.setInterval(function () {
    fetch("api.php?cout")
    .then(result => result.json())
    .then(result => {
        let list = result.cout;
        if (list.length != cout) {
            for (let i=cout;i<list.length;i++) {
                fetch("api.php?id="+list[i])
                .then(res => res.json())
                .then(res => {
                    window.setTimeout(function () { wyswietl(res); },i*100);
                });
            }
            cout = list.length;
        }
    });
}, 1000);

async function wyswietl(res, HTMLorder) {
    let newTask = document.createElement("li");
    HTMLorder = "";
    
    for (let i=0;i<res.NR.length;i++) {
        if (res.SIZE[i] == 1) {
            size = "Mała";
        }
        else if (res.SIZE[i] == 2) {
            size = "Średnia";
        }
        else if (res.SIZE[i] == 3) {
            size = "Duża";
        }
        let response = await fetch(`api.php?name&id=${res.NR[i]}`);
        let data = await response.json();

        HTMLorder = `${HTMLorder}<li class="li">${res.COUT[i]}x - ${size} - ${data.NAME} ( ${data.LORE} )</li>`;
       
    }

    newTask.innerHTML = `<div class="order"><button class="btn-trash"><i class="icon-trash"></i></button><button class="btn-edit">Edit</button><button class="btn-done"><i class="icon-paper-plane"></i></button><i class="icon-down-dir"></i><b>${res.NAME} ${res.SUBNAME} - ${res.ADRES} (tel. ${res.PHONE})</b></div><div class="orderLi">${HTMLorder}</div>`;
    todolist.appendChild(newTask);
    newTask.querySelector("b").addEventListener("click", function () {
        if (newTask.lastElementChild.style.display == "block")
            newTask.lastElementChild.style.display = "none";
        else 
            newTask.lastElementChild.style.display = "block";
    });
    newTask.querySelector(".btn-done").addEventListener("click", function() {
        if (this.parentElement.parentElement.style.textDecoration == "line-through") {
            this.parentElement.parentElement.style.textDecoration = "none";
        } else { 
            this.parentElement.parentElement.style.textDecoration = "line-through";
        }
    });
    newTask.querySelector(".btn-trash").addEventListener("click", function() {
        if (newTask.querySelector(".btn-done").parentElement.parentElement.style.textDecoration == "line-through")
            this.parentElement.parentElement.outerHTML = "";
    });
}
