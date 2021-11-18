<?php
require('../api.php');
require('../queries.php');
require('../clases/Direccion.php');

$data = json_decode(file_get_contents('php://input'));

$id = $data->uID;
$direccion = new Direccion(
    $data->direccion, $data->colonia, $data->ciudad,
    $data->estado, $data->cp
);

createAddress($direccion);
$idDireccion = fetchAddressID($direccion->Direccion);
$idDireccion = (int) $idDireccion[0]['idDireccion'];

$msg = pivoteUsuarioDireccion($id, $idDireccion);
echo json_encode($msg);
