<?php
require('../api.php');
require('../clases/Vacante.php');
require('../queries.php');

$data = json_decode(file_get_contents('php://input'));


$vacante = new Vacante(
    $data->nombre, $data->departamento, $data->descripcion);
$id = $data->id;

$msg = updateVacante($vacante, $id);
echo json_encode($msg);