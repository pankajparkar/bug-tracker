(function(window, angular, undefined){
    FilterByController.$inject = [];

    function FilterByController() {
        var filterBy = this;
    }

    angular.module('bug-tracker')
        .controller('filterByController', FilterByController);
})(window, angular);