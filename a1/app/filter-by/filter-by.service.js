(function(window, angular, undefined){
    FilterByService.$inject = ['$http', '$rootScope'];

    function FilterByService($http, $rootScope) {
        var filterByService = this, filter = {
            name: null
        };
        
        filterByService.getFilter = getFilter;
        filterByService.setSelectedName = setSelectedName;

        //getter filter
        function getFilter() {
            return angular.copy(filter);
        };

        //setter filter
        function setSelectedName(val) {
            filter.name = val;
            $rootScope.$emit('filterChanged')
        };
        
    }

    angular.module('bug-tracker')
        .service('filterByService', FilterByService);
})(window, angular);