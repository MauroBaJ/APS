<?php

require('../api.php');
require('../auth.php');

cerrarSesion();
echo json_encode('logged Out');