<?php
require('../queries.php');
require('../api.php');
require('../clases/Producto.php');

$data = json_decode(file_get_contents('php://input'));


$id = $data->id;
$product = new Product(
    $data->nombre, $data->descripcion, $data->precio,
    $data->inventario, $data->imagen, $data->categoria
);

$msg = updateProduct($product, $id);

echo json_encode($msg);