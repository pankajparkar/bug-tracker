(function(window, angular, undefined){
    WelcomeController.$inject = [];

    function StarController() {
        var star = this;
        star.$onChanges = $onChanges;

        function $onChanges(changes){
            star.items = []
            for(var i= 1; i <= 10; i++) 
                star.items.push({ highlight: i <= changes.stars })
        }
    }

    angular.module('bug-tracker')
        .controller('starController', StarController);
})(window, angular);