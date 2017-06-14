(function(window, angular, undefined){
    filterByController.$inject = [];

    function DashboardController() {
        var filterBy = this;
    }

    angular.module('bug-tracker')
        .controller('filterByController', filterByController);
})(window, angular);