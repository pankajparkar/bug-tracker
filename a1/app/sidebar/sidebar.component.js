(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('sidebar', {
            templateUrl: '/app/sidebar/sidebar.component.html',
            controller: 'sidebarController',
            controllerAs: 'sidebar'
        });
})(window, angular);