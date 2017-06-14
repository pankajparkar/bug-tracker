(function(window, angular, undefined){
    SidebarController.$inject = [];

    function SidebarController() {
        var sidebar = this;
    }

    angular.module('bug-tracker')
        .controller('sidebarController', SidebarController);
})(window, angular);