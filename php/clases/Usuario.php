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
        $this->Nombre = filter_var($Nombre, FILTER_SANITIZE_STRING);
        $this->ApellidoP = filter_var($ApellidoP, FILTER_SANITIZE_STRING);
        $this->ApellidoM = filter_var($ApellidoM, FILTER_SANITIZE_STRING);
        $this->Email = filter_var($Email, FILTER_SANITIZE_EMAIL);
        $this->Password = password_hash($Password, PASSWORD_DEFAULT);
        $this->Telefono = $Telefono;
    }
}
