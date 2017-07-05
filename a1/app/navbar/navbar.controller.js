(function(window, angular, undefined){
    NavbarController.$inject = ['authService'];

    function NavbarController(authService) {
        var navbar = this;
        navbar.isAutheticated = authService.isAutheticated;
        navbar.getUserName = authService.getUserName;
        navbar.logout = authService.logout;
    }

    angular.module('bug-tracker')
        .controller('navbarController', NavbarController);
})(window, angular);