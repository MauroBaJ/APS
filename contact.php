<?php
require('./templates/header.php');
?>

<main>
    <div class="cointainer m-5">
        <h3 class="text-center">¿Requieres asistencia? Contáctanos a través de nuestro</h3>
        <h1 class="text-center">Formulario de Contacto</h1>
    </div>

    <form class="container p-3 shadow" style="background-color: #f0f4f9;">
        <fieldset class="container-fluid">
            <label class="form-label" for="name">Nombre</label>
            <input class="form-control" type="text" id="name" placeholder="Escribe aquí tu nombre" class="d-block">

            <label class="form-label" for="email">Correo Electrónico</label>
            <input class="form-control" type="email" id="email" placeholder="Escribe aquí tu email">

            <label class="form-label" for="phone">Teléfono de Contacto</label>
            <input class="form-control" type="number" id="phone" placeholder="Escribe aquí tu teléfono">

        </fieldset>


        <p class="line"></p>


        <fieldset class="container-fluid ">
            <h3>Motivo de contacto</h3>
            <div class="radio d-flex flex-column p-3">
                <div class="d-flex flex-row mt-1 p-1 form-check">
                    <input class="form-check-input me-3" type="radio" id="Facturacion" value="Facturacion">
                    <label class="form-label" for="Facturacion">Facturación</label>
                </div>
                <div class="d-flex flex-row mt-1 p-1 form-check">
                    <input class="form-check-input me-3" type="radio" id="Compras" value="Compras">
                    <label class="form-label" for="Compras">Deseo comprar</label>
                </div>
                <div class="d-flex flex-row mt-1 p-1 form-check">
                    <input class="form-check-input me-3" type="radio" id="Venta" value="Venta">
                    <label class="form-label" for="Venta">Un pedido que realicé</label>
                </div>
                <div class="d-flex flex-row mt-1 p-1 form-check">
                    <input class="form-check-input me-3" type="radio" id="Otro" value="Otro">
                    <label class="form-label " for="Otro">Otro Motivo</label>
                </div>
            </div>
        </fieldset>
        <p class="line"></p>
        <textarea name="Mensaje" id="Mensaje" class="d-block center p-1" style="width: 100%;" rows="10"
            placeholder="Escribe aqui tu mensaje"></textarea>

        <input type="submit" class="btn-primary btn mt-2 center" value="Enviar Formulario">
    </form>
</main>

<?php require('./templates/footer.php');