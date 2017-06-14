(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('filterBy', {
            templateUrl: '/app/filter-by/filter-by.component.html',
            controller: 'filterByController'
        });
})(window, angular);