function pegarQuantidadeDeNumero(){
	const quantidade = parseFloat((document.querySelector("#campo")).value);

	if(isNaN(quantidade)){
		throw new Error("Valor digitado não é número");
	}
	
	gerarNumeros(quantidade);
}

function gerarNumeros(quantidadeDeNumeros){
	try {
		var i = 0;
		var arr = new Array();
		var random;

		while(i < quantidadeDeNumeros){
			var aux = 0;
			random = parseInt(Math.random() * 60);

			for(var j = 0; j < arr.length; j++){
				if(arr[j] == random || random == 0){
					aux = 1;
					break;
				}
			}
			if(aux == 1) continue;
			arr.push(random);
			i++;
		}

		arr.sort(function(a, b) {
			return a - b;
		});
		
		console.log(arr);
		window.location.href = "./numeros.html";

	} catch (error) {
		alert(error);
		return;
	}
	
}

function voltar(){
	window.location.href = "./index.html";
}

