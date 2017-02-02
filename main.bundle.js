webpackJsonp([0,3],{

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VimondService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VimondService = (function () {
    // private Assets<>: any;
    function VimondService(_http) {
        this._http = _http;
    }
    VimondService.prototype.searchAssets = function () {
        this.searchUrl = 'https://vimond-rest-api.ha.expo-first.vimondtv.com/api/web/search/categories/root/assets/.json';
        // this.searchUrl = this.searchAssets();
        return this._http.get(this.searchUrl)
            .map(function (res) { return res.json(); });
    };
    VimondService.prototype.getAssets = function (id) {
        this.assetsUrl = 'https://vimond-rest-api.ha.expo-first.vimondtv.com/api/web/asset/' + id + '.json';
        return this._http.get(this.assetsUrl)
            .map(function (res) { return res.json(); });
    };
    VimondService.prototype.getVideo = function (id) {
        this.watchUrl = 'https://vimond-rest-api.ha.expo-first.vimondtv.com/api/web/asset/' + id + '/play.json?protocol=HLS';
        return this._http.get(this.watchUrl)
            .map(function (res) { return res.json(); });
    };
    return VimondService;
}());
VimondService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], VimondService);

var _a;
//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/vimond.service.js.map

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vimond_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(669),
        styles: [__webpack_require__(664)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */]]
    })
], AppComponent);

//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/app.component.js.map

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vimond_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AssetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssetsComponent = (function () {
    function AssetsComponent(_vimondService, _route) {
        this._vimondService = _vimondService;
        this._route = _route;
    }
    AssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._vimondService.getAssets(id)
                .subscribe(function (a) {
                _this.assets = a;
                console.log(_this.assets);
            });
        });
    };
    return AssetsComponent;
}());
AssetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-assets',
        template: __webpack_require__(670),
        styles: [__webpack_require__(665)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vimond_service__["a" /* VimondService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__vimond_service__["a" /* VimondService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], AssetsComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/assets.component.js.map

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__(671),
        styles: [__webpack_require__(666)]
    }),
    __metadata("design:paramtypes", [])
], HomepageComponent);

//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/homepage.component.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vimond_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ObjtoarrayPipe } from '../objtoarray.pipe';
var SearchComponent = (function () {
    function SearchComponent(_vimondService) {
        this._vimondService = _vimondService;
    }
    SearchComponent.prototype.searchAssets = function () {
        var _this = this;
        this._vimondService.searchAssets().subscribe(function (res) {
            console.log(res.assets.asset);
            // console.log(res.assets.asset[0]['@id']);
            _this.searchRes = res.assets.asset;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__(673),
        styles: [__webpack_require__(667)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/search.component.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vimond_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SingleassetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ObjtoarrayPipe } from '../objtoarray.pipe';
// import {FilterPipe } from '../filter.pipe';
var SingleassetComponent = (function () {
    function SingleassetComponent(_vimondService) {
        this._vimondService = _vimondService;
    }
    SingleassetComponent.prototype.getSingleAsset = function () {
        var _this = this;
        this._vimondService.searchAssets().subscribe(function (res) {
            console.log(res.assets.asset);
            _this.searchRes = res.assets.asset;
        });
    };
    return SingleassetComponent;
}());
SingleassetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-singleasset',
        template: __webpack_require__(674),
        styles: [__webpack_require__(668)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */]) === "function" && _a || Object])
], SingleassetComponent);

var _a;
//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/singleasset.component.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vimond_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WatchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WatchComponent = (function () {
    function WatchComponent(_vimondService, _route) {
        this._vimondService = _vimondService;
        this._route = _route;
    }
    WatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._vimondService.getVideo(id)
                .subscribe(function (a) {
                _this.playback = a;
                console.log(_this.playback);
            });
        });
    };
    return WatchComponent;
}());
WatchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-watch',
        template: __webpack_require__(675)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vimond_service__["a" /* VimondService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__vimond_service__["a" /* VimondService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WatchComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/watch.component.js.map

/***/ },

/***/ 387:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 387;


/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(507);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/main.js.map

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_assets_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__singleasset_singleasset_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__watch_watch_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__homepage_homepage_component__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__assets_assets_component__["a" /* AssetsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__singleasset_singleasset_component__["a" /* SingleassetComponent */],
            __WEBPACK_IMPORTED_MODULE_11__watch_watch_component__["a" /* WatchComponent */],
            __WEBPACK_IMPORTED_MODULE_12__homepage_homepage_component__["a" /* HomepageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/app.module.js.map

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_assets_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleasset_singleasset_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__watch_watch_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__ = __webpack_require__(331);
/* unused harmony export appRoutingProviders */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */]
    },
    {
        path: 'homepage',
        component: __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_1__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'singleasset',
        component: __WEBPACK_IMPORTED_MODULE_3__singleasset_singleasset_component__["a" /* SingleassetComponent */]
    },
    {
        path: 'assets/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__assets_assets_component__["a" /* AssetsComponent */]
    },
    {
        path: 'watch/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__watch_watch_component__["a" /* WatchComponent */]
    },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/app.routing.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(505);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/index.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(672)
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/navbar.component.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/environment.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=C:/Users/Manish/desktop/projects/videoplay/src/polyfills.js.map

/***/ },

/***/ 664:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 665:
/***/ function(module, exports) {

module.exports = ".form{\r\n    margin-top: 40px;\r\n    margin-right:350px;\r\n    /*float:left;*/\r\n}\r\n"

/***/ },

/***/ 666:
/***/ function(module, exports) {

module.exports = ".custom{\r\n    color: white;\r\n}\r\n\r\na:link {\r\n    text-decoration: none;\r\n}\r\n\r\na:visited {\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\na:active {\r\n    text-decoration: underline;\r\n}\r\n\r\n.search{\r\n    margin-top: 20px;\r\n}"

/***/ },

/***/ 667:
/***/ function(module, exports) {

module.exports = ".search{\r\n    margin-top: 20px;\r\n}\r\n\r\n.search-res {\r\n    margin-top: 50px;\r\n    box-shadow: 0 0 10px gray;\r\n    padding:0 15px 0 15px;\r\n    float:left;\r\n}\r\n\r\n  .search-thumb{\r\n    width: 80px;\r\n    height: auto;\r\n    float:left;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .h5{\r\n      margin-top:20px;\r\n  }"

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = ".form{\r\n    margin-top: 40px;\r\n    margin-right:400px;\r\n    /*float:left;*/\r\n}\r\n\r\n.search{\r\n    margin-top: 20px;\r\n}"

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class =\"container\">\r\n    <router-outlet></router-outlet>  \r\n</div> "

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = "\r\n        <div *ngIf = \"assets\">\r\n            <h4 class = \"data\">Data to update</h4>\r\n                    <form class =\"form\">\r\n                      <div class=\"form-group\">\r\n                        <label>Description</label>\r\n                        <textarea  rows=\"4\" class=\"form-control\" [value]=\" {{ assets.asset.description }}\"></textarea>\r\n                      </div> \r\n                      <div class=\"form-group\">\r\n                        <label>Title </label>\r\n                        <input class=\"form-control\" [value]=\" {{ assets.asset.title }}\">\r\n                      </div> \r\n                      <div class=\"form-group\">\r\n                        <label>Update Time </label>\r\n                        <input class=\"form-control\" [value]=\" {{ assets.asset.updateTime }}\">\r\n                      </div> \r\n                      <button class=\"btn btn-danger\">Update</button>\r\n                    </form>\r\n        </div>    \r\n   \r\n   \r\n\r\n\r\n\r\n   \r\n  "

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<div class = \"containe search\">\r\n    <h3>This is a project from Manish</h3><br>\r\n\r\n   <form>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"button\" name=\"Search\">\r\n               <a routerLink = \"/search\"> <strong class =\"custom\"> Go to Search </strong></a>\r\n        </button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\" routerLink = \"/\">API project</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li><a routerLink=\"/search\">Vimond Search</a></li>\r\n            <li><a routerLink = \"/singleasset\">Single Asset</a></li>\r\n            <!--<li><a routerLink=\"/about\">About</a></li>-->\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </nav>\r\n"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<div class = \"container search\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"button\" name=\"\"\r\n        (click)=\"searchAssets()\">\r\n           <strong> Search for assets </strong>\r\n         </button>\r\n      </div>\r\n    </form>\r\n</div>\r\n\r\n<div class = \"container\">\r\n    <div *ngIf = \"searchRes\">\r\n      <div *ngFor = \"let assets of searchRes\">\r\n        <!--<div *ngIf = \"id\">-->\r\n              <div class = \"col-md-12 search-res\">\r\n                        <div>\r\n                          <img class = \"search-thumb img-thumbnail\" src = \"{{ assets.imageUrl }}\">\r\n                          <!--<a routerLink = \"/assets/ {{assets.assetTypeId}}\"> {{ assets.metadata.title.$}} </a>-->\r\n                          <a routerLink = \"/assets/{{ assets['@id'] }}\"> {{ assets.metadata.title.$}} - {{ assets['@id'] }} </a>\r\n                        </div>\r\n                        <div>\r\n                          <strong>Asset category: </strong>\r\n                          {{ assets.categoryTitle }}\r\n                        </div>\r\n                        <div>\r\n                          <small><strong>Asset play uri (HLS protocol):</strong></small> \r\n                          <a routerLink = \"/watch/{{ assets['@id'] }}\"><small>https://vimond-rest-api.ha.expo-first.vimondtv.com{{assets.playback['@uri']}}?protocol=HLS</small></a>\r\n                        </div>\r\n                </div>\r\n          <!--</div>-->\r\n       <div>\r\n    </div>\r\n  </div> \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = "<div class = \"search\">\r\n<button class=\"btn btn-primary\" type=\"button\" \r\n    (click)=\"getSingleAsset()\">\r\n    <strong> Click to update metadata for single asset </strong>\r\n</button>\r\n</div>\r\n\r\n  <div *ngIf = \"searchRes\">\r\n    <!--<div *ngFor = \"let assets of searchRes | filter: filterargs\">-->\r\n    <div *ngFor = \"let assets of searchRes\">\r\n      <div *ngIf = \"assets.assetTypeName == 'epg'\">\r\n            <form class =\"form\">\r\n              <div class=\"form-group\">\r\n                <label>Title</label>\r\n                <input  class=\"form-control\" placeholder=\"{{ assets.metadata.title.$ }}\">\r\n              </div> \r\n              <div class=\"form-group\">\r\n                <label>Genre</label>\r\n                <input class=\"form-control\" placeholder=\"{{ assets.metadata.genre.$ }}\">\r\n              </div> \r\n              <div class=\"form-group\">\r\n                <label>Tags</label>\r\n                <input class=\"form-control\" placeholder=\"{{ assets.metadata.tags.$ }}\">\r\n              </div> \r\n              <button class=\"btn btn-danger\">Update</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n  </div>\r\n \r\n\r\n"

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = "<div *ngIf = \"playback\">\r\n        <video controls height=\"400\" width=\"550\" src=\"{{playback.playback.items.item.url}}\"\r\n            data-viblast-key=\"383c111d-3645-462e-b7e3-e050f8c46b76\"\r\n            data-viblast-base-url=\"\">\r\n        </video>\r\n</div>\r\n"

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(388);


/***/ }

},[694]);
//# sourceMappingURL=main.bundle.map