<?php
require('../api.php');
require('../queries.php');
require('../clases/Producto.php');

$data = json_decode(utf8_decode(file_get_contents('php://input')));



$product = new Product(
    (string) $data->nombre, (string) $data->descripcion, (float) $data->precio, 
    (int) $data->inventario,(string) $data->imagen, (string)$data->categoria
);

// exit;

// echo $product->getNombre();

$msg = createProduct($product);


echo json_encode($msg);
