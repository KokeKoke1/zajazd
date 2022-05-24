<div class="container" style="text-align: center;">
    <h1>Koszyk</h1>
    <div class="content">
    <div class="col">
<?php

$result = $mysql->query("SELECT * FROM `oferts`");
$price = 0;
$nr = 1;
while ($row = $result->fetch_assoc()) {
    $ofert[$nr] = $row;
    $nr++;
}
if (isset($_COOKIE['oferts'])) {
    $oferts = mb_split(",", $_COOKIE['oferts']);
    $cout = mb_split(",", $_COOKIE['cout']);
    $size = mb_split(",", $_COOKIE['size']);
    echo '<div id="offerts" class="offerts" style="text-align: left;">';
    for ($i=1;$i<sizeof($oferts);$i++) {
        if ($size[$i] == 1) {$price = $price + $ofert[$oferts[$i]]['SMALL']*$cout[$i];}
        else if ($size[$i] == 2) {$price = $price + $ofert[$oferts[$i]]['MEDIUM']*$cout[$i];}
        else if ($size[$i] == 3) {$price = $price + $ofert[$oferts[$i]]['BIG']*$cout[$i];} 
        echo '<li class="offert">';
        echo '<div class="info">';
        echo $ofert[$oferts[$i]]['NAME'];
        if ($ofert[$oferts[$i]]['LORE'] != "") {
            echo '    <div>'.$ofert[$oferts[$i]]['LORE'].'</div>';
        }
        echo '</div>';
        echo '<div class="cost">';
        echo '    <div class="small">'.$cout[$i].'x</div>';
            if ($size[$i] == 1) {
                echo '<div class="small">Mała</div>';
                echo '    <div class="small">'.$ofert[$oferts[$i]]['SMALL']*$cout[$i].' zl</div>';
            }
            if ($size[$i] == 2) {
                echo '<div class="small">Średnia</div>';
                echo '    <div class="small">'.$ofert[$oferts[$i]]['MEDIUM']*$cout[$i].' zl</div>';
            }
            if ($size[$i] == 3) {
                echo '<div class="small">Duża</div>';
                echo '    <div class="small">'.$ofert[$oferts[$i]]['BIG']*$cout[$i].' zl</div>';
            }              
        echo '    <button class="trash" data-offert="'.$i.'"><i class="icon-trash"></i></button>';
        echo '</div>';
        echo '</li>';
    }
    echo '
    </div>
        <div style="items-align: center;">
            <div style="margin: 60px 10px 10px 10px;"><button style="font-size: 1.1rem;" class="koszyk" id="back">Powrót do zakupów.</button></div>        </div>
        <hr>
    </div>
    <div class="col col-3">
        <h2>Cena za wszystko</h2>
        <div style="margin: 20px;"><button style="font-size: 1.35rem;" class="koszyk" id="price">Zapłać -.</button></div>
        <hr>
        <div class="cupon" id="cupon" style="margin: 30px;">
        <h2>Kupon rabatowy</h2>
        <div class="error"></div>
            <input type="text" id="ticket" name="none">
            <button>Aktywuj kupon.</button>
        </div>
    </div>    
    ';
} else {
    echo '  
        <h1>Twój koszyk jest pusty :(</h1>
        Wróć do zakupów aby dodać coś do zamówienia. 
        Zamawiając jedzenie możesz zapłacić na miejscu lub przelewem przez internet.
        Jest to bardzo wygodny sposób ponieważ nie musisz dzwonić lub przyjeżdżać do restauracji
        aby zamówić swój posiłek. 
    </div>
    <div class="col">
        <img style="box-shadow: none;" src="https://assets.allegrostatic.com/test-opbox/allegro.pl/koszyk/Koszyk/bee2e1a795f4ecf28ceff88257866a20.svg">
    </div>
        ';
}
?>
</div>
</div>
<div class="modal" style="display: none; opacity: 0;">
    <div class="modalOffert" style="transform: translate(-50%,200%);">
        <div class="title">
            Opcje zamówienia:
            <button id="closeOffert">Zamknij X</button>
        </div>
        <div class="container">
            <h2>Wybierz płatność</h2>
            <div class="labelBasket">
                <input type="radio" name="methodPrice"> Płatność przy dostawie.<br> 
                <input type="radio" name="methodPrice"> Płatność przelewem.
            </div>
            <h2>Dane Kontaktowe</h2>
            <div class="labelBasket">Imię <input type="text"></div>
            <div class="labelBasket">Nazwisko <input type="text"></div>
            <div class="labelBasket">Numer telefonu <input type="number"></div>
            <div class="labelBasket">Adres dostawy <input type="text"></div>
            <div style="width: 100%; text-align:center; margin-top: 40px;"><input style="font-size: 1.1rem;" type="submit" class="koszyk" value="Zamów."></div>
        </div>
    </div>
</div>
    </div>
<script src="app/basket.js"></script>
<script src="app/ticket.js"></script>