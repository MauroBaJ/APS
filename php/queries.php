<?php

require('database.php');
require('auth.php');

//Import de clases
include './clases/Aplicante.php';
include './clases/Compra.php';
include './clases/Direccion.php';
include './clases/Producto.php';
include './clases/Tarjeta.php';
include './clases/Usuario.php';
include './clases/Vacante.php';

/** TODO
 *  Aplicante -> RD
 *  Compra -> CR
 *  Direccion -> R
 *  Producto -> RUD
 *  Tarjeta -> R
 *  usuarioDireccion -> R
 *  vacanteAplicante -> R
 *  Vacante -> CUD
 */



//Funciones auxiliares para tablas pivote

function getUserID(){
    $user = $_SESSION['usuario'];
    $bd = conectarBD();
    $query = $bd->prepare(" SELECT idUsuario FROM Usuario WHERE Email = ? ");
    $r = $query->execute([$user]);
    return $r;
}
function getCardID($val){
    $user = $_SESSION['usuario'];
    $bd = conectarBD();
    $query = $bd->prepare(" SELECT idTarjeta FROM Tarjeta WHERE Numero = ? ");
    $r = $query->execute([$val]);
    return $r;
}

function getAddressID($val){
    $user = $_SESSION['usuario'];
    $bd = conectarBD();
    $query = $bd->prepare(
        "SELECT idDireccion FROM Direccion
        WHERE Direccion = ? AND CP = ?"
        );
    $r = $query->execute([$val->Direccion, $val->CP]);
    return $r;
}

function getOpeningID($vacante){
    $bd = conectarBD();
    // $query = $bd->prepare("");

    cerrarBD($bd);
    // return $r;
}

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

function createProduct($product){
    $bd = conectarBD();
    $query = $bd->prepare("INSERT INTO Producto
    (Nombre, Descripcion, Precio, Inventario, Imagen, Categoria)
    VALUES(?, ?, ?, ?, ?, ?)");


    $result = $query->execute([
        $product->Nombre, $product->Descripcion, $product->Precio,
        $product->Inventario, $product->Imagen, $product->Categoria
    ]);


    cerrarBD($bd);
    return $result;
}

function createCard($card){
    $bd = conectarBd();
    $query = $bd->prepare(
        "INSERT INTO Tarjeta 
        (Numero, Nombre, Month, Year, CVV)
        Values (?,?,?,?,?)
        "
    );

    $res = $query->execute(
        $card->Numero,
        $card->Nombre,
        $card->Month,//TODO
        $card->Year,
        $card->CVV
    );//TODO

    if($res){
        $user = getUserID();
        $plastic = getCardID($card->Numero);
        $query = $bd->prepare(
            "INSERT INTO usuarioTarjeta(idUsuario, idTarjeta)
            VALUES (?, ?)"
        );
        $r = $query->execute($user, $plastic);
    }

    cerrarBD($bd);
}

function createAddress($direccion){
    $bd = conectarBD();
    $query = $bd->prepare("
        INSERT INTO Direccion
        (Direccion, Colonia, Ciudad, Estado, CP)
        VALUES (?, ?, ?, ?, ?)
    ");

    $res = $query->execute([
        $direccion->Direccion, $direccion->Colonia, $direccion->Ciudad,
        $direccion->Estado, $direccion->CP
    ]);

    if($res){
        $user =getUserID();
        $idDireccion = getAddressID($direccion);
        $query = $bd->prepare("
            INSERT INTO usuarioDireccion
            (idUsuario, idDireccion)
            VALUES(?, ?)
        ");
        $r = $query->execute([$user, $idDireccion]);
    }
    
    cerrarBD($bd);

}

function createApplier($applier){
    $bd = conectarBD();
    $query = $bd->prepare(
        "INSERT INTO Aplicante
        (Nombre, ApellidoP, ApellidoM, Email, Telefono)
        VALUES (?, ?, ?, ?, ?)"
    );

    $res = $query->execute([
        $applier->Nombre, $applier->ApellidoP,
        $applier->ApellidoM, $applier->Email,
        $applier->Telefono
    ]);

    if($res){
        //TODO
    }
    
    cerrarBD($bd);

}

function createOpening($vacante){
    $bd = conectarBD();
    $query = $bd->prepare("
        INSERT INTO Vacantes
        (Nombre, Categoria, Descripcion)
        VALUES (?, ?, ?)
    ");

    $res = $query->execute([
        $vacante->Nombre, $vacante->Categoria,
        $vacante->Descripcion
    ]);

    
    cerrarBD($bd);

}


// R

function fetchUser($email, $password){


    $bd = conectarBD();
    $query = $bd->prepare( "SELECT Email, Password FROM Usuario WHERE Email = '${email}'");
    $query->execute();

    $result = $query->fetch(PDO::FETCH_ASSOC);
    cerrarBD($bd);

    if(password_verify($password, $result['Password'])){
        
        iniciarSesion(false, $email);
        return true;
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
        return true;
    }
    else{
        return false;
    } 
}

function fetchCard(){
    $user = getUserID();
    $bd = conectarBD();
    $query = $bd->prepare(
        "SELECT T.Nombre, T.Numero FROM Tarjeta as T
        RIGHT JOIN usuarioTarjeta as UT
        ON T.idTarjeta = UT.idTarjeta
        WHERE UT.idUsuario = ? "
    );

    $query->execute($user);
    $resultado = $query->fetchAll();
    cerrarBD($bd);

    return $resultado;
}

function fetchArticulos(){
    $bd = conectarBD();
    $query = $bd->prepare("
        SELECT * FROM Producto
        WHERE Inventario > 1
    ");

    $query->execute();
    $res = $query->fetchAll(PDO::FETCH_ASSOC);
    cerrarBD($bd);

    return $res;
}

function fetchArticulo($id){
    $bd = conectarBD();
    $query = $bd->prepare(
        "SELECT * FROM Producto
        WHERE idProducto = ?"
    );
    $query->execute([$id]);
    $res= $query->fetchAll(PDO::FETCH_ASSOC);
    cerrarBD($bd);

    return $res;
}

function fetchJobs(){
    $bd = conectarBD();
    $query = $bd->prepare(
        "SELECT * FROM Vacantes"
    );
    $query->execute([]);
    $res = $query->fetchAll(PDO::FETCH_ASSOC);
    cerrarBD($bd);

    return $res;
}

function fetchVacante($id){
    $bd = conectarBD();
    $query = $bd->prepare( " SELECT * FROM Vacantes WHERE idVacantes = ? ");
    $query->execute([$id]);
    $res = $query->fetchAll(PDO::FETCH_ASSOC);
    cerrarBD($bd);
    return $res;
}

// U

// D 

