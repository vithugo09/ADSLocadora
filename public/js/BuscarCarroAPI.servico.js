(function(){

	angular
		.module('Locadora')	
		.service('BuscarCarroAPI', BuscarCarroAPI)

	BuscarCarroAPI.$inject = ['$http', '$q'];

	function BuscarCarroAPI($http, $q){
		var servico = this;

		servico.Buscar = function(sNome) {
			var resultado = $q.defer();

			var urlAPI = 'http://essearch.allocine.net/br/autocomplete?q=' + sNome;

			$http.get(urlAPI).then(function(resposta) { 

				var lista = resposta.data.map(function(carroAPI) { 
					return {
						titulo: (carroAPI.title1) ? carroAPI.title1 : carroAPI.title2,
						urlCapa: carroAPI.thumbnail,
						infoAdicional: (carroAPI.metadata) ? carroAPI.metadata.map(function(metadataAPI) { 
							return { 
								legenda: metadataAPI.property,
								descricao: metadataAPI.value
							}
						}) : null
					}
				});

				resultado.resolve(lista);
			}, function() { 
				resultado.reject() 
			});

			return resultado.promise;
		}
	}
})();