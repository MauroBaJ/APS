<?php  

    //BD
    require('admin/functions/database.php');
    require('admin/functions/auth.php');
    require('templates/header.php');
    $db = conectarDB();

    $errores = [];

    // Autenticar
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        // echo '<pre>';
        // var_dump($_POST);
        // echo '</pre>';

        $email = mysqli_real_escape_string($db, filter_var($_POST['email'], FILTER_VALIDATE_EMAIL));
        $password = mysqli_real_escape_string($db, $_POST['password']);

        if(!$email) $errores[] = "El email es obligatorio";
        if(!$password) $errores[] = "El password es obligatorio";

        if(empty($errores)){
            //Usuario
            $query = "SELECT * FROM Administradores WHERE email = '${email}'";
            $resultado = mysqli_query($db, $query);

            $query2 = "SELECT * FROM Usuarios WHERE email = '${email}'";
            $resultado2 = mysqli_query($db, $query2);

            if($resultado->num_rows){
                $usuario = mysqli_fetch_assoc($resultado);
                

                //Verificar password
                $auth = password_verify($password, $usuario['Password']);
                
                if($auth){
                  mysqli_close($db);
                  iniciarSesion(true, $usuario);                
                } 
                else $errores[] = 'Password incorrecto';
            } 
            else if($resultado2->num_rows){

                 $usuario = mysqli_fetch_assoc($resultado2) ;
                 $auth = password_verify($password, $usuario['Password']);

                if($auth){
                  mysqli_close($db);
                  iniciarSesion(false, $usuario);                
                }
                else $errores[] = 'Password incorrecto'; 

            }
        }
        else $errores[] = 'El usuario no existe';
        
    }


?>

<main class="form-signin text-center">
  <form method="POST" class="formulario">
    <img class="mb-4" src="build/img/LOGO FINAL vector.webp" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Iniciar Sesion</h1>

    <?php
        foreach($errores as $error):
    ?>

    <div class="alerta error">
        <?php
            echo $error;
        ?>
    </div>

    <?php
        endforeach;
    ?>
    <div class="form-floating">
      <input type="email" name="email" class="form-control" id="email" placeholder="correo@email.com">
      <label for="email">Direccion de Correo</label>
    </div>
    <div class="form-floating">
      <input type="password" name="password" class="form-control" id="password" placeholder="Password">
      <label for="password">Contraseña</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
    <p>No tienes cuenta? <a href="create.php" class="link">Crear Cuenta</a></p>
  </form>


</main>


<?php
require('templates/footer.php');