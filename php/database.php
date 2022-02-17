<?php 

    function conectarBD(){

        $db = new PDO(
//Database data
        );
        $db->query("set names utf8;");
        
        return $db;
    }

    function cerrarBD($db){
        $db = null;
    }
