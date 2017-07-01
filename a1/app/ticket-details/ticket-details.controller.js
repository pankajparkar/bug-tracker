(function(window, angular, undefined){
    TicektDetailsController.$inject = ['$stateParams', 'ticketService', 'filterByService'];

    function TicektDetailsController($stateParams, ticketService, filterByService) {
        var ticektDetails = this;
        ticektDetails.$onInit = $onInit;
        ticektDetails.edit = false;
        ticektDetails.submit = submit;

        function $onInit() { 
            ticektDetails.edit = false;
            ticketList(Number($stateParams.ticketId));
        }

        function submit(form, model){
            console.log(form, model);
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