(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('ticektDetails', {
            templateUrl: '/app/ticekt-details/ticekt-details.component.html',
            controller: 'ticektDetailsController'
        });
})(window, angular);