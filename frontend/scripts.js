

module.exports = (dadosTeste) => {
	let cor = ['dadosPreto', 'dadosVermelho', 'dadosAzul', 'dadosVerde'];

	let html = "<tr>";
	let contador = 1;

	dadosTeste.forEach((index, dado) => {
		html +=
			"<td id='dados' class='" + cor[ Math.floor( Math.random() * 4 ) ] + "'>" +
				"<p><span>Nome:</span> " + dado['nome'] + "</p>" +
				"<p><span>Sobrenome:</span> " + dado['sobrenome'] + "</p>" +
				"<p><span>Idade:</span> " + dado['idade'] + "</p>" +
				"<p><span>Data de Nascimento:</span> " + dado['dia'] + "/" + dado['mes'] + "/" + dado['ano'] + "</p>" +
				"<p><span>Sua Frase:</span><br><span id='frase'>" + dado['frase'] + "</span></p>" +
			"</td>";

		if( index == (5 * contador - 1) )
		{
			html +=
				"</tr>" +
					"<tr>" +
						"<td><p> </p>" +
					"</td>" +
				"</tr>" +
				"<tr>";

			contador++;
		}
	});

	html += "</tr>";

	return html
}

