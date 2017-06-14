(function(window, angular, undefined){
    TicketListController.$inject = [];

    function TicketListController() {
        var ticketList = this;
    }

    angular.module('bug-tracker')
        .controller('ticketListController', TicketListController);
})(window, angular);