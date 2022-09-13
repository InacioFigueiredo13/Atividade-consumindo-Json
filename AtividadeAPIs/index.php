<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./styles/styles.css" >

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
   
    <title>Consumindo JSON</title>
</head>
<body>
    <div id="main" class="container">
        <div id="table_container" class="tableContainer">

            <h1>Lista de Alunos</h1>

            <table id="tabelaAlunos">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>1° Nota</th>
                        <th>2° Nota</th>
                        <th>3° Nota</th>
                        <th>Media</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div class="destaques">

            <h1>Destaques</h1>

            <table id="tabelaDestaques">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>1° Nota</th>
                        <th>2° Nota</th>
                        <th>3° Nota</th>
                        <th>Media</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>

        </div>
        <div class="graficoContainer">
            <h1>Quantidade de Aprovação</h1>
            <div id="graficoPizza" class="graficoPizza"></div>
        </div>
    </div>

    <script src='https://code.jquery.com/jquery-3.6.1.min.js'></script>
    <Script src='./scripts/ajaxFunctions.js'></script>

</body>
</html>