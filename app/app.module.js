(function () {
    'use strict';

    angular
        .module('app', ['ngMaterial', 'ngFileUpload'])
        .config(config)
        .directive('fitToWindow', fitToWindow)
        .directive('uploadAnyFile', uploadAnyFile)
        .directive('chooseFile', chooseFile);

    config.$inject = ['$mdThemingProvider'];

    function config($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('yellow');
    }

    fitToWindow.$inject = ['$window', 'Upload'];
    function fitToWindow($window, Upload) {

        function link(scope, element, attrs) {
            function initSize() {
                var fitheight = ($window.innerHeight) - attrs.fitToWindow + 'px';
                element.css('height', fitheight);
            }

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

    function uploadAnyFile() {
        return {
            restrict: 'EA',
            scope: {
                object: '=',
                action: '&'
            },
            link: function (scope, element, attrs) {

            },
            templateUrl: 'load-any-file.html'
        }
    }

    function chooseFile() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {

                console.log('attrs.chooseFile', attrs.chooseFile);

                elem.bind('click', function () {
                    var i = angular.element(document.querySelector('#' + attrs.chooseFile))[0].click();
                    console.log('i co: ', i);
                });
            }
        };
    };


})();


