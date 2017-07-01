(function(window, angular, undefined){
    LoginController.$inject = [];

    function LoginController() {
        var login = this;
    }

    angular.module('bug-tracker')
        .controller('loginController', LoginController);
})(window, angular);