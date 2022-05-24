<?php

require_once('../functions/mysql.php');

$ticket = $_GET["ID"];
$result = $mysql->query("SELECT * FROM `ticket` WHERE `ID` = '$ticket';");
$row = $result->fetch_assoc();

if (!isset($_GET['noapi'])) {
    if (isset($row['ID'])) {
        $json = json_encode($row);
        echo $json;
    } else {
        $row = array("error");
        $json = json_encode($row);
        echo $json;
    }
} else {
    if (isset($row['ID'])) {
        $use = $row['USE'] - 1;
        $mysql->query("UPDATE `ticket` SET `USE` = '$use' WHERE `ID` = '$ticket';");
    }
}

?>