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
var filter_by_service_1 = require("./filter-by.service");
var common_service_1 = require("./../shared/common.service");
var FilterByNameComponent = (function () {
    function FilterByNameComponent(filterByService, commonService) {
        this.filterByService = filterByService;
        this.commonService = commonService;
    }
    FilterByNameComponent.prototype.getNames = function () {
        var _this = this;
        //created a promis that depends on it
        return new Promise(function (resolve, reject) {
            _this.commonService.getNames().subscribe(function (names) {
                _this.items = names;
                resolve();
            });
        });
    };
    FilterByNameComponent.prototype.setFilterName = function (item) {
        this.items.forEach(function (i) { return i.active = false; });
        var value = item ? item.name : item;
        this.filterByService.emitFilterNameValue(value);
    };
    FilterByNameComponent.prototype.ngOnInit = function () {
        this.getNames().then(this.setFilterName.bind(this));
        this.filterName$ = this.filterByService.filterNameObservable();
    };
    return FilterByNameComponent;
}());
FilterByNameComponent = __decorate([
    core_1.Component({
        selector: 'filter-by',
        templateUrl: '/app/filter-by/filter-by.component.html',
    }),
    __metadata("design:paramtypes", [filter_by_service_1.FilterByService,
        common_service_1.CommonService])
], FilterByNameComponent);
exports.FilterByNameComponent = FilterByNameComponent;
//# sourceMappingURL=filter-by.component.js.map