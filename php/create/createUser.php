<?php
require('../clases/Usuario.php');
require('../api.php');
require('../queries.php');

$data = json_decode(utf8_decode(file_get_contents('php://input')));
$usuario = new User(
    $data->Nombre, $data->ApellidoP, $data->ApellidoM, $data->Email, $data->Password, $data->Telefono
);

if(createUser($usuario)){
    $response = ['Created', true];
    $msg = json_encode($response);
} else{
    $response = ['Created', false];
    $msg = json_encode($response);
}

echo $msg;