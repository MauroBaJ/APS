<?php

require('database.php');
require('auth.php');

//Import de clases
include('./clases/Aplicante.php');
include('./clases/Compra.php');
include('./clases/Direccion.php');
include('./clases/Producto.php');
include('./clases/Tarjeta.php');
include('./clases/Usuario.php');
include('./clases/Vacante.php');


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

function getUserID($email){
    $bd = conectarBD();
    $query = $bd->prepare( "SELECT idUsuario FROM Usuario WHERE Email = ?" );
    $query->execute([$email]);
    $res= $query->fetchAll(PDO::FETCH_ASSOC);
    cerrarBD($bd);
    return $res;
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
        $card->Month,
        $card->Year,
        $card->CVV
    );

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
    return $res;
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

function fetchCard($id){
    $bd = conectarBD();
    $query = $bd->prepare(
    "SELECT * FROM Tarjeta
    INNER JOIN usuarioTarjeta uT on Tarjeta.idTarjeta = uT.idusuarioTarjeta
    WHERE uT.idUsuario = ?;
    ");
    $query->execute([$id]);
    $result =  $query->fetchAll(PDO::FETCH_ASSOC);
    cerrarBD($bd);
    return $result;
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

function updateProduct($product, $id){
    $bd = conectarBD();

    $query = $bd->prepare("
    UPDATE Producto
    SET Nombre = ?, Descripcion = ?, Precio = ?, 
    Inventario = ?, Imagen = ?, Categoria = ?
    WHERE idProducto  = ?");


    $result = $query->execute([
         $product->Nombre, $product->Descripcion, $product->Precio,
         $product->Inventario, $product->Imagen, $product->Categoria,
         $id
     ]);


    cerrarBD($bd);
    return $result;
}

function updateVacante($vacante, $id){
    $bd = conectarBD();

    $query = $bd->prepare("
    UPDATE Vacantes
    SET Nombre = ?, Descripcion = ?, Categoria = ?
    WHERE idVacantes  = ?");


    $result = $query->execute([
         $vacante->Nombre, $vacante->Descripcion, $vacante->Categoria,$id
     ]);


    cerrarBD($bd);
    return $result;
}

// D 

function deleteProduct($id){
    $bd = conectarBD();
    $query = $bd->prepare(
        "DELETE FROM Producto
        WHERE idProducto = ?"
    );
     $res = $query->execute([$id]);
     cerrarBD($bd);
    return $res;
}
function deleteOpening($id){
    $bd = conectarBD();
    $query = $bd->prepare("
    DELETE FROM Vacantes
    WHERE idVacantes = ?
    ");

    $res = $query->execute([$id]);
    return $res;
}
