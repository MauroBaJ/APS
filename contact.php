<?php
require('./templates/header.php');
?>

<main>
    <h3 class="text-center">¿Requieres asistencia? Contáctanos a través de nuestro</h3>
    <h1 class="text-center">Formulario de Contacto</h1>

    <form class="formulario">
        <fieldset>
            <label for="name">Nombre</label>
            <input type="text" id="name" placeholder="Escribe aquí tu nombre" class="d-block">

            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Escribe aquí tu email">

            <label for="phone">Teléfono de Contacto</label>
            <input type="number" id="phone" placeholder="Escribe aquí tu teléfono">

        </fieldset>
        <p class="line"></p>

        <form class="formulario d-flex align-items-center justify-content-center">
            <fieldset>
                <h3>Motivo de contacto</h3>
                <div class="radio d-flex flex-column">
                    <div class="d-flex flex-row mt-1 p-1">
                        <input type="radio" id="Adquisición" value="Facturacion">
                        <label for="facturacion">Facturación</label>
                    </div>
                    <div class="d-flex flex-row mt-1 p-1">
                        <input type="radio" id="Compras" value="Compras">
                        <label for="Compras">Deseo comprar</label>
                    </div>
                    <div class="d-flex flex-row mt-1 p-1">
                        <input type="radio" id="Venta" value="Venta">
                        <label for="Venta">Un pedido que realicé</label>
                    </div>
                    <div class="d-flex flex-row mt-1 p-1">
                        <input type="radio" id="otro" value="otro">
                        <label for="otro">Otro Motivo</label>
                    </div>
                </div>
            </fieldset>
            <p class="line"></p>
            <textarea name="Mensaje" id="Mensaje" class="d-block center p-1" style="width: 100%;" rows="10" placeholder="Escribe aqui tu mensaje"></textarea>

            <input type="submit" class="btn-primary btn mt-2 center" value="Enviar Formulario">
        </form>
</main>

<?php require('./templates/footer.php');