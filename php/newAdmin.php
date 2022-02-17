<?php

    $correo = /* correo */;

    $Password = /* password */;

    $pw = password_hash($Password, PASSWORD_DEFAULT);

    echo $pw;
