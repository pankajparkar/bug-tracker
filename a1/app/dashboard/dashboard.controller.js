(function(window, angular, undefined){
    DashboardController.$inject = ['$state'];

    function DashboardController($state) {
        var dashboard = this;
        dashboard.isTicketDetailsRoute = isTicketDetailsRoute;

        function isTicketDetailsRoute(){
            return $state.current.url.indexOf('/ticket-details');
        };
    }

    angular.module('bug-tracker')
        .controller('dashboardController', DashboardController);
})(window, angular);