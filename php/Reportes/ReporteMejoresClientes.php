<?php
require('../api.php');
require('../queries.php');

$data = json_decode(file_get_contents('php://input'));

$mes = $data->month;
$msg = ventaPorCliente($mes);
echo json_encode($msg);