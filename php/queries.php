<?php

require('database.php');
require('auth.php');

//Import de clases
require('clases/user.php');
require('clases/product.php');
require('clases/card.php');

/** TODO
 *  Aplicante -> CRD
 *  Compra -> CR
 *  Direccion -> CR
 *  Producto -> RUD
 *  Tarjeta -> R
 *  usuarioDireccion -> R
 *  vacanteAplicante -> R
 *  Vacante -> CRUD
 */


//Test

$anaerobico = new Product(
    'Adhesivo Anaerobico Rojo', 'Poderoso Adhesivo anaerobico marca aps, frasco de 10ml',
    78.99, 144, 'Anaerobico rojo.png', 'Quimicos'
);

echo '<pre>';
var_dump($anaerobico);
echo '</pre>';


$user = new User(
    'Miguel', 'Reyes', 'Barba', '123@hooli.com', '12321', 3396840129
);

echo '<p*  usuarioTarjeta -> Rre>';
var_dump($user);
echo '</pre>';

$card = new Card( "4210003012997692" ,"Mauricio Basurto Jacobo", "08", "24", "123");

echo '<pre>';
var_dump($card);
echo '</pre>';


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
}

function createCard($card){
    $bd = conectarBD();
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


// U

// D 

