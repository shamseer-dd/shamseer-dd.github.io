webpackJsonp([1],{

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_weather__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWeatherPageModule", function() { return HomeWeatherPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeWeatherPageModule = (function () {
    function HomeWeatherPageModule() {
    }
    return HomeWeatherPageModule;
}());
HomeWeatherPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_weather__["a" /* HomeWeatherPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_weather__["a" /* HomeWeatherPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home_weather__["a" /* HomeWeatherPage */]
        ]
    })
], HomeWeatherPageModule);

//# sourceMappingURL=home-weather.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather_list_weather_list__ = __webpack_require__(407);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__weather_list_weather_list__["a" /* WeatherListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__weather_list_weather_list__["a" /* WeatherListComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__(405);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherListComponent = (function () {
    function WeatherListComponent(navCtrl, forecastService, databaseService, utilService) {
        this.navCtrl = navCtrl;
        this.forecastService = forecastService;
        this.databaseService = databaseService;
        this.utilService = utilService;
        this.hourlyArray = [];
    }
    WeatherListComponent.prototype.itemClicked = function (item) {
        this.navCtrl.push('WeatherDetailPage', {
            forecast: this.forecast,
            currentForecast: item,
            currentLocation: this.location,
            metrics: this.metrics
        });
    };
    WeatherListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //these emitters are used to programmatically activate lifecycle events
        //because in Ionic 2, changing tabs doesn't activate lifecycle of templates
        if (this.onInitEmitter) {
            this.onInitEmitter.subscribe(function () { return _this.init(); });
        }
        if (this.onDestroyEmitter) {
            this.onDestroyEmitter.subscribe(function () { return _this.destroy(); });
        }
        this.init();
    };
    WeatherListComponent.prototype.init = function () {
        var self = this;
        if (self.location) {
            self.getForecast(self.location);
        }
        this.databaseService.getJson(__WEBPACK_IMPORTED_MODULE_2__providers__["e" /* CONFIG */].METRICS).then(function (data) {
            if (data === null) {
                self.databaseService.setJson(__WEBPACK_IMPORTED_MODULE_2__providers__["e" /* CONFIG */].METRICS, __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* DEFAULT_METRICS */]);
                self.metrics = __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* DEFAULT_METRICS */];
            }
            else {
                self.metrics = data;
            }
        });
    };
    WeatherListComponent.prototype.getForecast = function (location) {
        var self = this;
        this.forecastSubscriber = self.forecastService.getForecast(location)
            .subscribe(function (data) {
            self.forecast = data;
            if (self.forecast && self.forecast.daily && self.forecast.daily.data) {
                self.todayForecast = self.forecast.daily.data[0];
            }
            self.hourlyArray = [];
            var currentHour = self.utilService.getCurrentHour(self.forecast.timezone);
            var flag = false;
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](self.forecast.hourly.data, function (obj) {
                if (!flag && self.utilService.epochToHour(obj.time, self.forecast.timezone) < currentHour) {
                    return;
                }
                flag = true;
                self.hourlyArray.push({
                    time: obj.time,
                    icon: obj.icon,
                    temperature: obj.temperature
                });
                if (self.hourlyArray.length > 10) {
                    return false;
                }
            });
        }, function (err) {
            console.error(err);
        });
    };
    WeatherListComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    WeatherListComponent.prototype.destroy = function () {
        if (this.forecastSubscriber) {
            this.forecastSubscriber.unsubscribe();
        }
    };
    return WeatherListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* EventEmitter */])
], WeatherListComponent.prototype, "onInitEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* EventEmitter */])
], WeatherListComponent.prototype, "onDestroyEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
    __metadata("design:type", Object)
], WeatherListComponent.prototype, "location", void 0);
WeatherListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'weather-list',template:/*ion-inline-start:"/Users/shamseer/examples/ionic2-mosum/src/components/weather-list/weather-list.html"*/'<!--suppress ALL -->\n<ion-list *ngIf="forecast && metrics && location">\n  <button ion-item detail-none text-wrap color="primary"\n          class="center no-label-margin" style="margin-bottom:-1px;"\n          *ngIf="todayForecast" (click)="itemClicked(todayForecast)">\n    <div class="bold large">{{location.name}}</div>\n    <div class="small">{{utilService.getCalendarDay(todayForecast.time,forecast.timezone)}}</div>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 class="center-child">\n          <div>\n            <div class="xx-large">\n              {{utilService.formatTemp(todayForecast.temperatureMax,metrics)}}\n            </div>\n            <div class="large">\n              {{utilService.formatTemp(todayForecast.temperatureMin,metrics)}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <img [src]="utilService.getWeatherIcon(todayForecast.icon)"\n               onerror="this.src=\'assets/img/default.png\'">\n          <span class="bold small">{{utilService.startCase(todayForecast.icon)}}</span>\n        </ion-col>\n        <ion-col col-4 class="center-child">\n          <div>\n            <img [src]="utilService.getWeatherIcon(\'sunrise\')" style="max-width:40%"\n                 onerror="this.src=\'assets/img/default.png\'">\n            <div class="bold small">\n              {{utilService.getTime(todayForecast.sunriseTime,metrics,forecast.timezone)}}\n            </div>\n            <img [src]="utilService.getWeatherIcon(\'sunset\')" style="max-width:40%">\n            <div class="bold small">\n              {{utilService.getTime(todayForecast.sunsetTime,metrics,forecast.timezone)}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </button>\n  <ion-scroll scrollX="true" class="center scroll-hourly"\n              *ngIf="hourlyArray?.length>1">\n    <ion-row nowrap>\n      <ion-col col-3 *ngFor="let item of hourlyArray">\n        <img [src]="utilService.getWeatherIcon(item.icon)"\n             onerror="this.src=\'assets/img/default.png\'" style="max-width: 40%">\n        <p class="bold" ion-text color="text2" no-margin no-padding>\n          <span ion-text color="text1">\n            {{utilService.formatTemp(item.temperature,metrics)}}\n          </span>\n          {{utilService.getTime(item.time,metrics,forecast.timezone)}}\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-scroll>\n  <button ion-item detail-none text-wrap\n          *ngFor="let item of forecast.daily?.data | slice:1;let i = index"\n          (click)="itemClicked(item)">\n    <img [src]="utilService.getWeatherIcon(item.icon)"\n         onerror="this.src=\'assets/img/default.png\'"\n         item-left style="max-width: 12%">\n    <div class="small">{{utilService.getCalendarDay(item.time,forecast.timezone)}}</div>\n    <p class="bold" ion-text color="text2">{{utilService.startCase(item.icon)}}</p>\n    <div class="large" ion-text color="text1" item-right>\n      {{utilService.formatTemp(forecast.daily.data[i+1]?.temperatureMax,metrics)}}\n    </div>\n    <p class="medium bold" ion-text color="text2" item-right>\n      {{utilService.formatTemp(forecast.daily.data[i+1]?.temperatureMin,metrics)}}</p>\n  </button>\n</ion-list>\n'/*ion-inline-end:"/Users/shamseer/examples/ionic2-mosum/src/components/weather-list/weather-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* ForecastService */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* UtilService */]])
], WeatherListComponent);

//# sourceMappingURL=weather-list.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeWeatherPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeWeatherPage = (function () {
    function HomeWeatherPage(databaseService, modalCtrl) {
        this.databaseService = databaseService;
        this.modalCtrl = modalCtrl;
        this.onInitEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* EventEmitter */]();
        this.onDestroyEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* EventEmitter */]();
    }
    HomeWeatherPage.prototype.ionViewWillEnter = function () {
        var self = this;
        this.databaseService.getJson(__WEBPACK_IMPORTED_MODULE_2__providers__["e" /* CONFIG */].HOME_LOCATION).then(function (data) {
            if (data === null) {
                var modal = self.modalCtrl.create('LocationPage', { heading: 'Enter Home City', showCancel: false });
                modal.onDidDismiss(function (data) {
                    console.debug('page > modal dismissed > data > ', data);
                    if (data) {
                        self.databaseService.setJson(__WEBPACK_IMPORTED_MODULE_2__providers__["e" /* CONFIG */].HOME_LOCATION, data);
                        self.location = data;
                        self.emitInit();
                    }
                });
                modal.present();
            }
            else {
                self.location = data;
                self.emitInit();
            }
        });
    };
    HomeWeatherPage.prototype.emitInit = function () {
        if (this.onInitEmitter) {
            this.onInitEmitter.emit('');
        }
    };
    HomeWeatherPage.prototype.ionViewWillLeave = function () {
        if (this.onDestroyEmitter) {
            this.onDestroyEmitter.emit('');
        }
    };
    return HomeWeatherPage;
}());
HomeWeatherPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        priority: 'high'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home-weather',template:/*ion-inline-start:"/Users/shamseer/examples/ionic2-mosum/src/pages/home-weather/home-weather.html"*/'<!--suppress ALL -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MOSUM</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <weather-list [location]="location" *ngIf="location"\n                [onInitEmitter]="onInitEmitter"\n                [onDestroyEmitter]="onDestroyEmitter"></weather-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shamseer/examples/ionic2-mosum/src/pages/home-weather/home-weather.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["b" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], HomeWeatherPage);

//# sourceMappingURL=home-weather.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map