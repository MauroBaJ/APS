<?php 

    include './admin/functions/auth.php';

?>


<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">    <link rel="stylesheet" href="build/css/main.css">

    <title>APS</title>
</head>

<body>
    <!-- Barra de navegacion -->
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <a href="index.php" class="navbar-brand">
                <picture>
                    <source srcset="build/img/blanco aps.webp" type="image/webp">
                    <source srcset="build/img/blanco aps.png" type="image/png">
                    <img src="build/img/blanco aps.png" alt="Logo enlace a Inicio" width="50">
                </picture>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.php">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tienda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.php">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="aboutUs.php">Acerca de Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bolsa de Trabajo</a>
                    </li>

                    <!-- /**
                        Si el usuario tiene sesion iniciada se mostrara cerrar sesion,
                        de otra forma se mostrara iniciar sesion.
                    */ -->
                    <?php if(loggedIn()): ?>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/functions/exit.php">Cerrar Sesion</a>
                        </li> 
                    <?php endif; ?>
                    <?php if(!loggedIn()): ?>
                        <li class="nav-item">
                            <a class="nav-link" href="login.php">Iniciar Sesion</a>
                        </li> 
                    <?php endif; ?>
               

                </ul>
            </div>
            <form class="d-none d-lg-flex">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-success" type="submit"><img src="/build/img/svg/lupa.svg"
                        alt="Buscar"></button>
            </form>
        </div>
    </nav>