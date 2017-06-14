(function(window, angular, undefined){
    TicektDetailsController.$inject = [];

    function TicektDetailsController() {
        var ticektDetails = this;
    }

    angular.module('bug-tracker')
        .controller('ticektDetailsController', TicektDetailsController);
})(window, angular);