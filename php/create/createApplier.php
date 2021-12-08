<?php
require('../api.php');
require('../queries.php');
require('../clases/Aplicante.php');

$data = json_decode(file_get_contents('php://input'));



$idVacante = $data->idVacante;
$apl = $data->aplicante;

$aplicante = new Aplicante(
    $apl->Name, $apl->ApellidoP, $apl->ApellidoM,
    $apl->Email, $apl->Telefono
);

if(createApplier($aplicante)) 
$idAplicante = fetchApplierID($aplicante->Email);

$idAplicante = $idAplicante[0]["idAplicante"];

$msg = pivoteAplicanteVacante($idVacante, $idAplicante);
echo json_encode($msg);


// echo json_encode($msg);