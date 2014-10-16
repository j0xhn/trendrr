angular.module('trendrr').
controller('listCtrl', function($scope, listService) {
	$scope.test = "Angular Is Working";	
	$scope.list = [];
	listService.getList().then(function(data){
		for(var key in data){
			$scope.list.push(data[key]);
		}
		console.log($scope.list);
	});
});
