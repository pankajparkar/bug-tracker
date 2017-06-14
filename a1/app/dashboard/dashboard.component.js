(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('dashboard', {
            templateUrl: '/app/dashboard/dashboard.component.html',
            controller: 'dashboardController'
        });
})(window, angular);