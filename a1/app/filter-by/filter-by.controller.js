(function(window, angular, undefined){
    FilterByController.$inject = [];

    function FilterByController() {
        var filterBy = this;
        filterBy.filterName;
        filterBy.items = [{name: "Alex"},{name: "John"},{name: "Tom"}];

        filterBy.setFilterName = setFilterName;

        function setFilterName(item){
            this.items.forEach(i => i.active = false);
            let value = item? item.name: item;
            //this.filterByService.emitFilterNameValue(value);        
        }

        filterBy.$onInit = function() { 
            //this.filterName = this.filterByService.filterNameObservable();
        }
    }

    angular.module('bug-tracker')
        .controller('filterByController', FilterByController);
})(window, angular);