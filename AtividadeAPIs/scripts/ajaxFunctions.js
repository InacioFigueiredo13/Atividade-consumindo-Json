function ajaxFunctions(){
    var url = './api/nomes.json';

    fetch(url, {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        }})
    .then(function (response) {
        return response.text();
    })
    .then(function (body) {
        var data = JSON.parse(body);

        //Adicionando o resultado do apiFetch(40 nomes aleatórios) a um array chamado names
        var names = []
        for (let i = 0; i < data.length; i++){
            names.push(data[i].nome)
        }
        //ajax do controler.php
        $.ajax({
            url: './classes/Controler.php',
            method: 'POST',
            data: { nomesArray: names},
            dataType: 'json',
            }).done(function(resposta){
                $(function() {
                    //adicionando o resultado do ajax ao <table id="tabelaAlunos">
                    $.each(resposta, function(i, item) {
                        var $tr = $('<tr>').append(
                            $('<td>').text(item.nome),
                            $('<td>').text(item.nota1),
                            $('<td>').text(item.nota2),
                            $('<td>').text(item.nota3),
                            $('<td>').text(parseFloat(item.media)),
                            $('<td>').text(item.status),
                        ).appendTo('#tabelaAlunos');
                    });
                });   

                // pegando algumas variáveis necessárias para verificações da maior média 
                // e quantidade de aprovação do ajax response
                var media = [];
                
                var qtdAprovados = 0 
                var qtdAprovadosMerito = 0 
                var qtdReprovados = 0;

                for (let i = 0; i < resposta.length; i++) {

                    media.push(resposta[i].media);

                    if ( resposta[i].status == "Aprovado" ) {
                        qtdAprovados = qtdAprovados + 1; 
                    } else if ( resposta[i].status == "Aprovado com Merito!" ){
                        qtdAprovadosMerito = qtdAprovadosMerito + 1;
                    } else {
                        qtdReprovados = qtdReprovados + 1;
                    }

                }

                //Criando a tabela de destaques(aluno com maior média)
                $(function() {
                    $.each(resposta, function(i, item) {
                    
                        var maiorNota = Math.max(...media.map(o => o));

                        if (item.media == maiorNota) {
                            var $tr = $('<tr>').append(
                                $('<td>').text(item.nome),
                                $('<td>').text(item.nota1),
                                $('<td>').text(item.nota2),
                                $('<td>').text(item.nota3),
                                $('<td>').text(item.media),
                                $('<td>').text(item.status),
                            )
                            .appendTo('#tabelaDestaques');
                        } 
                    });
                });

                //onLoadCallBack do google.charts biblioteca
                //gerando o gráfico de pizza
                $(function() {
                        google.charts.load('current', {'packages':['corechart']});

                        function desenharPizza (){
                            var tabela = new google.visualization.DataTable();
                            tabela.addColumn('string','categorias');
                            tabela.addColumn('number','valores');
                            tabela.addRows([
                                ['Reprovados',qtdReprovados],
                                ['Aprovados',qtdAprovados],
                                ['Aprovados Com Mérito', qtdAprovadosMerito]
                            ]);
                            var opcoes = {
                                'height': 450,
                                'width': 600,
                                is3D: true
                            };
                        
                            var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
                            grafico.draw(tabela, opcoes)
                        }
                        
                        google.charts.setOnLoadCallback(desenharPizza);
                    
                });
            }).fail(function(jqXHR, textStatus ) {
                console.log("Request failed: " + textStatus);
        })
    })
}
ajaxFunctions();