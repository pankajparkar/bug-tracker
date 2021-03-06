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
var StarComponent = (function () {
    function StarComponent() {
        this.items = [];
    }
    Object.defineProperty(StarComponent.prototype, "ratings", {
        get: function () {
            return this._ratings;
        },
        set: function (value) {
            this.items = [];
            this._ratings = value;
            for (var i = 1; i <= 10; i++) {
                this.items.push({ highlight: i <= value });
            }
        },
        enumerable: true,
        configurable: true
    });
    StarComponent.prototype.onchange = function (index) {
        if (!this.isDisabled) {
            this.ratings = +1;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], StarComponent.prototype, "isDisabled", void 0);
    __decorate([
        core_1.Input('ratings'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StarComponent.prototype, "ratings", null);
    StarComponent = __decorate([
        core_1.Component({
            selector: 'star',
            templateUrl: '/app/star/star.component.html',
        })
    ], StarComponent);
    return StarComponent;
}());
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.component.js.map