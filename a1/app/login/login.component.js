(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('login', {
            templateUrl: '/app/login/login.component.html',
            controller: 'loginController',
            controllerAs: 'login'
        });
})(window, angular);