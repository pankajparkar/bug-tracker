(function(window, angular, undefined){
    TicketKanbanController.$inject = ['ticketService'];

    function TicketKanbanController(ticketService) {
        var ticketKanban = this;

        ticketKanban.statuses = [{Id: 1, Name: "Todo"}, {Id: 2, Name: "In Progress"}, { Id: 3, Name: "Complete"}];
        ticketKanban.filterTicketsByStatus = filterTicketsByStatus;
        ticketKanban.$onInit = $onInit;

        function filterTicketsByStatus(){
            ticketKanban.todoItems = ticketKanban.tickets.filter(function(ticket) { return ticket.Status === 1; });
            ticketKanban.inProgressItems = ticketKanban.tickets.filter(function(ticket) { return ticket.Status === 2; });
            ticketKanban.completedItems = ticketKanban.tickets.filter(function(ticket) { return ticket.Status === 3; });
        }

        function ticketList(name){
            ticketService.getTicketList().then(
                function(tickets) {
                    ticketKanban.tickets = tickets;
                    if(name) ticketKanban.tickets = ticketKanban.tickets.filter(ticket => ticket.AssignedTo === name);
                    filterTicketsByStatus();
                }
            );
        }

        function $onInit() { 
            ticketList();

            //TODO search based on filter change
            //ticketKanban.filterName = this.filterByService.filterNameObservable();
            // ticketKanban.filterName$.subscribe(
            //     (name) => ticketKanban.ticketList(name)
            // )
        }
    }

    angular.module('bug-tracker')
        .controller('ticketKanbanController', TicketKanbanController);
})(window, angular);