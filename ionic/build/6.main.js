webpackJsonp([6],{

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(413);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocationPageModule = (function () {
    function LocationPageModule() {
    }
    return LocationPageModule;
}());
LocationPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */]
        ]
    })
], LocationPageModule);

//# sourceMappingURL=location.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationPage = (function () {
    function LocationPage(navParams, viewCtrl, keyboard, zone) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.keyboard = keyboard;
        this.zone = zone;
        this.heading = navParams.get('heading') ? navParams.get('heading') : 'Search City Name';
        this.showCancel = navParams.data.showCancel !== undefined ? navParams.data.showCancel : true;
    }
    LocationPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.zone.run(function () {
            _this.searchInput.setFocus();
            _this.keyboard.show();
        });
    };
    LocationPage.prototype.ionViewWillEnter = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.query = '';
        this.locationObj = {
            name: null,
            lat: null,
            lng: null
        };
    };
    LocationPage.prototype.ionViewWillLeave = function () {
        this.keyboard.close();
    };
    LocationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LocationPage.prototype.updateSearch = function () {
        console.debug('modal > updateSearch > query ', this.query);
        if (this.query.trim() == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            types: ['(cities)'],
            input: this.query
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.debug('modal > getPlacePredictions > status > ', status);
            self.zone.run(function () {
                self.autocompleteItems = predictions ? predictions : [];
            });
        });
    };
    LocationPage.prototype.chooseItem = function (item) {
        var self = this;
        var request = {
            placeId: item.place_id
        };
        var response;
        var placesService = new google.maps.places.PlacesService(document.createElement('div'));
        placesService.getDetails(request, function (place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                self.locationObj.lat = place.geometry.location.lat();
                self.locationObj.lng = place.geometry.location.lng();
                var obj = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](place.address_components, ['types[0]', 'locality']);
                if (obj) {
                    self.locationObj.name = obj['short_name'];
                }
                response = self.locationObj;
            }
            else {
                console.debug('page > getPlaceDetail > status > ', status);
            }
            self.zone.run(function () {
                self.viewCtrl.dismiss(response);
            });
        });
    };
    return LocationPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchInput'),
    __metadata("design:type", Object)
], LocationPage.prototype, "searchInput", void 0);
LocationPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        priority: 'high'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"/Users/shamseer/examples/ionic2-mosum/src/pages/location/location.html"*/'<!--suppress ALL -->\n<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>{{heading}}</ion-title>\n    <ion-buttons start *ngIf="showCancel">\n      <button showWhen="ios" ion-button (click)="dismiss()">\n        <span ion-text color="white">Cancel</span>\n      </button>\n      <button showWhen="android" ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close" color="white"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar\n    [(ngModel)]="query"\n    (ionInput)="updateSearch()"\n    #searchInput>\n  </ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of autocompleteItems"\n              (click)="chooseItem(item)">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shamseer/examples/ionic2-mosum/src/pages/location/location.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgZone */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map