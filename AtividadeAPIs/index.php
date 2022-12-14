<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./styles/styles.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <script src="https://kit.fontawesome.com/275995ea23.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <title>Notas dos Alunos</title>
</head>

<body>
    <div id="main" class="container">
        <div class="navbar">
            <a href="#"><i class="fa-solid fa-list" style="color: white;"></i>
                <p>BOLETIM</p>
            </a>
            <a href="#destaques" style="background-color: white;"> <i class="fa-regular fa-star" style="color: blue;"></i>
                <p style="color: blue;">DESTAQUES</p>
            </a>
            <a href="#graficoContainer"><i class="fa-solid fa-chart-pie" style="color: white;"></i>
                <p>APROVAÇÂO</p>
            </a>
        </div>
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

        <div class="destaquesDiv">
            <a id="destaques"></a>
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
            <a id="graficoContainer"></a>
            <h1>Aprovação</h1>
            <div id="graficoPizza" class="graficoPizza"></div>
        </div>
    </div>


    <script src='https://code.jquery.com/jquery-3.6.1.min.js'></script>
    <Script src='./scripts/ajaxFunctions.js'></script>
</body>

</html>