(function(){

	angular
		.module('Locadora')	
		.controller('ListaCarroController', ListaCarroController)


	ListaCarroController.$inject = ['$rootScope','BuscarCarroAPI'];

	function ListaCarroController($rootScope,BuscarCarroAPI) {
		var ctrl = this;
		ctrl.titulo = 'Encontre seu carro';	
		ctrl.textoBusca = null;

		ctrl.Buscar = function() {
			BuscarCarroAPI.Buscar(ctrl.textoBusca).then(function(lista) {
				ctrl.lista = lista;
				console.log(lista);
			})
		}

		ctrl.AbrirDetalheCarro = function(carro) {
			$rootScope.$broadcast('AbrirCarro', carro);
		}
	}
})();