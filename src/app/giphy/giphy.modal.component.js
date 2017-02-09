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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var GiphyModal = (function () {
    function GiphyModal(modalService) {
        this.modalService = modalService;
    }
    GiphyModal.prototype.open = function (content) {
        console.log('content=' + this.embedUrl);
        this.modalService.open(content).result;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GiphyModal.prototype, "embedUrl", void 0);
    GiphyModal = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'giphy-modal-iframe',
            templateUrl: './giphy.modal.component.html'
        }), 
        __metadata('design:paramtypes', [ng_bootstrap_1.NgbModal])
    ], GiphyModal);
    return GiphyModal;
}());
exports.GiphyModal = GiphyModal;
//# sourceMappingURL=giphy.modal.component.js.map