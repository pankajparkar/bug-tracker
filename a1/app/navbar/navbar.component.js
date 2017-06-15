(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('btNavbar', {
            templateUrl: '/app/navbar/navbar.component.html',
            controller: 'navbarController',
            controller: 'navbar'
        });
})(window, angular);