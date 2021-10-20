<?php
require('../api.php');
require('../database.php');


function fetchUser(){


    $bd = conectarBD();
    $query = $bd->prepare( "SELECT * FROM Usuario");
    $query->execute();

    $result = $query->fetchALL(PDO::FETCH_ASSOC);
    cerrarBD($bd);
    return $result;
}

$result = fetchUser();
echo json_encode($result);