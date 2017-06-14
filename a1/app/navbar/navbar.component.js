(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('navbar', {
            templateUrl: '/app/navbar/navbar.component.html',
            controller: 'navbarController'
        });
})(window, angular);