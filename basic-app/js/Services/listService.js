var app = angular.module('trendrr');

app.service('listService', function($q, $http){
	this.getList = function(){
		var deferred = $q.defer()
		$http.get('/data/list.json').then(function(response){
			deferred.resolve(response.data);
		})

		return deferred.promise;
	}
			
});


