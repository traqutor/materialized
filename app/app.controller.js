(function () {

    angular
        .module('app')
        .controller('AppController', ['$mdSidenav', AppController]);

    function AppController($mdSidenav) {

        var self = this;
        self.selected = null;
        self.menu = [
            {
                name: 'Month',
                icone: 'view_module'
            },
            {
                name: 'Week',
                icone: 'view_column'
            },
            {
                name: 'Day',
                icone: 'view_stream'
            }
        ];
        self.items = [];
        self.selectMenu = selectMenu;
        self.toggleList = toggleUsersList;

        for (var i = 0; i < 49; i++)
            self.items[i] = i;

        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        function selectMenu(menu) {
            self.selected = angular.isNumber(menu) ? $scope.menu[menu] : menu;
            self.toggleList();
        }



    }

})();
