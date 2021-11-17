<?php
require('../api.php');
require('../queries.php');

$id = json_decode(file_get_contents('php://input'));

$tarjetas = fetchCard($id);
echo json_encode($tarjetas);