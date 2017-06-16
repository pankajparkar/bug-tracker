(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('mainApp', {
            templateUrl: '/app/app.component.html',
            controller: 'appController',
            controllerAs: 'main'
        });
})(window, angular);