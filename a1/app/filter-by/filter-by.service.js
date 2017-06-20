(function(window, angular, undefined){
    FilterByService.$inject = ['$http'];

    function FilterByService($http) {
        var filterByService = this, selectedName;
        filterByService.getNames = getNames;
        filterByService.getSelectedName = getSelectedName;
        filterByService.setSelectedName = setSelectedName;

        //getter over selected Name private variable
        function getSelectedName() {
            return selectedName;
        };

        //setter
        function setSelectedName(val) {
            selectedName = val;
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