<?php
class Aluno{
    public $nome;
    public $nota1;
    public $nota2;
    public $nota3;
    public $media;
    public $status;

    function __construct($nome, $nota1, $nota2, $nota3) {
        $this->nome= $nome;
        $this->nota1 = $nota1;
        $this->nota2 = $nota2;
        $this->nota3 = $nota3;
    }

    public function getNome(){
        return $this->nome;
    }
    public function setNome($nome){
        $this->nome = $nome;
    }
    
    public function getNota1(){
        return $this->nota1;
    }
    public function setNota1($nota1){
        $this->nota1 = $nota1;
    }

    public function getNota2(){
        return $this->nota2;
    }
    public function setNota2($nota2){
        $this->nota2 = $nota2;
    }
    
    public function getNota3(){
        return $this->nota3;
    }
    public function setNota3($nota3){
        $this->nota3 = $nota3;
    }
    public function getStatus(){
        return $this->status;
    }
    public function setStatus($status){
        $this->status = $status;
    }
    public function getMedia(){
        return $this->media;
    }
    public function setMedia($media){
        $this->media = $media;
    }
    public function calcularMedia($nota1, $nota2, $nota3){
        return $this->setMedia((($nota1 + $nota2 + $nota3) / 3));
    }
    public function showStatus(){
        if($this->getMedia() >= 9){
            $this->setStatus("Aprovado com Merito!");
        } elseif ($this->getMedia() >= 6) {
            $this->setStatus("Aprovado");
        } else {
            $this->setStatus("Reprovado");
        }
    }
}
?>