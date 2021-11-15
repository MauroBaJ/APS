<?php



class Card{
    public function __construct
    (int $Numero, string $Nombre, int $Month,
    int $Year, int $CVV)
    {
        $this->Numero = $Numero;
        $this->Nombre = filter_var($Nombre, FILTER_SANITIZE_STRING);
        $this->Month = $Month;
        $this->Year = $Year;
        $this->CVV = $CVV;
    }

    public function getNumero(){ return $this->Numero;}
    public function getNombre(){ return $this->Nombre;}
    public function getMonth(){ return $this->Month;}
    public function getYear(){ return $this->Year;}
    public function getCVV(){ return $this->CVV;}
    
}