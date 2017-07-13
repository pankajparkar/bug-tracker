"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GroupByPipe = (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (collection, prop, filterBy) {
        var propertiesUniqueArray = [];
        if (!collection)
            collection = [];
        if (filterBy)
            collection = collection.filter(function (item) { return item[prop] === filterBy; });
        collection.forEach(function (item) {
            var val = item[prop];
            if (propertiesUniqueArray.indexOf(val) === -1)
                propertiesUniqueArray.push(val);
        });
        var groupedBy = propertiesUniqueArray.map(function (propVal) {
            return {
                key: propVal,
                values: collection.filter(function (item) { return item[prop] === propVal; })
            };
        });
        return groupedBy;
    };
    return GroupByPipe;
}());
GroupByPipe = __decorate([
    core_1.Pipe({
        name: 'groupBy'
    })
], GroupByPipe);
exports.GroupByPipe = GroupByPipe;
//# sourceMappingURL=group-by.pipe.js.map