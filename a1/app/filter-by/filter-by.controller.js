(function(window, angular, undefined){
    FilterByController.$inject = ['filterByService'];

    function FilterByController(filterByService) {
        var filterBy = this;

        filterBy.setFilterName = setFilterName;

        function setFilterName(item){
            filterBy.names.forEach(i => i.active = (item ? item.name: null) === i.name);
            filterByService.setSelectedName(item);
            filterBy.selectedName = item;   
        }

        function getFilterNames(){
            return filterByService.getNames().then(function(names){
                filterBy.names = names;
            });
        };

        function selectAccurateFilters(){
            filterBy.selectedName = filterByService.getFilter().name;
            if(filterBy.selectedName && filterBy.selectedName.names){
                filter.names.forEach(function(item){
                    item.active = item.name === selectedName.name;
                });
            }
        }

        filterBy.$onInit = function() { 
            getFilterNames().then(selectAccurateFilters);
        }
    }

    angular.module('bug-tracker')
        .controller('filterByController', FilterByController);
})(window, angular);