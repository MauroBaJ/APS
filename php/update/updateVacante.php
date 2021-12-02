<?php
require('../api.php');
require('../clases/Vacante.php');
require('../queries.php');

$data = json_decode(file_get_contents('php://input'));

$vacante = new Vacante(
    $data->Nombre, $data->Categoria, $data->Descripcion);
$id = $data->idVacantes;

$msg = updateVacante($vacante, $id);
echo json_encode($msg);