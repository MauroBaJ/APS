<?php
require('../api.php');
require('../database.php');
require('../auth.php');

$isLoggedin = loggedIn();
$isAdmin = loggedAdmin();

$res = json_encode([$isAdmin, $isLoggedin]);
echo $res;
