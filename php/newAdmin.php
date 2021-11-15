<?php

    $correo = "administrador@aps.com.mx";

    $Password = "Artefactos_2021";

    $pw = password_hash($Password, PASSWORD_DEFAULT);

    echo $pw;
