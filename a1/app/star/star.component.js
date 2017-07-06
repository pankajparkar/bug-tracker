(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('star', {
            templateUrl: '/app/star/star.component.html',
            bindings: {
                stars: '<'
            },
            controller: 'starController',
            controllerAs: 'star'
        });
})(window, angular);