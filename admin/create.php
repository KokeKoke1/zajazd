<?php


require_once('../app/functions/mysql.php');

if (isset($_GET['create'])) {
    $result = $mysql->query("SELECT * FROM `oferts`");
    $nr = 0;
    while ($res = $result->fetch_assoc()) {
        $row[$nr] = $res;
        $nr++;
    }
    $price = 0;
    $nr = 1;
    $textOfferts = explode(",", $_GET['create']);
    for ($x=0;$x<sizeof($textOfferts);$x++) {
        $textOfferts[$x] = explode(" x", $textOfferts[$x]);
        for ($y=0;$y<sizeof($row);$y++) {
            if (empty($row[$y]['LORE'])) {
                $lore == "";
            } else {
                $lore = $row[$y]['LORE'];
            }
            if (strpos(strtolower($textOfferts[$x][0]), strtolower($row[$y]['NAME'])) !== false 
            || strpos(strtolower($textOfferts[$x][0]), strtolower($lore)) !== false) {
                $ofert[$nr] = $row[$y];
                $nr++;
            }
        }
        $textOfferts[$x] = explode(" ", $textOfferts[$x][1]);
        if (empty($cout)) {
            $cout = $textOfferts[$x][0];
        } else {
            $cout = $cout.",".$textOfferts[$x][0];
        }
        if (!empty($textOfferts[$x][1])) {
            if ($textOfferts[$x][1] == "mała" || $textOfferts[$x][1] == "mala") {
                if ($size == "") {
                    $size = "1";
                } else {
                    $size = $size.",1";
                }           
            }
            if ($textOfferts[$x][1] == "średnia" || $textOfferts[$x][1] == "srednia") {
                if ($size == "") {
                    $size = "2";
                } else {
                    $size = $size.",2";
                }           
            }
            if ($textOfferts[$x][1] == "duża" || $textOfferts[$x][1] == "duza") {
                if ($size == "") {
                    $size = "3";
                } else {
                    $size = $size.",3";
                }          
            }
        } else {
            if ($size == "") {
                $size = "0";
            } else {
                $size = $size.",0";
            } 
        }
    }
    echo $size;
    for ($i=1;$i<$nr;$i++) {
        if ($i == 1) {
            $offerts = $ofert[$i]['ID'];
        } else {
            $offerts = $offerts.",".$ofert[$i]['ID'];
        }
    }
    $name = $_GET['name'];
    $subname = $_GET['subname'];
    $phone = $_GET['phone'];
    $adres = $_GET['adres'];
    $price = 0;
    $mysql->query("INSERT INTO `orders` (`ID`, `NR`, `COUT`, `SIZE`, `NAME`, `SUBNAME`, `PHONE`, `ADRES`, `PRICE`, `PROGRES`) VALUES ('', '$offerts', '$cout', '$size', '$name', '$subname', '$phone', '$adres', '$price', '1');");
}
