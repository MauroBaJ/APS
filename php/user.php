<?php 

class User{

    function getNombre(){ return $this->Nombre; }
    function getApellidoP(){ return $this->ApellidoP; }
    function getApellidoM(){ return $this->ApellidoM; }
    function getEmail(){ return $this->Email; }
    function getPassword(){ return $this->Password; }
    function getTelefono(){ return $this->Telefono; }

    public function __construct
    (string $Nombre, string $ApellidoP, string $ApellidoM,
    string $Email, string $Password, int $Telefono )
    {
        $this->Nombre = $Nombre;
        $this->ApellidoP = $ApellidoP;
        $this->ApellidoM = $ApellidoM;
        $this->Email = $Email;
        $this->Password = password_hash($Password, PASSWORD_DEFAULT);
        $this->Telefono = $Telefono;
    }
}
