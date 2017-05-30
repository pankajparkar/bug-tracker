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
var CommentService = (function () {
    function CommentService() {
    }
    CommentService.prototype.getCommentList = function () {
        return [
            { id: 1, name: "Pankaj", title: "", comment: "This is test 1", status: 1 },
            { id: 2, name: "Pankaj", title: "", comment: "This is test 2", status: 2 },
            { id: 3, name: "Pankaj", title: "", comment: "This is test 3", status: 3 },
            { id: 4, name: "Pankaj", title: "", comment: "This is test 4", status: 1 },
            { id: 5, name: "Pankaj", title: "", comment: "This is test 5", status: 2 },
            { id: 6, name: "Kamlesh", title: "", comment: "This is test 5 Kamlesh", status: 1 },
            { id: 7, name: "Kamlesh", title: "", comment: "This is test 5 Kamlesh", status: 2 },
            { id: 8, name: "Kamlesh", title: "", comment: "This is test 5 Kamlesh", status: 3 },
            { id: 9, name: "Tom", title: "", comment: "This is test 9", status: 1 },
            { id: 10, name: "Tom", title: "", comment: "This is test 10", status: 2 },
        ];
    };
    return CommentService;
}());
CommentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map