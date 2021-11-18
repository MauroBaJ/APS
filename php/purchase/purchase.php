<?php

use function PHPSTORM_META\type;

require('../api.php');
require('../queries.php');

$data = json_decode(file_get_contents('php://input'));

$idUsuario = $data->idUsuario;
$idTarjeta = $data->idTarjeta;
$idDireccion = $data->idDireccion;
$Articulos = $data->Articulos;
$Total = $data->Total;

for($i = 0; $i < count($Articulos); $i++){
    $id = $Articulos[$i]->id;
    $cantidad = $Articulos[$i]->cantidad;
    eliminarArticulo($id, $cantidad);
}


$msg = realizarCompra($idUsuario, $idDireccion, $idTarjeta, $Total);
echo json_encode($msg);
