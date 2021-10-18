<?php

require('database.php');
require('user.php');
require('auth.php');



// C

function createUser($user){
    $bd = conectarBD();
    $query = $bd->prepare( "INSERT INTO Usuario
    (Nombre, ApellidoP, ApellidoM, Email, Password, Telefono)
    VALUES (?, ?, ?, ?, ?, ? )");

    $res = $query->execute([
        $user->Nombre, $user->ApellidoP, $user->ApellidoM,
        $user->Email, $user->Password, $user->Telefono
    ]);

    cerrarBD($bd);
    return $res;
}

function createAdmin($user){

    $bd = conectarBD();
    $query = $bd->prepare( "INSERT INTO Administradores
    (Nombre, Email, Password)
    VALUES (?, ?, ?)");

    $res = $query->execute([
        $user->Nombre, $user->Email, $user->Password
    ]);

    cerrarBD($bd);
    return $res;
}


// R

function fetchUser($email, $password){


    $bd = conectarBD();
    $query = $bd->prepare( "SELECT Email, Password FROM Usuario WHERE Email = ?");
    $query->execute([$email]);

    $result = $query->fetch(PDO::FETCH_ASSOC);
    cerrarBD($bd);

    if(password_verify($password, $result['Password'])){
        
        iniciarSesion(false, $email);
    }
    else{
        return false;
    } 
}

function fetchAdmin($email, $password){


    $bd = conectarBD();
    $query = $bd->prepare( "SELECT Email, Password FROM Administradores WHERE Email = ?");
    $query->execute([$email]);

    $result = $query->fetch(PDO::FETCH_ASSOC);
    cerrarBD($bd);

    if(password_verify($password, $result['Password'])){
        
        iniciarSesion(true, $email);
    }
    else{
        return false;
    } 
}


// U

// D 
