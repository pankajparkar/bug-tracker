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
var FilterByNameComponent = (function () {
    function FilterByNameComponent(filterByService) {
        this.filterByService = filterByService;
        this.items = [{ name: "Pankaj" }, { name: "Kamlesh" }, { name: "Tom" }];
    }
    FilterByNameComponent.prototype.setFilter = function (item) {
        this.items.forEach(function (i) { return i.active = false; });
        item.active = true;
        this.filterByService.emitFilterNameValue(item.name);
    };
    FilterByNameComponent.prototype.ngOnInit = function () {
        this.obs$ = this.filterByService.filterNameObservable();
        this.obs$.subscribe(function (data) { return console.log('Test', data); });
    };
    return FilterByNameComponent;
}());
FilterByNameComponent = __decorate([
    core_1.Component({
        selector: 'filter-by',
        templateUrl: './filter-by.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [filter_by_service_1.FilterByService])
], FilterByNameComponent);
exports.FilterByNameComponent = FilterByNameComponent;
//# sourceMappingURL=filter-by.component.js.map