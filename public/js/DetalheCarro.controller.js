(function(){

	angular
		.module('Locadora')	
		.controller('DetalheCarroController', DetalheCarroController)


	DetalheCarroController.$inject = ['$rootScope', 'CarrinhoCompraService'];

	function DetalheCarroController($rootScope, CarrinhoCompraService) {
		var ctrl = this;

		$rootScope.$on('AbrirCarro', function(evt, carro) {
			ctrl.exibeDetalheCarro(carro);
		})

		ctrl.exibeDetalheCarro = function(carro){
			$rootScope.layout = {
				exibeListaCarro: false,
				exibeDetalheCarro: true
			}

			ctrl.carroSelecionado = carro;
		}

		ctrl.voltarParaLista = function(){
			$rootScope.layout = {
				exibeListaCarro: true,
				exibeDetalheCarro: false
			}
		}

		ctrl.adicionarCarroNoCarrinho = function() {
			CarrinhoCompraService.adicionarCarro(ctrl.carroSelecionado);
		}
	}
})();