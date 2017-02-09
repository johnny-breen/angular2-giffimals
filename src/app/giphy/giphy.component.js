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
var core_1 = require('@angular/core');
var giphy_service_1 = require('./giphy.service');
var router_1 = require('@angular/router');
var GiphyComponent = (function () {
    function GiphyComponent(router, giphyService) {
        this.router = router;
        this.giphyService = giphyService;
        this.itemsPerPage = 15;
        this.page = 1;
        this.searchTerm = 'kittens';
    }
    GiphyComponent.prototype.getGifs = function () {
        var _this = this;
        this.giphyService.getGifs({
            page: this.page - 1,
            size: this.itemsPerPage,
            searchTerm: this.searchTerm }).then(function (giphyResponse) { return _this.giphyResponse = giphyResponse; });
    };
    GiphyComponent.prototype.loadPage = function (page) {
        this.router.navigate(['/giphy'], { queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                search: this.searchTerm
            }
        });
        this.getGifs();
    };
    GiphyComponent.prototype.loadModal = function () {
        console.log('loading modal data');
    };
    GiphyComponent.prototype.ngOnInit = function () {
        this.getGifs();
    };
    GiphyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-giphy',
            templateUrl: 'giphy.component.html',
            styleUrls: ['giphy.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, giphy_service_1.GiphyService])
    ], GiphyComponent);
    return GiphyComponent;
}());
exports.GiphyComponent = GiphyComponent;
//# sourceMappingURL=giphy.component.js.map