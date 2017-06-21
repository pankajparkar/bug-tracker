(function(window, angular, undefined){
    TicketKanbanController.$inject = ['ticketService', 'filterByService', '$rootScope'];

    function TicketKanbanController(ticketService, filterByService, $rootScope) {
        var ticketKanban = this;

        ticketKanban.statuses = [{Id: 1, Name: "Todo"}, {Id: 2, Name: "In Progress"}, { Id: 3, Name: "Complete"}];
        ticketKanban.filterTicketsByStatus = filterTicketsByStatus;
        ticketKanban.$onInit = $onInit;
        ticketKanban.$onDestroy = $onDestroy;

        function filterTicketsByStatus(){
            ticketKanban.todoItems = ticketKanban.tickets.filter(function(ticket) { return ticket.Status === 1; });
            ticketKanban.inProgressItems = ticketKanban.tickets.filter(function(ticket) { return ticket.Status === 2; });
            ticketKanban.completedItems = ticketKanban.tickets.filter(function(ticket) { return ticket.Status === 3; });
        }

        function ticketList(item){
            ticketService.getTicketList().then(
                function(tickets) {
                    ticketKanban.tickets = tickets;
                    if(item) ticketKanban.tickets = ticketKanban.tickets.filter(ticket => ticket.AssignedTo === item.name);
                    filterTicketsByStatus();
                }
            );
        }

        function registerEvent(){
            filterChangedDeregister = $rootScope.$on('filterChanged', function(){
                filterName = filterByService.getFilter().name;
                ticketList(filterName);
            });
        };

        function $onInit() { 
            registerEvent();
            ticketList();
        }

        function $onDestroy(){
            filterChangedDeregister();
        };
    }

    angular.module('bug-tracker')
        .controller('ticketKanbanController', TicketKanbanController);
})(window, angular);