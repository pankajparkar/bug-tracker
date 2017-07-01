(function(window, angular, undefined){
    NavbarController.$inject = ['authService'];

    function NavbarController(authService) {
        var navbar = this;
        navbar.isAutheticated = authService.isAutheticated;
        navbar.getUserName = authService.getUserName;
    }

    angular.module('bug-tracker')
        .controller('navbarController', NavbarController);
})(window, angular);