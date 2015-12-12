(function () {
    'use strict';

    angular
        .module('app', ['ngMaterial'])
        .config(config)
        .directive('fitToWindow', fitToWindow);

    config.$inject = ['$mdThemingProvider'];
    fitToWindow.$inject = ['$window'];


    function config($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('yellow');
    }

    function fitToWindow($window) {

        function link(scope, element, attrs) {
            function initSize() {
                var fitheight = ($window.innerHeight) - attrs.fitToWindow + 'px';
                element.css('height', fitheight);
            };
            initSize();
            angular.element($window).bind('resize', function () {
                initSize();
                scope.$apply();
            });
        }

        return {
            link: link
        }
    }


})();


