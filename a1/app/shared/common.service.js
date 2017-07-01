(function(window, angular, undefined){
    CommonService.$inject = ['$http'];
    function CommonService($http){
        var commonService = this;
        commonService.getTicketTypes = getTicketTypes;
        commonService.getNames = getNames;
        commonService.unWrapData = unWrapData;
        commonService.getTicketStatuses = getTicketStatuses;
        
        function getTicketTypes(){
            return $http.get('/api/ticket-types.json').then(unWrapData)
        }

        function getNames(){
            return $http.get('/api/names.json').then(unWrapData);
        }

        function getTicketStatuses(){
            return $http.get('/api/ticket-status.json').then(unWrapData);
        }

        function unWrapData(response){
            return response.data;
        }

    }
    angular.module('bug-tracker')
        .service('commonService', CommonService);
})(window, angular);