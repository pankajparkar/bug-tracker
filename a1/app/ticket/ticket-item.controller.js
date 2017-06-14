(function(window, angular, undefined){
    TicketItemController.$inject = [];

    function TicketItemController() {
        var ticketItem = this;
    }

    angular.module('bug-tracker')
        .controller('ticketItemController', TicketItemController);
})(window, angular);