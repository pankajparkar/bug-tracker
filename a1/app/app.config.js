(function(window, angular, undefined){
    ConfigBlock.$inject = ['$stateProvider', '$urlRouterProvider'];

    function getStates(){
        return [
            {name: 'welcome', url: '/welcome', component: 'welcome'},

            { name: 'dashboard', url: '/dashboard', component: 'dashboard' },
            { name: 'dashboard.ticket-list', url: '/ticket-list', component: 'ticketList'},
            { name: 'dashboard.ticket-kanban', url: '/ticket-kanban', component: 'ticketKanban'},
            { name: 'dashboard.ticket-details', url: '/ticket-details/:ticketId', component: 'ticketDetails'},

            { name: 'profile', url: '/profile', component: 'profile' },
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