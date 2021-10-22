<?php
require('../api.php');
require('../queries.php');
// include './clases/Aplicante.php';
// include './clases/Compra.php';
// include './clases/Direccion.php';
// include './clases/Producto.php';
// include './clases/Tarjeta.php';
// include './clases/Usuario.php';

$res = fetchArticulos();

$msg = json_encode($res);

echo $msg;