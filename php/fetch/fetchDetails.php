<?php
require('../api.php');
require('../queries.php');

$data = json_decode(file_get_contents('php://input'));

$idUsuario = $data->idUsuario;
$idTarjeta = intval($data->idTarjeta);
$idDireccion =  intval($data->idDireccion);


$msg = fetchDetalles($idUsuario, $idDireccion, $idTarjeta);
echo json_encode($msg);