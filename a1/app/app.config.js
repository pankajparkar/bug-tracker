(function(window, angular, undefined){
    ConfigBlock.$inject = ['$stateProvider', '$urlRouterProvider'];

    function getStates(){
        return [
            {name: 'welcome', url: '/welcome', component: 'welcome'},
            // { 
            //     path: 'dashboard', component: DashboardComponent, 
            //     children : [
            //     { path: 'ticket-list', component: TicketListComponent },
            //     { path: 'ticket-kanban', component: TicketKanbanComponent },
            //     { path: 'ticket-details/:ticketId', component: TicketDetailsComponent },
            //     { path: '', redirectTo: 'ticket-list', pathMatch: "full" }
            //     ]
            // },
            // { path: 'profile', component: ProfileComponent },
            // { path: '', redirectTo: "welcome", pathMatch: 'full' },
            // { path: '**', redirectTo: 'welcome', pathMatch: "full" }
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