<?php
require('../api.php');
require('../queries.php');
require('../clases/Producto.php');

$data = json_decode(utf8_decode(file_get_contents('php://input')));
$product = new Product(
    $data->nombre, $data->descripcion, $data->precio,
    $data->inventario, $data->imagen, $data->categoria
);

$msg = (createProduct($product))?  'done': 'error';
echo json_encode($msg);
