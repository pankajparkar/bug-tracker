(function(window, angular, undefined){
    FilterByController.$inject = ['filterByService'];

    function FilterByController(filterByService) {
        var filterBy = this;

        filterBy.setFilterName = setFilterName;

        function setFilterName(item){
            filterBy.names.forEach(i => i.active = false);
            let value = item? item.name: item;
            filterByService.setSelectedName(value);        
        }

        function getFilterNames(){
            return filterByService.getNames().then(function(names){
                filterBy.names = names;
            });
        };

        function selectAccurateFilters(){
            var selectedName = filterByService.getSelectedName();
            if(selectedName && filterBy.names){
                filter.names.forEach(function(item){
                    item.active = item.name === selectedName.name;
                });
            }
        }

        filterBy.$onInit = function() { 
            getFilterNames().then(selectAccurateFilters);
            //this.filterName = this.filterByService.filterNameObservable();
        }
    }

    angular.module('bug-tracker')
        .controller('filterByController', FilterByController);
})(window, angular);