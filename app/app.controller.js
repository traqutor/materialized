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
        self.loadFile = loadFile;



        for (var i = 0; i < 49; i++)
            self.items[i] = i;

        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        function selectMenu(menu) {
            self.selected = angular.isNumber(menu) ? $scope.menu[menu] : menu;
            self.toggleList();
        }

        function loadFile(){
            console.log('dzia lam?');
            var f = document.getElementById('file'),
                r = new FileReader();
            console.log('f',f);
            f.onclick.apply(f);
            //r.onloadend = function(e){
            //    var data = e.target.result;
            //
            //};
            //r.readAsArrayBuffer(f);
        }

    }

})();
