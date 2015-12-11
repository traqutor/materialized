(function () {
    'use strict';

    angular
        .module('app', ['ngMaterial'])
        .config(config)
        .directive('fit', fit);

    config.$inject = ['$mdThemingProvider'];

    function config($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('red');
    }

    function fit($window) {
        return function ($scope) {
            $scope.initSize = function () {
                return $scope.fitheight = $window.innerHeight - 50 + 'px';
            };
            $scope.initSize();
            return angular.element($window).bind('resize', function () {
                $scope.initSize();
                return $scope.$apply();
            });
        };
    }

    // todo spróbować ustawić wysokość w dyrektywie
    function fitToWindow($window) {
        return {
            link: function ($scope, $element) {
                $element.css('height', '600px');
            }
        }
    }


})();


