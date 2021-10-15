<?php
    require('templates/header.php');
    require('admin/functions/auth.php');
    require('admin/functions/database.php');

    $db = conectarDB();

    $errores= []; 
    
    $Nombre = $_POST['Nombre'];
    $ApellidoP = $_POST['ApellidoP'];
    $ApellidoM = $_POST['ApellidoM'];
    $Telefono = $_POST['Telefono'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];
    $Password2 = $_POST['Password2'];



    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $Nombre = mysqli_real_escape_string($db, $_POST['Nombre']);
        $ApellidoP = mysqli_real_escape_string($db, $_POST['ApellidoP']);
        $ApellidoM = mysqli_real_escape_string($db, $_POST['ApellidoM']);
        $Telefono = mysqli_real_escape_string($db, $_POST['Telefono']);
        $Email = mysqli_real_escape_string($db, $_POST['Email']);
        $Password = mysqli_real_escape_string($db, $_POST['Password']);
        $Password2 = mysqli_real_escape_string($db, $_POST['Password2']);

        $match = ($Password === $Password2);

        if(!$match) $errores[] = 'Las contraseñas no coinciden';
        if($Nombre === '') $errores[] = 'Debe escribir un Nombre';
        if($ApellidoP === '') $errores[] = 'Debe escribir al menos un Apellido';
        if($Email === '') $errores[] = 'Debe escribir un correo electronico';
        if($Password === '') $errores[] = 'Debes escribir una contraseña';
        if($Password2 === '') $errores[] = 'Debes confirmar tu contraseña';

        //Validar que el correo no este en uso
        $query = "SELECT * FROM Administradores WHERE Email = '${Email}'";
        $resultado = mysqli_query($db, $query);
        $usuario = mysqli_fetch_assoc($resultado);

        $query2 = "SELECT * FROM Usuario WHERE Email = '${Email}'";
        $resultado2 = mysqli_query($db, $query);
        $usuario2 = mysqli_fetch_assoc($resultado);

        if($Email == $usuario['Email'] || $Email == $usuario2['Email']) $errores[] = 'Esa direccion de correo ya esta en uso.';

        if(empty($errores)){

            $passwordHash = password_hash($Password, PASSWORD_BCRYPT);


            
            $query = "INSERT INTO Usuario (Nombre, ApellidoP, ApellidoM, Telefono, Email, Password) VALUES 
            ('${Nombre}', '${ApellidoP}', '${ApellidoM}', '${Telefono}', '${Email}', '${passwordHash}')";

            echo $query;
            exit;

            $resultado = mysqli_query($db, $query);
            
            $query = "SELECT * FROM Usuario WHERE Email = '${Email}'";

            $resultado = mysqli_query($db, $query);
            $usuario = mysqli_fetch_assoc($resultado);
            

            mysqli_close($db);
            iniciarSesion(false, $usuario);
        }
    }

?>



<main class="vh-90" style="background-color: #eee;">
    <div class="container h-90">
        <div class="row d-flex justify-content-center align-items-center h-90">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style="border-radius: 25px;">
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Crear Cuenta</p>

                                <?php 
                                    if(!empty($errores)):
                                        foreach($errores as $error):
                                ?>
                                    <p class="error"><?php echo $error; ?></p>
                                <?php 
                                        endforeach;
                                    endif;
                                ?>

                                <form class="mx-1 mx-md-4" method="POST">
                                    <!-- Nombre -->
                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="Nombre">Nombre</label>
                                            <input type="text" id="Nombre" class="form-control" name="Nombre"
                                                required />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="ApellidoP">Apellido Paterno</label>
                                            <input type="text" id="ApellidoP" name="ApellidoP" class="form-control"
                                                required />
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="ApellidoM">Apellido Materno
                                                (Opcional)</label>
                                            <input type="text" id="ApellidoM" name="ApellidoM" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="Email">Correo Electrónico</label>
                                            <input type="email" id="Email" name="Email" class="form-control" required />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="Password">Contraseña</label>
                                            <input type="Password" id="Password" name="Password" class="form-control"
                                                required />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="Password2">Confirme su contraseña</label>
                                            <input type="Password" id="Password2" name="Password2" class="form-control"
                                                required />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="Telefono">Teléfono (Opcional)</label>
                                            <input type="number" id="Telefono" name="Telefono" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <input type="submit" class="btn btn-primary btn-lg" value="Registrarme">
                                    </div>

                                </form>

                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                <picture class="img-fluid" alt="Sample image">
                                    <source srcset="build/img/Login.png" type="image/jpeg">
                                    <source srcset="build/img/Login.webp" type="image/webp">
                                    <img src="build/img/Login.png" alt="Imagen Hero" width="100%">

                                </picture>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>


<?php

require('templates/footer.php');