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
var NgZoneDemoComponent = (function () {
    function NgZoneDemoComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.progress = 0;
    }
    // Loop inside the Angular zone
    // so the UI DOES refresh after each setTimeout cycle
    NgZoneDemoComponent.prototype.processWithinAngularZone = function () {
        this.label = 'inside';
        this.progress = 0;
        this._increaseProgress(function () { return console.log('Inside Done!'); });
    };
    // Loop outside of the Angular zone
    // so the UI DOES NOT refresh after each setTimeout cycle
    NgZoneDemoComponent.prototype.processOutsideOfAngularZone = function () {
        var _this = this;
        this.label = 'outside';
        this.progress = 0;
        this._ngZone.runOutsideAngular(function () {
            _this._increaseProgress(function () {
                // reenter the Angular zone and display done
                _this._ngZone.run(function () { console.log('Outside Done!'); });
            });
        });
    };
    NgZoneDemoComponent.prototype._increaseProgress = function (doneCallback) {
        var _this = this;
        this.progress += 1;
        console.log("Current progress: " + this.progress + "%");
        if (this.progress < 100) {
            window.setTimeout(function () {
                _this._increaseProgress(doneCallback);
            }, 10);
        }
        else {
            doneCallback();
        }
    };
    NgZoneDemoComponent = __decorate([
        core_1.Component({
            selector: 'my-test',
            template: "\n    <p>Progress: {{progress}}%</p>\n    <p *ngIf=\"progress >= 100\">Done processing {{label}} of Angular zone!</p>\n    \n    <button (click)=\"processWithinAngularZone()\">Process within Angular zone</button>\n    <button (click)=\"processOutsideOfAngularZone()\">Process outside of Angular zone</button>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], NgZoneDemoComponent);
    return NgZoneDemoComponent;
}());
exports.NgZoneDemoComponent = NgZoneDemoComponent;
/*
 Copyright 2016 thoughtram GmbH. All Rights Reserved.
 Use of this source code is governed by an TTML-style license that
 can be found in the license.txt file at http://thoughtram.io/license.txt
 */ 
//# sourceMappingURL=demo1.js.map