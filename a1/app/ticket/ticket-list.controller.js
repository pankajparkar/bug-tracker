(function(window, angular, undefined){
    TicketListController.$inject = ['filterByService', 'ticketService', '$filter', '$rootScope'];

    function TicketListController(filterByService, ticketService, $filter, $rootScope) {
        var ticketList = this, filterName, filterChangedDeregister;
        ticketList.$onInit = $onInit;

        function getTickets(item){
            ticketService.getTicketList().then(
                function(tickets) { 
                    ticketList.tickets = $filter('groupBy')(tickets, 'AssignedTo', item ? item.name: undefined);
                }
            );
        };

        function $onInit() {
            registerEvent();
            filterName = filterByService.getFilter().name;
            getTickets(filterName);
        };

        function registerEvent(){
            filterChangedDeregister = $rootScope.$on('filterChanged', function(){
                filterName = filterByService.getFilter().name;
                getTickets(filterName);
            });
        };

        function $onDestroy(){
            filterChangedDeregister();
        };
    }

    angular.module('bug-tracker')
        .controller('ticketListController', TicketListController);
})(window, angular);