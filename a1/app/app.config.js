(function(window, angular, undefined){
    ConfigBlock.$inject = ['$stateProvider', '$urlRouterProvider'];

    function getStates(){
        return [
            {name: 'welcome',component: 'welcome'},
        ]
    }
    function ConfigBlock($stateProvider, $urlRouterProvider){
        var states = getStates();
        states.forEach(function(state){
            $stateProvider.state(state);
        });
        $urlRouterProvider.when('', '/welcome')
    }
    angular.module('bug-tracker')
        .config(ConfigBlock);
})(window, angular);