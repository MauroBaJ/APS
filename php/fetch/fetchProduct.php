<?php
require('../api.php');
require('../queries.php');

$data = json_decode(file_get_contents('php://input'));
$id = $data->id;

$fetch = fetchArticulo($id);
$msg = json_encode($fetch);
echo $msg;