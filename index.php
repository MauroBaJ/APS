<?php
require('./templates/header.php');
?>

    
    <main class="flex-fill">
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <picture>
                        <source srcset="build/img/LOGO FINAL vector.jpg" type="image/jpeg">
                        <source srcset="build/img/LOGO FINAL vector.webp" type="image/webp">
                        <img src="build/img/LOGO FINAL vector.jpg" alt="Imagen Hero" width="100%">
                    </picture>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">Artefactos Pernos y Seguros</h1>
                    <p class="lead">Somos una empresa orgullosamente mexicana. Fundados en 1984, nuestra misión siempre ha
                        sido ofrecer
                        a nuestros clientes productos de la más alta calidad, a precios justos. Nuestra cede se encuentra en
                        la ciudad de Guadalajara, Jalisco. Sin embargo, eso no nos detiene de hacer envíos a toda la
                        república.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Conoce más sobre nosotros
                            &raquo;</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <!-- Example row of columns -->
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">Visita nuestra tienda</h2>
                            <p>En nuestra tienda encontrarás todos los productos de nuestra marca,
                                los cuales son químicos de alta calidad. También podrás encontrar
                                una variedad de estuches de insumos para hidráulica. </p>
                            <a class="btn btn-block btn-primary" href="#" role="button">Ir a la Tienda &raquo;</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">Contáctanos</h2>
                            <p>Llena un formulario de contacto con tus datos, y nosotros nos
                                encargaremos de llamarte o escribirte para darle seguimiento
                                a tus dudas, pedidos, o cualquier otro tema.
                            </p>
                            <a class="btn btn-block btn-primary" href="contact.php" role="button">Llenar el formulario &raquo;</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">Bolsa de trabajo</h2>
                            <p>¿Buscas empleo? Nosotros siempre estamos contratando. Revisa
                                las vacantes disponibles, y selecciona la que más te guste.
                                SI nos gusta tu perfil, te llamaremos para una entrevista.
                            </p>
                            <a class="btn btn-block btn-primary" href="#" role="button">Ver vacantes &raquo;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- /container -->
    </main>

    <?php require('./templates/footer.php');