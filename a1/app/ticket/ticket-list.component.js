(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('ticketList', {
            templateUrl: '/app/ticket-list/ticket-list.component.html',
            controller: 'ticketListController'
        });
})(window, angular);