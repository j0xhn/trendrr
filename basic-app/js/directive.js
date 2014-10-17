'use strict';
 var app = angular.module('trendrr');
app.directive('mixItUp',function($compile, $timeout){
        return {

            restrict: 'A',
            link: function(scope, element, attrs) {
                // First we need to compile inside the <div/> tag to ensure that <div ng-repeat /> is compiled
                
                scope.$watchCollection(scope.list, function() {
                    // Rather than using $(element), you can make use of angular.element(element) when using AngularJS with jQuery
                    // !!!https://mixitup.kunkalabs.com/docs/version-1-migration/!!!
                    // Target elements no longer require the default css rule opacity: 0;. Including this will break MixItUp. However, the default rule display: none; is still required on all targets.
                    console.log(angular.element(element));
                    angular.element(element).mixItUp(
                    {
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
            }
        }
    });