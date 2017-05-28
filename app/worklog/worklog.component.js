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
var worklog_service_1 = require("./worklog.service");
var utility_service_1 = require("../shared/utility.service");
var filter_by_name_service_1 = require("./../filter-by-name/filter-by-name.service");
var WorklogComponent = (function () {
    function WorklogComponent(worklogService, utilityService, filterByNameService) {
        this.worklogService = worklogService;
        this.utilityService = utilityService;
        this.filterByNameService = filterByNameService;
    }
    WorklogComponent.prototype.woklogList = function () {
        this.worklogs = this.worklogService.getWorklogList();
        console.log(this.filteredWorklogs);
    };
    WorklogComponent.prototype.ngOnInit = function () {
        this.filter$ = this.filterByNameService.filterWatch();
        this.woklogList();
    };
    return WorklogComponent;
}());
WorklogComponent = __decorate([
    core_1.Component({
        selector: 'worklog',
        templateUrl: './worklog.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [worklog_service_1.WorklogService,
        utility_service_1.UtilityService,
        filter_by_name_service_1.FilterByNameService])
], WorklogComponent);
exports.WorklogComponent = WorklogComponent;
//# sourceMappingURL=worklog.component.js.map