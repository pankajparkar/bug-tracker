(function(window, angular, undefined){
    GroupByFilter.$inject = [];
    function GroupByFilter(){
        return function(collection, prop, filterBy){
            var propertiesUniqueArray = [];
            if(!collection) collection = [];
            if(filterBy) collection = collection.filter(item => item[prop] === filterBy);
            collection.forEach((item)=> {
                var val = item[prop];
                if(propertiesUniqueArray.indexOf(val) === -1)
                    propertiesUniqueArray.push(val);
            });
            var groupedBy = propertiesUniqueArray.map((propVal)=>{
                return {
                    key: propVal,
                    values: collection.filter(item=> item[prop] === propVal)
                };
            })
            return groupedBy;
        }
        
    }
    angular.module('bug-tracker')
        .filter('groupBy', GroupByFilter);
})(window, angular);