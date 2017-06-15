(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('sidebar', {
            templateUrl: '/app/sidebar/sidebar.component.html',
            controller: 'sidebarController',
            controller: 'sidebar'
        });
})(window, angular);