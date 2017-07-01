(function(window, angular, undefined){
    ticketDetailsController.$inject = ['$stateParams', 'ticketService', 'commonService'];

    function ticketDetailsController($stateParams, ticketService, commonService) {
        var ticketDetails = this;
        ticketDetails.$onInit = $onInit;
        ticketDetails.edit = false;
        ticketDetails.submit = submit;

        function $onInit() { 
            ticketDetails.edit = false;
            ticketList(Number($stateParams.ticketId));
            getNames();
            getTicketTypes();
            getTicketStatuses();
        }

        function getTicketStatuses() {
            commonService.getTicketStatuses().then(function(statuses){
                ticketDetails.statuses = statuses;
            })
        };

        function getNames() {
            commonService.getNames().then(function(names){
                ticketDetails.names = names;
            })
        };

        function getTicketTypes() {
            commonService.getTicketTypes().then(function(types){
                ticketDetails.ticketTypes = types;
            })
        };

        function submit(form, model){
            console.log(form, model);
        }

        function ticketList(id){
            ticketService.getTicketList().then(
                function(tickets) {
                    ticketDetails.tickets = tickets;
                    if(id) ticketDetails.model = ticketDetails.tickets.filter(ticket => ticket.Id === id)[0];
                }
            );
        }
    }
    angular.module('bug-tracker')
        .controller('ticketDetailsController', ticketDetailsController);
})(window, angular);