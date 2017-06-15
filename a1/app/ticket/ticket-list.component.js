(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('ticketList', {
            templateUrl: '/app/ticket/ticket-list.component.html',
            controller: 'ticketListController',
            controllerAs: 'ticketList'
        });
})(window, angular);