(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('ticektDetails', {
            templateUrl: '/app/ticekt-details/ticekt-details.component.html',
            controller: 'ticektDetailsController',
            controllerAs: 'ticketDetails'
        });
})(window, angular);