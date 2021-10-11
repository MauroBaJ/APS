<?php
require('./templates/header.php');
?>


    <main class="m-top-100 container-lg">
        <div class="container-lg d-lg-flex justify-content-lg-center">
            <div class="row">
                <div class="col-lg-4 cont-img">
                    <picture class="imagen-logo">
                        <source srcset="build/img/LOGO FINAL vector.jpg" type="image/jpeg">
                        <source srcset="build/img/LOGO FINAL vector.webp" type="image/webp">
                        <img src="build/img/LOGO FINAL vector.webp" alt="Logotipo APS">
                    </picture>
                </div>
                <div class="col-lg-8 justify-content-lg-center">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="d-block text-justify">Desde nuestra fundación en 1984, nos hemos comprometido en 
                                ofrecerle a nuestros clientes los productos de más alta calidad, a precios justos y 
                                accesibles. 
                            </p>
                            <p class="d-block text-justify">Nuestro fuerte son los productos para las indrustrias, el 
                                sector agrícola, y el servicio pesado. Somos especialistas en refacciones para equipo
                                hidráulico. Nuestra gama de productos de marca propia cumplen con los más altos estándares
                                del mercado, y no tienes que romper la alcancía par comprarlos.
                            </p>
                        </div>
                    </div>
                    <div class="row container m-top-100">
                        <div class="card col-lg-5">
                            <div class="card-body">
                                <h2 class="card-title text-center">Misión</h2>
                                <p class="d-block text-justify">Vero, magni similique reiciendis repellat minima eum
                                    suscipit, fugiat at possimus iusto aspernatur quasi facilis, necessitatibus fugit ab
                                    officiis nam autem aperiam hic temporibus repellendus ullam? Numquam dolore neque et!
                                </p>
                            </div>
                        </div>
                        <div class="col-2"></div>
                        <div class=" card col-lg-5">
                            <div class="card-body">
                                <h2 class="card-title text-center">Visión</h2>
                                <p class="d-block text-justify">Vero, magni similique reiciendis repellat minima eum
                                    suscipit, fugiat at possimus iusto aspernatur quasi facilis, necessitatibus fugit ab
                                    officiis nam autem aperiam hic temporibus repellendus ullam? Numquam dolore neque et!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </main>
    <section class="container-xl d-lg-flex justify-content-lg-center">
        <div class="row m-top-100 justify-content-lg-center">

                <p class="text-center mt-5"><b>Teléfono:</b>33-3810-4006</p>

                <div class="map" id="map">
                </div>

                <p class="text-center mt-5">Encuentra nuestro centro de soluciones en Pelícano #969, en la colonia Morelos de Guadalajara, Jalisco</p>

        </div>
    </section>

<?php require('./templates/footer.php');