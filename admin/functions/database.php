<?php
    
    function conectarDB(): mysqli{
        $db = mysqli_connect(
            'localhost',
            'admonAPS',
            'APS2021',
            'aps'
        );
        $db->set_charset('utf8');

        return $db;
    }