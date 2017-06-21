webpackJsonp([5],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* SettingsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__settings__["a" /* SettingsPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* SettingsPage */]
        ]
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(databaseService, modalCtrl) {
        this.databaseService = databaseService;
        this.modalCtrl = modalCtrl;
        this.enumTemp = __WEBPACK_IMPORTED_MODULE_1__providers__["h" /* MetricTemp */];
        this.enumLength = __WEBPACK_IMPORTED_MODULE_1__providers__["i" /* MetricLength */];
        this.enumDistance = __WEBPACK_IMPORTED_MODULE_1__providers__["j" /* MetricDistance */];
        this.enumPressure = __WEBPACK_IMPORTED_MODULE_1__providers__["k" /* MetricPressure */];
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.databaseService.getJson(__WEBPACK_IMPORTED_MODULE_1__providers__["e" /* CONFIG */].HOME_LOCATION).then(function (data) { return _this.homeLocation = data; });
        this.databaseService.getJson(__WEBPACK_IMPORTED_MODULE_1__providers__["e" /* CONFIG */].METRICS).then(function (data) { return _this.metrics = data; });
    };
    SettingsPage.prototype.metricChange = function () {
        this.databaseService.setJson(__WEBPACK_IMPORTED_MODULE_1__providers__["e" /* CONFIG */].METRICS, this.metrics);
    };
    SettingsPage.prototype.changeHomeLocation = function () {
        var self = this;
        var modal = self.modalCtrl.create('LocationPage', { heading: 'Enter Home City' });
        modal.onDidDismiss(function (data) {
            if (data) {
                self.databaseService.setJson(__WEBPACK_IMPORTED_MODULE_1__providers__["e" /* CONFIG */].HOME_LOCATION, data);
                self.homeLocation = data;
            }
        });
        modal.present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/Users/shamseer/examples/ionic2-mosum/src/pages/settings/settings.html"*/'<!--suppress ALL -->\n<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf="homeLocation">\n    <ion-list-header>Location</ion-list-header>\n    <button ion-item class="item-select" (click)="changeHomeLocation()">\n      <ion-label color="primary">Home Location</ion-label>\n      <ion-note item-right style="color:inherit">{{homeLocation.name}}</ion-note>\n    </button>\n  </ion-list>\n  <ion-list *ngIf="metrics">\n    <ion-list-header>Metrics</ion-list-header>\n    <ion-item>\n      <ion-label color="primary">Temperature</ion-label>\n      <ion-select [(ngModel)]="metrics.temp" (ionChange)="metricChange()">\n        <ion-option [value]="enumTemp.F">Fahrenheit</ion-option>\n        <ion-option [value]="enumTemp.C">Celsius</ion-option>\n      </ion-select>\n    </ion-item>\n    <!--<ion-item>-->\n    <!--<ion-label color="primary">Time</ion-label>-->\n    <!--<ion-select [(ngModel)]="metrics.time" (ionChange)="metricChange()">-->\n    <!--<ion-option [value]="12">12 Hour</ion-option>-->\n    <!--<ion-option [value]="24">24 Hour</ion-option>-->\n    <!--</ion-select>-->\n    <!--</ion-item>-->\n    <ion-item>\n      <ion-label color="primary">Length</ion-label>\n      <ion-select [(ngModel)]="metrics.length" (ionChange)="metricChange()">\n        <ion-option [value]="enumLength.IN">Inch</ion-option>\n        <ion-option [value]="enumLength.CM">Centimeter</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Distance</ion-label>\n      <ion-select [(ngModel)]="metrics.distance" (ionChange)="metricChange()">\n        <ion-option [value]="enumDistance.MI">Miles</ion-option>\n        <ion-option [value]="enumDistance.KM">Kilometre</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Pressure</ion-label>\n      <ion-select [(ngModel)]="metrics.pressure" (ionChange)="metricChange()">\n        <ion-option [value]="enumPressure.MBAR">mbar</ion-option>\n        <ion-option [value]="enumPressure.HPA">hPa</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shamseer/examples/ionic2-mosum/src/pages/settings/settings.html"*/,
        styles: ["\n    .list-ios {\n      margin-bottom: 10px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers__["b" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map