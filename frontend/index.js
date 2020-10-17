module.exports = (array) => {
	return `
	<!DOCTYPE html>
	<html lang="pt-br">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Quem é Você na Robótica?</title>
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Permanent+Marker&display=swap" rel="stylesheet">
			<style>
			html, body {
	display: inline-block;
	width: 100%;
	height: 100%;
	margin: unset;
	background-color: rgb(252, 252, 240);
}

#titulo {
	margin: unset;
	font-size: 40px;
	font-weight: 500;
	text-align: center;
	font-family: 'Inter', sans-serif;
	text-shadow: 2px 2px 8px rgb(160, 160, 160);
}

#fundo {
	display: inline-block;
	height: 80%;
	width: 100%;
	position: relative;
}

#marginTopFundo {
	height: 10%;
	width: 100%;
}

.todoTamanho {
	display: inline-block;
	height: 100%;
	width: 100%;
}

.todaLargura {
	display: inline-block;
	width: 100%;
}

.semMarginEPadding {
	margin: unset;
	padding: unset;
}

#lousa {
	z-index: -1;
}

#tabelaAnotacoes {
	position: absolute;
	top: 6%;
	left: 0%;
}

#anotacoes {
	display: inline-block;
	width: 90%;
	height: 75%;
	margin-left: 5%;
}

#dados {
	font-family: 'Permanent Marker', cursive;
	padding: 10px;
}

#dados p {
	font-size: 16px;
	margin: unset;
	padding: unset;
}

span {
	font-size: 20px;
	color: rgb(0, 0, 0);
}

#frase {
	font-size: 24px;
}

.dadosPreto p, .dadosPreto #frase {
	color: rgba(0, 0, 0, 0.5);
}

.dadosVermelho p, .dadosVermelho #frase {
	color: rgba(255, 0, 0, 0.5);
}

.dadosAzul p, .dadosAzul #frase {
	color: rgba(0, 0, 255, 0.5);
}

.dadosVerde p, .dadosVerde #frase {
	color: rgba(0, 180, 0, 0.5);
}
		</style>
		</head>
		<body>
			<div id="marginTopFundo"></div>
			<div id="fundo">

				<img id="lousa" class="todoTamanho" src="https://userscontent2.emaze.com/images/6629c62b-5495-4685-aa66-3a39ca195b16/Slide2_Pic1_637300900505398980.png">

				<table id="tabelaAnotacoes">
					<thead class="todaLargura">
						<tr class="todaLargura">
							<td class="todaLargura semMarginEPadding">
								<p class="todaLargura" id="titulo">Quem é Você na Robótica?</p>
							</td>
						</tr>
					</thead>
					<tbody id="anotacoes">
						${require('./scripts')(array)}
					</tbody>
				</table>
			</div>
		</body>
	</html>
	`
}
