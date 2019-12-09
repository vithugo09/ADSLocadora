(function(){

	angular
		.module('Locadora')	
		.controller('CarrinhoController', CarrinhoController)

	CarrinhoController.$inject = ['CarrinhoCompraService'];

	function CarrinhoController(CarrinhoCompraService){
		var ctrl = this;
		ctrl.titulo = 'Carrinho de Compras';	
		
		ctrl.removerCarro = function(oCarro) {

			CarrinhoCompraService.removerCarro(oCarro.titulo);
		}

		ctrl.exibeLista = function() {
			return CarrinhoCompraService.listaCarros;
		}
	}
})();