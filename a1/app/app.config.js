(function(window, angular, undefined){

    var authGuardResolve = {
        checkUserLogin: ['authService', function checkAuth(authService){
            return authService.checkUserLogin()
        }]
    }
    
    function getStates(){
        return [
            //welcome page
            {name: 'welcome', url: '/welcome', component: 'welcome', resolve: authGuardResolve },
            
            //login page
            {name: 'login', url: '/login', component: 'login'},

            //dashboard tickets page
            { name: 'dashboard', url: '/dashboard', component: 'dashboard', resolve: authGuardResolve },
            { name: 'dashboard.ticket-list', url: '/ticket-list', component: 'ticketList'},
            { name: 'dashboard.ticket-kanban', url: '/ticket-kanban', component: 'ticketKanban'},
            { name: 'dashboard.ticket-details', url: '/ticket-details/:ticketId', component: 'ticketDetails'},

            //profile page
            { name: 'profile', url: '/profile', component: 'profile', resolve: authGuardResolve },
        ]
    }

    ConfigBlock.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider'];

    function ConfigBlock($stateProvider, $urlRouterProvider, $locationProvider, $qProvider){
        var states = getStates();
        states.forEach(function(state){
            $stateProvider.state(state);
        });
        $urlRouterProvider.when('', '/welcome');
        $locationProvider.hashPrefix('');

        //to ignore rejection errro of ui-router 
        $qProvider.errorOnUnhandledRejections(false)
    }

    function runBlock($state){
        //TODO: tobe fixed
        //https://github.com/angular-ui/ui-router/issues/2977
        $state.defaultErrorHandler(angular.noop);
    }
    angular.module('bug-tracker')
        .config(ConfigBlock)
        .run(['$state', runBlock]);
})(window, angular);