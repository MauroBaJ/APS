<?php
$dom = 'http://localhost:3000';

header("Access-Control-Allow-Origin: $dom");
header("Access-Controll-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS, GET, PUT, POST, DELETE");