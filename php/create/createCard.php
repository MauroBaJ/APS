<?php
require('../api.php');
require('../queries.php');
require('../clases/Tarjeta.php');

$data = json_decode(file_get_contents('php://input'));
// echo '<pre>';
// var_dump($data);
// echo '</pre>';

$id = (int) $data->userID;
$tar = $data->cardInfo;

$tarjeta = new Card(
    $tar->numero, $tar->nombre, $tar->month,
    $tar->year, $tar->cvv
);

createCard($tarjeta);
$idTarjeta = fetchCardID($tarjeta->Numero);

$idTarjeta = (int) $idTarjeta[0]['idTarjeta'];
$msg = pivoteUsuarioTarjeta($id, $idTarjeta);
echo json_encode($msg);