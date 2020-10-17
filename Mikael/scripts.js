$().ready(function () {
	let dadosTeste = [
		{
			'nome': "Arnaldo",
			'sobrenome': "Silva",
			'idade': 20,
			'dia': 30,
			'mes': 12,
			'ano': 1500,
			'frase': "Essa é uma frase de teste kk"
		},
		{
			'nome': "Amado",
			'sobrenome': "Silva de Amaral do Testesteste",
			'idade': 15,
			'dia': 20,
			'mes': 5,
			'ano': 2000,
			'frase': "Essa22222 é uma frase de teste kk"
		},
		{
			'nome': "Arnaldonso",
			'sobrenome': "Silvano",
			'idade': 10,
			'dia': 3,
			'mes': 1,
			'ano': 200,
			'frase': "Essa33333 é uma frase de teste kk"
		},
		{
			'nome': "Arnaldonso",
			'sobrenome': "Silvano",
			'idade': 10,
			'dia': 3,
			'mes': 1,
			'ano': 200,
			'frase': "Essa33333 é uma frase de teste kk"
		},
		{
			'nome': "Arnaldonso",
			'sobrenome': "Silvano",
			'idade': 10,
			'dia': 3,
			'mes': 1,
			'ano': 200,
			'frase': "Essa33333 é uma frase de teste kk"
		},
		{
			'nome': "Arnaldonso",
			'sobrenome': "Silvano",
			'idade': 10,
			'dia': 3,
			'mes': 1,
			'ano': 200,
			'frase': "Essa33333 é uma frase de teste kk"
		},
		{
			'nome': "Arnaldonso",
			'sobrenome': "Silvano",
			'idade': 10,
			'dia': 3,
			'mes': 1,
			'ano': 200,
			'frase': "Essa33333 é uma frase de teste kk"
		},
		{
			'nome': "Arnaldonso",
			'sobrenome': "Silvano",
			'idade': 10,
			'dia': 3,
			'mes': 1,
			'ano': 200,
			'frase': "Essa33333 é uma frase de teste kk"
		},
		{
			'nome': "Arnaldonso",
			'sobrenome': "Silvano",
			'idade': 10,
			'dia': 3,
			'mes': 1,
			'ano': 200,
			'frase': "Essa33333 é uma frase de teste kk"
		},
		{
			'nome': "Arnaldonso",
			'sobrenome': "Silvano",
			'idade': 10,
			'dia': 3,
			'mes': 1,
			'ano': 200,
			'frase': "Essa33333 é uma frase de teste kk"
		}
	]

	let cor = ['dadosPreto', 'dadosVermelho', 'dadosAzul', 'dadosVerde'];

	let html = "<tr>";
	let contador = 1;

	$.each(dadosTeste, function (index, dado) {
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

	$('#anotacoes').append(html);

	if( ($('#lousa').height() - 200) < $('#tabelaAnotacoes').height() )
	{
		$('#lousa').height( $('#tabelaAnotacoes').height() + 600 );
	}
});