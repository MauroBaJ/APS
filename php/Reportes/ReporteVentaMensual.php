<?php
require('../api.php');
require('../queries.php');

$mes = "November";
echo '<pre>';
var_dump(ventaMensual($mes));
echo '</pre>'; 