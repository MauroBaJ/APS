<?php
    require('templates/header.php');
    require('admin/functions/auth.php');
    require('admin/functions/database.php');

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

                                <form class="mx-1 mx-md-4">
                                    <!-- Nombre -->
                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="nombre">Nombre</label>
                                            <input type="text" id="nombre" class="form-control" name="nombre"
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
                                            <label class="form-label" for="email">Correo Electrónico</label>
                                            <input type="email" id="email" name="email" class="form-control" required />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="Password">Contraseña</label>
                                            <input type="password" id="Password" name="Password" class="form-control"
                                                required />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="Password2">Confirme su contraseña</label>
                                            <input type="password" id="Password2" name="Password2" class="form-control"
                                                required />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="Phone">Teléfono (Opcional)</label>
                                            <input type="number" id="Phone" name="Phone" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="button" class="btn btn-primary btn-lg">Registrarme</button>
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