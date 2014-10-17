angular.module('trendrr').
controller('listCtrl', function($scope, listService, onFinishRenderDirective) {
	$scope.test = "Angular Is Working";	
	$scope.list = [];
	listService.getList().then(function(data){
		for(var key in data){
			$scope.list.push(data[key]);
		}
		console.log($scope.list);  
	});
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		console.log('finished ng-repeat on list')
		$('#list-container').mixItUp({
    animation: {
      animateChangeLayout: true, // Animate the positions of targets as the layout changes
      animateResizeTargets: true, // Animate the width/height of targets as the layout changes
      duration: 500,
      effects: 'fade rotateZ(180deg) rotateX(180deg) scale(0.01)',
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
    },
    layout: {
      containerClass: 'grid' // Add the class 'list' to the container on load
    }
  });
      });	
});
