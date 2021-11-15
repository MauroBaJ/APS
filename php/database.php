<?php 

    function conectarBD(){

        $db = new PDO(
            'mysql:host=localhost; dbname=aps',
            'admonAPS',
            'Artefactos_2021'
        );
        $db->query("set names utf8;");
        
        return $db;
    }

    function cerrarBD($db){
        $db = null;
    }