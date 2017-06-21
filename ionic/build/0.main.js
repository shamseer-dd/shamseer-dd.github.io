webpackJsonp([0],{

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__world_city_list__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldCityListPageModule", function() { return WorldCityListPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WorldCityListPageModule = (function () {
    function WorldCityListPageModule() {
    }
    return WorldCityListPageModule;
}());
WorldCityListPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__world_city_list__["a" /* WorldCityListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__world_city_list__["a" /* WorldCityListPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__world_city_list__["a" /* WorldCityListPage */]
        ]
    })
], WorldCityListPageModule);

//# sourceMappingURL=world-city-list.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimateItemSliding; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimateItemSliding = (function () {
    function AnimateItemSliding(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    AnimateItemSliding.prototype.ngOnInit = function () {
        var _this = this;
        if (this.shouldAnimate) {
            this.renderer.addClass(this.element.nativeElement, 'active-slide');
            this.renderer.addClass(this.element.nativeElement, 'active-options-right');
            // Wait to apply animation
            setTimeout(function () {
                _this.renderer.addClass(_this.element.nativeElement.firstElementChild, 'itemSlidingAnimation');
                // disables after first animation
                setTimeout(function () {
                    _this.renderer.removeClass(_this.element.nativeElement, 'active-slide');
                    _this.renderer.removeClass(_this.element.nativeElement, 'active-options-right');
                    _this.renderer.removeClass(_this.element.nativeElement.firstElementChild, 'itemSlidingAnimation');
                }, 1000);
            }, 500);
        }
    };
    return AnimateItemSliding;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])('animateItemSliding'),
    __metadata("design:type", Boolean)
], AnimateItemSliding.prototype, "shouldAnimate", void 0);
AnimateItemSliding = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Directive */])({
        selector: '[animateItemSliding]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Renderer2 */]])
], AnimateItemSliding);

//# sourceMappingURL=animate-item-sliding.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animate_item_sliding_animate_item_sliding__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__animate_item_sliding_animate_item_sliding__["a" /* AnimateItemSliding */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__animate_item_sliding_animate_item_sliding__["a" /* AnimateItemSliding */]
        ]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_module__ = __webpack_require__(409);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__directives_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldCityListPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorldCityListPage = (function () {
    function WorldCityListPage(navCtrl, databaseService, utilService, forecastService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.databaseService = databaseService;
        this.utilService = utilService;
        this.forecastService = forecastService;
        this.modalCtrl = modalCtrl;
    }
    WorldCityListPage.prototype.ngOnInit = function () {
        var self = this;
        self.arrWorldWeather = [];
        self.subscribers = [];
        self.databaseService.get('stopDeleteAnimation').then(function (stop) {
            self.databaseService.getAllWorldLocations().then(function (locations) {
                __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](locations, function (location, index) {
                    self.arrWorldWeather.push({
                        location: location,
                        firstDailyForecast: null,
                        timezone: null,
                        shouldAnimate: stop ? false : index === 0
                    });
                });
                self.updateForecast();
            });
        });
    };
    WorldCityListPage.prototype.ionViewWillEnter = function () {
        var self = this;
        this.databaseService.getJson(__WEBPACK_IMPORTED_MODULE_2__providers__["e" /* CONFIG */].METRICS).then(function (data) {
            if (data === null) {
                self.databaseService.setJson(__WEBPACK_IMPORTED_MODULE_2__providers__["e" /* CONFIG */].METRICS, __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* DEFAULT_METRICS */]);
                self.metrics = __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* DEFAULT_METRICS */];
            }
            else {
                self.metrics = data;
            }
        });
        self.updateForecast();
    };
    WorldCityListPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](this.subscribers, function (sub) { return sub.unsubscribe(); });
    };
    WorldCityListPage.prototype.updateForecast = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](self.arrWorldWeather, function (wwObj) {
            var sub = self.forecastService.getForecast(wwObj.location, true)
                .subscribe(function (forecast) {
                if (forecast && forecast.daily && forecast.daily.data) {
                    wwObj.firstDailyForecast = forecast.daily.data[0];
                    wwObj.timezone = forecast.timezone;
                }
            }, function (err) {
                console.error(err);
            });
            self.subscribers.push(sub);
        });
    };
    WorldCityListPage.prototype.addLocation = function () {
        var self = this;
        var modal = self.modalCtrl.create('LocationPage', { heading: 'Add New City' });
        modal.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            self.databaseService.addWorldLocation(data).then(function (success) {
                if (!success) {
                    return;
                }
                var exists = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](self.arrWorldWeather, function (obj) { return obj.location.name === data.name; });
                if (exists) {
                    self.utilService.showToast(data.name + ' already exists');
                    return;
                }
                self.arrWorldWeather.push({
                    location: data,
                    firstDailyForecast: null,
                    timezone: null,
                    shouldAnimate: false
                });
                self.forecastService.getForecast(data)
                    .subscribe(function (forecast) {
                    if (forecast && forecast.daily && forecast.daily.data) {
                        var obj = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](self.arrWorldWeather, { location: data });
                        if (obj) {
                            obj.firstDailyForecast = forecast.daily.data[0];
                            obj.timezone = forecast.timezone;
                        }
                    }
                }, function (err) {
                    console.error(err);
                });
            });
        });
        modal.present();
    };
    WorldCityListPage.prototype.delete = function (location) {
        var self = this;
        self.databaseService.removeWorldLocation(location.name).then(function (success) {
            if (success) {
                __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](self.arrWorldWeather, function (obj) { return obj.location.name === location.name; });
            }
        });
        self.databaseService.set('stopDeleteAnimation', 'true');
    };
    WorldCityListPage.prototype.locationClicked = function (location) {
        this.navCtrl.push('CityWeatherPage', { location: location });
    };
    return WorldCityListPage;
}());
WorldCityListPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-world-city-list',template:/*ion-inline-start:"/Users/shamseer/examples/ionic2-mosum/src/pages/world-city-list/world-city-list.html"*/'<!--suppress ALL -->\n<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>World Weather</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab right bottom>\n    <button ion-fab (click)="addLocation()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-list *ngIf="arrWorldWeather">\n    <ion-item-sliding *ngFor="let item of arrWorldWeather" [animateItemSliding]="item.shouldAnimate">\n      <button ion-item text-wrap (click)="locationClicked(item.location)">\n        <img [src]="utilService.getWeatherIcon(item?.firstDailyForecast?.icon)"\n             onerror="this.src=\'assets/img/default.png\'"\n             item-left style="max-width: 12%">\n        <div class="medium">{{item.location.name}}</div>\n        <p *ngIf="item.firstDailyForecast" class="bold" ion-text color="text2">\n          {{utilService.getStandardDay(item.firstDailyForecast.time,item.timezone)}}\n        </p>\n        <div *ngIf="item.firstDailyForecast && metrics" class="large" ion-text color="text1" item-right>\n          {{utilService.formatTemp(item.firstDailyForecast.temperatureMax,metrics)}}\n        </div>\n        <p *ngIf="item.firstDailyForecast && metrics" class="medium bold" ion-text color="text2" item-right>\n          {{utilService.formatTemp(item.firstDailyForecast.temperatureMin,metrics)}}\n        </p>\n      </button>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="delete(item.location)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shamseer/examples/ionic2-mosum/src/pages/world-city-list/world-city-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* ForecastService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], WorldCityListPage);

//# sourceMappingURL=world-city-list.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map