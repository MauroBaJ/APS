<?php
require('../api.php');
require('../queries.php');

$r = fetchJobs();
$msg = json_encode($r);
echo $msg;
