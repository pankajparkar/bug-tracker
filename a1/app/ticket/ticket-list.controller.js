(function(window, angular, undefined){
    TicketListController.$inject = ['filterByService', 'ticketService', '$filter'];

    function TicketListController(filterByService, ticketService, $filter) {
        var ticketList = this;
        ticketList.$onInit = $onInit;

        function getTickets(){
            ticketService.getTicketList().then(
                function(tickets) { 
                    ticketList.tickets = $filter('groupBy')(tickets, 'AssignedTo', filterByService.getSelectedName());
                }
            );
        }

        function $onInit() {
            getTickets();
        }
    }

    angular.module('bug-tracker')
        .controller('ticketListController', TicketListController);
})(window, angular);