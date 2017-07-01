(function(window, angular, undefined){
    LoginController.$inject = ['authService', '$state'];

    function LoginController(authService, $state) {
        var login = this;
        login.submit = submit;

        function submit(){
            authService.login(login.user);
            $state.go('welcome');
        };
    };

    angular.module('bug-tracker')
        .controller('loginController', LoginController);
})(window, angular);