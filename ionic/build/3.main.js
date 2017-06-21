webpackJsonp([3],{

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_detail__ = __webpack_require__(416);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailPageModule", function() { return WeatherDetailPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WeatherDetailPageModule = (function () {
    function WeatherDetailPageModule() {
    }
    return WeatherDetailPageModule;
}());
WeatherDetailPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__weather_detail__["a" /* WeatherDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__weather_detail__["a" /* WeatherDetailPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__weather_detail__["a" /* WeatherDetailPage */]
        ]
    })
], WeatherDetailPageModule);

//# sourceMappingURL=weather-detail.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherDetailPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeatherDetailPage = (function () {
    function WeatherDetailPage(params, statusBar, utilService) {
        this.params = params;
        this.statusBar = statusBar;
        this.utilService = utilService;
        this.detailsElem = ['humidity', 'pressure', 'windSpeed', 'ozone',
            'dewPoint', 'cloudCover', 'visibility', 'precipType',
            'precipIntensity', 'precipProbability', 'precipAccumulation'];
        this.detailsArray = [];
        this.showSegment = false;
        this.whichSegment = 'detail';
        this.hourlyArray = [];
        this.tempArray = [];
        this.infiniteInc = 10;
        this.forecast = params.data.forecast;
        this.currentForecast = params.data.currentForecast;
        this.currentLocation = params.data.currentLocation;
        this.metrics = params.data.metrics;
    }
    WeatherDetailPage.prototype.ngOnInit = function () {
        var self = this;
        try {
            this.firstHourlyObj = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.forecast.hourly.data, function (obj) { return self.currentForecast.time <= obj.time; });
            this.showSegment = !!this.firstHourlyObj;
        }
        catch (err) {
            this.showSegment = false;
        }
        this.detailsArray = this.getDetailsArray(this.currentForecast);
    };
    WeatherDetailPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
    };
    WeatherDetailPage.prototype.ionViewWillLeave = function () {
        this.statusBar.styleLightContent();
    };
    WeatherDetailPage.prototype.ionViewDidLoad = function () {
        var self = this;
        this.hourlyArray = [];
        if (this.showSegment && this.firstHourlyObj) {
            __WEBPACK_IMPORTED_MODULE_4_lodash__["forEach"](self.forecast.hourly.data, function (obj) {
                if (obj.time < self.firstHourlyObj.time) {
                    return;
                }
                self.hourlyArray.push({
                    time: obj.time,
                    icon: obj.icon,
                    temperature: obj.temperature,
                    showDetails: false,
                    details: self.getDetailsArray(obj)
                });
            });
        }
        self.tempArray = __WEBPACK_IMPORTED_MODULE_4_lodash__["slice"](self.hourlyArray, 0, this.infiniteInc);
    };
    WeatherDetailPage.prototype.doInfinite = function (infiniteScroll) {
        this.tempArray = __WEBPACK_IMPORTED_MODULE_4_lodash__["concat"](this.tempArray, __WEBPACK_IMPORTED_MODULE_4_lodash__["slice"](this.hourlyArray, this.infiniteInc, this.infiniteInc + 10));
        this.infiniteInc += 10;
        if (this.infiniteInc >= this.hourlyArray.length) {
            infiniteScroll.enable(false);
        }
        infiniteScroll.complete();
    };
    WeatherDetailPage.prototype.segmentChange = function () {
        this.content.scrollToTop();
        this.infiniteInc = 10;
        this.tempArray = __WEBPACK_IMPORTED_MODULE_4_lodash__["slice"](this.hourlyArray, 0, this.infiniteInc);
    };
    WeatherDetailPage.prototype.toggleDetails = function (item) {
        item.showDetails = !item.showDetails;
    };
    WeatherDetailPage.prototype.getDetailsArray = function (dp) {
        var self = this;
        var detailsArray = [];
        __WEBPACK_IMPORTED_MODULE_4_lodash__["forEach"](this.detailsElem, function (elem) {
            var elemVal = __WEBPACK_IMPORTED_MODULE_4_lodash__["get"](dp, elem, 0);
            if (elemVal !== 0) {
                var value = self.formatDetailElem(elem, elemVal);
                detailsArray.push({ key: __WEBPACK_IMPORTED_MODULE_4_lodash__["startCase"](elem), value: value });
            }
        });
        return detailsArray;
    };
    WeatherDetailPage.prototype.formatDetailElem = function (detailElem, elemVal) {
        switch (detailElem) {
            case 'humidity':
            case 'cloudCover':
            case 'precipProbability':
                return __WEBPACK_IMPORTED_MODULE_4_lodash__["round"](elemVal * 100, 5) + ' %';
            case 'pressure':
                return this.utilService.formatPressure(elemVal, this.metrics);
            case 'windSpeed':
                var windBearing = this.currentForecast.windBearing;
                return this.utilService.formatWind(elemVal, windBearing, this.metrics);
            case 'ozone':
                return elemVal + ' DU';
            case 'dewPoint':
                return this.utilService.formatTemp(elemVal, this.metrics);
            case 'visibility':
                return this.utilService.formatDistance(elemVal, this.metrics);
            case 'precipType':
                return this.utilService.startCase(elemVal);
            case 'precipIntensity':
                return this.utilService.formatPI(elemVal, this.metrics);
            case 'precipAccumulation':
                return this.utilService.formatLength(elemVal, this.metrics);
            default:
                return elemVal + '';
        }
    };
    return WeatherDetailPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Content */])
], WeatherDetailPage.prototype, "content", void 0);
WeatherDetailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-weather-detail',template:/*ion-inline-start:"/Users/shamseer/examples/ionic2-mosum/src/pages/weather-detail/weather-detail.html"*/'<!--suppress ALL -->\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-title>Weather Detail</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showSegment" color="white">\n    <ion-segment [(ngModel)]="whichSegment" (ionChange)="segmentChange($event)">\n      <ion-segment-button value="detail">\n        Detail\n      </ion-segment-button>\n      <ion-segment-button value="hourly">\n        Hourly\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <div class="full-screen" *ngIf="forecast && currentForecast && currentLocation && metrics">\n\n    <!--Detail Segment-->\n\n    <ion-list class="full-screen" *ngIf="whichSegment===\'detail\'">\n      <ion-item class="center half-screen" text-wrap>\n        <div class="bold large">{{currentLocation.name}}</div>\n        <div class="small">{{utilService.getCalendarDay(currentForecast.time,forecast.timezone)}}</div>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4 class="center-child">\n              <div>\n                <span class="x-large" ion-text color="text1">\n                  {{utilService.formatTemp(currentForecast.temperatureMax,metrics)}}\n                </span>\n                <span class="large" ion-text color="text1">\n                  {{utilService.formatTemp(currentForecast.temperatureMin,metrics)}}\n                </span>\n                <div class="x-small" ion-text color="text1">RealFeel</div>\n                <span class="large" ion-text color="text2">\n                  {{utilService.formatTemp(currentForecast.apparentTemperatureMax,metrics)}}\n                </span>\n                <span class="medium" ion-text color="text2">\n                  {{utilService.formatTemp(currentForecast.apparentTemperatureMin,metrics)}}\n                </span>\n              </div>\n            </ion-col>\n            <ion-col col-4>\n              <img [src]="utilService.getWeatherIcon(currentForecast.icon)"\n                   onerror="this.src=\'assets/img/default.png\'">\n              <span class="bold small" ion-text color="text1">\n                {{utilService.startCase(currentForecast.icon)}}\n              </span>\n            </ion-col>\n            <ion-col col-4 class="center-child">\n              <div>\n                <img [src]="utilService.getWeatherIcon(\'sunrise\')" style="max-width:40%"\n                     onerror="this.src=\'assets/img/default.png\'">\n                <div class="bold small" ion-text color="text1">\n                  {{utilService.getTime(currentForecast.sunriseTime,metrics,forecast.timezone)}}\n                </div>\n                <img [src]="utilService.getWeatherIcon(\'sunset\')" style="max-width:40%">\n                <div class="bold small" ion-text color="text2">\n                  {{utilService.getTime(currentForecast.sunsetTime,metrics,forecast.timezone)}}\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item text-wrap color="primary" class="half-screen" style="padding-left: 12%;">\n        <ion-grid>\n          <ion-row *ngFor="let detail of detailsArray">\n            <ion-col>\n              <span class="bold small" ion-text color="text3">{{detail.key}}</span>\n            </ion-col>\n            <ion-col>\n              <span class="bold small">{{detail.value}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <!--Hourly Segment-->\n\n    <ion-list class="full-screen" *ngIf="whichSegment===\'hourly\'">\n      <div *ngFor="let item of tempArray">\n        <button ion-item detail-none text-wrap (click)="toggleDetails(item)">\n          <img [src]="utilService.getWeatherIcon(item.icon)"\n               onerror="this.src=\'assets/img/default.png\'"\n               item-left style="max-width: 12%">\n          <span class="x-small">{{utilService.getCalendarDay(item.time,forecast.timezone)}}\n            <span ion-text color="text2">\n              {{utilService.getTime(item.time,metrics,forecast.timezone)}}\n            </span>\n          </span>\n          <p ion-text color="text2" class="bold">{{utilService.startCase(item.icon)}}</p>\n          <span class="medium" item-right style="margin-left:0">\n            {{utilService.formatTemp(item.temperature,metrics)}}\n          </span>\n          <ion-icon class="small center-child" item-right color="text1"\n                    [name]="item.showDetails?\'arrow-up\':\'arrow-down\'"></ion-icon>\n        </button>\n        <ion-item text-wrap color="primary" style="padding-left: 12%;"\n                  [@collapse]="item.showDetails?\'false\':\'true\'">\n          <ion-grid>\n            <ion-row *ngFor="let detail of item.details">\n              <ion-col>\n                <span class="bold small" ion-text color="text3">{{detail.key}}</span>\n              </ion-col>\n              <ion-col>\n                <span class="bold small">{{detail.value}}</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </div>\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="whichSegment===\'hourly\'">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shamseer/examples/ionic2-mosum/src/pages/weather-detail/weather-detail.html"*/,
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__providers__["g" /* collapse */])()]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* UtilService */]])
], WeatherDetailPage);

//# sourceMappingURL=weather-detail.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map