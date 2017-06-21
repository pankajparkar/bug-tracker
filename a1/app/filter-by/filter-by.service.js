(function(window, angular, undefined){
    FilterByService.$inject = ['$http', '$rootScope'];

    function FilterByService($http, $rootScope) {
        var filterByService = this, filter = {
            name: null
        };
        filterByService.getNames = getNames;
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
        
        function getNames(){
            return $http.get('/api/names.json').then(function(response){
                return response.data;
            });
        }
    }

    angular.module('bug-tracker')
        .service('filterByService', FilterByService);
})(window, angular);