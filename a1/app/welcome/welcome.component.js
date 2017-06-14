(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('welcome', {
            templateUrl: '/app/welcome/welcome.component.html',
            controller: 'welcomeController'
        });
})(window, angular);