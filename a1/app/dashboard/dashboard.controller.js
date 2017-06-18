(function(window, angular, undefined){
    DashboardController.$inject = ['$state'];

    function DashboardController($state) {
        var dashboard = this;
        dashboard.isTicketDetailsRoute = isTicketDetailsRoute;

        dashboard.$onInit= function() {
            if($state.current.name === "dashboard") $state.go('dashboard.ticket-list')
        };

        function isTicketDetailsRoute(){
            return $state.current.url.indexOf('/ticket-details') > -1;
        };
    }

    angular.module('bug-tracker')
        .controller('dashboardController', DashboardController);
})(window, angular);