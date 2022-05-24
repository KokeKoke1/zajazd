<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="app/style.css">
    <link rel="stylesheet" href="app/fontello-93d73960/css/fontello.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
</head>
<?php

require_once("app/functions/mysql.php");

?>
<body lang="pl">
    <nav>
        <div class="upperNavbar">
            <a href="#"><i class="icon-facebook-squared"></i></a>
            <a href="#"><i class="icon-youtube-squared"></i></a>
            <a href="#"><i class="icon-twitter-squared"></i></a>
            <a href="#"><i class="icon-instagram"></i></a>
            <div class="right">
                Aktualnie: <div id="status"></div>
                <div class="modal-date" style="transform: translate(0,-500%);">
                    Godziny otwarcia:
                    Pon-Pt - 9:00 - 23:00
                    So-N - 12:00 - 23:00
                </div>
            </div>
        </div>
        <div class="navbar">
            <button><i class="icon-menu-1"></i></button>
            <div class="logo">
                Zajazd Słoneczny
            </div>
            <div class="menu">
                <li><a href="?offerts">Zlóż zamówienie</a></li>
                <li><a href="?galery">Galeria</a></li>
                <li><a href="?contact">Kontakt</a></li>
                <div class="shop">
                <li><a class="koszyk" href="?basket" id="basketOfferts"><i class="icon-basket-1"></i> 0</a></li>
            </div>
            </div>
        </div>
    </nav>
    <script src="app/main.js"></script>
<?php
    if (!empty($_GET)) {
        echo '<div class="mini-jumbotron"></div>
        <div class="navigation">
            <div class="container">
                <a href=".">Zajazd słoneczny </a>/ ';
        if (isset($_GET['basket'])) {
            echo '<a href="?offerts">Złóż zamówienie</a> / ';
        }
        echo '<span id="navName"></span>
            </div>
        </div>';
    }
    if (empty($_GET)) {
        require_once("app/sites/main.php");
        $name = "Strona głowna";
    }
    else if (isset($_GET['offerts'])) {
        require_once("app/sites/offerts.php");
        $name = "Złóż zamówienie";
    }
    else if (isset($_GET['galery'])) {
        require_once("app/sites/galery.php");
        $name = "Galeria";
    }
    else if (isset($_GET['contact'])) {
        require_once("app/sites/contact.php");
        $name = "Kontakt";
    }
    else if (isset($_GET['basket'])) {
        require_once("app/sites/basket.php");
        $name = 'Koszyk';
    }
    if (!empty($_GET)) {
        echo '<script>navName.innerHTML = "'.$name.'";</script>';
    }
    echo '<title>Zajazd słoneczny | '.$name.'</title>';
?>
    <footer>
        <div class="foother-top">
            <div class="left">
            <p>Jak dojechać do nas?</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1479.159011845181!2d20.469708434601905!3d50.25452484737773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1611746967012!5m2!1spl!2spl" height="280" frameborder="0" style="border:0; margin: 5px; width: 90%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>    
            <div class="left">
                <p>Przydatne linki:</p>
                <a href="#">Zamów online</a>
                <a href="#">Galeria</a>
                <a href="#">Polityka prywatności</a>
                <a href="#">Regulamin</a>
            </div>        
            <div class="left">
                <p>O nas:</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum pariatur sit voluptate ex quam dicta fugiat explicabo voluptates, reiciendis consequuntur, alias corrupti similique illo quasi facilis nam odit? Rerum cumque sit dolorem, dolores voluptatem laboriosam ratione porro totam minus voluptates, dolor quis veritatis obcaecati pariatur ipsam magni veniam expedita?
                <p>Nasze media:</p>
                <div class="bottom">
                    <a href="#"><i class="icon-facebook-squared"></i></a>
                    <a href="#"><i class="icon-youtube-squared"></i></a>
                    <a href="#"><i class="icon-twitter-squared"></i></a>
                    <a href="#"><i class="icon-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="foother-bottom">
            Strona zrobiona przez Kamil Adamski 2021 &copy <a href="#">Informacje o stronie.</a>
        </div>
    </footer>

    <!-- <div id="cookie" class="cookies">
        Ta strona kożysta z plików cookies! Wiecej w polityce prywatności ( <a href="#">Kliknij</a> ).
        <button id="cookieBtn">Akceptuje</button>
    </div> -->

    <div class="chat" style="transform: translate(0%,85%);">
        <p id="onoff">Szybka pomoc! Zwiń/Rozwiń</p>
        <div class="chatbox">
            <div class="message you">Witaj, w czym moge pomóc?</div>
        </div>
        <input type="text" id="inputChat"><button id="btnChat"><i class="icon-paper-plane"></i></button>
    </div>
    <script src="app/chat.js"></script>
</body>
</html>