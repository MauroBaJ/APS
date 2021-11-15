<?php

class Direccion{
    public function __construct
    ($Direccion, $Colonia, $Ciudad, $Estado, $CP)
    {
        $this->Direccion = $Direccion;
        $this->Colonia = $Colonia;
        $this->Ciudad = $Ciudad;
        $this->Estado = $Estado;
        $this->CP = $CP;
    }

    public function getDireccion(){ return $this->Direccion;}
    public function getColonia(){ return $this->Colonia;}
    public function getCiudad(){ return $this->Ciudad;}
    public function getEstado(){ return $this->Estado;}
    public function getCP(){ return $this->CP;}
}