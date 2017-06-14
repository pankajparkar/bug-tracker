(function(window, angular, undefined){
    FilterByService.$inject = [];

    function FilterByService() {
        var filterBy = this;
    }

    angular.module('bug-tracker')
        .service('filterByService', FilterByService);
})(window, angular);