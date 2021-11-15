<?php
require('../api.php');
require('../queries.php');
require('../clases/Vacante.php');

$data = json_decode(utf8_decode(file_get_contents('php://input')));


$vacante = new Vacante(
    $data->nombre, $data->departamento, $data->descripcion
);

$msg = createOpening($vacante);

echo json_encode($msg);