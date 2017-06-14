(function(window, angular, undefined){
    WelcomeController.$inject = [];

    function WelcomeController() {
        var welcome = this;
    }

    angular.module('bug-tracker')
        .controller('welcomeController', WelcomeController);
})(window, angular);