<?php
require('../queries.php');
require('../api.php');
require('../clases/Producto.php');

$data = json_decode(file_get_contents('php://input'));


$id = $data->idProducto;
$product = new Product(
    $data->Nombre, $data->Descripcion, $data->Precio,
    $data->Inventario, $data->Imagen, $data->Categoria
);

$msg  = updateProduct($product, $id);

echo json_encode($msg);