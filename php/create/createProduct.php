<?php
require('../api.php');
require('../queries.php');
include('../clases/Producto.php');

$data = json_decode(file_get_contents('php://input'));


$product = new Product(
    $data->nombre, $data->descripcion, $data->precio,
    $data->inventario, $data->imagen, $data->categoria
);

// echo '<pre>';
// var_dump($product);
// echo '</pre>';


$msg = createProduct($product);
echo json_encode($msg);