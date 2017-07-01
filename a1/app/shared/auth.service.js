(function(window, angular, undefined){
    AuthService.$inject = ['$http'];
    function AuthService($http){
        var authService = this, currentUser;
        authService.isAutheticated = isAutheticated;
        authService.login = login;
        authService.logout = logout;

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
        
        //check user is present or not
        function isAutheticated(response){
            return !!currentUser;
        }

    }
    angular.module('bug-tracker')
        .service('authService', AuthService);
})(window, angular);