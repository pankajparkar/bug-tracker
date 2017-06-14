(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('ticketKanban', {
            templateUrl: '/app/ticket/ticket-kanban.component.html',
            controller: 'ticketKanbanController'
        });
})(window, angular);