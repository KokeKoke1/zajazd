
let cout = [];
let data = [];

function updateSQL(id,what) {
    let HTMLo = new XMLHttpRequest();
    if (what != 0) {
        for(let i=0;i<data.length;i++) {
            if (data[i]['ID'] == id) {
                data[i]["PROGRES"] = what.toString();
            }
        }
    }
    HTMLo.open("GET", `api.php?update&id=${id}&progres=${what}`);
    HTMLo.send();
}

offertcreate.addEventListener("click", function createSQL() {
    let HTMLo = new XMLHttpRequest();
    HTMLo.open("GET", `create.php?create=${offertslist.value}&name=${gname.value}&subname=${gsubname.value}&phone=${gphone.value}&adres=${gadres.value}`);
    offertslist.value = "";
    gname.value = "";
    gsubname.value = "";
    gphone.value = "";
    gadres.value = "";
    HTMLo.send();
});

window.setInterval(async () => {
    let response = await fetch(`api.php?cout`);
    response = await response.json();
    for (let i=0;i<response.cout.length;i++) {
        if (cout > response.cout[i]) {
            window.location.reload;
        }
        if (!cout.includes(response.cout[i])) {  
            let res = await fetch(`api.php?id=${response.cout[i]}`);
            res = await res.json();
            cout.push(response.cout[i]);
            data.push(res);
            wyswietl(res, "");
        } else {
            let res = await fetch(`api.php?id=${response.cout[i]}`);
            res = await res.json();
            if (JSON.stringify(res) != JSON.stringify(data[i])) {
                data[i] = res;
                document.querySelector(`#ID${res['ID']}`).innerHTML = "";
                wyswietl(res, document.querySelector(`#ID${res['ID']}`));
            }
        }
    }
}, 1000);

async function wyswietl(res, newTask) {
    if (newTask == "") {
        newTask = document.createElement("li");
        newTask.id = `ID${res.ID}`;
        todolist.appendChild(newTask);
        player = new Audio("service-bell_daniel_simion.mp3");
        player.play();       
    }
    HTMLorder = "";
    for (let i=0;i<res.NR.length;i++) {
        if (res.SIZE[i]*1 == 0) {
            size = "Normal";
        }
        if (res.SIZE[i]*1 == 1) {
            size = "Mała";
        }
        else if (res.SIZE[i]*1 == 2) {
            size = "Średnia";
        }
        else if (res.SIZE[i]*1 == 3) {
            size = "Duża";
        }
        let response = await fetch(`api.php?name&id=${res.NR[i]}`);
        let data = await response.json();

        HTMLorder = `${HTMLorder}<li class="li">${res.COUT[i]}x - ${size} - ${data.NAME} ( ${data.LORE} )</li>`;
    }

    newTask.innerHTML = `<div class="order"><button class="btn-trash"><i class="icon-trash"></i></button><button class="btn-edit">Edit</button><button class="btn-done"><i class="icon-paper-plane"></i></button><i class="icon-down-dir"></i><b>${res.NAME} ${res.SUBNAME} - ${res.ADRES} (tel. ${res.PHONE})</b></div><div class="orderLi">${HTMLorder}</div>`;
    if (res.PROGRES == 2) {
        newTask.style.textDecoration = "line-through";
    }
    newTask.querySelector("b").addEventListener("click", function () {
        if (newTask.lastElementChild.style.display == "block")
            newTask.lastElementChild.style.display = "none";
        else 
            newTask.lastElementChild.style.display = "block";
    });
    newTask.querySelector(".btn-done").addEventListener("click", function() {
        if (this.parentElement.parentElement.style.textDecoration == "line-through") {
            this.parentElement.parentElement.style.textDecoration = "none";
            updateSQL(this.parentElement.parentElement.id.split("D")[1], 1);
        } else { 
            this.parentElement.parentElement.style.textDecoration = "line-through";
            updateSQL(this.parentElement.parentElement.id.split("D")[1], 2);
        }
    });
    newTask.querySelector(".btn-trash").addEventListener("click", function() {
        if (newTask.querySelector(".btn-done").parentElement.parentElement.style.textDecoration == "line-through")
            this.parentElement.parentElement.outerHTML = "";
            updateSQL(this.parentElement.parentElement.id.split("D")[1], 0);
    });
}
