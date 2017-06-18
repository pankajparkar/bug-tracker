(function(window, angular, undefined){
    SidebarController.$inject = [];

    function SidebarController() {
        var sidebar = this;

        sidebar.$onInit = function() { 
            sidebar.list = [
                {name: 'List View', sref: 'dashboard.ticket-list'},
                {name: 'Kanban View', sref: 'dashboard.ticket-kanban'}
            ];
        };
    }

    angular.module('bug-tracker')
        .controller('sidebarController', SidebarController);
})(window, angular);