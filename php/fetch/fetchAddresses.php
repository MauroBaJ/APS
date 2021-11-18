<?php
require('../api.php');
require('../queries.php');

$data = json_decode(file_get_contents('php://input'));


$msg = fetchAddresses($data);

echo json_encode($msg);