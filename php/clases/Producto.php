<?php

class Product{

    public function __construct(
         String $Nombre,  String $Descripcion, float $Precio,
         int $Inventario,  String $Imagen,  String $Categoria
    ){
        $this->Nombre = filter_var( $Nombre, FILTER_SANITIZE_STRING);
        $this->Descripcion = filter_var( $Descripcion, FILTER_SANITIZE_STRING);
        $this->Precio = filter_var($Precio, FILTER_SANITIZE_NUMBER_FLOAT);
        $this->Inventario = filter_var($Inventario, FILTER_SANITIZE_NUMBER_INT);
        $this->Imagen = filter_var( $Imagen, FILTER_SANITIZE_STRING);
        $this->Categoria = filter_var( $Categoria, FILTER_SANITIZE_STRING);
    }

    function getNombre(){ return $this->Nombre; }
    function getDescripcion(){ return $this->Descripcion; }
    function getPrecio(){ return $this->Precio; }
    function getInventario(){ return $this->Inventario; }
    function getImagen(){ return $this->Imagen; }
    function getCategoria(){ return $this->Categoria; }
}