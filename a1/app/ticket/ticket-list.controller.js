(function(window, angular, undefined){
    TicketListController.$inject = ['filterByService', 'ticketService'];

    function TicketListController(filterByService, ticketService) {
        var ticketList = this;
        ticketList.$onInit = $onInit;

        function getTickets(){
            ticketService.getTicketList().then(
                function(tickets) { 
                    ticketList.tickets = tickets;
                }
            );
        }

        function $onInit() { 
            //this.filterName$ = this.filterByService.filterNameObservable();
            getTickets();
        }
    }

    angular.module('bug-tracker')
        .controller('ticketListController', TicketListController);
})(window, angular);