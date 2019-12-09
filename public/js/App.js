angular.module('Locadora',[]).run(['$rootScope', function($rootScope) {
	$rootScope.titulo = 'Locadora de Carros';	
	$rootScope.layout = {
		exibeListaCarro: true,
		exibeDetalheCarro: false,
		exibeCarrinho: false,
		exibeNotificacao: false
	}
}]);