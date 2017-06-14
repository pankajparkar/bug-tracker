(function(window, angular, undefined){
    TicketKanbanController.$inject = [];

    function TicketKanbanController() {
        var ticketKanban = this;
    }

    angular.module('bug-tracker')
        .controller('ticketKanbanController', TicketKanbanController);
})(window, angular);