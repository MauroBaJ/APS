<?php
require('../api.php');
require('../queries.php');

$data = json_decode(file_get_contents("php://input"));

$mes = $data->month;

$msg  = ventaPorEstado($mes);

if($msg) echo json_encode($msg);
