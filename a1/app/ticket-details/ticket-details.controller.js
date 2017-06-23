(function(window, angular, undefined){
    TicektDetailsController.$inject = ['$stateParams', 'ticketService', 'filterByService'];

    function TicektDetailsController($stateParams, ticketService, filterByService) {
        var ticektDetails = this;
        ticektDetails.$onInit = $onInit;

        function $onInit() { 
            ticketList(Number($stateParams.ticketId));
        }

        function ticketList(id){
            ticketService.getTicketList().then(
                function(tickets) {
                    ticektDetails.tickets = tickets;
                    if(id) ticektDetails.model = ticektDetails.tickets.filter(ticket => ticket.Id === id)[0];
                    filterTicketsByStatus();
                }
            );
        }
    }
    angular.module('bug-tracker')
        .controller('ticektDetailsController', TicektDetailsController);
})(window, angular);