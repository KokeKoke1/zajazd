

<div class="container">
        <div class="offerts-safe">
            <li><a href="?offerts">Pizzy</a></li>
            <li><a href="?offerts&id=2">Dania obiadowe</a></li>
            <li><a href="?offerts&id=3">Zupy</a></li>
            <li><a href="?offerts&id=4">Fast Foods</a></li>
            <li><a href="?offerts&id=5">Sałatki</a></li>
            <li><a href="?offerts&id=6">Desery</a></li>
        </div>
<?php 
    if (!isset($_GET['id'])) {
?>
        <div id="offerts" class="offerts">
            <li class="offert">
                <div class="info">
                    Danie
                </div>
                <div class="cost">
                    <div class="small"> Mała <div>(20 cm)</div></div>
                    <div class="medium"> Średnia <div>(30 cm)</div></div>
                    <div class="big"> Duża <div>(40 cm)</div></div>
                </div>
            </li>
<?php
} else {
?>
        <div id="offerts" class="offerts">
            <li class="offert">
                <div class="info">
                    Danie
                </div>
            </li>
<?php
}
    if (!isset($_GET['id'])) {
        $nr = 1;
    } else {
        $nr = $_GET['id'];
    }
    $result = $mysql->query("SELECT * FROM `oferts` WHERE CATEGORY = '$nr';");
    while ($row = $result->fetch_assoc()) {
        echo '<li class="offert">';
        echo '<div class="info">';
        echo $row['NAME'];
        if ($row['LORE'] != "") {
            echo '    <div>'.$row['LORE'].'</div>';
        }
        echo '</div>';
        echo '<div class="cost">';
        if ($nr == 1) {
            echo '    <div class="small">'.$row['SMALL'].' zl</div>';
            echo '    <div class="medium">'.$row['MEDIUM'].' zl</div>';
            echo '    <div class="big">'.$row['BIG'].' zl</div>';
        } else {
            echo '    <div class="medium"> </div>';
            echo '    <div class="big"> </div>';
            echo '    <div class="small">'.$row['SMALL'].' zl</div>';
        }
        echo '    <button class="todo" data-offert="'.$row['ID'].'" data-name="'.$row['NAME'].'" data-component="'.$row['LORE'].'" data-sm-cost="'.$row['SMALL'].'" data-med-cost="'.$row['MEDIUM'].'" data-big-cost="'.$row['BIG'].'">Do koszyka <i class="icon-basket-1"></i></button>';
        echo '</div>';
        echo '</li>';
    }

?>
        </div>
        
    </div>
    <div class="modal" style="display: none; opacity: 0;">
        <div class="modalOffert" style="transform: translate(-50%,200%);">
            <div class="title">
                Wybierz opcje:
                <button id="closeOffert">Zamknij X</button>
            </div>
            <div class="container">
                <p>Danie: <div id="component"></div></p>
                <p>Wybierz wielkość:</p>
                <input id="small" type="radio" name="size" value="1"> Mała
                <input id="medium" type="radio" name="size" value="2"> Średnia
                <input id="big" type="radio" name="size" value="3"> Duża
                <p>Wybierz ilość:</p> 
                <button id="removeOfert">-</button><input id="more" type="text" value="1"><button id="addOfert">+</button>
            </div>
            <button id="nextOffert" style="float: left;">Dodaj do koszyka i kontynuuj zakupy.</button>
            <button id="costOffert" style="float: right;">Przejdz do kasy (<span id="cost">0</span>zł).</button>
        </div>
    </div>
    <script src="app/offerts.js"></script>