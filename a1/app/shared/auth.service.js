(function(window, angular, undefined){
    AuthService.$inject = ['$http', '$state'];
    function AuthService($http, $state){
        var authService = this, currentUser;
        authService.isAutheticated = isAutheticated;
        authService.login = login;
        authService.logout = logout;
        authService.getUserName = getUserName;
        authService.checkUserLogin = checkUserLogin;

        //setting up user object
        function login(user){
            currentUser = user;
            //TODO: Add more fields by default
            currentUser.LastLoginDate = new Date();
        }

        //set current user to blank
        function logout(response){
            currentUser = undefined;
        }

        //set current user to blank
        function getUserName(response){
            return currentUser && currentUser.name;
        }
        
        //check user is present or not
        function isAutheticated(response){
            return !!currentUser;
        }

        function checkUserLogin(){
            if(!!currentUser) return true;
            return $state.go('login');
        }

    }
    angular.module('bug-tracker')
        .service('authService', AuthService);
})(window, angular);