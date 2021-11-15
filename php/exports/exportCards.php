<?php

require('api.php');
require('queries.php');

//Funciones

$tarjetas = fetchCard();
echo json_encode($tarjetas);