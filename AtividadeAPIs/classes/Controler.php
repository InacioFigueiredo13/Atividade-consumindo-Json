<?php

require './Aluno.php';

//pegando o array de nomes do APIFETCH, enviado pelo ajax
$myArray = $_REQUEST['nomesArray'];

class Controler {

//função que gera 40 alunos e adiciona os atributos à variavel '$arrayAllAlunos' 
public function instanciarAlunos(array $arrayNome){ 

    $arrayAllAlunos = [];
    
    for ($i = 0; $i <= 39; $i++) {

        $objAluno = new Aluno( $arrayNome[$i] ,rand(0, 10), rand(0, 10), rand(0, 10));
        $objAluno -> calcularMedia($objAluno->getNota1(), $objAluno->getNota2(), $objAluno->getNota3()); 
        $objAluno -> showStatus();

        $array = array(
            'nome' => $objAluno->getNome(),
            'nota1' => $objAluno->getNota1(),
            'nota2' => $objAluno->getNota2(),
            'nota3' => $objAluno->getNota3(),
            'media' => number_format($objAluno->getMedia(),1,".","."),
            'status' => $objAluno->getStatus(),
        );

       array_push($arrayAllAlunos, $array);
    }
//return da função: Os 40 alunos com nome, nota1, nota2, nota3, media e status
    print_r(json_encode($arrayAllAlunos));
    return json_encode($arrayAllAlunos);
}
}

//instanciando a classe
$Controler = new Controler();
$Controler->instanciarAlunos($myArray);

?>