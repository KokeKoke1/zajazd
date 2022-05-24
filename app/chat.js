

const chat = document.querySelector(".chatbox");
const chatall = document.querySelector(".chat");
const body = document.querySelector("body");
const navbarBg = document.querySelector(".navbar");
const navbarupper = document.querySelector(".upperNavbar");
const fother = document.querySelector(".foother-top");

onoff.addEventListener("click", function() {
    if (chatall.style.transform != "translate(0px, 0px)") {
        chatall.style.transform = "translate(0,0)";
    } else {
        chatall.style.transform = "translate(0,85%)";
    }
});

inputChat.addEventListener("keydown", function (event) {
    if (event.which == 13) {
        wpisz();
    }
})

btnChat.addEventListener("click", function() {
    wpisz();
});

function wpisz() {
    if (inputChat.value != "" && inputChat.value != " ") {
        chat.innerHTML = `${chat.innerHTML} <div class="message me">${inputChat.value}</div>`;
    }
    chat.scrollTo(0,9999999);
    let tymczasowe = inputChat.value.toLowerCase();
    inputChat.value = "";
    window.setTimeout( function () {
        if (tymczasowe.includes("hej")) {
            chat.innerHTML = `${chat.innerHTML} <div class="message you">No czesc, w czym moge pomóc?</div>`;
        } else if (tymczasowe.includes("co tam")) {
            chat.innerHTML = `${chat.innerHTML} <div class="message you">Wsumie to dobrze.</div>`;
        } else if (tymczasowe.includes("menu")) {
            chat.innerHTML = `${chat.innerHTML} <div class="message you">Posiadamy wiele potraw - rozpiske dań masz pod złóż zamówienie!</div>`;
        } else if (tymczasowe.includes("tel")) {
            chat.innerHTML = `${chat.innerHTML} <div class="message you">Nasz numer telefonu to: 123 123 123</div>`;
        } else if (tymczasowe.includes("/close")) {
            chat.innerHTML = `${chat.innerHTML} <div class="message you">To narazie.</div>`;
            window.setTimeout(function() {chatall.style.display = "none";},1000);
        } else if (tymczasowe.includes("/dark")) {
            chat.innerHTML = `${chat.innerHTML} <div class="message you">Zmieniono.</div>`;
            window.setTimeout(function() {
                body.style.color = "white"; 
                body.style.background = "rgb(51, 51, 51)";
                navbarBg.style.background = "rgb(80, 80, 80)";
                navbarBg.style.color = "white";
                navbarupper.style.color = "black";
                fother.style.background = "rgb(80, 80, 80)";
            },1000);
        } else if (tymczasowe.includes("/light")) {
            chat.innerHTML = `${chat.innerHTML} <div class="message you">Zmieniono.</div>`;
            window.setTimeout(function() {
                body.style.color = "black"; 
                body.style.background = "white";
                navbarBg.style.background = "white";
                navbarBg.style.color = "black";
                fother.style.background = "rgb(51, 51, 51)";
            },1000);
        } else {
            chat.innerHTML = `${chat.innerHTML} <div class="message you">Przepraszam, nie rozumiem lub nie znam na to odpowiedzi.</div>`;
        }
        chat.scrollTo(0,9999999);
    }, 1500);
};