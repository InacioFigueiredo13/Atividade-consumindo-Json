function gerarNome() {
    var url = './api/nomes.json';

    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    }).then(function (response) {
        return response.text();
    }).then(function (body) {
        var data = JSON.parse(body);

        //Adicionando o resultado do apiFetch(40 nomes aleatórios) a um array chamado names
        var names = []
        for (let i = 0; i < data.length; i++) {
            names.push(data[i].nome)
        }

        //ajax do controler.php
        $.ajax({
            url: './classes/Controler.php',
            method: 'POST',
            data: { nomesArray: names },
            dataType: 'json',
        }).done(function (resposta) {
        
            //adicionando o resultado do ajax ao <table id="tabelaAlunos">
            appendTDs(resposta)

            //function para pegar qtd de aprovados, reprovados e aprovados com mérito
            //adicionando return ao array qtdAprovacoes
            let qtdAprovacoes = rankingAlunos(resposta)

            //Criando a tabela de destaques(aluno com maior média)
            appendTDsBestAlunos(resposta)

            //onLoadCallBack do google.charts biblioteca
            //gerando o gráfico de pizza 3D
            googleCharts(qtdAprovacoes)

        }).fail(function (jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);
        })
    })
}

gerarNome();

function appendTDs(response) {
    $.each(response, function (i, item) {
        var $tr = $('<tr>').append(
            $('<td>').text(item.nome),
            $('<td>').text(item.nota1),
            $('<td>').text(item.nota2),
            $('<td>').text(item.nota3),
            $('<td>').text(parseFloat(item.media)),
            $('<td>').text(item.status),
        ).appendTo('#tabelaAlunos');
    });
}

function rankingAlunos(notasAlunos) {

    var qtdAprovados = 0
    var qtdAprovadosMerito = 0
    var qtdReprovados = 0;

    for (let i = 0; i < notasAlunos.length; i++) {
        if (notasAlunos[i].status === "Aprovado") {
            qtdAprovados = qtdAprovados + 1;
        } else if (notasAlunos[i].status === "Aprovado com Merito!") {
            qtdAprovadosMerito = qtdAprovadosMerito + 1;
        } else {
            qtdReprovados = qtdReprovados + 1;
        }
    }
    var arrayQtdAprovacoes = [qtdAprovados, qtdAprovadosMerito, qtdReprovados]
    return arrayQtdAprovacoes;
}

function appendTDsBestAlunos(notasAlunos) {

    var media = notasAlunos.map((mediaAlunos) => mediaAlunos.media)

    $.each(notasAlunos, function (i, item) {
        var maiorNota = Math.max(...media.map(o => o));

        if (item.media == maiorNota) {
            var $tr = $('<tr>').append(
                $('<td>').text(item.nome),
                $('<td>').text(item.nota1),
                $('<td>').text(item.nota2),
                $('<td>').text(item.nota3),
                $('<td>').text(item.media),
                $('<td>').text(item.status),
            ).appendTo('#tabelaDestaques');
        }
    });
}

function googleCharts(arrayQtdAprovacoes) {

    google.charts.load('current', { 'packages': ['corechart'] });

    function desenharPizza() {
        var tabela = new google.visualization.DataTable();
        tabela.addColumn('string', 'categorias');
        tabela.addColumn('number', 'valores');
        tabela.addRows([
            ['Reprovados', arrayQtdAprovacoes[2]],
            ['Aprovados', arrayQtdAprovacoes[0]],
            ['Aprovados Com Mérito', arrayQtdAprovacoes[1]]
        ]);
        var opcoes = {
            'backgroundColor': 'transparent',
            is3D: true
        };

        var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
        grafico.draw(tabela, opcoes)
    }
    google.charts.setOnLoadCallback(desenharPizza);
}