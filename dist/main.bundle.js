webpackJsonp([0,3],{

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vimond_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(645),
            styles: [__webpack_require__(640)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/app.component.js.map

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vimond_service__ = __webpack_require__(93);
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
    AssetsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-assets',
            template: __webpack_require__(646),
            styles: [__webpack_require__(641)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vimond_service__["a" /* VimondService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__vimond_service__["a" /* VimondService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], AssetsComponent);
    return AssetsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/assets.component.js.map

/***/ },

/***/ 320:
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
    HomepageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__(647),
            styles: [__webpack_require__(642)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomepageComponent);
    return HomepageComponent;
}());
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/homepage.component.js.map

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vimond_service__ = __webpack_require__(93);
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
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(649),
            styles: [__webpack_require__(643)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */]) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/search.component.js.map

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vimond_service__ = __webpack_require__(93);
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
    SingleassetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-singleasset',
            template: __webpack_require__(650),
            styles: [__webpack_require__(644)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__vimond_service__["a" /* VimondService */]) === 'function' && _a) || Object])
    ], SingleassetComponent);
    return SingleassetComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/singleasset.component.js.map

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vimond_service__ = __webpack_require__(93);
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
    WatchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-watch',
            template: __webpack_require__(651)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vimond_service__["a" /* VimondService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__vimond_service__["a" /* VimondService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], WatchComponent);
    return WatchComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/watch.component.js.map

/***/ },

/***/ 374:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 374;


/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(483);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_27" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/main.js.map

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_assets_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__singleasset_singleasset_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__watch_watch_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__homepage_homepage_component__ = __webpack_require__(320);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
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
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/app.module.js.map

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_assets_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleasset_singleasset_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__watch_watch_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__ = __webpack_require__(320);
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
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/app.routing.js.map

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(481);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/index.js.map

/***/ },

/***/ 484:
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
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(648)
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/navbar.component.js.map

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/environment.js.map

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/polyfills.js.map

/***/ },

/***/ 640:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 641:
/***/ function(module, exports) {

module.exports = ".form{\r\n    margin-top: 40px;\r\n    margin-right:350px;\r\n    /*float:left;*/\r\n}\r\n"

/***/ },

/***/ 642:
/***/ function(module, exports) {

module.exports = ".custom{\r\n    color: white;\r\n}\r\n\r\na:link {\r\n    text-decoration: none;\r\n}\r\n\r\na:visited {\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\na:active {\r\n    text-decoration: underline;\r\n}\r\n\r\n.search{\r\n    margin-top: 20px;\r\n}"

/***/ },

/***/ 643:
/***/ function(module, exports) {

module.exports = ".search{\r\n    margin-top: 20px;\r\n}\r\n\r\n.search-res {\r\n    margin-top: 50px;\r\n    box-shadow: 0 0 10px gray;\r\n    padding:0 15px 0 15px;\r\n    float:left;\r\n}\r\n\r\n  .search-thumb{\r\n    width: 80px;\r\n    height: auto;\r\n    float:left;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .h5{\r\n      margin-top:20px;\r\n  }"

/***/ },

/***/ 644:
/***/ function(module, exports) {

module.exports = ".form{\r\n    margin-top: 40px;\r\n    margin-right:400px;\r\n    /*float:left;*/\r\n}\r\n\r\n.search{\r\n    margin-top: 20px;\r\n}"

/***/ },

/***/ 645:
/***/ function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class =\"container\">\r\n    <router-outlet></router-outlet>  \r\n</div> "

/***/ },

/***/ 646:
/***/ function(module, exports) {

module.exports = "\r\n        <div *ngIf = \"assets\">\r\n            <h4 class = \"data\">Data to update</h4>\r\n                    <form class =\"form\">\r\n                      <div class=\"form-group\">\r\n                        <label>Description</label>\r\n                        <input  class=\"form-control\" placeholder=\" {{ assets.asset.description }}\">\r\n                      </div> \r\n                      <div class=\"form-group\">\r\n                        <label>Title </label>\r\n                        <input class=\"form-control\" placeholder=\" {{ assets.asset.title }}\">\r\n                      </div> \r\n                      <div class=\"form-group\">\r\n                        <label>Update Time </label>\r\n                        <input class=\"form-control\" placeholder=\" {{ assets.asset.updateTime }}\">\r\n                      </div> \r\n                      <button class=\"btn btn-danger\">Update</button>\r\n                    </form>\r\n        </div>    \r\n   \r\n   \r\n\r\n\r\n\r\n   \r\n  "

/***/ },

/***/ 647:
/***/ function(module, exports) {

module.exports = "<div class = \"containe search\">\n    <h3>This is a project from Manish</h3><br>\n\n   <form>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" type=\"button\" name=\"Search\">\n               <a routerLink = \"/search\"> <strong class =\"custom\"> Go to Search </strong></a>\n        </button>\n        </div>\n    </form>\n</div>"

/***/ },

/***/ 648:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" routerLink = \"/\">API project</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/search\">Vimond Search</a></li>\n            <li><a routerLink = \"/singleasset\">Single Asset</a></li>\n            <!--<li><a routerLink=\"/about\">About</a></li>-->\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ },

/***/ 649:
/***/ function(module, exports) {

module.exports = "<div class = \"container search\">\n    <form>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" type=\"button\" name=\"\"\n        (click)=\"searchAssets()\">\n           <strong> Search for assets </strong>\n         </button>\n      </div>\n    </form>\n</div>\n\n<div class = \"container\">\n    <div *ngIf = \"searchRes\">\n      <div *ngFor = \"let assets of searchRes\">\n        <!--<div *ngIf = \"id\">-->\n              <div class = \"col-md-12 search-res\">\n                        <div>\n                          <img class = \"search-thumb img-thumbnail\" src = \"{{ assets.imageUrl }}\">\n                          <!--<a routerLink = \"/assets/ {{assets.assetTypeId}}\"> {{ assets.metadata.title.$}} </a>-->\n                          <a routerLink = \"/assets/{{ assets['@id'] }}\"> {{ assets.metadata.title.$}} - {{ assets['@id'] }} </a>\n                        </div>\n                        <div>\n                          <strong>Asset category: </strong>\n                          {{ assets.categoryTitle }}\n                        </div>\n                        <div>\n                          <small><strong>Asset play uri (HLS protocol):</strong></small> \n                          <a routerLink = \"/watch/{{ assets['@id'] }}\"><small>https://vimond-rest-api.ha.expo-first.vimondtv.com{{assets.playback['@uri']}}?protocol=HLS</small></a>\n                        </div>\n                </div>\n          <!--</div>-->\n       <div>\n    </div>\n  </div> \n</div>\n\n\n\n\n\n\n\n\n\n"

/***/ },

/***/ 650:
/***/ function(module, exports) {

module.exports = "<div class = \"search\">\n<button class=\"btn btn-primary\" type=\"button\" \n    (click)=\"getSingleAsset()\">\n    <strong> Click to update metadata for single asset </strong>\n</button>\n</div>\n\n  <div *ngIf = \"searchRes\">\n    <!--<div *ngFor = \"let assets of searchRes | filter: filterargs\">-->\n    <div *ngFor = \"let assets of searchRes\">\n      <div *ngIf = \"assets.assetTypeName == 'epg'\">\n            <form class =\"form\">\n              <div class=\"form-group\">\n                <label>Title</label>\n                <input  class=\"form-control\" placeholder=\"{{ assets.metadata.title.$ }}\">\n              </div> \n              <div class=\"form-group\">\n                <label>Genre</label>\n                <input class=\"form-control\" placeholder=\"{{ assets.metadata.genre.$ }}\">\n              </div> \n              <div class=\"form-group\">\n                <label>Tags</label>\n                <input class=\"form-control\" placeholder=\"{{ assets.metadata.tags.$ }}\">\n              </div> \n              <button class=\"btn btn-danger\">Update</button>\n            </form>\n        </div>\n    </div>\n  </div>\n \n\n"

/***/ },

/***/ 651:
/***/ function(module, exports) {

module.exports = "<div *ngIf = \"playback\">\n        <video controls height=\"400\" width=\"550\" src=\"{{playback.playback.items.item.url}}\"\n            data-viblast-key=\"383c111d-3645-462e-b7e3-e050f8c46b76\"\n            data-viblast-base-url=\"\">\n        </video>\n</div>\n"

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(375);


/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(656);
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
    VimondService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], VimondService);
    return VimondService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Downloads/vimondcase/src/vimond.service.js.map

/***/ }

},[672]);
//# sourceMappingURL=main.bundle.map