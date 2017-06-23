(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('ticketDetails', {
            templateUrl: '/app/ticket-details/ticket-details.component.html',
            controller: 'ticektDetailsController',
            controllerAs: 'ticketDetails'
        });
})(window, angular);