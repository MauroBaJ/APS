<?php



class Aplicante{
    public function __construct
    ( $Nombre, $ApellidoP, $ApellidoM, $Email, $Telefono)
    {
        $this->Nombre = $Nombre;
        $this->ApellidoP = $ApellidoP;
        $this->ApellidoM = $ApellidoM;
        $this->Email = $Email;
        $this->Telefono = $Telefono;
    }

    public function getNombre() { return $this->Nombre; }
    public function getApellidoP() { return $this->ApellidoP; }
    public function getApellidoM() { return $this->ApellidoM; }
    public function getEmail() { return $this->Email; }
    public function getTelefono() { return $this->Telefono; }
}