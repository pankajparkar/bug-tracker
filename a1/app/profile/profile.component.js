(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('profile', {
            templateUrl: '/app/profile/profile.component.html',
            controller: 'profileController',
            controllerAs: 'profile'
        });
})(window, angular);