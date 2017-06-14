(function(window, angular, undefined){
    NavbarController.$inject = [];

    function NavbarController() {
        var navbar = this;
    }

    angular.module('bug-tracker')
        .controller('navbarController', NavbarController);
})(window, angular);