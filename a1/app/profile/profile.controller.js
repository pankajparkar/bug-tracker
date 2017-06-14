(function(window, angular, undefined){
    ProfileController.$inject = [];

    function ProfileController() {
        var profile = this;
    }

    angular.module('bug-tracker')
        .controller('profileController', ProfileController);
})(window, angular);