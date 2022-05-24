<?php

require_once('../functions/mysql.php');


$result = $mysql->query("SELECT * FROM `oferts`");
$price = 0;
$nr = 1;
while ($row = $result->fetch_assoc()) {
    $ofert[$nr] = $row;
    $nr++;
}
$rabat = $_GET['ticket'];
$oferts = mb_split(",", $_GET['oferts']);
$cout = mb_split(",", $_GET['cout']);
$size = mb_split(",", $_GET['size']);

for ($i=1;$i<sizeof($oferts);$i++) {
    if ($size[$i] == 1) {$price = $price + $ofert[$oferts[$i]]['SMALL']*$cout[$i];}
    else if ($size[$i] == 2) {$price = $price + $ofert[$oferts[$i]]['MEDIUM']*$cout[$i];}
    else if ($size[$i] == 3) {$price = $price + $ofert[$oferts[$i]]['BIG']*$cout[$i];} 
}
$price = $price - $price*($rabat/100);
$json = array("price" => $price);
$json = json_encode($json);
echo $json;

?>