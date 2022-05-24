const btn = document.querySelector(".cupon > button");
const error = document.querySelector(".cupon > .error");
let procet, use;

btn.addEventListener("click", function() {
    ticketF(ticket);
});
ticket.addEventListener("keydown", function (event) {
    error.textContent = "";
    if (event.which == 13) {   
        ticketF(ticket);
    }
});

if (getCookie("ticket") != "0") {
    cupon.innerHTML = `
    <h2>Kupon rabatowy</h2>
    Kupon został wczytany
        <h2>-${getCookie("ticket")}%</h2>
    `;
    calcPrice();
} else {
    calcPrice();
}

function ticketF(ticket) {
    if (ticket.value != "") {
        fetch(`app/sites/ticket.php?ID=${ticket.value.toUpperCase()}`)
        .then(result => result.json())
        .then(result => {
            procet = result.PROC;
            use = result.USE;
            if (procet != undefined) {
                if (use >= 1) {
                    use = use - 1;
                    let htmlxml = new XMLHttpRequest();
                    htmlxml.open("GET", `app/sites/ticket.php?ID=${ticket.value.toUpperCase()}&noapi`);
                    htmlxml.send();
                    cupon.innerHTML = `
                    <h2>Kupon rabatowy</h2>
                    Kupon został wczytany
                        <h2>-${procet}%</h2>
                    `;
                    document.cookie = `ticket=${procet}`;
                    calcPrice();
                } else { error.textContent = 'Kod został już wykorzystany!'; }
            } else { error.textContent = 'Kod jest niepoprawny!'; }
        })
        .catch(error => console.log(error));
    } else {
        error.textContent = 'Wpisz kod rabatowy!';
    }
}