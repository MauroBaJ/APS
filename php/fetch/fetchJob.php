<?php
require('../api.php');
require('../queries.php');

$data = json_decode(file_get_contents('php://input'));
$id = $data->id;

$msg = fetchVacante($id);
echo json_encode($msg);