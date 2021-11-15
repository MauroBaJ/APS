<?php

$container = [];

$product = json_decode('php://input');
$producto = [$product->idProducto, $product->cantidad];

array_push($container, $producto);