(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('welcome', {
            template: '/app/welcome/welcome.component.html',
            controller: 'welcomeController'
        });
})(window, angular);