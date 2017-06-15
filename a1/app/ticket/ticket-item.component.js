(function(window, angular, undefined){
    angular.module('bug-tracker')
        .component('ticketItem', {
            //templateUrl: '/app/ticket-item/ticket-item.component.html',
            template: "<span class=\"glyphicon\" [ngClass]=\"{'glyphicon-tags': ticket.Type == 'Feature','glyphicon-flash': ticket.Type == 'Bug','glyphicon-arrow-down': ticket.Type == 'Minor'}\"></span><a [routerLink]=\"['../ticket-details', ticket.Id]\">{{ticket.TicketNumber}}</a> {{ticket.Title}}<span class=\"pull-right\"><small>Priority</small><span class=\"label label-default\">{{ticket.Priority}}</span></span>",
            controller: 'ticketItemController',
            controllerAs: 'ticketItem'
        });
})(window, angular);