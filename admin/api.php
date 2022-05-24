
<?php


require_once('../app/functions/mysql.php');

if (isset($_GET['update'])) {
    $id = $_GET['id'];
    $what = $_GET['progres'];
    $result = $mysql->query("UPDATE `orders` SET `PROGRES` = '$what' WHERE `ID` = '$id';");
} else if (isset($_GET['name'])) {
    $id = $_GET['id'];
    $result = $mysql->query("SELECT * FROM `oferts` WHERE `ID` = '$id';");
    $row = $result->fetch_assoc();
    $json = json_encode($row);
    echo $json;
} else if (isset($_GET['cout'])) {
    $result = $mysql->query("SELECT * FROM `orders` WHERE `PROGRES` = '1' OR `PROGRES` = '2';");
    $cout['cout'] = array();
    while ( $row = $result->fetch_assoc() ) {
        array_push($cout['cout'], $row['ID']);
    }
    $json = json_encode($cout);
    echo $json;
} else {
    $id = $_GET['id'];
    $result = $mysql->query("SELECT * FROM `orders` WHERE `ID` = '$id';");
    $row = $result->fetch_assoc();
    $row['NR'] = explode(",", $row['NR']);
    $row['COUT'] = explode(",", $row['COUT']); 
    $row['SIZE'] = explode(",", $row['SIZE']); 
    $json = json_encode($row);
    echo $json;
} 

?>