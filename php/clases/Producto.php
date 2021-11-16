<?php

class Product{
    // public string $Nombre;
    // public string $Descripcion;
    // public float $Precio;
    // public int $Inventario;
    // public string $Imagen;
    // public string $Categoria;

    public function __construct(
        string $Nombre, string $Descripcion, float $Precio,
        int $Inventario, string $Imagen, string $Categoria
    ){
        $this->Nombre = filter_var( $Nombre, FILTER_SANITIZE_STRING);
        $this->Descripcion = filter_var( $Descripcion, FILTER_SANITIZE_STRING);
        $this->Precio = $Precio;
        $this->Inventario = $Inventario;
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

