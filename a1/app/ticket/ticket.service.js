(function(window, angular, undefined){
    TicketService.$inject = ['$http'];

    function TicketService($http) {
        var ticketList = this;

        ticketList.getTicketList = getTicketList;

        function getTicketList() {
            return $http.get('/api/tickets.json').then(function(response) { return response.data; });
        };
    }

    angular.module('bug-tracker')
        .service('ticketService', TicketService);
})(window, angular);