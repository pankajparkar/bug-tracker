(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('mainApp', {
            templateUrl: '/app/app.component.html',
            controller: 'appController',
            controller: 'main'
        });
})(window, angular);