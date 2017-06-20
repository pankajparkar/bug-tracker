(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('ticketItem', {
            bindings: {
                ticket: '<'
            },
            templateUrl: "/app/ticket/ticket-item.component.html", 
            controller: 'ticketItemController',
            controllerAs: 'ticketItem'
        });
})(window, angular);