
<?php

require_once('../app/functions/mysql.php');

?>

<link rel="stylesheet" href="../app/fontello-93d73960/css/fontello.css">

<link rel="stylesheet" href="style.css">
    <div class="container">
        <div class="orderlist">
            <div class="title">
                ZAMÓWIENIA
            </div>
            <div id="todolist">
            </div>
        </div>
        <div class="ordercreate">
            <div class="title">
                SZYBKIE TWORZENIE ZAMÓWIENIA
            </div>
            ([danie] x[ilosc] [wielkosc]<br>przykład: margaritta x2 średnia )
            <textarea id="offertslist"></textarea>
            <div class="inputgroup">
                <div class="inputitem">Imię: <input id="gname"></div>
                <div class="inputitem">Nazwisko: <input id="gsubname"></div>
                <div class="inputitem">Adres: <input id="gadres"></div>
                <div class="inputitem">Numer telefonu: <input id="gphone"></div>
            </div>
            <button id="offertcreate">Stworz zamowienie</button>
        </div>
    </div>
<script src="main.js"></script>
