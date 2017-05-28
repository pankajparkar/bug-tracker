"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var comment_service_1 = require("./comment.service");
var utility_service_1 = require("../shared/utility.service");
var filter_by_name_service_1 = require("./../filter-by-name/filter-by-name.service");
var CommentComponent = (function () {
    function CommentComponent(commentService, utilityService, filterByNameService) {
        this.commentService = commentService;
        this.utilityService = utilityService;
        this.filterByNameService = filterByNameService;
    }
    CommentComponent.prototype.getCommentList = function () {
        this.comments = this.commentService.getCommentList();
    };
    CommentComponent.prototype.ngOnInit = function () {
        this.getCommentList();
        this.filteredComments = this.utilityService.groupBy(this.comments, 'name');
    };
    return CommentComponent;
}());
CommentComponent = __decorate([
    core_1.Component({
        selector: 'comment',
        templateUrl: './comment.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [comment_service_1.CommentService,
        utility_service_1.UtilityService,
        filter_by_name_service_1.FilterByNameService])
], CommentComponent);
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map