webpackJsonp([0],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/admin/logfile/logfile.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".log-viewer {\n  height: 90%;\n  font-family: monospace;\n  background: black;\n  color: white; }\n\n.log-navigation-button, .to-top, .to-bottom {\n  position: relative;\n  display: block;\n  right: 5px;\n  margin-right: 5px;\n  padding-right: 10px;\n  text-align: right;\n  color: white; }\n\n.to-top {\n  bottom: 50px; }\n\n.to-bottom {\n  top: 30px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/home/home.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\r\nMain page styles\r\n========================================================================== */\n.hipster {\n  display: inline-block;\n  width: 347px;\n  height: 497px;\n  background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster.png") + ") no-repeat center top;\n  background-size: contain; }\n\n.card {\n  margin-top: 2%; }\n  .card .card-title {\n    color: white;\n    margin-bottom: 0;\n    margin-top: 0;\n    font-size: 17px; }\n\n.table, .table tr, .table td, .table th {\n  border: none; }\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2 / 1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster {\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster2x.png") + ") no-repeat center top;\n    background-size: contain; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\r\nNavbar\r\n========================================================================== */\n.navbar-version {\n  font-size: 10px;\n  color: #ccc; }\n\n.jh-navbar {\n  background-color: #353d47;\n  padding: .2em 1em; }\n  .jh-navbar .profile-image {\n    margin: -10px 0px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%; }\n  .jh-navbar .dropdown-item.active, .jh-navbar .dropdown-item.active:focus, .jh-navbar .dropdown-item.active:hover {\n    background-color: #353d47; }\n  .jh-navbar .dropdown-toggle::after {\n    margin-left: 0.15em; }\n  .jh-navbar ul.navbar-nav {\n    padding: 0.5em; }\n    .jh-navbar ul.navbar-nav .nav-item {\n      margin-left: 1.5rem; }\n  .jh-navbar a.nav-link {\n    font-weight: 400; }\n  .jh-navbar .jh-navbar-toggler {\n    color: #ccc;\n    font-size: 1.5em;\n    padding: 10px; }\n    .jh-navbar .jh-navbar-toggler:hover {\n      color: #fff; }\n\n@media screen and (max-width: 992px) {\n  .jh-logo-container {\n    width: 100%; } }\n\n.navbar-title {\n  display: inline-block;\n  vertical-align: middle; }\n\n/* ==========================================================================\r\nLogo styles\r\n========================================================================== */\n.navbar-brand.logo {\n  padding: 5px 15px; }\n  .navbar-brand.logo .logo-img {\n    height: 45px;\n    width: 70px;\n    display: inline-block;\n    vertical-align: middle;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/logo-jhipster.png") + ") no-repeat center center;\n    background-size: contain; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/profiles/page-ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\r\nDevelopement Ribbon\r\n========================================================================== */\n.ribbon {\n  background-color: rgba(170, 0, 0, 0.5);\n  left: -3.5em;\n  moz-transform: rotate(-45deg);\n  ms-transform: rotate(-45deg);\n  o-transform: rotate(-45deg);\n  webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  overflow: hidden;\n  position: absolute;\n  top: 40px;\n  white-space: nowrap;\n  width: 15em;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0.75; }\n  .ribbon a {\n    color: #fff;\n    display: block;\n    font-weight: 400;\n    margin: 1px 0;\n    padding: 10px 50px;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: 0 0 5px #444;\n    pointer-events: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/registry/applications/applications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\r\nApplications page styles\r\n========================================================================== */\n.apps {\n  margin-bottom: 2%;\n  padding-left: 0; }\n  .apps span.badge {\n    /* UP, DOWN, ... */\n    float: right; }\n  .apps li.list-group-item {\n    /* apps names */\n    word-break: break-all;\n    display: block; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/registry/replicas/replicas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\r\nReplicas page styles\r\n========================================================================== */\n#replicas {\n  margin-top: 3%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/shared/refresh/refresh-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\r\nRefresh selector styles\r\n========================================================================== */\n.dropdown .times {\n  font-weight: normal;\n  line-height: 1.25; }\n  .dropdown .times .times-text {\n    font-family: sans-serif; }\n\n.dropdown .dropdown-menu {\n  border-color: darkgrey; }\n  .dropdown .dropdown-menu .dropdown-item {\n    /* refresh times */\n    word-break: break-all; }\n    .dropdown .dropdown-menu .dropdown-item:hover {\n      color: #fff;\n      background-color: #80bed8; }\n    .dropdown .dropdown-menu .dropdown-item:active {\n      color: #fff;\n      background-color: #0275d8; }\n    .dropdown .dropdown-menu .dropdown-item.manual-refresh {\n      display: initial; }\n  .dropdown .dropdown-menu .dropdown-divider {\n    background-color: #dcdcdc; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/shared/routes/route-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\r\nRoute selector styles\r\n========================================================================== */\n.route-selector {\n  margin-top: 1%;\n  margin-bottom: 2%;\n  padding-left: 0; }\n  .route-selector .dropdown {\n    margin-right: 10px; }\n    .route-selector .dropdown .dropdown-menu {\n      border-color: darkgrey; }\n      .route-selector .dropdown .dropdown-menu .search {\n        margin: auto 10px; }\n      .route-selector .dropdown .dropdown-menu .dropdown-item {\n        /* routes names */\n        margin-right: 0.5rem;\n        word-break: break-all;\n        display: block;\n        display: -webkit-flex;\n        justify-content: space-between; }\n        .route-selector .dropdown .dropdown-menu .dropdown-item:hover {\n          color: #fff;\n          background-color: #80bed8; }\n        .route-selector .dropdown .dropdown-menu .dropdown-item:active {\n          color: #fff;\n          background-color: #0275d8; }\n        .route-selector .dropdown .dropdown-menu .dropdown-item .badge {\n          /** vertically center badges */\n          margin: auto 0; }\n        .route-selector .dropdown .dropdown-menu .dropdown-item.disabled {\n          /** disable DOWN instances **/\n          pointer-events: none; }\n", ""]);

// exports


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var JHipsterRegistryAdminModule = (function () {
    function JHipsterRegistryAdminModule() {
    }
    return JHipsterRegistryAdminModule;
}());
JHipsterRegistryAdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.JHipsterRegistrySharedModule,
            router_1.RouterModule.forRoot(_1.adminState, { useHash: true })
        ],
        declarations: [
            _1.LogsComponent,
            _1.JhiConfigurationComponent,
            _1.JhiDocsComponent,
            _1.JhiHealthCheckComponent,
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringComponent,
            _1.JhiMetricsMonitoringModalComponent,
            _1.JhiLogfileComponent
        ],
        entryComponents: [
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringModalComponent,
        ],
        providers: [
            _1.JhiConfigurationService,
            _1.JhiHealthService,
            _1.JhiMetricsService,
            _1.LogsService,
            _1.JhiLogfileService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JHipsterRegistryAdminModule);
exports.JHipsterRegistryAdminModule = JHipsterRegistryAdminModule;


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ADMIN_ROUTES = [
    _1.configurationRoute,
    _1.docsRoute,
    _1.healthRoute,
    _1.logfileRoute,
    _1.logsRoute,
    _1.metricsRoute
];
exports.adminState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: ADMIN_ROUTES
    }];


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2>Configuration</h2> <jhi-route-selector></jhi-route-selector> <p><span>Filter (by prefix)</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"></p> <h3>Spring configuration</h3> <table class=\"table table-striped table-bordered table-responsive d-table\" *ngIf=\"configuration\"> <thead> <tr> <th class=\"w-40\" (click)=\"orderProp = 'prefix'; reverse=!reverse\"><span>Prefix</span></th> <th class=\"w-60\" (click)=\"orderProp = 'properties'; reverse=!reverse\"><span>Properties</span></th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of (configuration | pureFilter:filter:'prefix' | orderBy:orderProp:reverse)\"> <td><span>{{entry.prefix}}</span></td> <td> <div class=\"row\" *ngFor=\"let key of keys(entry.properties)\"> <div class=\"col-md-4\">{{key}}</div> <div class=\"col-md-8\"> <span class=\"float-right badge badge-success break\">{{entry.properties[key] | json}}</span> </div> </div> </td> </tr> </tbody> </table> <div *ngIf=\"allConfiguration\"> <div *ngFor=\"let key of keys(allConfiguration)\"> <h4><span>{{key}}</span></h4> <table class=\"table table-sm table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\">Property</th> <th class=\"w-60\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let item of allConfiguration[key]\"> <td class=\"break\">{{item.key}}</td> <td class=\"break\"> <span class=\"float-right badge badge-success break\">{{item.val}}</span> </td> </tr> </tbody> </table> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var configuration_service_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiConfigurationComponent = (function () {
    function JhiConfigurationComponent(configurationService, routesService) {
        this.configurationService = configurationService;
        this.routesService = routesService;
        this.allConfiguration = null;
        this.configuration = null;
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }
    JhiConfigurationComponent.prototype.keys = function (dict) {
        return (dict === undefined) ? [] : Object.keys(dict);
    };
    JhiConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.routesService.routeChanged$.subscribe(function (route) {
            _this.activeRoute = route;
            _this.displayActiveRouteConfig();
        });
    };
    JhiConfigurationComponent.prototype.displayActiveRouteConfig = function () {
        var _this = this;
        this.updatingConfig = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.configurationService.getInstanceConfigs(this.activeRoute).subscribe(function (configuration) {
                _this.configuration = configuration;
                _this.updatingConfig = false;
                for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                    var config = configuration_1[_i];
                    if (config.properties !== undefined) {
                        _this.configKeys.push(Object.keys(config.properties));
                    }
                }
            }, function (error) {
                _this.updatingConfig = false;
                _this.routesService.routeDown(_this.activeRoute);
            });
            this.configurationService.getInstanceEnv(this.activeRoute).subscribe(function (configuration) {
                _this.allConfiguration = configuration;
            });
        }
        else {
            this.routesService.routeDown(this.activeRoute);
        }
    };
    JhiConfigurationComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return JhiConfigurationComponent;
}());
JhiConfigurationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-configuration',
        template: __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.html")
    }),
    __metadata("design:paramtypes", [configuration_service_1.JhiConfigurationService,
        shared_1.JhiRoutesService])
], JhiConfigurationComponent);
exports.JhiConfigurationComponent = JhiConfigurationComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var configuration_component_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts");
exports.configurationRoute = {
    path: 'jhi-configuration',
    component: configuration_component_1.JhiConfigurationComponent,
    data: {
        pageTitle: 'Cloud configuration'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiConfigurationService = (function () {
    function JhiConfigurationService(http) {
        this.http = http;
    }
    JhiConfigurationService.prototype.getConfigs = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return this.http.get(prefix + 'management/configprops').map(function (res) {
            var properties = [];
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    properties.push(propertiesObject[key]);
                }
            }
            return properties.sort(function (propertyA, propertyB) {
                return (propertyA.prefix === propertyB.prefix) ? 0 :
                    (propertyA.prefix < propertyB.prefix) ? -1 : 1;
            });
        });
    };
    JhiConfigurationService.prototype.getInstanceConfigs = function (instance) {
        if (instance && instance.prefix && instance.prefix.length > 0) {
            return this.getConfigs(instance.prefix + '/');
        }
        return this.getConfigs();
    };
    JhiConfigurationService.prototype.getEnv = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return this.http.get(prefix + 'management/env').map(function (res) {
            var properties = {};
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    var valsObject = propertiesObject[key];
                    var vals = [];
                    for (var valKey in valsObject) {
                        if (valsObject.hasOwnProperty(valKey)) {
                            vals.push({ key: valKey, val: valsObject[valKey] });
                        }
                    }
                    properties[key] = vals;
                }
            }
            return properties;
        });
    };
    JhiConfigurationService.prototype.getInstanceEnv = function (instance) {
        if (instance && instance.prefix && instance.prefix.length > 0) {
            return this.getEnv(instance.prefix + '/');
        }
        return this.getEnv();
    };
    return JhiConfigurationService;
}());
JhiConfigurationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiConfigurationService);
exports.JhiConfigurationService = JhiConfigurationService;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"swagger-ui/index.html\" width=\"100%\" height=\"900\" seamless target=\"_top\" title=\"Swagger UI\" class=\"border-0\"></iframe> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var JhiDocsComponent = (function () {
    function JhiDocsComponent() {
    }
    return JhiDocsComponent;
}());
JhiDocsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-docs',
        template: __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.html")
    }),
    __metadata("design:paramtypes", [])
], JhiDocsComponent);
exports.JhiDocsComponent = JhiDocsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var docs_component_1 = __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts");
exports.docsRoute = {
    path: 'docs',
    component: docs_component_1.JhiDocsComponent,
    data: {
        pageTitle: 'API'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"showHealthLabel\"> <span class=\"text-capitalize\">{{ baseName(currentHealth.name) }}</span> {{subSystemName(currentHealth.name)}} </h4> <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss('closed')\">&times;</button> </div> <div class=\"modal-body\"> <div *ngIf=\"currentHealth.details\"> <h4>Properties</h4> <div class=\"table-responsive\"> <table class=\"table table-striped\"> <thead> <tr> <th class=\"w-40 text-left\">Name</th> <th class=\"w-60 text-left\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of currentHealth.details | keys\"> <td class=\"w-40 text-left\">{{entry.key}}</td> <td class=\"w-60 text-left\">{{readableValue(entry.value)}}</td> </tr> </tbody> </table> </div> </div> <div *ngIf=\"currentHealth.error\"> <h4>Error</h4> <pre>{{currentHealth.error}}</pre> </div> </div> <div class=\"modal-footer\"> <button data-dismiss=\"modal\" class=\"btn btn-secondary float-xs-left\" type=\"button\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(8);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var JhiHealthModalComponent = (function () {
    function JhiHealthModalComponent(healthService, activeModal) {
        this.healthService = healthService;
        this.activeModal = activeModal;
    }
    JhiHealthModalComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthModalComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthModalComponent.prototype.readableValue = function (value) {
        if (this.currentHealth.name !== 'diskSpace') {
            return value.toString();
        }
        // Should display storage space in an human readable unit
        var val = value / 1073741824;
        if (val > 1) {
            return val.toFixed(2) + ' GB';
        }
        else {
            return (value / 1048576).toFixed(2) + ' MB';
        }
    };
    return JhiHealthModalComponent;
}());
JhiHealthModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.html")
    }),
    __metadata("design:paramtypes", [health_service_1.JhiHealthService, ng_bootstrap_1.NgbActiveModal])
], JhiHealthModalComponent);
exports.JhiHealthModalComponent = JhiHealthModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2>Health Checks</h2> <jhi-route-selector></jhi-route-selector> <div class=\"table-responsive\"> <table id=\"healthCheck\" class=\"table table-striped\"> <thead> <tr> <th>Service Name</th> <th class=\"text-center\">Status</th> <th class=\"text-center\">Details</th> </tr> </thead> <tbody> <tr *ngFor=\"let health of healthData\"> <td><span class=\"text-capitalize\">{{ baseName(health.name) }}</span> {{subSystemName(health.name)}}</td> <td class=\"text-center\"> <span class=\"badge badge-pill font-weight-normal\" [ngClass]=\"getBadgeClass(health.status)\"> {{health.status}} </span> </td> <td class=\"text-center\"> <a class=\"hand\" (click)=\"showHealth(health)\" *ngIf=\"health.details || health.error\"> <i class=\"fa fa-eye\"></i> </a> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(8);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var health_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiHealthCheckComponent = (function () {
    function JhiHealthCheckComponent(modalService, healthService, routesService) {
        this.modalService = modalService;
        this.healthService = healthService;
        this.routesService = routesService;
    }
    JhiHealthCheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.routesService.routeChanged$.subscribe(function (route) {
            _this.activeRoute = route;
            _this.displayActiveRouteHealth();
        });
    };
    JhiHealthCheckComponent.prototype.displayActiveRouteHealth = function () {
        var _this = this;
        this.updatingHealth = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.healthService.checkInstanceHealth(this.activeRoute).subscribe(function (health) {
                _this.healthData = _this.healthService.transformHealthData(health);
                _this.updatingHealth = false;
            }, function (error) {
                if (error.status === 503 || error.status === 500 || error.status === 404) {
                    _this.healthData = _this.healthService.transformHealthData(error.json());
                    _this.updatingHealth = false;
                    if (error.status === 500 || error.status === 404) {
                        _this.routesService.routeDown(_this.activeRoute);
                    }
                }
            });
        }
        else {
            this.routesService.routeDown(this.activeRoute);
        }
    };
    // user click
    JhiHealthCheckComponent.prototype.showHealth = function (health) {
        var modalRef = this.modalService.open(health_modal_component_1.JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(function (result) {
            // Left blank intentionally, nothing to do here
        }, function (reason) {
            // Left blank intentionally, nothing to do here
        });
    };
    JhiHealthCheckComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    // user click
    JhiHealthCheckComponent.prototype.getBadgeClass = function (statusState) {
        if (!statusState || statusState !== 'UP') {
            return 'badge-danger';
        }
        else {
            return 'badge-success';
        }
    };
    JhiHealthCheckComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthCheckComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return JhiHealthCheckComponent;
}());
JhiHealthCheckComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        health_service_1.JhiHealthService,
        shared_1.JhiRoutesService])
], JhiHealthCheckComponent);
exports.JhiHealthCheckComponent = JhiHealthCheckComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var health_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.component.ts");
exports.healthRoute = {
    path: 'jhi-health',
    component: health_component_1.JhiHealthCheckComponent,
    data: {
        pageTitle: 'Health Checks'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiHealthService = (function () {
    function JhiHealthService(http) {
        this.http = http;
        this.separator = '.';
    }
    // get the Registry's health
    JhiHealthService.prototype.checkHealth = function () {
        return this.http.get('management/health').map(function (res) { return res.json(); });
    };
    // get the instance's health
    JhiHealthService.prototype.checkInstanceHealth = function (instance) {
        if (instance && instance.prefix && instance.prefix.length > 0) {
            return this.http.get((instance.prefix + '/management/health')).map(function (res) { return res.json(); });
        }
        return this.checkHealth();
    };
    JhiHealthService.prototype.transformHealthData = function (data) {
        var response = [];
        this.flattenHealthData(response, null, data);
        return response;
    };
    JhiHealthService.prototype.getBaseName = function (name) {
        if (name) {
            var split = name.split('.');
            return split[0];
        }
    };
    JhiHealthService.prototype.getSubSystemName = function (name) {
        if (name) {
            var split = name.split('.');
            split.splice(0, 1);
            var remainder = split.join('.');
            return remainder ? ' - ' + remainder : '';
        }
    };
    /* private methods */
    JhiHealthService.prototype.addHealthObject = function (result, isLeaf, healthObject, name) {
        var healthData = {
            name: name
        };
        var details = {};
        var hasDetails = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (key === 'status' || key === 'error') {
                    healthData[key] = value;
                }
                else {
                    if (!this.isHealthObject(value)) {
                        details[key] = value;
                        hasDetails = true;
                    }
                }
            }
        }
        // Add the details
        if (hasDetails) {
            healthData.details = details;
        }
        // Only add nodes if they provide additional information
        if (isLeaf || hasDetails || healthData.error) {
            result.push(healthData);
        }
        return healthData;
    };
    JhiHealthService.prototype.flattenHealthData = function (result, path, data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (this.isHealthObject(value)) {
                    if (this.hasSubSystem(value)) {
                        this.addHealthObject(result, false, value, this.getModuleName(path, key));
                        this.flattenHealthData(result, this.getModuleName(path, key), value);
                    }
                    else {
                        this.addHealthObject(result, true, value, this.getModuleName(path, key));
                    }
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.getModuleName = function (path, name) {
        var result;
        if (path && name) {
            result = path + this.separator + name;
        }
        else if (path) {
            result = path;
        }
        else if (name) {
            result = name;
        }
        else {
            result = '';
        }
        return result;
    };
    JhiHealthService.prototype.hasSubSystem = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (value && value.status) {
                    result = true;
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.isHealthObject = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                if (key === 'status') {
                    result = true;
                }
            }
        }
        return result;
    };
    return JhiHealthService;
}());
JhiHealthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiHealthService);
exports.JhiHealthService = JhiHealthService;


/***/ }),

/***/ "./src/main/webapp/app/admin/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logfile/logfile.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logfile/logfile.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logfile/logfile.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/admin.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/admin/logfile/logfile.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2>View logs</h2> <jhi-route-selector></jhi-route-selector> <div class=\"to-bottom\" *ngIf=\"logtxt\" (click)=\"scrollToBottom()\"><i class=\"fa fa-arrow-circle-down\"></i> Bottom</div> <div class=\"form-group\"> <textarea #logfile readonly=\"readonly\" class=\"form-control log-viewer\" rows=\"30\">\r\n{{logtxt}}\r\n        </textarea> </div> <div class=\"to-top\" *ngIf=\"logtxt\" (click)=\"scrollToTop()\"><i class=\"fa fa-arrow-circle-up\"></i> Top</div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/logfile/logfile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var logfile_service_1 = __webpack_require__("./src/main/webapp/app/admin/logfile/logfile.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiLogfileComponent = (function () {
    function JhiLogfileComponent(jhiLogfileService, routesService) {
        this.jhiLogfileService = jhiLogfileService;
        this.routesService = routesService;
    }
    JhiLogfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.routesService.routeChanged$.subscribe(function (route) {
            _this.activeRoute = route;
            _this.displayActiveRouteLog();
        });
    };
    JhiLogfileComponent.prototype.displayActiveRouteLog = function () {
        var _this = this;
        this.updatingLogfile = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.jhiLogfileService.getInstanceLogfile(this.activeRoute).subscribe(function (logtxt) {
                _this.logtxt = logtxt;
                _this.updatingLogfile = false;
            }, function (error) {
                if (error.status === 503 || error.status === 500 || error.status === 404) {
                    _this.logtxt = 'No available logfile. \n'
                        + 'Please check:\n '
                        + '- if the microservice is up\n '
                        + '- these properties are set: \n '
                        + '    - logging.path\n '
                        + '    - logging.file (to avoid using the same spring.log)\n\n'
                        + 'See:\n '
                        + '- https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-endpoints.html\n '
                        + '- https://docs.spring.io/spring-boot/docs/current/reference/html/howto-logging.html';
                    _this.updatingLogfile = false;
                }
            });
        }
    };
    JhiLogfileComponent.prototype.scrollToBottom = function () {
        this.logFileViewer.nativeElement.scrollTop = this.logFileViewer.nativeElement.scrollHeight;
    };
    JhiLogfileComponent.prototype.scrollToTop = function () {
        this.logFileViewer.nativeElement.scrollTop = this.logFileViewer.nativeElement.scrolledUp;
    };
    JhiLogfileComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return JhiLogfileComponent;
}());
__decorate([
    core_1.ViewChild('logfile'),
    __metadata("design:type", core_1.ElementRef)
], JhiLogfileComponent.prototype, "logFileViewer", void 0);
JhiLogfileComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logfile',
        template: __webpack_require__("./src/main/webapp/app/admin/logfile/logfile.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/admin/logfile/logfile.scss")
        ]
    }),
    __metadata("design:paramtypes", [logfile_service_1.JhiLogfileService,
        shared_1.JhiRoutesService])
], JhiLogfileComponent);
exports.JhiLogfileComponent = JhiLogfileComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/logfile/logfile.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logfile_component_1 = __webpack_require__("./src/main/webapp/app/admin/logfile/logfile.component.ts");
exports.logfileRoute = {
    path: 'logs',
    component: logfile_component_1.JhiLogfileComponent,
    data: {
        pageTitle: 'Logs'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/logfile/logfile.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/admin/logfile/logfile.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/admin/logfile/logfile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiLogfileService = (function () {
    function JhiLogfileService(http) {
        this.http = http;
    }
    // get the Registry's logfile
    JhiLogfileService.prototype.getLogfile = function () {
        return this.http.get('management/logfile').map(function (res) { return res.text(); });
    };
    // get the instance's logfile
    JhiLogfileService.prototype.getInstanceLogfile = function (instance) {
        if (instance && instance.prefix && instance.prefix.length > 0) {
            return this.http.get(instance.prefix + '/management/logfile').map(function (res) { return res.text(); });
        }
        return this.getLogfile();
    };
    return JhiLogfileService;
}());
JhiLogfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiLogfileService);
exports.JhiLogfileService = JhiLogfileService;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/log.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Log = (function () {
    function Log(name, level) {
        this.name = name;
        this.level = level;
    }
    return Log;
}());
exports.Log = Log;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" *ngIf=\"loggers\"> <h2>Loggers</h2> <jhi-route-selector></jhi-route-selector> <p>There are {{ loggers.length }} loggers.</p> <span>Filter</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr title=\"click to order\"> <th (click)=\"orderProp = 'name'; reverse=!reverse\"><span>Name</span></th> <th (click)=\"orderProp = 'level'; reverse=!reverse\"><span>Level</span></th> </tr> </thead> <tr *ngFor=\"let logger of (loggers | pureFilter:filter:'name' | orderBy:orderProp:reverse)\"> <td><small>{{logger.name | slice:0:140}}</small></td> <td> <button (click)=\"changeLevel(logger.name, 'TRACE')\" [ngClass]=\"(logger.level=='TRACE') ? 'btn-primary' : 'btn-secondary'\" class=\"btn btn-sm\">TRACE</button> <button (click)=\"changeLevel(logger.name, 'DEBUG')\" [ngClass]=\"(logger.level=='DEBUG') ? 'btn-success' : 'btn-secondary'\" class=\"btn btn-sm\">DEBUG</button> <button (click)=\"changeLevel(logger.name, 'INFO')\" [ngClass]=\"(logger.level=='INFO') ? 'btn-info' : 'btn-secondary'\" class=\"btn btn-sm\">INFO</button> <button (click)=\"changeLevel(logger.name, 'WARN')\" [ngClass]=\"(logger.level=='WARN') ? 'btn-warning' : 'btn-secondary'\" class=\"btn btn-sm\">WARN</button> <button (click)=\"changeLevel(logger.name, 'ERROR')\" [ngClass]=\"(logger.level=='ERROR') ? 'btn-danger' : 'btn-secondary'\" class=\"btn btn-sm\">ERROR</button> </td> </tr> </table> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var log_model_1 = __webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts");
var logs_service_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var LogsComponent = (function () {
    function LogsComponent(logsService, routesService) {
        this.logsService = logsService;
        this.routesService = routesService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggers = [];
        this.subscription = this.routesService.routeChanged$.subscribe(function (route) {
            _this.activeRoute = route;
            _this.displayActiveRouteLogs();
        });
    };
    LogsComponent.prototype.changeLevel = function (name, level) {
        var _this = this;
        var log = new log_model_1.Log(name, level);
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.logsService.changeInstanceLevel(this.activeRoute, log).subscribe(function () {
                _this.logsService.findInstanceAll(_this.activeRoute).subscribe(function (loggers) { return _this.loggers = loggers; });
            });
        }
    };
    LogsComponent.prototype.displayActiveRouteLogs = function () {
        var _this = this;
        this.updatingLogs = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.logsService.findInstanceAll(this.activeRoute).subscribe(function (loggers) {
                _this.loggers = loggers;
                _this.updatingLogs = false;
            }, function (error) {
                if (error.status === 503 || error.status === 500 || error.status === 404) {
                    _this.updatingLogs = false;
                    if (error.status === 500 || error.status === 404) {
                        _this.routesService.routeDown(_this.activeRoute);
                    }
                }
            });
        }
        else {
            this.routesService.routeDown(this.activeRoute);
        }
    };
    LogsComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logs',
        template: __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.html")
    }),
    __metadata("design:paramtypes", [logs_service_1.LogsService,
        shared_1.JhiRoutesService])
], LogsComponent);
exports.LogsComponent = LogsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logs_component_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts");
exports.logsRoute = {
    path: 'loggers',
    component: logs_component_1.LogsComponent,
    data: {
        pageTitle: 'Loggers'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var LogsService = (function () {
    function LogsService(http) {
        this.http = http;
    }
    LogsService.prototype.changeLevel = function (log) {
        return this.http.put('management/logs', log);
    };
    LogsService.prototype.changeInstanceLevel = function (instance, log) {
        if (instance && instance.prefix && instance.prefix.length > 0) {
            return this.http.put(instance.prefix + '/management/logs', log);
        }
        return this.changeLevel(log);
    };
    LogsService.prototype.findAll = function () {
        return this.http.get('management/logs').map(function (res) { return res.json(); });
    };
    LogsService.prototype.findInstanceAll = function (instance) {
        if (instance && instance.prefix && instance.prefix.length > 0) {
            return this.http.get((instance.prefix + '/management/logs')).map(function (res) { return res.json(); });
        }
        return this.findAll();
    };
    return LogsService;
}());
LogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LogsService);
exports.LogsService = LogsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"modal-header\"> <h4 class=\"modal-title\">Threads dump</h4> <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss('closed')\">&times;</button> </div> <div class=\"modal-body\"> <span class=\"badge badge-primary\" (click)=\"threadDumpFilter = {}\">All&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpAll}}</span></span>&nbsp; <span class=\"badge badge-success\" (click)=\"threadDumpFilter = {threadState: 'RUNNABLE'}\">Runnable&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpRunnable}}</span></span>&nbsp; <span class=\"badge badge-info\" (click)=\"threadDumpFilter = {threadState: 'WAITING'}\">Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpWaiting}}</span></span>&nbsp; <span class=\"badge badge-warning\" (click)=\"threadDumpFilter = {threadState: 'TIMED_WAITING'}\">Timed Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpTimedWaiting}}</span></span>&nbsp; <span class=\"badge badge-danger\" (click)=\"threadDumpFilter = {threadState: 'BLOCKED'}\">Blocked&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpBlocked}}</span></span>&nbsp; <div class=\"mt-2\">&nbsp;</div> Filter <input type=\"text\" [(ngModel)]=\"threadDumpFilter\" class=\"form-control\"> <div class=\"pad\" *ngFor=\"let entry of threadDump | pureFilter:threadDumpFilter:'lockName' | keys\"> <h6> <span class=\"badge\" [ngClass]=\"getBadgeClass(entry.value.threadState)\">{{entry.value.threadState}}</span>&nbsp;{{entry.value.threadName}} (ID {{entry.value.threadId}}) <a (click)=\"entry.show = !entry.show\" href=\"javascript:void(0);\"> <span [hidden]=\"entry.show\">Show StackTrace</span> <span [hidden]=\"!entry.show\">Hide StackTrace</span> </a> </h6> <div class=\"card\" [hidden]=\"!entry.show\"> <div class=\"card-block\"> <div *ngFor=\"let st of entry.value.stackTrace | keys\" class=\"break\"> <samp>{{st.value.className}}.{{st.value.methodName}}(<code>{{st.value.fileName}}:{{st.value.lineNumber}}</code>)</samp> <span class=\"mt-1\"></span> </div> </div> </div> <table class=\"table table-sm table-responsive\"> <thead> <tr> <th class=\"text-right\">Blocked Time</th> <th class=\"text-right\">Blocked Count</th> <th class=\"text-right\">Waited Time</th> <th class=\"text-right\">Waited Count</th> <th>Lock Name</th> </tr> </thead> <tbody> <tr> <td>{{entry.value.blockedTime}}</td> <td>{{entry.value.blockedCount}}</td> <td>{{entry.value.waitedTime}}</td> <td>{{entry.value.waitedCount}}</td> <td><code>{{entry.value.lockName}}</code></td> </tr> </tbody> </table> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary pull-left\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(8);
var JhiMetricsMonitoringModalComponent = (function () {
    function JhiMetricsMonitoringModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.threadDumpAll = 0;
        this.threadDumpBlocked = 0;
        this.threadDumpRunnable = 0;
        this.threadDumpTimedWaiting = 0;
        this.threadDumpWaiting = 0;
    }
    JhiMetricsMonitoringModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadDump.forEach(function (value) {
            if (value.threadState === 'RUNNABLE') {
                _this.threadDumpRunnable += 1;
            }
            else if (value.threadState === 'WAITING') {
                _this.threadDumpWaiting += 1;
            }
            else if (value.threadState === 'TIMED_WAITING') {
                _this.threadDumpTimedWaiting += 1;
            }
            else if (value.threadState === 'BLOCKED') {
                _this.threadDumpBlocked += 1;
            }
        });
        this.threadDumpAll = this.threadDumpRunnable + this.threadDumpWaiting +
            this.threadDumpTimedWaiting + this.threadDumpBlocked;
    };
    JhiMetricsMonitoringModalComponent.prototype.getBadgeClass = function (threadState) {
        if (threadState === 'RUNNABLE') {
            return 'badge-success';
        }
        else if (threadState === 'WAITING') {
            return 'badge-info';
        }
        else if (threadState === 'TIMED_WAITING') {
            return 'badge-warning';
        }
        else if (threadState === 'BLOCKED') {
            return 'badge-danger';
        }
    };
    return JhiMetricsMonitoringModalComponent;
}());
JhiMetricsMonitoringModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], JhiMetricsMonitoringModalComponent);
exports.JhiMetricsMonitoringModalComponent = JhiMetricsMonitoringModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2>Application Metrics</h2> <jhi-route-selector></jhi-route-selector> <h3>JVM Metrics</h3> <div class=\"row\" *ngIf=\"metrics && metrics.gauges\"> <div class=\"col-md-4\"> <b>Memory</b> <p><span>Total Memory</span> ({{metrics.gauges['jvm.memory.total.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.total.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar type=\"success\" [max]=\"metrics.gauges['jvm.memory.total.max'].value\" [value]=\"metrics.gauges['jvm.memory.total.used'].value\" [striped]=\"true\" [animated]=\"true\"> <span>{{metrics.gauges['jvm.memory.total.used'].value * 100 / metrics.gauges['jvm.memory.total.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Heap Memory</span> ({{metrics.gauges['jvm.memory.heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.heap.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.heap.max'].value\" [value]=\"metrics.gauges['jvm.memory.heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.heap.used'].value * 100 / metrics.gauges['jvm.memory.heap.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Non-Heap Memory</span> ({{metrics.gauges['jvm.memory.non-heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.non-heap.committed'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.non-heap.committed'].value\" [value]=\"metrics.gauges['jvm.memory.non-heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.non-heap.used'].value * 100 / metrics.gauges['jvm.memory.non-heap.committed'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\" *ngIf=\"metrics.gauges\"> <b>Threads</b> (Total: {{metrics.gauges['jvm.threads.count'].value}}) <a class=\"hand\" (click)=\"refreshThreadDumpData()\" data-toggle=\"modal\" data-target=\"#threadDump\"><i class=\"fa fa-eye\"></i></a> <p><span>Runnable</span> {{metrics.gauges['jvm.threads.runnable.count'].value}}</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.runnable.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.runnable.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Timed Waiting</span> ({{metrics.gauges['jvm.threads.timed_waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.timed_waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.timed_waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Waiting</span> ({{metrics.gauges['jvm.threads.waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Blocked</span> ({{metrics.gauges['jvm.threads.blocked.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.blocked.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.blocked.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b>Garbage collections</b> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.count']\"> <div class=\"col-md-9\">Mark Sweep count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.time']\"> <div class=\"col-md-9\">Mark Sweep time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.time'].value}}ms</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.count']\"> <div class=\"col-md-9\">Scavenge count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.time']\"> <div class=\"col-md-9\">Scavenge time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.time'].value}}ms</div> </div> </div> </div> <div class=\"well well-lg\" *ngIf=\"updatingMetrics && !metrics\">Updating...</div> <h3>HTTP requests (events per second)</h3> <p *ngIf=\"metrics && metrics.counters\"> <span>Active requests</span> <b>{{metrics.counters['com.codahale.metrics.servlet.InstrumentedFilter.activeRequests'].count | number:'1.0-0'}}</b> - <span>Total requests</span> <b>{{metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count | number:'1.0-0'}}</b> </p> <div class=\"table-responsive\"> <table class=\"table table-striped\" *ngIf=\"metrics && metrics.timers && metrics.meters\"> <thead> <tr> <th>Code</th> <th>Count</th> <th class=\"text-right\">Mean</th> <th class=\"text-right\"><span>Average</span> (1 min)</th> <th class=\"text-right\"><span>Average</span> (5 min)</th> <th class=\"text-right\"><span>Average</span> (15 min)</th> </tr> </thead> <tbody> <tr> <td>OK</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m15_rate) | number:'1.0-2'}} </td> </tr> <tr> <td>Not Found</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m15_rate) | number:'1.0-2'}} </td> </tr> <tr> <td>Server error</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m15_rate) | number:'1.0-2'}} </td> </tr> </tbody> </table> </div> <h3>Services statistics (time in millisecond)</h3> <div class=\"table-responsive\"> <table class=\"table table-striped\" *ngIf=\"servicesStats\"> <thead> <tr> <th>Service name</th> <th class=\"text-right\">Count</th> <th class=\"text-right\">Mean</th> <th class=\"text-right\">Min</th> <th class=\"text-right\">p50</th> <th class=\"text-right\">p75</th> <th class=\"text-right\">p95</th> <th class=\"text-right\">p99</th> <th class=\"text-right\">Max</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of servicesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{entry.value.count}}</td> <td class=\"text-right\">{{entry.value.mean * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.min * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p50 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p75 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p95 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p99 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.max * 1000 | number:'1.0-0'}}</td> </tr> </tbody> </table> </div> <h3 *ngIf=\"metrics && metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\">DataSource statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\"> <table class=\"table table-striped\"> <thead> <tr> <th><span>Usage</span> ({{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value}} / {{metrics.gauges['HikariPool-1.pool.TotalConnections'].value}})</th> <th class=\"text-right\">Count</th> <th class=\"text-right\">Mean</th> <th class=\"text-right\">Min</th> <th class=\"text-right\">p50</th> <th class=\"text-right\">p75</th> <th class=\"text-right\">p95</th> <th class=\"text-right\">p99</th> <th class=\"text-right\">Max</th> </tr> </thead> <tbody> <tr *ngIf=\"metrics.histograms\"> <td> <div class=\"progress progress-striped\"> <ngb-progressbar [max]=\"metrics.gauges['HikariPool-1.pool.TotalConnections'].value\" [value]=\"metrics.gauges['HikariPool-1.pool.ActiveConnections'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value * 100 / metrics.gauges['HikariPool-1.pool.TotalConnections'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> </td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].count}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].mean) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].min) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p50) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p75) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p95) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p99) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].max) | number:'1.0-2'}}</td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(8);
var metrics_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts");
var metrics_service_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiMetricsMonitoringComponent = (function () {
    function JhiMetricsMonitoringComponent(modalService, metricsService, routesService) {
        this.modalService = modalService;
        this.metricsService = metricsService;
        this.routesService = routesService;
        this.metrics = {};
        this.cachesStats = {};
        this.servicesStats = {};
        this.updatingMetrics = true;
        this.JCACHE_KEY = 'jcache.statistics';
    }
    JhiMetricsMonitoringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.routesService.routeChanged$.subscribe(function (route) {
            _this.activeRoute = route;
            _this.displayActiveRouteMetrics();
        });
    };
    JhiMetricsMonitoringComponent.prototype.refresh = function () {
        this.routesService.reloadRoutes();
    };
    JhiMetricsMonitoringComponent.prototype.displayActiveRouteMetrics = function () {
        var _this = this;
        this.updatingMetrics = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.metricsService.getInstanceMetrics(this.activeRoute).subscribe(function (metrics) {
                _this.metrics = metrics;
                _this.updatingMetrics = false;
                _this.servicesStats = {};
                _this.cachesStats = {};
                Object.keys(metrics.timers).forEach(function (key) {
                    var value = metrics.timers[key];
                    if (key.indexOf('web.rest') !== -1 || key.indexOf('service') !== -1) {
                        _this.servicesStats[key] = value;
                    }
                });
                Object.keys(metrics.gauges).forEach(function (key) {
                    if (key.indexOf('jcache.statistics') !== -1) {
                        var value = metrics.gauges[key].value;
                        // remove gets or puts
                        var index = key.lastIndexOf('.');
                        var newKey = key.substr(0, index);
                        // Keep the name of the domain
                        _this.cachesStats[newKey] = {
                            'name': _this.JCACHE_KEY.length,
                            'value': value
                        };
                    }
                });
            }, function (error) {
                if (error.status === 503 || error.status === 500 || error.status === 404) {
                    if (error.status === 500 || error.status === 404) {
                        _this.routesService.routeDown(_this.activeRoute);
                    }
                }
            });
        }
        else {
            this.routesService.routeDown(this.activeRoute);
        }
    };
    JhiMetricsMonitoringComponent.prototype.refreshThreadDumpData = function () {
        var _this = this;
        this.metricsService.instanceThreadDump(this.activeRoute).subscribe(function (data) {
            var modalRef = _this.modalService.open(metrics_modal_component_1.JhiMetricsMonitoringModalComponent, { size: 'lg' });
            modalRef.componentInstance.threadDump = data;
            modalRef.result.then(function (result) {
                // Left blank intentionally, nothing to do here
            }, function (reason) {
                // Left blank intentionally, nothing to do here
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.filterNaN = function (input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    };
    return JhiMetricsMonitoringComponent;
}());
JhiMetricsMonitoringComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.html"),
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        metrics_service_1.JhiMetricsService,
        shared_1.JhiRoutesService])
], JhiMetricsMonitoringComponent);
exports.JhiMetricsMonitoringComponent = JhiMetricsMonitoringComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metrics_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts");
exports.metricsRoute = {
    path: 'jhi-metrics',
    component: metrics_component_1.JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'Application Metrics'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiMetricsService = (function () {
    function JhiMetricsService(http) {
        this.http = http;
    }
    // get the Registry's metrics
    JhiMetricsService.prototype.getMetrics = function () {
        return this.http.get('management/metrics').map(function (res) { return res.json(); });
    };
    // get the instance's metrics
    JhiMetricsService.prototype.getInstanceMetrics = function (instance) {
        if (instance && instance.prefix && instance.prefix.length > 0) {
            return this.http.get((instance.prefix + '/management/metrics')).map(function (res) { return res.json(); });
        }
        return this.getMetrics();
    };
    JhiMetricsService.prototype.threadDump = function () {
        return this.http.get('management/dump').map(function (res) { return res.json(); });
    };
    JhiMetricsService.prototype.instanceThreadDump = function (instance) {
        if (instance && instance.prefix && instance.prefix.length > 0) {
            return this.http.get((instance.prefix + '/management/dump')).map(function (res) { return res.json(); });
        }
        return this.threadDump();
    };
    return JhiMetricsService;
}());
JhiMetricsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiMetricsService);
exports.JhiMetricsService = JhiMetricsService;


/***/ }),

/***/ "./src/main/webapp/app/app.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// DO NOT EDIT THIS FILE, EDIT THE WEBPACK COMMON CONFIG INSTEAD, WHICH WILL MODIFY THIS FILE
/* tslint:disable */
var _VERSION = '0.0.0'; // This value will be overwritten by webpack
var _DEBUG_INFO_ENABLED = true; // This value will be overwritten by webpack
_VERSION = "3.2.3";
_DEBUG_INFO_ENABLED = true;
/* tslint:enable */
exports.VERSION = _VERSION;
exports.DEBUG_INFO_ENABLED = _DEBUG_INFO_ENABLED;


/***/ }),

/***/ "./src/main/webapp/app/app.main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(15);
var prod_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/prod.config.ts");
var app_module_1 = __webpack_require__("./src/main/webapp/app/app.module.ts");
prod_config_1.ProdConfig();
if (true) {
    module['hot'].accept();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.JHipsterRegistryAppModule);


/***/ }),

/***/ "./src/main/webapp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(18);
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(11);
var ng2_webstorage_1 = __webpack_require__(9);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var home_module_1 = __webpack_require__("./src/main/webapp/app/home/home.module.ts");
var admin_module_1 = __webpack_require__("./src/main/webapp/app/admin/admin.module.ts");
var registry_module_1 = __webpack_require__("./src/main/webapp/app/registry/registry.module.ts");
var http_provider_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/http.provider.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var JHipsterRegistryAppModule = (function () {
    function JHipsterRegistryAppModule() {
    }
    return JHipsterRegistryAppModule;
}());
JHipsterRegistryAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            layouts_1.LayoutRoutingModule,
            ng2_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
            shared_1.JHipsterRegistrySharedModule,
            home_module_1.JHipsterRegistryHomeModule,
            admin_module_1.JHipsterRegistryAdminModule,
            registry_module_1.JHipsterRegistryModule
        ],
        declarations: [
            layouts_1.JhiMainComponent,
            layouts_1.NavbarComponent,
            layouts_1.ErrorComponent,
            layouts_1.PageRibbonComponent,
            layouts_1.FooterComponent
        ],
        providers: [
            layouts_1.ProfileService,
            http_provider_1.customHttpProvider(),
            uib_pagination_config_1.PaginationConfig,
            shared_1.UserRouteAccessService
        ],
        bootstrap: [layouts_1.JhiMainComponent]
    })
], JHipsterRegistryAppModule);
exports.JHipsterRegistryAppModule = JHipsterRegistryAppModule;


/***/ }),

/***/ "./src/main/webapp/app/app.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
exports.navbarRoute = {
    path: '',
    component: layouts_1.NavbarComponent,
    outlet: 'navbar'
};


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/prod.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
function ProdConfig() {
    // disable debug data on prod profile to improve performance
    if (!app_constants_1.DEBUG_INFO_ENABLED) {
        core_1.enableProdMode();
    }
}
exports.ProdConfig = ProdConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/uib-pagination.config.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(8);
var PaginationConfig = (function () {
    function PaginationConfig(config) {
        this.config = config;
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = shared_1.ITEMS_PER_PAGE;
        config.size = 'sm';
    }
    return PaginationConfig;
}());
PaginationConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbPaginationConfig])
], PaginationConfig);
exports.PaginationConfig = PaginationConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var Observable_1 = __webpack_require__(10);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var AuthExpiredInterceptor = (function (_super) {
    __extends(AuthExpiredInterceptor, _super);
    function AuthExpiredInterceptor(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AuthExpiredInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    AuthExpiredInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error, source) {
            if (error.status === 401) {
                var loginService = _this.injector.get(login_service_1.LoginService);
                loginService.logout();
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return AuthExpiredInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var AuthInterceptor = (function (_super) {
    __extends(AuthInterceptor, _super);
    function AuthInterceptor(localStorage, sessionStorage) {
        var _this = _super.call(this) || this;
        _this.localStorage = localStorage;
        _this.sessionStorage = sessionStorage;
        return _this;
    }
    AuthInterceptor.prototype.requestIntercept = function (options) {
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    };
    AuthInterceptor.prototype.responseIntercept = function (observable) {
        return observable; // by pass
    };
    return AuthInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var Observable_1 = __webpack_require__(10);
var ErrorHandlerInterceptor = (function (_super) {
    __extends(ErrorHandlerInterceptor, _super);
    function ErrorHandlerInterceptor(eventManager) {
        var _this = _super.call(this) || this;
        _this.eventManager = eventManager;
        return _this;
    }
    ErrorHandlerInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    ErrorHandlerInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error) {
            if (!(error.status === 401 && (error.text() === '' ||
                (error.json().path && error.json().path.indexOf('/api/account') === 0)))) {
                _this.eventManager.broadcast({ name: 'jHipsterRegistryApp.httpError', content: error });
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return ErrorHandlerInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/http.provider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var ng_jhipster_1 = __webpack_require__(5);
var auth_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts");
var ng2_webstorage_1 = __webpack_require__(9);
var auth_expired_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts");
var errorhandler_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts");
var notification_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts");
function interceptableFactory(backend, defaultOptions, localStorage, sessionStorage, injector, eventManager) {
    return new ng_jhipster_1.InterceptableHttp(backend, defaultOptions, [
        new auth_interceptor_1.AuthInterceptor(localStorage, sessionStorage),
        new auth_expired_interceptor_1.AuthExpiredInterceptor(injector),
        // Other interceptors can be added here
        new errorhandler_interceptor_1.ErrorHandlerInterceptor(eventManager),
        new notification_interceptor_1.NotificationInterceptor()
    ]);
}
exports.interceptableFactory = interceptableFactory;
;
function customHttpProvider() {
    return {
        provide: http_1.Http,
        useFactory: interceptableFactory,
        deps: [
            http_1.XHRBackend,
            http_1.RequestOptions,
            ng2_webstorage_1.LocalStorageService,
            ng2_webstorage_1.SessionStorageService,
            core_1.Injector,
            ng_jhipster_1.EventManager
        ]
    };
}
exports.customHttpProvider = customHttpProvider;
;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var Observable_1 = __webpack_require__(10);
var NotificationInterceptor = (function (_super) {
    __extends(NotificationInterceptor, _super);
    function NotificationInterceptor() {
        return _super.call(this) || this;
    }
    NotificationInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    NotificationInterceptor.prototype.responseIntercept = function (observable) {
        return observable.catch(function (error) {
            var arr = Array.from(error.headers._headers);
            var headers = [];
            var i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].endsWith('app-alert') || arr[i][0].endsWith('app-params')) {
                    headers.push(arr[i][0]);
                }
            }
            headers.sort();
            var alertKey = headers.length >= 1 ? error.headers.get(headers[0]) : null;
            if (typeof alertKey === 'string') {
                // AlertService.success(alertKey, { param: response.headers(headers[1])});
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return NotificationInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.NotificationInterceptor = NotificationInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/home/eureka.status.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var EurekaStatusService = (function () {
    function EurekaStatusService(http) {
        this.http = http;
    }
    EurekaStatusService.prototype.findAll = function () {
        return this.http.get('api/eureka/status').map(function (res) { return res.json(); });
    };
    return EurekaStatusService;
}());
EurekaStatusService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EurekaStatusService);
exports.EurekaStatusService = EurekaStatusService;


/***/ }),

/***/ "./src/main/webapp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"isAuthenticated()\"> <h1 class=\"text-center\">JHipster Registry <small>{{version}}</small></h1> <div class=\"row\"> <div class=\"col-md-12 text-center\"> <div class=\"alert alert-success\" *ngSwitchCase=\"true\"> <span *ngIf=\"account\"> You are logged in as user \"{{account.login}}\". </span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span>You are not authenticated.</span> <a class=\"alert-link\" (click)=\"login()\">Please sign in</a> </div> </div> </div> <div class=\"row\" *ngSwitchCase=\"true\"> <div class=\"col-sm-12 col-md-6\" *ngIf=\"status\"> <div class=\"card card-outline-primary\"> <div class=\"card-header card-primary\"> <h3 class=\"card-title\">System Status</h3> </div> <div class=\"card-block\"> <table class=\"table\"> <tbody> <tr> <td>Environment</td> <td>{{status.environment}}</td> </tr> <tr> <td>Data Center</td> <td>{{status.datacenter}}</td> </tr> <tr> <td>Current Time</td> <td>{{status.currentTime}}</td> </tr> <tr> <td>System Uptime</td> <td>{{status.upTime}}</td> </tr> <tr> <td>Below Renew Threshold</td> <td>{{status.isBelowRenewThreshold}}</td> </tr> </tbody> </table> </div> </div> </div> <div class=\"col-sm-12 col-md-6\" *ngIf=\"appInstances\"> <div class=\"card card-outline-primary\"> <div class=\"card-header card-primary\"> <h3 class=\"card-title\">Instances Registered</h3> </div> <div class=\"card-block\"> <table class=\"table\"> <thead> <tr> <th>App</th> <th>Instance ID</th> <th>Status</th> </tr> </thead> <tbody> <tr *ngFor=\"let app of appInstances\"> <td>{{app.name}}</td> <td class=\"break\">{{app.instanceId}}</td> <td class=\"text-center\"> <span class=\"badge badge-pill font-weight-normal\" [ngClass]=\"getBadgeClass(app.status)\"> {{app.status}} </span> </td> </tr> </tbody> </table> </div> </div> </div> </div> <div class=\"row\" *ngSwitchCase=\"true\"> <div class=\"col-sm-12 col-md-6\" *ngIf=\"status\"> <div class=\"card card-outline-primary\"> <div class=\"card-header card-primary\"> <h3 class=\"card-title\">General Info</h3> </div> <div class=\"card-block\"> <table class=\"table\"> <tbody> <tr> <td>Total Available Memory</td> <td>{{status.generalStats['total-avail-memory']}}</td> </tr> <tr> <td>Current Memory Usage</td> <td>{{status.generalStats['current-memory-usage']}}</td> </tr> <tr> <td>Number of CPU</td> <td>{{status.generalStats['num-of-cpus']}}</td> </tr> <tr> <td>Instance Ip Address</td> <td>{{status.instanceInfo.ipAddr}}</td> </tr> <tr> <td>Instance Status</td> <td> <span class=\"badge badge-pill font-weight-normal\" [ngClass]=\"getBadgeClass(status.instanceInfo.status)\"> {{status.instanceInfo.status}} </span> </td> </tr> </tbody> </table> </div> </div> </div> <div class=\"col-sm-12 col-md-6\" *ngIf=\"healthData\"> <div class=\"card card-outline-primary\"> <div class=\"card-header card-primary\"> <h3 class=\"card-title\">Health</h3> </div> <div class=\"card-block\"> <table id=\"healthCheck\" class=\"table\"> <tbody> <tr *ngFor=\"let health of healthData\"> <td><span class=\"text-capitalize\">{{baseName(health.name)}}</span> {{subSystemName(health.name)}}</td> <td class=\"text-center\"> <span class=\"badge badge-pill font-weight-normal\" [ngClass]=\"getBadgeClass(health.status)\"> {{health.status}} </span> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var admin_1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var registry_1 = __webpack_require__("./src/main/webapp/app/registry/index.ts");
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
var eureka_status_service_1 = __webpack_require__("./src/main/webapp/app/home/eureka.status.service.ts");
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var login_oauth2_service_1 = __webpack_require__("./src/main/webapp/app/shared/oauth2/login-oauth2.service.ts");
var HomeComponent = (function () {
    function HomeComponent(principal, loginModalService, loginOAuth2Service, eventManager, eurekaStatusService, applicationsService, healthService, profileService) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.loginOAuth2Service = loginOAuth2Service;
        this.eventManager = eventManager;
        this.eurekaStatusService = eurekaStatusService;
        this.applicationsService = applicationsService;
        this.healthService = healthService;
        this.profileService = profileService;
        this.version = app_constants_1.VERSION ? 'v' + app_constants_1.VERSION : '';
        this.appInstances = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
            if (!account || !_this.isAuthenticated()) {
                _this.login();
            }
            else {
                _this.populateDashboard();
            }
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
                _this.populateDashboard();
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            if (profileInfo.activeProfiles.indexOf('oauth2') > -1) {
                _this.loginOAuth2Service.login();
            }
            else {
                _this.modalRef = _this.loginModalService.open();
            }
        });
    };
    HomeComponent.prototype.populateDashboard = function () {
        var _this = this;
        this.eurekaStatusService.findAll().subscribe(function (data) {
            _this.status = data.status;
        });
        this.applicationsService.findAll().subscribe(function (data) {
            for (var _i = 0, _a = data.applications; _i < _a.length; _i++) {
                var app = _a[_i];
                for (var _b = 0, _c = app.instances; _b < _c.length; _b++) {
                    var inst = _c[_b];
                    inst.name = app.name;
                    _this.appInstances.push(inst);
                }
            }
        });
        this.healthService.checkHealth().subscribe(function (response) {
            _this.healthData = _this.healthService.transformHealthData(response);
            _this.updatingHealth = false;
        }, function (response) {
            _this.healthData = _this.healthService.transformHealthData(response.data);
            _this.updatingHealth = false;
        });
    };
    HomeComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    HomeComponent.prototype.subSystemName = function (name) {
        this.healthService.getSubSystemName(name);
    };
    HomeComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        template: __webpack_require__("./src/main/webapp/app/home/home.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/home/home.scss")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.Principal,
        shared_1.LoginModalService,
        login_oauth2_service_1.LoginOAuth2Service,
        ng_jhipster_1.EventManager,
        eureka_status_service_1.EurekaStatusService,
        registry_1.JhiApplicationsService,
        admin_1.JhiHealthService,
        profile_service_1.ProfileService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/main/webapp/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
var eureka_status_service_1 = __webpack_require__("./src/main/webapp/app/home/eureka.status.service.ts");
var login_component_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.component.ts");
var JHipsterRegistryHomeModule = (function () {
    function JHipsterRegistryHomeModule() {
    }
    return JHipsterRegistryHomeModule;
}());
JHipsterRegistryHomeModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.JHipsterRegistrySharedModule,
            router_1.RouterModule.forRoot([_1.HOME_ROUTE], { useHash: true })
        ],
        declarations: [
            _1.HomeComponent,
        ],
        entryComponents: [
            login_component_1.JhiLoginModalComponent
        ],
        providers: [
            eureka_status_service_1.EurekaStatusService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JHipsterRegistryHomeModule);
exports.JHipsterRegistryHomeModule = JHipsterRegistryHomeModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
exports.HOME_ROUTE = {
    path: '',
    component: _1.HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'JHipster Registry'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/home/home.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/home/home.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/home/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/home/home.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/eureka.status.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-8\"> <h1>Error Page!</h1> <div [hidden]=\"!errorMessage\"> <div class=\"alert alert-danger\">{{errorMessage}} </div> </div> <div [hidden]=\"!error403\" class=\"alert alert-danger\">You are not authorized to access the page. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-error',
        template: __webpack_require__("./src/main/webapp/app/layouts/error/error.component.html")
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_component_1 = __webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts");
exports.errorRoute = [
    {
        path: 'error',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
    },
    {
        path: 'accessdenied',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
    }
];


/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\"> <p>JHipster Registry - <a href=\"http://www.jhipster.tech/\">jhipster.github.io</a></p> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-footer',
        template: __webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/main/main.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/layout-routing.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/layout-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var app_route_1 = __webpack_require__("./src/main/webapp/app/app.route.ts");
var _1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var LAYOUT_ROUTES = [
    app_route_1.navbarRoute
].concat(_1.errorRoute);
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], LayoutRoutingModule);
exports.LayoutRoutingModule = LayoutRoutingModule;


/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<jhi-page-ribbon></jhi-page-ribbon> <div> <router-outlet name=\"navbar\"></router-outlet> </div> <div class=\"container-fluid\"> <div class=\"card jh-card\"> <router-outlet></router-outlet> <router-outlet name=\"popup\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var platform_browser_1 = __webpack_require__(11);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiMainComponent = (function () {
    function JhiMainComponent(titleService, router, $storageService) {
        this.titleService = titleService;
        this.router = router;
        this.$storageService = $storageService;
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'jHipsterRegistryApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.titleService.setTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
            if (event instanceof router_1.RoutesRecognized) {
                var params = {};
                var destinationData = {};
                var destinationName = '';
                var destinationEvent = event.state.root.firstChild.children[0];
                if (destinationEvent !== undefined) {
                    params = destinationEvent.params;
                    destinationData = destinationEvent.data;
                    destinationName = destinationEvent.url[0].path;
                }
                var from = { name: _this.router.url.slice(1) };
                var destination = { name: destinationName, data: destinationData };
                _this.$storageService.storeDestinationState(destination, params, from);
            }
        });
    };
    return JhiMainComponent;
}());
JhiMainComponent = __decorate([
    core_1.Component({
        selector: 'jhi-main',
        template: __webpack_require__("./src/main/webapp/app/layouts/main/main.component.html")
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title,
        router_1.Router,
        shared_1.StateStorageService])
], JhiMainComponent);
exports.JhiMainComponent = JhiMainComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-toggleable-md jh-navbar\"> <div class=\"jh-logo-container float-left\"> <a class=\"jh-navbar-toggler hidden-lg-up float-right\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\"> <i class=\"fa fa-bars\"></i> </a> <a class=\"navbar-brand logo float-left\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <span class=\"logo-img\"></span> <span class=\"navbar-title\">Registry</span> <span class=\"navbar-version\">{{version}}</span> </a> </div> <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\" [ngSwitch]=\"isAuthenticated()\"> <ul class=\"navbar-nav ml-auto\"> <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-home\" aria-hidden=\"true\"></i> <span>Home</span> </a> </li> <li *jhiHasAnyAuthority=\"'ROLE_ADMIN'\" ngbDropdown class=\"nav-item dropdown pointer\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"eureka-menu\"> <span> <i class=\"fa fa-podcast\" aria-hidden=\"true\"></i> <span>Eureka</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> <li> <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"applications\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-cloud\" aria-hidden=\"true\"></i> <span class=\"hidden-sm\">Instances</span> </a> </li> <li> <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"history\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-hourglass\" aria-hidden=\"true\"></i> <span class=\"hidden-sm\">History</span> </a> </li> <li> <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"replicas\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-cloud-download\" aria-hidden=\"true\"></i> <span class=\"hidden-sm\">Replicas</span> </a> </li> </ul> </li> <li *jhiHasAnyAuthority=\"'ROLE_ADMIN'\" ngbDropdown class=\"nav-item dropdown pointer\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"configuration-menu\"> <span> <i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> <span>Configuration</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> <li> <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"config\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-leaf\" aria-hidden=\"true\"></i> <span class=\"hidden-sm\">Cloud config</span> </a> </li> <li> <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"encryption\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-key\" aria-hidden=\"true\"></i> <span class=\"hidden-sm\">Encryption</span> </a> </li> <li> <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"ssh\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-lock\" aria-hidden=\"true\"></i> <span class=\"hidden-sm\">SSH</span> </a> </li> </ul> </li> <li *jhiHasAnyAuthority=\"'ROLE_ADMIN'\" ngbDropdown class=\"nav-item dropdown pointer\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"admin-menu\"> <span> <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> <span>Administration</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> <li> <a class=\"dropdown-item\" routerLink=\"jhi-metrics\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tachometer\" aria-hidden=\"true\"></i> <span>Metrics</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-health\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-heart\" aria-hidden=\"true\"></i> <span>Health</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-configuration\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-list\" aria-hidden=\"true\"></i> <span>Configuration</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"logs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-file-text-o\" aria-hidden=\"true\"></i> <span>Logs</span> </a> </li> <li *ngIf=\"swaggerEnabled\"> <a class=\"dropdown-item\" routerLink=\"docs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-book\" aria-hidden=\"true\"></i> <span>API</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"loggers\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tasks\" aria-hidden=\"true\"></i> <span>Loggers</span> </a> </li> </ul> </li> <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link\" (click)=\"logout()\" id=\"logout\"> <span class=\"fa fa-fw fa-sign-out\"></span> </a> </li> </ul> </div> </nav> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(5);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
var NavbarComponent = (function () {
    function NavbarComponent(loginService, principal, loginModalService, profileService, eventManager, router) {
        this.loginService = loginService;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.profileService = profileService;
        this.eventManager = eventManager;
        this.router = router;
        this.version = app_constants_1.VERSION ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getProfileInfo();
        this.registerAuthenticationSuccess();
    };
    NavbarComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.getProfileInfo();
        });
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    NavbarComponent.prototype.getProfileInfo = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-navbar',
        template: __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.scss")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.LoginService,
        shared_1.Principal,
        shared_1.LoginModalService,
        profile_service_1.ProfileService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/navbar/navbar.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var PageRibbonComponent = (function () {
    function PageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    PageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    return PageRibbonComponent;
}());
PageRibbonComponent = __decorate([
    core_1.Component({
        selector: 'jhi-page-ribbon',
        template: "<div class=\"ribbon\" *ngIf=\"ribbonEnv\"><a href=\"\">{{ribbonEnv}}</a></div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.scss")
        ]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], PageRibbonComponent);
exports.PageRibbonComponent = PageRibbonComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/profiles/page-ribbon.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile-info.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo = (function () {
    function ProfileInfo() {
    }
    return ProfileInfo;
}());
exports.ProfileInfo = ProfileInfo;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var profile_info_model_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileInfoUrl = 'api/profile-info';
    }
    ProfileService.prototype.getProfileInfo = function () {
        return this.http.get(this.profileInfoUrl)
            .map(function (res) {
            var data = res.json();
            var pi = new profile_info_model_1.ProfileInfo();
            pi.activeProfiles = data.activeProfiles;
            pi.ribbonEnv = data.ribbonEnv;
            pi.nativeSearchLocation = data.nativeSearchLocation;
            pi.gitSearchLocation = data.gitSearchLocation;
            pi.inProduction = data.activeProfiles.indexOf('prod') !== -1;
            pi.swaggerEnabled = data.activeProfiles.indexOf('swagger') !== -1;
            return pi;
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./src/main/webapp/app/registry/applications/applications.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"head\"> <h2 class=\"d-inline-block\">Application Instances</h2> <jhi-refresh-selector class=\"float-right refresh-left-side\"></jhi-refresh-selector> </div> <div class=\"apps col-md-5\" *ngIf=\"data\"> <ul class=\"list-group\"> <li class=\"list-group-item {{app.active}}\" *ngFor=\"let app of data.applications | orderBy:name\" (click)=\"show(app.name)\"> <span class=\"fa fa-alert\" *ngIf=\"(app.instances | filter:{status:'UP'}).length < app.instances.length\">&nbsp;</span> {{app.name}} <span class=\"badge badge-pill font-weight-normal badge-info\">{{(app.instances | filter:{status:'UP'}).length}} / {{app.instances.length}}</span> </li> </ul> </div> <div class=\"row\" *ngIf=\"data\"> <div id=\"instances\" class=\"col-md-12\"> <h3>Instances</h3> <div class=\"table-responsive\"> <table class=\"table table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-50\">ID</th> <th class=\"w-50\">Status</th> </tr> </thead> <tbody> <tr *ngFor=\"let instance of instances\"> <td> <a href=\"{{instance.homePageUrl}}\" target=\"_blank\">{{instance.instanceId}}</a> </td> <td class=\"text-left\"> <span class=\"badge badge-pill font-weight-normal badge-success\" [ngClass]=\"getBadgeClass(instance.status)\"> {{instance.status}} </span> <span class=\"float-right\" *ngFor=\"let entry of (instance.metadata | keys )\"> <span class=\"badge badge-default font-weight-normal\"> <span class=\"badge badge-pill badge-info font-weight-normal\">{{entry.key}}</span> {{entry.value}} </span> </span> </td> </tr> </tbody> </table> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/registry/applications/applications.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/registry/applications/applications.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/registry/applications/applications.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-access-missing-member */
// TODO lint disabled as the filter pipe used in template seems to trigger this
var core_1 = __webpack_require__(0);
var applications_service_1 = __webpack_require__("./src/main/webapp/app/registry/applications/applications.service.ts");
var refresh_service_1 = __webpack_require__("./src/main/webapp/app/shared/refresh/refresh.service.ts");
var JhiApplicationsComponent = (function () {
    function JhiApplicationsComponent(applicationsService, refreshService) {
        this.applicationsService = applicationsService;
        this.refreshService = refreshService;
    }
    JhiApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (empty) { return _this.refresh(); });
        this.refresh();
    };
    JhiApplicationsComponent.prototype.ngOnDestroy = function () {
        this.refreshReloadSubscription.unsubscribe();
        this.applicationsServiceSubscription.unsubscribe();
    };
    JhiApplicationsComponent.prototype.refresh = function () {
        var _this = this;
        this.applicationsServiceSubscription = this.applicationsService.findAll().subscribe(function (data) {
            _this.data = data;
            if (_this.application) {
                _this.show(_this.application);
            }
            else if (data.applications.length > 0) {
                _this.show(data.applications[0].name);
            }
        });
    };
    JhiApplicationsComponent.prototype.show = function (app) {
        this.application = app;
        var found = false;
        for (var _i = 0, _a = this.data.applications; _i < _a.length; _i++) {
            var dataApp = _a[_i];
            dataApp.active = '';
            if (dataApp.name === this.application) {
                this.instances = dataApp.instances;
                dataApp.active = 'active';
                found = true;
            }
        }
        if (!found) {
            this.application = false;
        }
    };
    JhiApplicationsComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState && statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    return JhiApplicationsComponent;
}());
JhiApplicationsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-applications',
        template: __webpack_require__("./src/main/webapp/app/registry/applications/applications.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/registry/applications/applications.component.scss")
        ]
    }),
    __metadata("design:paramtypes", [applications_service_1.JhiApplicationsService,
        refresh_service_1.JhiRefreshService])
], JhiApplicationsComponent);
exports.JhiApplicationsComponent = JhiApplicationsComponent;


/***/ }),

/***/ "./src/main/webapp/app/registry/applications/applications.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var applications_component_1 = __webpack_require__("./src/main/webapp/app/registry/applications/applications.component.ts");
exports.applicationsRoute = {
    path: 'applications',
    component: applications_component_1.JhiApplicationsComponent,
    data: {
        pageTitle: 'Applications'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/registry/applications/applications.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiApplicationsService = (function () {
    function JhiApplicationsService(http) {
        this.http = http;
    }
    JhiApplicationsService.prototype.findAll = function () {
        return this.http.get('api/eureka/applications').map(function (res) { return res.json(); });
    };
    return JhiApplicationsService;
}());
JhiApplicationsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiApplicationsService);
exports.JhiApplicationsService = JhiApplicationsService;


/***/ }),

/***/ "./src/main/webapp/app/registry/config/config.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"head\"> <h2 class=\"d-inline-block\">Spring Cloud Configuration</h2> <jhi-refresh-selector class=\"float-right refresh-left-side\"></jhi-refresh-selector> </div> <form #form=\"ngForm\" (ngSubmit)=\"refresh()\"> <div class=\"form-group\"> <label for=\"profile\"><strong>app</strong></label> <input type=\"text\" class=\"form-control\" id=\"application\" [(ngModel)]=\"application\" name=\"application\" required> </div> <div class=\"form-group\"> <label for=\"profile\"><strong>Profile</strong></label> <input type=\"text\" class=\"form-control\" id=\"profile\" [(ngModel)]=\"profile\" name=\"profile\" required> </div> <div class=\"form-group\" *ngIf=\"!isNative\"> <label for=\"label\"><strong>Git Label: </strong></label> <input type=\"text\" class=\"form-control\" id=\"label\" name=\"label\" [(ngModel)]=\"label\" required> </div> <input type=\"submit\" style=\"display: none\"> </form> <div *ngIf=\"configAsYaml\"> <h3>Configuration</h3> <ngb-tabset type=\"tabs\"> <ngb-tab title=\"YAML\" id=\"yaml\"> <template ngbTabContent> <pre class=\"code-block\">{{configAsYaml}}</pre> </template> </ngb-tab> <ngb-tab title=\"Properties\" id=\"properties\"> <template ngbTabContent> <pre class=\"code-block\">{{configAsProperties}}</pre> </template> </ngb-tab> <ngb-tab title=\"JSON\" id=\"json\"> <template ngbTabContent> <pre class=\"code-block\">{{configAsJson}}</pre> </template> </ngb-tab> <ngb-tab title=\"Table\" id=\"table\"> <template ngbTabContent> <table class=\"table table-striped table-bordered table-responsive d-table\"> <tbody> <tr *ngFor=\"let property of configAsKeyValuePairs\"> <td>{{ property.key }}</td> <td>{{ property.value }}</td> </tr> </tbody> </table> </template> </ngb-tab> </ngb-tabset> </div> <h3 class=\"head bottom\">Configuration Source Information</h3> <table class=\"table table-striped\"> <thead> <tr> <th>Type</th> <th *ngIf=\"!isNative\">Repository URI</th> <th>Location</th> </tr> </thead> <tbody> <tr *ngIf=\"isNative\"> <td>Native (Local Filesystem)</td> <td>{{ nativeSearchLocation }}</td> </tr> <tr *ngIf=\"!isNative\"> <td>Git</td> <td>{{ gitUri }}</td> <td>/{{ gitSearchLocation }}</td> </tr> </tbody> </table> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/registry/config/config.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var config_service_1 = __webpack_require__("./src/main/webapp/app/registry/config/config.service.ts");
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var _1 = __webpack_require__("./src/main/webapp/app/registry/index.ts");
var refresh_service_1 = __webpack_require__("./src/main/webapp/app/shared/refresh/refresh.service.ts");
var JhiConfigComponent = (function () {
    function JhiConfigComponent(configService, profileService, applicationsService, refreshService) {
        this.configService = configService;
        this.profileService = profileService;
        this.applicationsService = applicationsService;
        this.refreshService = refreshService;
        this.application = 'application';
        this.profile = 'prod';
        this.label = 'master';
        this.activeRegistryProfiles = [];
        this.isNative = true;
        this.applicationList = ['application'];
    }
    JhiConfigComponent.prototype.ngOnInit = function () {
        this.load();
        this.refresh();
    };
    JhiConfigComponent.prototype.ngOnDestroy = function () {
        this.refreshReloadSubscription.unsubscribe();
    };
    JhiConfigComponent.prototype.load = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (response) {
            _this.activeRegistryProfiles = response.activeProfiles;
            _this.isNative = _this.activeRegistryProfiles.includes('native');
            _this.nativeSearchLocation = response.nativeSearchLocation;
            _this.gitUri = response.gitUri;
            _this.gitSearchLocation = response.gitSearchLocation;
        });
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (empty) { return _this.refresh(); });
    };
    JhiConfigComponent.prototype.refresh = function () {
        var _this = this;
        this.configService.getConfigAsYaml(this.application, this.profile, this.label).subscribe(function (response) {
            _this.configAsYaml = response;
        }, function () {
            _this.configAsYaml = '';
        });
        this.configService.getConfigAsProperties(this.application, this.profile, this.label).subscribe(function (response) {
            console.log(response);
            _this.configAsProperties = response;
            var keyValueArray = [];
            _this.configAsProperties.split('\n').forEach(function (property) {
                var keyValueSplit = property.split(': ');
                keyValueArray.push({ key: keyValueSplit[0], value: keyValueSplit[1] });
            });
            _this.configAsKeyValuePairs = keyValueArray;
        }, function () {
            _this.configAsProperties = '';
        });
        this.configService.getConfigAsJson(this.application, this.profile, this.label).subscribe(function (response) {
            _this.configAsJson = response;
        }, function () {
            _this.configAsJson = {};
        });
        this.applicationsService.findAll().subscribe(function (data) {
            if (data && data.applications) {
                _this.applicationList = ['application'];
                data.applications.forEach(function (application) {
                    var instanceId = application.instances[0].instanceId;
                    var applicationName;
                    if (instanceId.indexOf(':') === -1) {
                        applicationName = application.name.toLowerCase();
                    }
                    else {
                        applicationName = instanceId.substr(0, instanceId.indexOf(':'));
                    }
                    _this.applicationList.push(applicationName);
                });
            }
        });
    };
    return JhiConfigComponent;
}());
JhiConfigComponent = __decorate([
    core_1.Component({
        selector: 'jhi-config',
        template: __webpack_require__("./src/main/webapp/app/registry/config/config.component.html")
    }),
    __metadata("design:paramtypes", [config_service_1.JhiConfigService,
        profile_service_1.ProfileService,
        _1.JhiApplicationsService,
        refresh_service_1.JhiRefreshService])
], JhiConfigComponent);
exports.JhiConfigComponent = JhiConfigComponent;


/***/ }),

/***/ "./src/main/webapp/app/registry/config/config.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_component_1 = __webpack_require__("./src/main/webapp/app/registry/config/config.component.ts");
exports.configRoute = {
    path: 'config',
    component: config_component_1.JhiConfigComponent,
    data: {
        pageTitle: 'Configuration'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/registry/config/config.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiConfigService = (function () {
    function JhiConfigService(http) {
        this.http = http;
    }
    JhiConfigService.prototype.getConfigAsYaml = function (application, profile, label) {
        return this.http.get('config/' + label + '/' + application + '-' + profile + '.yml').map(function (response) {
            return response.text();
        });
    };
    JhiConfigService.prototype.getConfigAsProperties = function (application, profile, label) {
        return this.http.get('config/' + label + '/' + application + '-' + profile + '.properties').map(function (response) {
            return response.text();
        });
    };
    JhiConfigService.prototype.getConfigAsJson = function (application, profile, label) {
        return this.http.get('config/' + label + '/' + application + '-' + profile + '.json').map(function (response) {
            return response.text();
        });
    };
    return JhiConfigService;
}());
JhiConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiConfigService);
exports.JhiConfigService = JhiConfigService;


/***/ }),

/***/ "./src/main/webapp/app/registry/encryption/encryption.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"head\"> <h2 class=\"d-inline-block\">Encrypt and decrypt properties</h2> </div> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <ngb-tabset type=\"tabs\" class=\"nav-fill\"> <ngb-tab title=\"Encrypt\" id=\"encrypt\"> <template ngbTabContent> <form> <textarea type=\"text\" class=\"form-control my-1\" id=\"textToEncrypt\" required [(ngModel)]=\"textToEncrypt\" name=\"encryptText\" #name=\"ngModel\"></textarea> <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"textToEncrypt === ''\" (click)=\"encrypt()\">Encrypt</button> </form> </template> </ngb-tab> <ngb-tab title=\"Decrypt\" id=\"decrypt\"> <template ngbTabContent> <form> <textarea type=\"text\" class=\"form-control my-1\" id=\"encryptedText\" required [(ngModel)]=\"encryptedText\" name=\"decryptText\" #name=\"ngModel\"></textarea> <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"encryptedText === ''\" (click)=\"decrypt()\">Decrypt</button> </form> </template> </ngb-tab> </ngb-tabset> <div *ngIf=\"result\"> <h3>Result:</h3> <pre class=\"code-block\">{{result}}</pre> </div> <jhi-alert-error></jhi-alert-error> </div> <div class=\"text-center pad\"> <a (click)=\"showMore = !showMore\" class=\"btn btn-default\"> <span *ngIf=\"showMore\"> <span class=\"fa fa-arrow-circle-down\"></span>&nbsp;show more </span> <span *ngIf=\"!showMore\"> <span class=\"fa fa-arrow-circle-up\"></span>&nbsp;show less </span> </a> </div> <div [ngbCollapse]=\"showMore\"> <h3><span class=\"fa fa-info-circle\"></span> Using Encryption</h3> <p> In order to not leave your secrets in plain text at rest, encrypt them using this UI. Then store the encrypted value like this: </p> <pre class=\"code-block\">\r\nsample:\r\n    property: '{{ '{' }}cipher{{ '}' }}FKSAJDFGYOS8F7GLHAKERGFHLSAJ'\r\n                </pre> <p class=\"alert alert-danger\"> <strong>Warning</strong>: Before being able to encrypt/decrypt your properties values, you will need to configure a strong encryption key in the <code>encrypt.key</code> property. <br>When using the JHipster Registry docker image, you can set this with the <code>ENCRYPT_KEY</code> environment variable. Note that this property only needs to be set for the JHipster Registry as your applications will retrieve the decrypted values directly from the config server. </p> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/registry/encryption/encryption.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var encryption_service_1 = __webpack_require__("./src/main/webapp/app/registry/encryption/encryption.service.ts");
var JhiEncryptionComponent = (function () {
    function JhiEncryptionComponent(encryptionService) {
        this.encryptionService = encryptionService;
        this.showMore = true;
        this.textToEncrypt = '';
        this.encryptedText = '';
        this.result = '';
    }
    JhiEncryptionComponent.prototype.ngOnInit = function () {
    };
    JhiEncryptionComponent.prototype.ngOnDestroy = function () {
    };
    JhiEncryptionComponent.prototype.encrypt = function () {
        var _this = this;
        this.encryptionService.encrypt(this.textToEncrypt).subscribe(function (response) {
            _this.result = response;
            _this.encryptedText = response;
        }, function () {
            _this.result = '';
        });
    };
    JhiEncryptionComponent.prototype.decrypt = function () {
        var _this = this;
        this.encryptionService.decrypt(this.encryptedText).subscribe(function (response) {
            _this.result = response;
            _this.textToEncrypt = response;
        }, function () {
            _this.result = '';
        });
    };
    return JhiEncryptionComponent;
}());
JhiEncryptionComponent = __decorate([
    core_1.Component({
        selector: 'jhi-encryption',
        template: __webpack_require__("./src/main/webapp/app/registry/encryption/encryption.component.html")
    }),
    __metadata("design:paramtypes", [encryption_service_1.JhiEncryptionService])
], JhiEncryptionComponent);
exports.JhiEncryptionComponent = JhiEncryptionComponent;


/***/ }),

/***/ "./src/main/webapp/app/registry/encryption/encryption.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var encryption_component_1 = __webpack_require__("./src/main/webapp/app/registry/encryption/encryption.component.ts");
exports.encryptionRoute = {
    path: 'encryption',
    component: encryption_component_1.JhiEncryptionComponent,
    data: {
        pageTitle: 'Encryption'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/registry/encryption/encryption.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiEncryptionService = (function () {
    function JhiEncryptionService(http) {
        this.http = http;
    }
    JhiEncryptionService.prototype.encrypt = function (textToEncrypt) {
        return this.http.post('config/encrypt', textToEncrypt).map(function (response) {
            return '{cipher}' + response.text();
        });
    };
    JhiEncryptionService.prototype.decrypt = function (textToDecrypt) {
        return this.http.post('config/decrypt', textToDecrypt).map(function (response) {
            return response.text();
        });
    };
    return JhiEncryptionService;
}());
JhiEncryptionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiEncryptionService);
exports.JhiEncryptionService = JhiEncryptionService;


/***/ }),

/***/ "./src/main/webapp/app/registry/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"head\"> <h2 class=\"d-inline-block\">Instances history</h2> <jhi-refresh-selector class=\"float-right refresh-left-side\"></jhi-refresh-selector> </div> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <ngb-tabset activeId=\"registered\" (tabChange)=\"beforeChange($event)\"> <ngb-tab id=\"registered\" title=\"Last registered leases\"> <template ngbTabContent></template> </ngb-tab> <ngb-tab id=\"canceled\" title=\"Last canceled leases\"> <template ngbTabContent></template> </ngb-tab> </ngb-tabset> <div class=\"table-responsive\"> <table class=\"table table-striped\"> <thead> <tr> <th>Time</th> <th>Instance</th> </tr> </thead> <tbody *ngIf=\"items\"> <tr *ngFor=\"let instance of items\"> <td> {{instance.key | date:'medium'}} </td> <td> {{instance.value}} </td> </tr> </tbody> </table> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/registry/history/history.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var history_service_1 = __webpack_require__("./src/main/webapp/app/registry/history/history.service.ts");
var refresh_service_1 = __webpack_require__("./src/main/webapp/app/shared/refresh/refresh.service.ts");
var JhiHistoryComponent = (function () {
    function JhiHistoryComponent(historyService, refreshService) {
        this.historyService = historyService;
        this.refreshService = refreshService;
    }
    JhiHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (empty) { return _this.refresh(); });
        this.refresh();
    };
    JhiHistoryComponent.prototype.ngOnDestroy = function () {
        this.refreshReloadSubscription.unsubscribe();
    };
    JhiHistoryComponent.prototype.refresh = function () {
        var _this = this;
        this.historyService.findAll().subscribe(function (data) {
            _this.data = data;
            if (_this.activeKey) {
                _this.activate(_this.activeKey);
            }
            else {
                _this.activate('registered');
            }
        });
    };
    JhiHistoryComponent.prototype.activate = function (key) {
        this.activeKey = key;
        this.items = [];
        var obj = this.data ? this.data[key] : null;
        if (obj) {
            for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
                var k = _a[_i];
                this.items.push({ key: k, value: obj[k] });
            }
        }
        this.items = this.sortItems(this.items);
    };
    JhiHistoryComponent.prototype.beforeChange = function ($event) {
        this.activate($event.nextId);
    };
    ;
    JhiHistoryComponent.prototype.sortItems = function (items) {
        this.items = items.sort(function (a, b) {
            if (a.key < b.key) {
                return 1;
            }
            else if (b.key < a.key) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return items;
    };
    return JhiHistoryComponent;
}());
JhiHistoryComponent = __decorate([
    core_1.Component({
        selector: 'jhi-history',
        template: __webpack_require__("./src/main/webapp/app/registry/history/history.component.html")
    }),
    __metadata("design:paramtypes", [history_service_1.JhiHistoryService,
        refresh_service_1.JhiRefreshService])
], JhiHistoryComponent);
exports.JhiHistoryComponent = JhiHistoryComponent;


/***/ }),

/***/ "./src/main/webapp/app/registry/history/history.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var history_component_1 = __webpack_require__("./src/main/webapp/app/registry/history/history.component.ts");
exports.historyRoute = {
    path: 'history',
    component: history_component_1.JhiHistoryComponent,
    data: {
        pageTitle: 'History'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/registry/history/history.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiHistoryService = (function () {
    function JhiHistoryService(http) {
        this.http = http;
    }
    JhiHistoryService.prototype.findAll = function () {
        return this.http.get('api/eureka/lastn').map(function (res) { return res.json(); });
    };
    return JhiHistoryService;
}());
JhiHistoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiHistoryService);
exports.JhiHistoryService = JhiHistoryService;


/***/ }),

/***/ "./src/main/webapp/app/registry/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/registry/applications/applications.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/applications/applications.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/applications/applications.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/config/config.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/config/config.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/config/config.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/encryption/encryption.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/encryption/encryption.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/encryption/encryption.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/history/history.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/history/history.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/history/history.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/replicas/replicas.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/replicas/replicas.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/replicas/replicas.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/ssh/ssh.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/ssh/ssh.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/ssh/ssh.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/registry/registry.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/registry/registry.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/registry/index.ts");
var JHipsterRegistryModule = (function () {
    function JHipsterRegistryModule() {
    }
    return JHipsterRegistryModule;
}());
JHipsterRegistryModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.JHipsterRegistrySharedModule,
            router_1.RouterModule.forRoot(_1.registryState, { useHash: true })
        ],
        declarations: [
            _1.JhiApplicationsComponent,
            _1.JhiConfigComponent,
            _1.JhiEncryptionComponent,
            _1.JhiHistoryComponent,
            _1.JhiReplicasComponent,
            _1.JhiSSHComponent
        ],
        entryComponents: [],
        providers: [
            _1.JhiApplicationsService,
            _1.JhiConfigService,
            _1.JhiEncryptionService,
            _1.JhiHistoryService,
            _1.JhiReplicasService,
            _1.JhiSSHService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JHipsterRegistryModule);
exports.JHipsterRegistryModule = JHipsterRegistryModule;


/***/ }),

/***/ "./src/main/webapp/app/registry/registry.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/registry/index.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var REGISTRY_ROUTES = [
    _1.applicationsRoute,
    _1.configRoute,
    _1.encryptionRoute,
    _1.historyRoute,
    _1.replicasRoute,
    _1.sshRoute
];
exports.registryState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: REGISTRY_ROUTES
    }];


/***/ }),

/***/ "./src/main/webapp/app/registry/replicas/replicas.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"head\"> <h2 class=\"d-inline-block\">Registry Replicas</h2> <jhi-refresh-selector class=\"float-right refresh-left-side\"></jhi-refresh-selector> </div> <div id=\"replicas\" class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"table-responsive\"> <table class=\"table table-striped\"> <tbody> <tr *ngFor=\"let replica of replicas\"> <td> <a href=\"http://{{replica}}\">{{replica}}</a> </td> </tr> </tbody> </table> </div> </div> </div> <div class=\"text-center pad\"> <a (click)=\"showMore = !showMore\" class=\"btn btn-default\"> <span *ngIf=\"showMore\"> <span class=\"fa fa-arrow-circle-down\"></span>&nbsp;show more </span> <span *ngIf=\"!showMore\"> <span class=\"fa fa-arrow-circle-up\"></span>&nbsp;show less </span> </a> </div> <div [ngbCollapse]=\"showMore\"> <h3><span class=\"fa fa-info-circle\"></span> Configuring replication</h3> <p> Here is the Spring Cloud Netflix official documentation for configuring replication: </p> <ul> <li> <a href=\"http://cloud.spring.io/spring-cloud-static/spring-cloud.html#_standalone_mode\" target=\"_blank\"> Standalone mode (no replication) </a> </li> <li> <a href=\"http://cloud.spring.io/spring-cloud-static/spring-cloud.html#_peer_awareness\" target=\"_blank\"> Peer aware mode (replication between peers) </a> </li> </ul> <h4>Standalone mode</h4> <p> By default, the JHipster Registry works in standalone mode: you will see one replica in this screen, which the current standalone registry: the address of the replica should be the same as the address of your server. </p> <h4>Peer aware mode</h4> <p> The JHipster Registry also works in \"peer aware mode\", and provides for this two pre-defined Spring profiles, named \"peer1\" and \"peer2\". Those profiles are mostly here as working examples, as you will probably want something different in production. </p> <p> Those profiles trigger some specific Spring Boot configurations, which are available in your registry's <code>src/main/resources/config</code> folder. </p> <p> Those profiles expect to have 2 different hosts, one for each replica: this is required by Eureka, which expects to have replicas on different servers. If you want to run this on your local machine, you need to point those 2 hostnames to your local address, for example on a Unix/MacOSX system, edit <code>/etc/hosts</code> to add those lines: </p> <pre class=\"code-block\"># Eureka peers\r\n127.0.0.1\teureka-peer-1\r\n127.0.0.1\teureka-peer-2</pre> <p> Running a peer-aware development cluster is then just a matter of running: </p> <ul> <li> <code>./mvnw -Pdev,git,peer1</code> </li> <li> <code>./mvnw -Pdev,git,peer2</code> </li> </ul> <p> Here is a sample working configuration for \"peer1\". Note that its \"serviceUrl\" points to \"peer2\": </p> <pre class=\"code-block\">\r\nserver:\r\n    port: 8761\r\neureka:\r\n    instance:\r\n        hostname: eureka-peer-1\r\n    server:\r\n        enable-self-preservation: true\r\n        registry-sync-retry-wait-ms: 500\r\n        a-sgcache-expiry-timeout-ms: 60000\r\n        eviction-interval-timer-in-ms: 30000\r\n        peer-eureka-nodes-update-interval-ms: 30000\r\n        renewal-threshold-update-interval-ms: 15000\r\n    client:\r\n        fetch-registry: true\r\n        register-with-eureka: true\r\n        serviceUrl:\r\n            defaultZone: http://admin:admin@eureka-peer-2:8762/eureka/</pre> <p> Here is the same configuration for \"peer2\", which has a \"serviceUrl\" pointing to \"peer1\": </p> <pre class=\"code-block\">\r\nserver:\r\n    port: 8762\r\neureka:\r\n    instance:\r\n        hostname: eureka-peer-2\r\n    server:\r\n        enable-self-preservation: true\r\n        registry-sync-retry-wait-ms: 500\r\n        a-sgcache-expiry-timeout-ms: 60000\r\n        eviction-interval-timer-in-ms: 30000\r\n        peer-eureka-nodes-update-interval-ms: 30000\r\n        renewal-threshold-update-interval-ms: 15000\r\n    client:\r\n        fetch-registry: true\r\n        register-with-eureka: true\r\n        serviceUrl:\r\n            defaultZone: http://admin:admin@eureka-peer-1:8761/eureka/</pre> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/registry/replicas/replicas.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/registry/replicas/replicas.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/registry/replicas/replicas.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var replicas_service_1 = __webpack_require__("./src/main/webapp/app/registry/replicas/replicas.service.ts");
var refresh_service_1 = __webpack_require__("./src/main/webapp/app/shared/refresh/refresh.service.ts");
var JhiReplicasComponent = (function () {
    function JhiReplicasComponent(replicasService, refreshService) {
        this.replicasService = replicasService;
        this.refreshService = refreshService;
        this.showMore = true;
    }
    JhiReplicasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (empty) { return _this.refresh(); });
        this.refresh();
    };
    JhiReplicasComponent.prototype.ngOnDestroy = function () {
        this.refreshReloadSubscription.unsubscribe();
    };
    JhiReplicasComponent.prototype.refresh = function () {
        var _this = this;
        this.replicasService.findAll().subscribe(function (replicas) {
            _this.replicas = replicas;
        });
    };
    return JhiReplicasComponent;
}());
JhiReplicasComponent = __decorate([
    core_1.Component({
        selector: 'jhi-replicas',
        template: __webpack_require__("./src/main/webapp/app/registry/replicas/replicas.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/registry/replicas/replicas.component.scss")
        ]
    }),
    __metadata("design:paramtypes", [replicas_service_1.JhiReplicasService,
        refresh_service_1.JhiRefreshService])
], JhiReplicasComponent);
exports.JhiReplicasComponent = JhiReplicasComponent;


/***/ }),

/***/ "./src/main/webapp/app/registry/replicas/replicas.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var replicas_component_1 = __webpack_require__("./src/main/webapp/app/registry/replicas/replicas.component.ts");
exports.replicasRoute = {
    path: 'replicas',
    component: replicas_component_1.JhiReplicasComponent,
    data: {
        pageTitle: 'Replicas'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/registry/replicas/replicas.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiReplicasService = (function () {
    function JhiReplicasService(http) {
        this.http = http;
    }
    JhiReplicasService.prototype.findAll = function () {
        return this.http.get('api/eureka/replicas').map(function (res) { return res.json(); });
    };
    return JhiReplicasService;
}());
JhiReplicasService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiReplicasService);
exports.JhiReplicasService = JhiReplicasService;


/***/ }),

/***/ "./src/main/webapp/app/registry/ssh/ssh.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2>SSH Public Key</h2> <p> This is the SSH public key stored in this server's <code>&#126;/.ssh/id_rsa.pub</code> </p> <p> This key should be used to grant access for this server to the Git repository which holds the Spring Cloud Configuration files. </p> <h3>Your SSH public key</h3> <pre>{{data}}</pre> <hr> <div class=\"text-center pad\"> <a (click)=\"showMore = !showMore\" class=\"btn btn-default\"> <span *ngIf=\"showMore\"> <span class=\"fa fa-arrow-circle-down\"></span>&nbsp;show more </span> <span *ngIf=\"!showMore\"> <span class=\"fa fa-arrow-circle-up\"></span>&nbsp;show less </span> </a> </div> <div [ngbCollapse]=\"showMore\"> <h3><span class=\"fa fa-info-circle\"></span> Using SSH with Docker</h3> <p> Here are detailed instruction when using the JHipster Registry Docker image, available at <a href=\"https://hub.docker.com/r/jhipster/jhipster-registry/\" target=\"_blank\">jhipster/jhipster-registry/</a>. </p> <ul> <li>Log in inside the container: <code>docker exec -it &lt;containerIdOrName&gt; sh</code></li> <li>Generate an SSH key: <code>ssh-keygen</code></li> <li>Copy the public key in <code>/root/.ssh/id_rsa.pub</code> to the remote Git repository you want to access (in Github, go to your settings/SSH keys)</li> <li>Test inside your container that the SSH connection is working: <ul> <li>Log in to your Git provider using your ssh key: <code>ssh -T git@github.com</code></li> <li>When asked to to add the Git repository host to the list of known hosts, reply <b>yes</b></li> </ul> </li> <li>Restart the registry without removing the container, it should be able to read a Git repo secured by SSH</li> </ul> <p> In order not to lose our setup every time you recreate or update the container, you can mount the <code>/root/.ssh/</code> folder to a Docker volume. </p> <p>To setup your own git repo, edit the GIT_URI environment variable passed to your container, for example using Docker Compose:</p> <pre class=\"code-block\">\r\n    version: '2'\r\n      services:\r\n        jhipster-registry:\r\n          container_name: jhipster-registry\r\n          image: jhipster/jhipster-registry\r\n      volumes:\r\n        - ./ssh/:/root/.ssh/\r\n      environment:\r\n        - SPRING_PROFILES_ACTIVE=prod\r\n        - GIT_URI=git@github.com:jhipster/jhipster-registry.git\r\n        - GIT_SEARCH_PATHS=central-config\r\n      ports:\r\n        - 8761:8761\r\n        </pre> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/registry/ssh/ssh.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ssh_service_1 = __webpack_require__("./src/main/webapp/app/registry/ssh/ssh.service.ts");
var JhiSSHComponent = (function () {
    function JhiSSHComponent(sshService) {
        this.sshService = sshService;
        this.showMore = true;
    }
    JhiSSHComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sshService.getSshPublicKey().subscribe(function (response) {
            _this.data = response;
        });
    };
    return JhiSSHComponent;
}());
JhiSSHComponent = __decorate([
    core_1.Component({
        selector: 'jhi-applications',
        template: __webpack_require__("./src/main/webapp/app/registry/ssh/ssh.component.html"),
    }),
    __metadata("design:paramtypes", [ssh_service_1.JhiSSHService])
], JhiSSHComponent);
exports.JhiSSHComponent = JhiSSHComponent;


/***/ }),

/***/ "./src/main/webapp/app/registry/ssh/ssh.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ssh_component_1 = __webpack_require__("./src/main/webapp/app/registry/ssh/ssh.component.ts");
exports.sshRoute = {
    path: 'ssh',
    component: ssh_component_1.JhiSSHComponent,
    data: {
        pageTitle: 'SSH public key'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/registry/ssh/ssh.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiSSHService = (function () {
    function JhiSSHService(http) {
        this.http = http;
    }
    JhiSSHService.prototype.getSshPublicKey = function () {
        return this.http.get('api/ssh/public_key').map(function (response) {
            return response.text();
        });
    };
    return JhiSSHService;
}());
JhiSSHService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiSSHService);
exports.JhiSSHService = JhiSSHService;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert-error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var JhiAlertErrorComponent = (function () {
    function JhiAlertErrorComponent(alertService, eventManager) {
        var _this = this;
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.alerts = [];
        this.cleanHttpErrorListener = eventManager.subscribe('jHipsterRegistryApp.httpError', function (response) {
            var i;
            var httpResponse = response.content;
            switch (httpResponse.status) {
                // connection refused, server not reachable
                case 0:
                    _this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400:
                    var arr = Array.from(httpResponse.headers._headers);
                    var headers = [];
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i][0].endsWith('app-error') || arr[i][0].endsWith('app-params')) {
                            headers.push(arr[i][0]);
                        }
                    }
                    headers.sort();
                    var errorHeader = null;
                    var entityKey = null;
                    if (headers.length > 1) {
                        errorHeader = httpResponse.headers.get(headers[0]);
                        entityKey = httpResponse.headers.get(headers[1]);
                    }
                    if (errorHeader) {
                        var entityName = entityKey;
                        _this.addErrorAlert(errorHeader, errorHeader, { entityName: entityName });
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().fieldErrors) {
                        var fieldErrors = httpResponse.json().fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            var fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            var fieldName = convertedField.charAt(0).toUpperCase() +
                                convertedField.slice(1);
                            _this.addErrorAlert('Field ' + fieldName + ' cannot be empty', 'error.' + fieldError.message, { fieldName: fieldName });
                        }
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message, httpResponse.json().message, httpResponse.json().params);
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
                    break;
                case 404:
                    _this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message);
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
            }
        });
    }
    JhiAlertErrorComponent.prototype.ngOnDestroy = function () {
        if (this.cleanHttpErrorListener !== undefined && this.cleanHttpErrorListener !== null) {
            this.eventManager.destroy(this.cleanHttpErrorListener);
            this.alerts = [];
        }
    };
    JhiAlertErrorComponent.prototype.addErrorAlert = function (message, key, data) {
        this.alerts.push(this.alertService.addAlert({
            type: 'danger',
            msg: message,
            timeout: 5000,
            toast: this.alertService.isToast(),
            scoped: true
        }, this.alerts));
    };
    return JhiAlertErrorComponent;
}());
JhiAlertErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert-error',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\"  [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert type=\"{{alert.type}}\" close=\"alert.close(alerts)\"><pre [innerHTML]=\"alert.msg\"></pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService, ng_jhipster_1.EventManager])
], JhiAlertErrorComponent);
exports.JhiAlertErrorComponent = JhiAlertErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var JhiAlertComponent = (function () {
    function JhiAlertComponent(alertService) {
        this.alertService = alertService;
    }
    JhiAlertComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertService.get();
    };
    JhiAlertComponent.prototype.ngOnDestroy = function () {
        this.alerts = [];
    };
    return JhiAlertComponent;
}());
JhiAlertComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\" [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert [type]=\"alert.type\" (close)=\"alert.close(alerts)\"><pre [innerHTML]=\"alert.msg\"></pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService])
], JhiAlertComponent);
exports.JhiAlertComponent = JhiAlertComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.get = function () {
        return this.http.get('api/account').map(function (res) { return res.json(); });
    };
    AccountService.prototype.save = function (account) {
        return this.http.post('api/account', account);
    };
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountService);
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth-jwt.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var Rx_1 = __webpack_require__(21);
var ng2_webstorage_1 = __webpack_require__(9);
var AuthServerProvider = (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));
        function authenticateSuccess(resp) {
            var bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                var jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        }
    };
    AuthServerProvider.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthServerProvider.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    return AuthServerProvider;
}());
AuthServerProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_webstorage_1.LocalStorageService,
        ng2_webstorage_1.SessionStorageService])
], AuthServerProvider);
exports.AuthServerProvider = AuthServerProvider;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth-session.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var AuthSessionServerProvider = (function () {
    function AuthSessionServerProvider(http) {
        this.http = http;
    }
    AuthSessionServerProvider.prototype.login = function (credentials) {
        var data = 'j_username=' + encodeURIComponent(credentials.username) +
            '&j_password=' + encodeURIComponent(credentials.password) +
            '&remember-me=' + credentials.rememberMe + '&submit=Login';
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post('api/authentication', data, { headers: headers });
    };
    AuthSessionServerProvider.prototype.logout = function () {
        var _this = this;
        // logout from the server
        return this.http.post('api/logout', {}).map(function (response) {
            // to get a new csrf token call the api
            _this.http.get('api/account').subscribe(function () { }, function () { });
            return response;
        });
    };
    return AuthSessionServerProvider;
}());
AuthSessionServerProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthSessionServerProvider);
exports.AuthSessionServerProvider = AuthSessionServerProvider;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/csrf.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(16);
var CSRFService = (function () {
    function CSRFService(cookieService) {
        this.cookieService = cookieService;
    }
    CSRFService.prototype.getCSRF = function (name) {
        name = "" + (name ? name : 'XSRF-TOKEN');
        return this.cookieService.get(name);
    };
    return CSRFService;
}());
CSRFService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.CookieService])
], CSRFService);
exports.CSRFService = CSRFService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/has-any-authority.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
var HasAnyAuthorityDirective = (function () {
    function HasAnyAuthorityDirective(principal, templateRef, viewContainerRef) {
        this.principal = principal;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", {
        set: function (value) {
            var _this = this;
            this.authorities = typeof value === 'string' ? [value] : value;
            this.updateView();
            // Get notified each time authentication state changes.
            this.principal.getAuthenticationState().subscribe(function (identity) { return _this.updateView(); });
        },
        enumerable: true,
        configurable: true
    });
    HasAnyAuthorityDirective.prototype.updateView = function () {
        var _this = this;
        this.principal.hasAnyAuthority(this.authorities).then(function (result) {
            _this.viewContainerRef.clear();
            if (result) {
                _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
        });
    };
    return HasAnyAuthorityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", null);
HasAnyAuthorityDirective = __decorate([
    core_1.Directive({
        selector: '[jhiHasAnyAuthority]'
    }),
    __metadata("design:paramtypes", [principal_service_1.Principal, core_1.TemplateRef, core_1.ViewContainerRef])
], HasAnyAuthorityDirective);
exports.HasAnyAuthorityDirective = HasAnyAuthorityDirective;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/principal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(12);
var account_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts");
var Principal = (function () {
    function Principal(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new Subject_1.Subject();
    }
    Principal.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
    };
    Principal.prototype.hasAnyAuthorityDirect = function (authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.indexOf(authorities[i]) !== -1) {
                return true;
            }
        }
        return false;
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.indexOf(authority) !== -1);
        }, function () {
            return Promise.resolve(false);
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account.get().toPromise().then(function (account) {
            if (account) {
                _this.userIdentity = account;
                _this.authenticated = true;
            }
            else {
                _this.userIdentity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this.userIdentity);
            return _this.userIdentity;
        }).catch(function (err) {
            _this.userIdentity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this.userIdentity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this.userIdentity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    };
    return Principal;
}());
Principal = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], Principal);
exports.Principal = Principal;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/state-storage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_webstorage_1 = __webpack_require__(9);
var StateStorageService = (function () {
    function StateStorageService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    StateStorageService.prototype.getPreviousState = function () {
        return this.$sessionStorage.retrieve('previousState');
    };
    StateStorageService.prototype.resetPreviousState = function () {
        this.$sessionStorage.clear('previousState');
    };
    StateStorageService.prototype.storePreviousState = function (previousStateName, previousStateParams) {
        var previousState = { 'name': previousStateName, 'params': previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    };
    StateStorageService.prototype.getDestinationState = function () {
        return this.$sessionStorage.retrieve('destinationState');
    };
    StateStorageService.prototype.storeUrl = function (url) {
        this.$sessionStorage.store('previousUrl', url);
    };
    StateStorageService.prototype.getUrl = function () {
        return this.$sessionStorage.retrieve('previousUrl');
    };
    StateStorageService.prototype.storeDestinationState = function (destinationState, destinationStateParams, fromState) {
        var destinationInfo = {
            'destination': {
                'name': destinationState.name,
                'data': destinationState.data,
            },
            'params': destinationStateParams,
            'from': {
                'name': fromState.name,
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    };
    return StateStorageService;
}());
StateStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_webstorage_1.SessionStorageService])
], StateStorageService);
exports.StateStorageService = StateStorageService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/user-route-access-service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var login_modal_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var UserRouteAccessService = (function () {
    function UserRouteAccessService(router, loginModalService, principal, stateStorageService) {
        this.router = router;
        this.loginModalService = loginModalService;
        this.principal = principal;
        this.stateStorageService = stateStorageService;
    }
    UserRouteAccessService.prototype.canActivate = function (route, state) {
        var authorities = route.data['authorities'];
        if (!authorities || authorities.length === 0) {
            return true;
        }
        return this.checkLogin(authorities, state.url);
    };
    UserRouteAccessService.prototype.checkLogin = function (authorities, url) {
        var _this = this;
        var principal = this.principal;
        return Promise.resolve(principal.identity().then(function (account) {
            if (account && principal.hasAnyAuthorityDirect(authorities)) {
                return true;
            }
            _this.stateStorageService.storeUrl(url);
            _this.router.navigate(['accessdenied']).then(function () {
                // only show the login dialog, if the user hasn't logged in yet
                if (!account) {
                    _this.loginModalService.open();
                }
            });
            return false;
        }));
    };
    return UserRouteAccessService;
}());
UserRouteAccessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        login_modal_service_1.LoginModalService,
        _1.Principal,
        state_storage_service_1.StateStorageService])
], UserRouteAccessService);
exports.UserRouteAccessService = UserRouteAccessService;


/***/ }),

/***/ "./src/main/webapp/app/shared/constants/pagination.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEMS_PER_PAGE = 20;


/***/ }),

/***/ "./src/main/webapp/app/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/shared/constants/pagination.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert-error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth-session.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/has-any-authority.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/user-route-access-service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/oauth2/login-oauth2.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/account.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/routes/route.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/routes/route-selector.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/routes/routes.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/refresh/refresh-selector.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/refresh/refresh.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-libs.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-common.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(8);
var login_component_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.component.ts");
var LoginModalService = (function () {
    function LoginModalService(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    LoginModalService.prototype.open = function () {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        var modalRef = this.modalService.open(login_component_1.JhiLoginModalComponent, {
            container: 'nav'
        });
        modalRef.result.then(function (result) {
            _this.isOpen = false;
        }, function (reason) {
            _this.isOpen = false;
        });
        return modalRef;
    };
    return LoginModalService;
}());
LoginModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], LoginModalService);
exports.LoginModalService = LoginModalService;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\">Sign in</h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">x</span> </button> </div> <div class=\"modal-body\"> <div class=\"row\"> <div class=\"col-md-4 offset-md-4\"> <h1>Sign in</h1> </div> <div class=\"col-md-8 offset-md-2\"> <div class=\"alert alert-danger\" *ngIf=\"authenticationError\"> <strong>Failed to sign in!</strong> Please check your credentials and try again. </div> </div> <div class=\"col-md-8 offset-md-2\"> <form class=\"form\" role=\"form\" (ngSubmit)=\"login()\"> <div class=\"form-group\"> <label for=\"username\">Login</label> <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Your username\" [(ngModel)]=\"username\"> </div> <div class=\"form-group\"> <label for=\"password\">Password</label> <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Your password\" [(ngModel)]=\"password\"> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"rememberMe\"> <input class=\"form-check-input\" type=\"checkbox\" name=\"rememberMe\" id=\"rememberMe\" [(ngModel)]=\"rememberMe\" checked=\"checked\"> <span>Remember me</span> </label> </div> <button type=\"submit\" class=\"btn btn-primary\">Sign in</button> </form> <p></p> <div class=\"alert alert-warning\"> <a class=\"alert-link\" (click)=\"requestResetPassword()\">Did you forget your password?</a> </div> <div class=\"alert alert-warning\"> <span>You don't have an account yet?</span> <a class=\"alert-link\" (click)=\"register()\">Register a new account</a> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(8);
var router_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(5);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var JhiLoginModalComponent = (function () {
    function JhiLoginModalComponent(eventManager, loginService, stateStorageService, elementRef, renderer, router, activeModal) {
        this.eventManager = eventManager;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.activeModal = activeModal;
        this.credentials = {};
    }
    JhiLoginModalComponent.prototype.ngOnInit = function () {
    };
    JhiLoginModalComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    };
    JhiLoginModalComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    };
    JhiLoginModalComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(function () {
            _this.authenticationError = false;
            _this.activeModal.dismiss('login success');
            if (_this.router.url === '/register' || (/activate/.test(_this.router.url)) ||
                _this.router.url === '/finishReset' || _this.router.url === '/requestReset') {
                _this.router.navigate(['']);
            }
            _this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });
            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is succesful, go to stored previousState and clear previousState
            var redirect = _this.stateStorageService.getUrl();
            if (redirect) {
                _this.router.navigate([redirect]);
            }
        }).catch(function () {
            _this.authenticationError = true;
        });
    };
    JhiLoginModalComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    JhiLoginModalComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    return JhiLoginModalComponent;
}());
JhiLoginModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-login-modal',
        template: __webpack_require__("./src/main/webapp/app/shared/login/login.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.EventManager,
        login_service_1.LoginService,
        state_storage_service_1.StateStorageService,
        core_1.ElementRef,
        core_1.Renderer,
        router_1.Router,
        ng_bootstrap_1.NgbActiveModal])
], JhiLoginModalComponent);
exports.JhiLoginModalComponent = JhiLoginModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var auth_jwt_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts");
var LoginService = (function () {
    function LoginService(principal, authServerProvider) {
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    LoginService.prototype.login = function (credentials, callback) {
        var _this = this;
        var cb = callback || function () { };
        return new Promise(function (resolve, reject) {
            _this.authServerProvider.login(credentials).subscribe(function (data) {
                _this.principal.identity(true).then(function (account) {
                    resolve(data);
                });
                return cb();
            }, function (err) {
                _this.logout();
                reject(err);
                return cb(err);
            });
        });
    };
    LoginService.prototype.loginWithToken = function (jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [principal_service_1.Principal,
        auth_jwt_service_1.AuthServerProvider])
], LoginService);
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/main/webapp/app/shared/oauth2/login-oauth2.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var auth_session_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth-session.service.ts");
var LoginOAuth2Service = (function () {
    function LoginOAuth2Service(principal, authServerProvider) {
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    LoginOAuth2Service.prototype.login = function () {
        var port = (location.port ? ':' + location.port : '');
        if (port === ':9000') {
            port = ':8761';
        }
        location.href = '//' + location.hostname + port + '/login';
    };
    LoginOAuth2Service.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    return LoginOAuth2Service;
}());
LoginOAuth2Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [principal_service_1.Principal,
        auth_session_service_1.AuthSessionServerProvider])
], LoginOAuth2Service);
exports.LoginOAuth2Service = LoginOAuth2Service;


/***/ }),

/***/ "./src/main/webapp/app/shared/pipe/group-by.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var GroupByPipe = (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (collection, term) {
        var _this = this;
        var newValue = [];
        collection.forEach(function (col) {
            var keyVal = _this.deepFind(col, term);
            var index = newValue.findIndex(function (myObj) { return myObj.key === keyVal; });
            if (index >= 0) {
                newValue[index].value.push(col);
            }
            else {
                newValue.push({ key: keyVal, value: [col] });
            }
        });
        return newValue;
    };
    GroupByPipe.prototype.deepFind = function (obj, path) {
        var paths = path.toString().split(/[.\[\]]/);
        var current = obj;
        paths.forEach(function (onePath) {
            if (onePath !== '') {
                if (!current[onePath]) {
                    return undefined;
                }
                else {
                    current = current[onePath];
                }
            }
        });
        return current;
    };
    return GroupByPipe;
}());
GroupByPipe = __decorate([
    core_1.Pipe({
        name: 'groupBy'
    })
], GroupByPipe);
exports.GroupByPipe = GroupByPipe;


/***/ }),

/***/ "./src/main/webapp/app/shared/refresh/refresh-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" ngbDropdown> <button class=\"btn btn-outline-primary times\" [ngClass]=\"classTime()\" id=\"refreshMenu\" ngbDropdownToggle> &nbsp; <span class=\"times-text\" [innerHTML]=\"getActiveRefreshTime()\"></span> </button> <div class=\"dropdown-menu\" aria-labelledby=\"refreshMenu\" aria-expanded=\"true\"> <span class=\"dropdown-header\">Refresh times (in seconds)</span> <div *ngFor=\"let time of refreshTimes\"> <button class=\"dropdown-item\" (click)=\"setActiveRefreshTime(time);\" [ngClass]=\"stateTime(time)\"> <span *ngIf=\"time > 0; else disabledTemplate\">{{time}}</span> <ng-template #disabledTemplate>disabled</ng-template> </button> </div> <div class=\"dropdown-divider\"></div> <button class=\"dropdown-item manual-refresh\" (click)=\"manualRefresh()\"> Refresh now &nbsp;<span class=\"fa fa-refresh\"></span> </button> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/refresh/refresh-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/shared/refresh/refresh-selector.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/shared/refresh/refresh-selector.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(10);
var refresh_service_1 = __webpack_require__("./src/main/webapp/app/shared/refresh/refresh.service.ts");
var JhiRefreshSelectorComponent = (function () {
    function JhiRefreshSelectorComponent(refreshService) {
        this.refreshService = refreshService;
        this.refreshTimes = [0, 5, 10, 30, 60, 300];
        this.activeRefreshTime = this.refreshTimes[0];
    }
    JhiRefreshSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRefreshTime = this.refreshService.getSelectedRefreshTime();
        this.refreshChangedSubscription = this.refreshService.refreshChanged$.subscribe(function (empty) { return _this.launchTimer(true); });
        this.launchTimer(false);
    };
    JhiRefreshSelectorComponent.prototype.ngOnDestroy = function () {
        /** prevent memory leak when component destroyed **/
        this.refreshChangedSubscription.unsubscribe();
        if (this.refreshTimer) {
            this.refreshTimer.unsubscribe();
        }
    };
    JhiRefreshSelectorComponent.prototype.manualRefresh = function () {
        this.refreshService.refreshReload();
    };
    /** Change active time only if exists, else 0 **/
    JhiRefreshSelectorComponent.prototype.setActiveRefreshTime = function (time) {
        if (time && this.refreshTimes.findIndex(function (t) { return t === time; }) !== -1) {
            this.activeRefreshTime = time;
        }
        else {
            this.activeRefreshTime = this.refreshTimes[0];
        }
        this.refreshService.storeSelectedRefreshTime(time);
        this.refreshService.refreshChanged();
    };
    /** Init the timer **/
    JhiRefreshSelectorComponent.prototype.subscribe = function () {
        var _this = this;
        if (this.activeRefreshTime && this.activeRefreshTime > 0) {
            this.refreshTimer = Observable_1.Observable.interval(this.activeRefreshTime * 1000).subscribe(function () {
                _this.refreshService.refreshReload();
            });
        }
    };
    /** Launch (or relaunch if true) the timer. **/
    JhiRefreshSelectorComponent.prototype.launchTimer = function (relaunch) {
        if (relaunch && this.refreshTimer) {
            this.refreshTimer.unsubscribe();
        }
        this.subscribe();
    };
    /* ==========================================================================
                                        UI PART
     ========================================================================== */
    JhiRefreshSelectorComponent.prototype.classTime = function () {
        if (this.activeRefreshTime <= 0) {
            return 'fa fa-pause';
        }
        return 'fa fa-repeat';
    };
    JhiRefreshSelectorComponent.prototype.stateTime = function (time) {
        if (time === this.activeRefreshTime) {
            return 'active';
        }
    };
    JhiRefreshSelectorComponent.prototype.getActiveRefreshTime = function () {
        if (this.activeRefreshTime <= 0) {
            return 'disabled';
        }
        return this.activeRefreshTime + ' sec.';
    };
    return JhiRefreshSelectorComponent;
}());
JhiRefreshSelectorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-refresh-selector',
        template: __webpack_require__("./src/main/webapp/app/shared/refresh/refresh-selector.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/shared/refresh/refresh-selector.component.scss")
        ]
    }),
    __metadata("design:paramtypes", [refresh_service_1.JhiRefreshService])
], JhiRefreshSelectorComponent);
exports.JhiRefreshSelectorComponent = JhiRefreshSelectorComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/refresh/refresh.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var Subject_1 = __webpack_require__(12);
var ng2_webstorage_1 = __webpack_require__(9);
var JhiRefreshService = (function () {
    function JhiRefreshService(http, sessionStorage) {
        this.http = http;
        this.sessionStorage = sessionStorage;
        // Observable sources
        this.refreshChangedSource = new Subject_1.Subject();
        this.refreshReloadSource = new Subject_1.Subject();
        this.refreshChanged$ = this.refreshChangedSource.asObservable();
        this.refreshReload$ = this.refreshReloadSource.asObservable();
    }
    JhiRefreshService.prototype.refreshChanged = function () {
        this.refreshChangedSource.next();
    };
    JhiRefreshService.prototype.refreshReload = function () {
        this.refreshReloadSource.next();
    };
    JhiRefreshService.prototype.getSelectedRefreshTime = function () {
        return this.sessionStorage.retrieve('refreshTime');
    };
    JhiRefreshService.prototype.storeSelectedRefreshTime = function (time) {
        this.sessionStorage.store('refreshTime', time);
    };
    return JhiRefreshService;
}());
JhiRefreshService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_webstorage_1.SessionStorageService])
], JhiRefreshService);
exports.JhiRefreshService = JhiRefreshService;


/***/ }),

/***/ "./src/main/webapp/app/shared/routes/route-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"route-selector col-xl-12 d-inline-flex\" *ngIf=\"routes\"> <div class=\"dropdown\" ngbDropdown #dropId=\"ngbDropdown\"> <button class=\"btn btn-outline-primary\" id=\"sortMenu\" ngbDropdownToggle [innerHTML]=\"getActiveRoute()\"></button> <div class=\"dropdown-menu\" aria-labelledby=\"sortMenu\" aria-expanded=\"true\" (click)=\"$event.stopPropagation()\"> <p class=\"d-flex\"> <input type=\"search\" class=\"form-control d-flex search\" placeholder=\"Search an application...\" [(ngModel)]=\"searchedInstance\" (click)=\"$event.stopPropagation()\" (input)=\"searchByAppName($event)\"> </p> <div *ngFor=\"let app of routes | groupBy : 'appName'\"> <span class=\"dropdown-header\" (click)=\"$event.stopPropagation()\">{{app.key}}</span> <button class=\"dropdown-item\" *ngFor=\"let route of app.value\" (click)=\"setActiveRoute(route); closeDropDown(dropId);\" [ngClass]=\"state(route)\"> <span>{{route.appName | uppercase}} {{route.serviceId ? '(' + route.serviceId + ')' : '' }}</span> <span class=\"badge badge-pill font-weight-normal\" [ngClass]=\"getBadgeClassRoute(route)\"> {{route.status}} </span> </button> </div> </div> </div> <jhi-refresh-selector></jhi-refresh-selector> <p *ngIf=\"updatingRoutes && (!routes || routes.length == 0)\">Loading...</p> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/routes/route-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/shared/routes/route-selector.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/shared/routes/route-selector.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var routes_service_1 = __webpack_require__("./src/main/webapp/app/shared/routes/routes.service.ts");
var refresh_service_1 = __webpack_require__("./src/main/webapp/app/shared/refresh/refresh.service.ts");
var JhiRouteSelectorComponent = (function () {
    function JhiRouteSelectorComponent(routesService, refreshService) {
        this.routesService = routesService;
        this.refreshService = refreshService;
        this.searchedInstance = '';
    }
    JhiRouteSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute = this.routesService.getSelectedInstance();
        this.updateRoute();
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (reload) { return _this.updateRoute(); });
        this.routeReloadSubscription = this.routesService.routeReload$.subscribe(function (reload) { return _this.updateRoute(); });
        this.routeDownSubscription = this.routesService.routeDown$.subscribe(function (route) {
            _this.downRoute(route);
            _this.setActiveRoute(null);
        });
    };
    JhiRouteSelectorComponent.prototype.ngOnDestroy = function () {
        /** prevent memory leak when component destroyed **/
        this.routeReloadSubscription.unsubscribe();
        this.routeDownSubscription.unsubscribe();
        this.refreshReloadSubscription.unsubscribe();
    };
    /** Change active route only if exists, else choose Registry **/
    JhiRouteSelectorComponent.prototype.setActiveRoute = function (instance) {
        if (instance && this.routes && this.routes.findIndex(function (r) { return r.appName === instance.appName; }) !== -1) {
            this.activeRoute = instance;
        }
        else if (this.routes && this.routes.length > 0) {
            this.activeRoute = this.routes[0];
        }
        this.routesService.storeSelectedInstance(this.activeRoute);
        this.routesService.routeChange(this.activeRoute);
    };
    JhiRouteSelectorComponent.prototype.updateRoute = function () {
        var _this = this;
        this.updatingRoutes = true;
        this.routesService.findAll().subscribe(function (routes) {
            _this.savedRoutes = routes;
            _this.routes = routes;
            _this.searchedInstance = '';
            if (_this.activeRoute) {
                _this.setActiveRoute(_this.activeRoute);
            }
            else if (routes.length > 0) {
                _this.setActiveRoute(routes[0]);
            }
            _this.updatingRoutes = false;
        }, function (error) {
            if (error.status === 503 || error.status === 500 || error.status === 404) {
                if (error.status === 500 || error.status === 404) {
                    _this.downRoute(_this.activeRoute);
                    _this.setActiveRoute(null);
                }
                _this.updatingRoutes = false;
            }
        });
    };
    JhiRouteSelectorComponent.prototype.downRoute = function (instance) {
        if (instance) {
            instance.status = 'DOWN';
        }
    };
    /* ==========================================================================
                                        UI PART
     ========================================================================== */
    JhiRouteSelectorComponent.prototype.getActiveRoute = function () {
        return this.activeRoute.serviceId ? this.activeRoute.serviceId.toUpperCase() : this.activeRoute.appName.toUpperCase();
    };
    JhiRouteSelectorComponent.prototype.getBadgeClassRoute = function (route) {
        if (route && !route.status) {
            route.status = 'UP';
        }
        return this.getBadgeClass(route.status);
    };
    JhiRouteSelectorComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState && (statusState === 'UP' || statusState.toLowerCase() === 'starting')) {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    JhiRouteSelectorComponent.prototype.state = function (route) {
        if (route && route.status && route.status === 'DOWN') {
            return 'disabled';
        }
        else if (route && route.serviceId === this.activeRoute.serviceId) {
            return 'active';
        }
    };
    JhiRouteSelectorComponent.prototype.searchByAppName = function () {
        var _this = this;
        if (this.searchedInstance === '') {
            this.routes = this.savedRoutes;
        }
        else {
            this.routes = this.savedRoutes.filter(function (route) {
                return route.appName.includes(_this.searchedInstance);
            });
        }
    };
    /**
     * Close the dropdown element.
     * The dropdown can be closed directly in the HTML, but cause the warning
     * ("The method "drop" that you're trying to access does not exist in the class declaration.").
     * @param dropdown
     */
    JhiRouteSelectorComponent.prototype.closeDropDown = function (dropdown) {
        if (dropdown) {
            dropdown.close();
        }
    };
    return JhiRouteSelectorComponent;
}());
JhiRouteSelectorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-route-selector',
        template: __webpack_require__("./src/main/webapp/app/shared/routes/route-selector.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/shared/routes/route-selector.component.scss")
        ]
    }),
    __metadata("design:paramtypes", [routes_service_1.JhiRoutesService,
        refresh_service_1.JhiRefreshService])
], JhiRouteSelectorComponent);
exports.JhiRouteSelectorComponent = JhiRouteSelectorComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/routes/route.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Route = (function () {
    function Route(path, prefix, appName, status, serviceId, serviceInstances) {
        this.path = path;
        this.prefix = prefix;
        this.appName = appName;
        this.status = status;
        this.serviceId = serviceId;
        this.serviceInstances = serviceInstances;
    }
    return Route;
}());
exports.Route = Route;


/***/ }),

/***/ "./src/main/webapp/app/shared/routes/routes.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var Subject_1 = __webpack_require__(12);
var ng2_webstorage_1 = __webpack_require__(9);
var JhiRoutesService = (function () {
    function JhiRoutesService(http, sessionStorage) {
        this.http = http;
        this.sessionStorage = sessionStorage;
        // Observable sources
        this.routeChangedSource = new Subject_1.Subject();
        this.routeDownSource = new Subject_1.Subject();
        this.routeReloadSource = new Subject_1.Subject();
        this.routeChanged$ = this.routeChangedSource.asObservable();
        this.routeDown$ = this.routeDownSource.asObservable();
        this.routeReload$ = this.routeReloadSource.asObservable();
    }
    JhiRoutesService.prototype.findAll = function () {
        return this.http.get('/api/routes').map(function (res) { return res.json(); });
    };
    JhiRoutesService.prototype.routeChange = function (route) {
        this.routeChangedSource.next(route);
    };
    JhiRoutesService.prototype.reloadRoutes = function () {
        this.routeReloadSource.next(true);
    };
    JhiRoutesService.prototype.routeDown = function (route) {
        this.routeDownSource.next(route);
    };
    JhiRoutesService.prototype.getSelectedInstance = function () {
        return this.sessionStorage.retrieve('instanceId');
    };
    JhiRoutesService.prototype.storeSelectedInstance = function (instance) {
        this.sessionStorage.store('instanceId', instance);
    };
    return JhiRoutesService;
}());
JhiRoutesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_webstorage_1.SessionStorageService])
], JhiRoutesService);
exports.JhiRoutesService = JhiRoutesService;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-common.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(11);
var ng_jhipster_1 = __webpack_require__(5);
var group_by_pipe_1 = __webpack_require__("./src/main/webapp/app/shared/pipe/group-by.pipe.ts");
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
function alertServiceProvider(sanitizer) {
    // set below to true to make alerts look like toast
    var isToast = false;
    return new ng_jhipster_1.AlertService(sanitizer, isToast);
}
exports.alertServiceProvider = alertServiceProvider;
var JHipsterRegistrySharedCommonModule = (function () {
    function JHipsterRegistrySharedCommonModule() {
    }
    return JHipsterRegistrySharedCommonModule;
}());
JHipsterRegistrySharedCommonModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.JHipsterRegistrySharedLibsModule
        ],
        declarations: [
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent,
            _1.JhiRouteSelectorComponent,
            _1.JhiRefreshSelectorComponent,
            group_by_pipe_1.GroupByPipe
        ],
        providers: [
            {
                provide: ng_jhipster_1.AlertService,
                useFactory: alertServiceProvider,
                deps: [core_1.Sanitizer]
            },
            platform_browser_1.Title
        ],
        exports: [
            _1.JHipsterRegistrySharedLibsModule,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent,
            _1.JhiRouteSelectorComponent,
            _1.JhiRefreshSelectorComponent,
            group_by_pipe_1.GroupByPipe
        ]
    })
], JHipsterRegistrySharedCommonModule);
exports.JHipsterRegistrySharedCommonModule = JHipsterRegistrySharedCommonModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-libs.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(14);
var http_1 = __webpack_require__(3);
var common_1 = __webpack_require__(13);
var ng_bootstrap_1 = __webpack_require__(8);
var ng_jhipster_1 = __webpack_require__(5);
var ngx_infinite_scroll_1 = __webpack_require__(17);
var JHipsterRegistrySharedLibsModule = (function () {
    function JHipsterRegistrySharedLibsModule() {
    }
    return JHipsterRegistrySharedLibsModule;
}());
JHipsterRegistrySharedLibsModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            ng_jhipster_1.NgJhipsterModule.forRoot({}),
            ngx_infinite_scroll_1.InfiniteScrollModule
        ],
        exports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            ng_bootstrap_1.NgbModule,
            ng_jhipster_1.NgJhipsterModule,
            ngx_infinite_scroll_1.InfiniteScrollModule
        ]
    })
], JHipsterRegistrySharedLibsModule);
exports.JHipsterRegistrySharedLibsModule = JHipsterRegistrySharedLibsModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(13);
var cookies_service_1 = __webpack_require__(19);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JHipsterRegistrySharedModule = (function () {
    function JHipsterRegistrySharedModule() {
    }
    return JHipsterRegistrySharedModule;
}());
JHipsterRegistrySharedModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.JHipsterRegistrySharedLibsModule,
            _1.JHipsterRegistrySharedCommonModule
        ],
        declarations: [
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective
        ],
        providers: [
            _1.JhiRoutesService,
            _1.JhiRefreshService,
            _1.AuthServerProvider,
            _1.AuthSessionServerProvider,
            cookies_service_1.CookieService,
            _1.LoginService,
            _1.LoginModalService,
            _1.LoginOAuth2Service,
            _1.AccountService,
            _1.StateStorageService,
            _1.Principal,
            _1.CSRFService,
            _1.AuthServerProvider,
            _1.UserService,
            common_1.DatePipe
        ],
        entryComponents: [_1.JhiLoginModalComponent],
        exports: [
            _1.JHipsterRegistrySharedCommonModule,
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective,
            common_1.DatePipe
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JHipsterRegistrySharedModule);
exports.JHipsterRegistrySharedModule = JHipsterRegistrySharedModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/account.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account(activated, authorities, email, firstName, langKey, lastName, login, imageUrl) {
        this.activated = activated;
        this.authorities = authorities;
        this.email = email;
        this.firstName = firstName;
        this.langKey = langKey;
        this.lastName = lastName;
        this.login = login;
        this.imageUrl = imageUrl;
    }
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id ? id : null;
        this.login = login ? login : null;
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.email = email ? email : null;
        this.activated = activated ? activated : false;
        this.langKey = langKey ? langKey : null;
        this.authorities = authorities ? authorities : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.password = password ? password : null;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = 'api/users';
    }
    UserService.prototype.create = function (user) {
        return this.http.post(this.resourceUrl, user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.resourceUrl, user);
    };
    UserService.prototype.find = function (login) {
        return this.http.get(this.resourceUrl + "/" + login).map(function (res) { return res.json(); });
    };
    UserService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        if (req) {
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
        }
        var options = {
            search: params
        };
        return this.http.get(this.resourceUrl, options);
    };
    UserService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/main/webapp/content/images/hipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca854e6d0785ba4b9d715049c0bdbcb3.png";

/***/ }),

/***/ "./src/main/webapp/content/images/hipster2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1cd3a1d782e85ba37677c1a2099bc002.png";

/***/ }),

/***/ "./src/main/webapp/content/images/logo-jhipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a30deb26b4eb1521433021e326cbcc2c.png";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(1);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(0);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(23);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(5);

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(7);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(13);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(197);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(200);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(204);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(205);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(209);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(81);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http:/localhost:9060");
__webpack_require__("./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__("./src/main/webapp/app/app.main.ts");


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(32);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(202);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(198);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(199);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(203);

/***/ })

},[22]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9yZXBsaWNhcy9yZXBsaWNhcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yZWZyZXNoL3JlZnJlc2gtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcm91dGVzL3JvdXRlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9nZmlsZS9sb2dmaWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9nZmlsZS9sb2dmaWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5zY3NzPzE0YmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dmaWxlL2xvZ2ZpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9nLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3Mucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvY29uZmlnL3Byb2QuY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC1leHBpcmVkLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2F1dGguaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3Ivbm90aWZpY2F0aW9uLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ldXJla2Euc3RhdHVzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5zY3NzPzQ2MzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9sYXlvdXQtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzcz9jN2Q5Iiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLnNjc3M/ZDA2MiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2Nzcz8xODYxIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvY29uZmlnL2NvbmZpZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2NvbmZpZy9jb25maWcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvY29uZmlnL2NvbmZpZy5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2NvbmZpZy9jb25maWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2VuY3J5cHRpb24vZW5jcnlwdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2VuY3J5cHRpb24vZW5jcnlwdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9lbmNyeXB0aW9uL2VuY3J5cHRpb24ucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9lbmNyeXB0aW9uL2VuY3J5cHRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9oaXN0b3J5L2hpc3Rvcnkucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9oaXN0b3J5L2hpc3Rvcnkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvcmVnaXN0cnkubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvcmVnaXN0cnkucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9yZXBsaWNhcy9yZXBsaWNhcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L3JlcGxpY2FzL3JlcGxpY2FzLmNvbXBvbmVudC5zY3NzPzUxOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9yZXBsaWNhcy9yZXBsaWNhcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9yZXBsaWNhcy9yZXBsaWNhcy5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L3JlcGxpY2FzL3JlcGxpY2FzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9zc2gvc3NoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvc3NoL3NzaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9zc2gvc3NoLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvc3NoL3NzaC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9hY2NvdW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9hdXRoLWp3dC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC1zZXNzaW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9jc3JmLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9wcmluY2lwYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvb2F1dGgyL2xvZ2luLW9hdXRoMi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3BpcGUvZ3JvdXAtYnkucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yZWZyZXNoL3JlZnJlc2gtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcmVmcmVzaC9yZWZyZXNoLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzP2I5ODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcmVmcmVzaC9yZWZyZXNoLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yZWZyZXNoL3JlZnJlc2guc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yb3V0ZXMvcm91dGUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcm91dGVzL3JvdXRlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzPzJiOGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcm91dGVzL3JvdXRlLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yb3V0ZXMvcm91dGUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcm91dGVzL3JvdXRlcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1jb21tb24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1saWJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvYWNjb3VudC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9oaXBzdGVyMngucG5nIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9sb2dvLWpoaXBzdGVyLnBuZyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvQGFuZ3VsYXIvY29yZS5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvT2JzZXJ2YWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21tb24vQGFuZ3VsYXIvY29tbW9uLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZm9ybXMvQGFuZ3VsYXIvZm9ybXMuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25neC1pbmZpbml0ZS1zY3JvbGwvbW9kdWxlcy9uZ3gtaW5maW5pdGUtc2Nyb2xsLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3ZlbmRvci50cyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9SeC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9AYW5ndWxhci9odHRwLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmctamhpcHN0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9AYW5ndWxhci9yb3V0ZXIuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXdlYnN0b3JhZ2UvZGlzdC9hcHAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esc0NBQXVDLGdCQUFnQiwyQkFBMkIsc0JBQXNCLGlCQUFpQixFQUFFLGlEQUFpRCx1QkFBdUIsbUJBQW1CLGVBQWUsc0JBQXNCLHdCQUF3QixzQkFBc0IsaUJBQWlCLEVBQUUsYUFBYSxpQkFBaUIsRUFBRSxnQkFBZ0IsY0FBYyxFQUFFOztBQUU1WDs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHVOQUF3TiwwQkFBMEIsaUJBQWlCLGtCQUFrQixzSEFBOEYsNkJBQTZCLEVBQUUsV0FBVyxtQkFBbUIsRUFBRSx1QkFBdUIsbUJBQW1CLHVCQUF1QixvQkFBb0Isc0JBQXNCLEVBQUUsNkNBQTZDLGlCQUFpQixFQUFFLG1ZQUFtWSxjQUFjLDBIQUFrRywrQkFBK0IsRUFBRSxFQUFFOztBQUVybkM7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxvTkFBcU4sb0JBQW9CLGdCQUFn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QU07U0FDakIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sS0FBYTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBSSxLQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBckNZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FJaUIsV0FBSTtHQUhyQixXQUFXLENBcUN2QjtBQXJDWSxrQ0FBVzs7Ozs7Ozs7QUNQeEIsZ0Y7Ozs7Ozs7QUNBQSxnRjs7Ozs7OztBQ0FBLGdGOzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubG9nLXZpZXdlciB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5sb2ctbmF2aWdhdGlvbi1idXR0b24sIC50by10b3AsIC50by1ib3R0b20ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICByaWdodDogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4udG8tdG9wIHtcXG4gIGJvdHRvbTogNTBweDsgfVxcblxcbi50by1ib3R0b20ge1xcbiAgdG9wOiAzMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuTWFpbiBwYWdlIHN0eWxlc1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhpcHN0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDM0N3B4O1xcbiAgaGVpZ2h0OiA0OTdweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L2ltYWdlcy9oaXBzdGVyLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcblxcbi5jYXJkIHtcXG4gIG1hcmdpbi10b3A6IDIlOyB9XFxuICAuY2FyZCAuY2FyZC10aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZm9udC1zaXplOiAxN3B4OyB9XFxuXFxuLnRhYmxlLCAudGFibGUgdHIsIC50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblxcbi8qIHdhaXQgYXV0b3ByZWZpeGVyIHVwZGF0ZSB0byBhbGxvdyBzaW1wbGUgZ2VuZXJhdGlvbiBvZiBoaWdoIHBpeGVsIGRlbnNpdHkgbWVkaWEgcXVlcnkgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMiAvIDEpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xcbiAgLmhpcHN0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vY29udGVudC9pbWFnZXMvaGlwc3RlcjJ4LnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5OYXZiYXJcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5uYXZiYXItdmVyc2lvbiB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogI2NjYzsgfVxcblxcbi5qaC1uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2Q0NztcXG4gIHBhZGRpbmc6IC4yZW0gMWVtOyB9XFxuICAuamgtbmF2YmFyIC5wcm9maWxlLWltYWdlIHtcXG4gICAgbWFyZ2luOiAtMTBweCAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgLmpoLW5hdmJhciAuZHJvcGRvd24taXRlbS5hY3RpdmUsIC5qaC1uYXZiYXIgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOmZvY3VzLCAuamgtbmF2YmFyIC5kcm9wZG93bi1pdGVtLmFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNkNDc7IH1cXG4gIC5qaC1uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMC4xNWVtOyB9XFxuICAuamgtbmF2YmFyIHVsLm5hdmJhci1uYXYge1xcbiAgICBwYWRkaW5nOiAwLjVlbTsgfVxcbiAgICAuamgtbmF2YmFyIHVsLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMS41cmVtOyB9XFxuICAuamgtbmF2YmFyIGEubmF2LWxpbmsge1xcbiAgICBmb250LXdlaWdodDogNDAwOyB9XFxuICAuamgtbmF2YmFyIC5qaC1uYXZiYXItdG9nZ2xlciB7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgIC5qaC1uYXZiYXIgLmpoLW5hdmJhci10b2dnbGVyOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2ZmZjsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAuamgtbG9nby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXFxuLm5hdmJhci10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5Mb2dvIHN0eWxlc1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm5hdmJhci1icmFuZC5sb2dvIHtcXG4gIHBhZGRpbmc6IDVweCAxNXB4OyB9XFxuICAubmF2YmFyLWJyYW5kLmxvZ28gLmxvZ28taW1nIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcIikgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkRldmVsb3BlbWVudCBSaWJib25cXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5yaWJib24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzAsIDAsIDAsIDAuNSk7XFxuICBsZWZ0OiAtMy41ZW07XFxuICBtb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIG1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBvLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB3ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiAxNWVtO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC43NTsgfVxcbiAgLnJpYmJvbiBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDFweCAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjNDQ0O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQXBwbGljYXRpb25zIHBhZ2Ugc3R5bGVzXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uYXBwcyB7XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcbiAgLmFwcHMgc3Bhbi5iYWRnZSB7XFxuICAgIC8qIFVQLCBET1dOLCAuLi4gKi9cXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAuYXBwcyBsaS5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgICAvKiBhcHBzIG5hbWVzICovXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuUmVwbGljYXMgcGFnZSBzdHlsZXNcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNyZXBsaWNhcyB7XFxuICBtYXJnaW4tdG9wOiAzJTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9yZXBsaWNhcy9yZXBsaWNhcy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9yZXBsaWNhcy9yZXBsaWNhcy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblJlZnJlc2ggc2VsZWN0b3Igc3R5bGVzXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZHJvcGRvd24gLnRpbWVzIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4yNTsgfVxcbiAgLmRyb3Bkb3duIC50aW1lcyAudGltZXMtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyB9XFxuXFxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcXG4gIGJvcmRlci1jb2xvcjogZGFya2dyZXk7IH1cXG4gIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XFxuICAgIC8qIHJlZnJlc2ggdGltZXMgKi9cXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsOyB9XFxuICAgIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwYmVkODsgfVxcbiAgICAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4OyB9XFxuICAgIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5tYW51YWwtcmVmcmVzaCB7XFxuICAgICAgZGlzcGxheTogaW5pdGlhbDsgfVxcbiAgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1kaXZpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcmVmcmVzaC9yZWZyZXNoLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yZWZyZXNoL3JlZnJlc2gtc2VsZWN0b3IuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5Sb3V0ZSBzZWxlY3RvciBzdHlsZXNcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5yb3V0ZS1zZWxlY3RvciB7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuICAucm91dGUtc2VsZWN0b3IgLmRyb3Bkb3duIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuICAgIC5yb3V0ZS1zZWxlY3RvciAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xcbiAgICAgIGJvcmRlci1jb2xvcjogZGFya2dyZXk7IH1cXG4gICAgICAucm91dGUtc2VsZWN0b3IgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5zZWFyY2gge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIDEwcHg7IH1cXG4gICAgICAucm91dGUtc2VsZWN0b3IgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcXG4gICAgICAgIC8qIHJvdXRlcyBuYW1lcyAqL1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgICAgLnJvdXRlLXNlbGVjdG9yIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBiZWQ4OyB9XFxuICAgICAgICAucm91dGUtc2VsZWN0b3IgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XFxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4OyB9XFxuICAgICAgICAucm91dGUtc2VsZWN0b3IgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIC5iYWRnZSB7XFxuICAgICAgICAgIC8qKiB2ZXJ0aWNhbGx5IGNlbnRlciBiYWRnZXMgKi9cXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDA7IH1cXG4gICAgICAgIC5yb3V0ZS1zZWxlY3RvciAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0uZGlzYWJsZWQge1xcbiAgICAgICAgICAvKiogZGlzYWJsZSBET1dOIGluc3RhbmNlcyAqKi9cXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3JvdXRlcy9yb3V0ZS1zZWxlY3Rvci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcm91dGVzL3JvdXRlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBKSGlwc3RlclJlZ2lzdHJ5U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBhZG1pblN0YXRlLFxyXG4gICAgTG9nc0NvbXBvbmVudCxcclxuICAgIEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsXHJcbiAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcclxuICAgIEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50LFxyXG4gICAgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQsXHJcbiAgICBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxyXG4gICAgSmhpRG9jc0NvbXBvbmVudCxcclxuICAgIEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgSmhpTG9nZmlsZUNvbXBvbmVudCxcclxuICAgIEpoaUhlYWx0aFNlcnZpY2UsXHJcbiAgICBKaGlNZXRyaWNzU2VydmljZSxcclxuICAgIExvZ3NTZXJ2aWNlLFxyXG4gICAgSmhpTG9nZmlsZVNlcnZpY2VcclxufSBmcm9tICcuLyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYWRtaW5TdGF0ZSwgeyB1c2VIYXNoOiB0cnVlIH0pXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTG9nc0NvbXBvbmVudCxcclxuICAgICAgICBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIEpoaURvY3NDb21wb25lbnQsXHJcbiAgICAgICAgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQsXHJcbiAgICAgICAgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQsXHJcbiAgICAgICAgSmhpTWV0cmljc01vbml0b3JpbmdDb21wb25lbnQsXHJcbiAgICAgICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBKaGlMb2dmaWxlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQsXHJcbiAgICAgICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBKaGlDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgICAgICBKaGlIZWFsdGhTZXJ2aWNlLFxyXG4gICAgICAgIEpoaU1ldHJpY3NTZXJ2aWNlLFxyXG4gICAgICAgIExvZ3NTZXJ2aWNlLFxyXG4gICAgICAgIEpoaUxvZ2ZpbGVTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKSGlwc3RlclJlZ2lzdHJ5QWRtaW5Nb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hZG1pbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGNvbmZpZ3VyYXRpb25Sb3V0ZSxcclxuICAgIGRvY3NSb3V0ZSxcclxuICAgIGhlYWx0aFJvdXRlLFxyXG4gICAgbG9nZmlsZVJvdXRlLFxyXG4gICAgbG9nc1JvdXRlLFxyXG4gICAgbWV0cmljc1JvdXRlXHJcbn0gZnJvbSAnLi8nO1xyXG5cclxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5jb25zdCBBRE1JTl9ST1VURVMgPSBbXHJcbiAgICBjb25maWd1cmF0aW9uUm91dGUsXHJcbiAgICBkb2NzUm91dGUsXHJcbiAgICBoZWFsdGhSb3V0ZSxcclxuICAgIGxvZ2ZpbGVSb3V0ZSxcclxuICAgIGxvZ3NSb3V0ZSxcclxuICAgIG1ldHJpY3NSb3V0ZVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkbWluU3RhdGU6IFJvdXRlcyA9IFt7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhdXRob3JpdGllczogWydST0xFX0FETUlOJ11cclxuICAgIH0sXHJcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdLFxyXG4gICAgY2hpbGRyZW46IEFETUlOX1JPVVRFU1xyXG59XTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+Q29uZmlndXJhdGlvbjwvaDI+IDxqaGktcm91dGUtc2VsZWN0b3I+PC9qaGktcm91dGUtc2VsZWN0b3I+IDxwPjxzcGFuPkZpbHRlciAoYnkgcHJlZml4KTwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJmaWx0ZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvcD4gPGgzPlNwcmluZyBjb25maWd1cmF0aW9uPC9oMz4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXJlc3BvbnNpdmUgZC10YWJsZVxcXCIgKm5nSWY9XFxcImNvbmZpZ3VyYXRpb25cXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGNsYXNzPVxcXCJ3LTQwXFxcIiAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAncHJlZml4JzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4+UHJlZml4PC9zcGFuPjwvdGg+IDx0aCBjbGFzcz1cXFwidy02MFxcXCIgKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3Byb3BlcnRpZXMnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3Bhbj5Qcm9wZXJ0aWVzPC9zcGFuPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIChjb25maWd1cmF0aW9uIHwgcHVyZUZpbHRlcjpmaWx0ZXI6J3ByZWZpeCcgfCBvcmRlckJ5Om9yZGVyUHJvcDpyZXZlcnNlKVxcXCI+IDx0ZD48c3Bhbj57e2VudHJ5LnByZWZpeH19PC9zcGFuPjwvdGQ+IDx0ZD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdGb3I9XFxcImxldCBrZXkgb2Yga2V5cyhlbnRyeS5wcm9wZXJ0aWVzKVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj57e2tleX19PC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLXN1Y2Nlc3MgYnJlYWtcXFwiPnt7ZW50cnkucHJvcGVydGllc1trZXldIHwganNvbn19PC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDxkaXYgKm5nSWY9XFxcImFsbENvbmZpZ3VyYXRpb25cXFwiPiA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGtleSBvZiBrZXlzKGFsbENvbmZpZ3VyYXRpb24pXFxcIj4gPGg0PjxzcGFuPnt7a2V5fX08L3NwYW4+PC9oND4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXJlc3BvbnNpdmUgZC10YWJsZVxcXCI+IDx0aGVhZD4gPHRyPiA8dGggY2xhc3M9XFxcInctNDBcXFwiPlByb3BlcnR5PC90aD4gPHRoIGNsYXNzPVxcXCJ3LTYwXFxcIj5WYWx1ZTwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgYWxsQ29uZmlndXJhdGlvbltrZXldXFxcIj4gPHRkIGNsYXNzPVxcXCJicmVha1xcXCI+e3tpdGVtLmtleX19PC90ZD4gPHRkIGNsYXNzPVxcXCJicmVha1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmbG9hdC1yaWdodCBiYWRnZSBiYWRnZS1zdWNjZXNzIGJyZWFrXFxcIj57e2l0ZW0udmFsfX08L3NwYW4+IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5pbXBvcnQgeyBKaGlDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSmhpUm91dGVzU2VydmljZSwgUm91dGUgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2poaS1jb25maWd1cmF0aW9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGFsbENvbmZpZ3VyYXRpb246IGFueSA9IG51bGw7XHJcbiAgICBjb25maWd1cmF0aW9uOiBhbnkgPSBudWxsO1xyXG4gICAgY29uZmlnS2V5czogYW55W107XHJcbiAgICBmaWx0ZXI6IHN0cmluZztcclxuICAgIG9yZGVyUHJvcDogc3RyaW5nO1xyXG4gICAgcmV2ZXJzZTogYm9vbGVhbjtcclxuXHJcbiAgICBhY3RpdmVSb3V0ZTogUm91dGU7XHJcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIHVwZGF0aW5nQ29uZmlnOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVzU2VydmljZTogSmhpUm91dGVzU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdLZXlzID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSAnJztcclxuICAgICAgICB0aGlzLm9yZGVyUHJvcCA9ICdwcmVmaXgnO1xyXG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGtleXMoZGljdCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiAoZGljdCA9PT0gdW5kZWZpbmVkKSA/IFtdIDogT2JqZWN0LmtleXMoZGljdCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlc1NlcnZpY2Uucm91dGVDaGFuZ2VkJC5zdWJzY3JpYmUoKHJvdXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUm91dGUgPSByb3V0ZTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5QWN0aXZlUm91dGVDb25maWcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5QWN0aXZlUm91dGVDb25maWcoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGluZ0NvbmZpZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUm91dGUgJiYgdGhpcy5hY3RpdmVSb3V0ZS5zdGF0dXMgIT09ICdET1dOJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmdldEluc3RhbmNlQ29uZmlncyh0aGlzLmFjdGl2ZVJvdXRlKS5zdWJzY3JpYmUoKGNvbmZpZ3VyYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0aW5nQ29uZmlnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbmZpZyBvZiBjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5wcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWdLZXlzLnB1c2goT2JqZWN0LmtleXMoY29uZmlnLnByb3BlcnRpZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGluZ0NvbmZpZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXNTZXJ2aWNlLnJvdXRlRG93bih0aGlzLmFjdGl2ZVJvdXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmdldEluc3RhbmNlRW52KHRoaXMuYWN0aXZlUm91dGUpLnN1YnNjcmliZSgoY29uZmlndXJhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxDb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXNTZXJ2aWNlLnJvdXRlRG93bih0aGlzLmFjdGl2ZVJvdXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gcHJldmVudCBtZW1vcnkgbGVhayB3aGVuIGNvbXBvbmVudCBkZXN0cm95ZWRcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEpoaUNvbmZpZ3VyYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uUm91dGU6IFJvdXRlID0ge1xyXG4gICAgcGF0aDogJ2poaS1jb25maWd1cmF0aW9uJyxcclxuICAgIGNvbXBvbmVudDogSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBwYWdlVGl0bGU6ICdDbG91ZCBjb25maWd1cmF0aW9uJ1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmZpZ3MocHJlZml4OiBTdHJpbmcgPSAnJyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocHJlZml4ICsgJ21hbmFnZW1lbnQvY29uZmlncHJvcHMnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllc09iamVjdCA9IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wZXJ0aWVzT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc09iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnRpZXNPYmplY3Rba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLnNvcnQoKHByb3BlcnR5QSwgcHJvcGVydHlCKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByb3BlcnR5QS5wcmVmaXggPT09IHByb3BlcnR5Qi5wcmVmaXgpID8gMCA6XHJcbiAgICAgICAgICAgICAgICAgICAgKHByb3BlcnR5QS5wcmVmaXggPCBwcm9wZXJ0eUIucHJlZml4KSA/IC0xIDogMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VDb25maWdzKGluc3RhbmNlOiBSb3V0ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLnByZWZpeCAmJiBpbnN0YW5jZS5wcmVmaXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25maWdzKGluc3RhbmNlLnByZWZpeCArICcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbmZpZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbnYocHJlZml4OiBTdHJpbmcgPSAnJyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocHJlZml4ICsgJ21hbmFnZW1lbnQvZW52JykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXM6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzT2JqZWN0ID0gcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXNPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxzT2JqZWN0ID0gcHJvcGVydGllc09iamVjdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHM6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsS2V5IGluIHZhbHNPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHNPYmplY3QuaGFzT3duUHJvcGVydHkodmFsS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFscy5wdXNoKHtrZXk6IHZhbEtleSwgdmFsOiB2YWxzT2JqZWN0W3ZhbEtleV19KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB2YWxzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZUVudihpbnN0YW5jZTogUm91dGUpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5wcmVmaXggJiYgaW5zdGFuY2UucHJlZml4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW52KGluc3RhbmNlLnByZWZpeCArICcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVudigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGlmcmFtZSBzcmM9XFxcInN3YWdnZXItdWkvaW5kZXguaHRtbFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiOTAwXFxcIiBzZWFtbGVzcyB0YXJnZXQ9XFxcIl90b3BcXFwiIHRpdGxlPVxcXCJTd2FnZ2VyIFVJXFxcIiBjbGFzcz1cXFwiYm9yZGVyLTBcXFwiPjwvaWZyYW1lPiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2poaS1kb2NzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9kb2NzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSmhpRG9jc0NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICkge1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEpoaURvY3NDb21wb25lbnQgfSBmcm9tICcuL2RvY3MuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBkb2NzUm91dGU6IFJvdXRlID0ge1xyXG4gICAgcGF0aDogJ2RvY3MnLFxyXG4gICAgY29tcG9uZW50OiBKaGlEb2NzQ29tcG9uZW50LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHBhZ2VUaXRsZTogJ0FQSSdcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3Mucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcInNob3dIZWFsdGhMYWJlbFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWNhcGl0YWxpemVcXFwiPnt7IGJhc2VOYW1lKGN1cnJlbnRIZWFsdGgubmFtZSkgfX08L3NwYW4+IHt7c3ViU3lzdGVtTmFtZShjdXJyZW50SGVhbHRoLm5hbWUpfX0gPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJjdXJyZW50SGVhbHRoLmRldGFpbHNcXFwiPiA8aDQ+UHJvcGVydGllczwvaDQ+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGNsYXNzPVxcXCJ3LTQwIHRleHQtbGVmdFxcXCI+TmFtZTwvdGg+IDx0aCBjbGFzcz1cXFwidy02MCB0ZXh0LWxlZnRcXFwiPlZhbHVlPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgY3VycmVudEhlYWx0aC5kZXRhaWxzIHwga2V5c1xcXCI+IDx0ZCBjbGFzcz1cXFwidy00MCB0ZXh0LWxlZnRcXFwiPnt7ZW50cnkua2V5fX08L3RkPiA8dGQgY2xhc3M9XFxcInctNjAgdGV4dC1sZWZ0XFxcIj57e3JlYWRhYmxlVmFsdWUoZW50cnkudmFsdWUpfX08L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcImN1cnJlbnRIZWFsdGguZXJyb3JcXFwiPiA8aDQ+RXJyb3I8L2g0PiA8cHJlPnt7Y3VycmVudEhlYWx0aC5lcnJvcn19PC9wcmU+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZmxvYXQteHMtbGVmdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdjbG9zZWQnKVxcXCI+RG9uZTwvYnV0dG9uPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLW1vZGFsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IEpoaUhlYWx0aFNlcnZpY2UgfSBmcm9tICcuL2hlYWx0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdqaGktaGVhbHRoLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gICAgY3VycmVudEhlYWx0aDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhbHRoU2VydmljZTogSmhpSGVhbHRoU2VydmljZSwgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge31cclxuXHJcbiAgICBiYXNlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRCYXNlTmFtZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJTeXN0ZW1OYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhTZXJ2aWNlLmdldFN1YlN5c3RlbU5hbWUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZGFibGVWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aC5uYW1lICE9PSAnZGlza1NwYWNlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNob3VsZCBkaXNwbGF5IHN0b3JhZ2Ugc3BhY2UgaW4gYW4gaHVtYW4gcmVhZGFibGUgdW5pdFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHZhbHVlIC8gMTA3Mzc0MTgyNDtcclxuICAgICAgICBpZiAodmFsID4gMSkgeyAvLyBWYWx1ZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvRml4ZWQoMikgKyAnIEdCJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC8gMTA0ODU3NikudG9GaXhlZCgyKSArICcgTUInO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMj5IZWFsdGggQ2hlY2tzPC9oMj4gPGpoaS1yb3V0ZS1zZWxlY3Rvcj48L2poaS1yb3V0ZS1zZWxlY3Rvcj4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+IDx0YWJsZSBpZD1cXFwiaGVhbHRoQ2hlY2tcXFwiIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD5TZXJ2aWNlIE5hbWU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5TdGF0dXM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5EZXRhaWxzPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgaGVhbHRoIG9mIGhlYWx0aERhdGFcXFwiPiA8dGQ+PHNwYW4gY2xhc3M9XFxcInRleHQtY2FwaXRhbGl6ZVxcXCI+e3sgYmFzZU5hbWUoaGVhbHRoLm5hbWUpIH19PC9zcGFuPiB7e3N1YlN5c3RlbU5hbWUoaGVhbHRoLm5hbWUpfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgZm9udC13ZWlnaHQtbm9ybWFsXFxcIiBbbmdDbGFzc109XFxcImdldEJhZGdlQ2xhc3MoaGVhbHRoLnN0YXR1cylcXFwiPiB7e2hlYWx0aC5zdGF0dXN9fSA8L3NwYW4+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPiA8YSBjbGFzcz1cXFwiaGFuZFxcXCIgKGNsaWNrKT1cXFwic2hvd0hlYWx0aChoZWFsdGgpXFxcIiAqbmdJZj1cXFwiaGVhbHRoLmRldGFpbHMgfHwgaGVhbHRoLmVycm9yXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9pPiA8L2E+IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IEpoaUhlYWx0aFNlcnZpY2UgfSBmcm9tICcuL2hlYWx0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2hlYWx0aC1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgSmhpUm91dGVzU2VydmljZSwgUm91dGUgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2poaS1oZWFsdGgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWx0aC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aENoZWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgaGVhbHRoRGF0YTogYW55O1xyXG4gICAgdXBkYXRpbmdIZWFsdGg6IGJvb2xlYW47XHJcbiAgICBhY3RpdmVSb3V0ZTogUm91dGU7XHJcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXHJcbiAgICAgICAgcHJpdmF0ZSBoZWFsdGhTZXJ2aWNlOiBKaGlIZWFsdGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVzU2VydmljZTogSmhpUm91dGVzU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZXNTZXJ2aWNlLnJvdXRlQ2hhbmdlZCQuc3Vic2NyaWJlKChyb3V0ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUFjdGl2ZVJvdXRlSGVhbHRoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUFjdGl2ZVJvdXRlSGVhbHRoKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRpbmdIZWFsdGggPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVJvdXRlICYmIHRoaXMuYWN0aXZlUm91dGUuc3RhdHVzICE9PSAnRE9XTicpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhTZXJ2aWNlLmNoZWNrSW5zdGFuY2VIZWFsdGgodGhpcy5hY3RpdmVSb3V0ZSkuc3Vic2NyaWJlKChoZWFsdGgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoRGF0YSA9IHRoaXMuaGVhbHRoU2VydmljZS50cmFuc2Zvcm1IZWFsdGhEYXRhKGhlYWx0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNTAzIHx8IGVycm9yLnN0YXR1cyA9PT0gNTAwIHx8IGVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhEYXRhID0gdGhpcy5oZWFsdGhTZXJ2aWNlLnRyYW5zZm9ybUhlYWx0aERhdGEoZXJyb3IuanNvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNTAwIHx8IGVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVzU2VydmljZS5yb3V0ZURvd24odGhpcy5hY3RpdmVSb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlc1NlcnZpY2Uucm91dGVEb3duKHRoaXMuYWN0aXZlUm91dGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2VyIGNsaWNrXHJcbiAgICBzaG93SGVhbHRoKGhlYWx0aDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxSZWYgID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihKaGlIZWFsdGhNb2RhbENvbXBvbmVudCk7XHJcbiAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuY3VycmVudEhlYWx0aCA9IGhlYWx0aDtcclxuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIExlZnQgYmxhbmsgaW50ZW50aW9uYWxseSwgbm90aGluZyB0byBkbyBoZXJlXHJcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJhc2VOYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aFNlcnZpY2UuZ2V0QmFzZU5hbWUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlciBjbGlja1xyXG4gICAgZ2V0QmFkZ2VDbGFzcyhzdGF0dXNTdGF0ZSkge1xyXG4gICAgICAgIGlmICghc3RhdHVzU3RhdGUgfHwgc3RhdHVzU3RhdGUgIT09ICdVUCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1kYW5nZXInO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2Utc3VjY2Vzcyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YlN5c3RlbU5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRTdWJTeXN0ZW1OYW1lKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHByZXZlbnQgbWVtb3J5IGxlYWsgd2hlbiBjb21wb25lbnQgZGVzdHJveWVkXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQgfSBmcm9tICcuL2hlYWx0aC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWx0aFJvdXRlOiBSb3V0ZSA9IHtcclxuICAgIHBhdGg6ICdqaGktaGVhbHRoJyxcclxuICAgIGNvbXBvbmVudDogSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZVRpdGxlOiAnSGVhbHRoIENoZWNrcydcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aFNlcnZpY2Uge1xyXG5cclxuICAgIHNlcGFyYXRvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuc2VwYXJhdG9yID0gJy4nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCB0aGUgUmVnaXN0cnkncyBoZWFsdGhcclxuICAgIGNoZWNrSGVhbHRoKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvaGVhbHRoJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdGhlIGluc3RhbmNlJ3MgaGVhbHRoXHJcbiAgICBjaGVja0luc3RhbmNlSGVhbHRoKGluc3RhbmNlOiBSb3V0ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLnByZWZpeCAmJiBpbnN0YW5jZS5wcmVmaXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgoaW5zdGFuY2UucHJlZml4ICsgJy9tYW5hZ2VtZW50L2hlYWx0aCcpKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0hlYWx0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybUhlYWx0aERhdGEoZGF0YSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBbXTtcclxuICAgICAgICB0aGlzLmZsYXR0ZW5IZWFsdGhEYXRhKHJlc3BvbnNlLCBudWxsLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmFzZU5hbWUobmFtZSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFswXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3ViU3lzdGVtTmFtZShuYW1lKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdCA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgc3BsaXQuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCByZW1haW5kZXIgPSBzcGxpdC5qb2luKCcuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZW1haW5kZXIgPyAnIC0gJyArIHJlbWFpbmRlciA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBwcml2YXRlIG1ldGhvZHMgKi9cclxuICAgIHByaXZhdGUgYWRkSGVhbHRoT2JqZWN0KHJlc3VsdCwgaXNMZWFmLCBoZWFsdGhPYmplY3QsIG5hbWUpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGhlYWx0aERhdGE6IGFueSA9IHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSB7fTtcclxuICAgICAgICBsZXQgaGFzRGV0YWlscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBoZWFsdGhPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGhlYWx0aE9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGhlYWx0aE9iamVjdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3N0YXR1cycgfHwga2V5ID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhbHRoRGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0hlYWx0aE9iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0RldGFpbHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIHRoZSBkZXRhaWxzXHJcbiAgICAgICAgaWYgKGhhc0RldGFpbHMpIHtcclxuICAgICAgICAgICAgaGVhbHRoRGF0YS5kZXRhaWxzID0gZGV0YWlscztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9ubHkgYWRkIG5vZGVzIGlmIHRoZXkgcHJvdmlkZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXHJcbiAgICAgICAgaWYgKGlzTGVhZiB8fCBoYXNEZXRhaWxzIHx8IGhlYWx0aERhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaGVhbHRoRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZWFsdGhEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmxhdHRlbkhlYWx0aERhdGEocmVzdWx0LCBwYXRoLCBkYXRhKTogYW55IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNIZWFsdGhPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzU3ViU3lzdGVtKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEhlYWx0aE9iamVjdChyZXN1bHQsIGZhbHNlLCB2YWx1ZSwgdGhpcy5nZXRNb2R1bGVOYW1lKHBhdGgsIGtleSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYXR0ZW5IZWFsdGhEYXRhKHJlc3VsdCwgdGhpcy5nZXRNb2R1bGVOYW1lKHBhdGgsIGtleSksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEhlYWx0aE9iamVjdChyZXN1bHQsIHRydWUsIHZhbHVlLCB0aGlzLmdldE1vZHVsZU5hbWUocGF0aCwga2V5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNb2R1bGVOYW1lKHBhdGgsIG5hbWUpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgaWYgKHBhdGggJiYgbmFtZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoICsgdGhpcy5zZXBhcmF0b3IgKyBuYW1lO1xyXG4gICAgICAgIH0gIGVsc2UgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcGF0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhc1N1YlN5c3RlbShoZWFsdGhPYmplY3QpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGhlYWx0aE9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoaGVhbHRoT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaGVhbHRoT2JqZWN0W2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNIZWFsdGhPYmplY3QoaGVhbHRoT2JqZWN0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBoZWFsdGhPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGhlYWx0aE9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc3RhdHVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguc2VydmljZS50cyIsImV4cG9ydCAqIGZyb20gJy4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5yb3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG9jcy9kb2NzLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG9jcy9kb2NzLnJvdXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hlYWx0aC9oZWFsdGguc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5yb3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9nZmlsZS9sb2dmaWxlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9nZmlsZS9sb2dmaWxlLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xvZ2ZpbGUvbG9nZmlsZS5yb3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9ncy9sb2dzLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9ncy9sb2dzLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5yb3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9ncy9sb2cubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNzL21ldHJpY3Mucm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FkbWluLnJvdXRlJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+VmlldyBsb2dzPC9oMj4gPGpoaS1yb3V0ZS1zZWxlY3Rvcj48L2poaS1yb3V0ZS1zZWxlY3Rvcj4gPGRpdiBjbGFzcz1cXFwidG8tYm90dG9tXFxcIiAqbmdJZj1cXFwibG9ndHh0XFxcIiAoY2xpY2spPVxcXCJzY3JvbGxUb0JvdHRvbSgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctY2lyY2xlLWRvd25cXFwiPjwvaT4gQm90dG9tPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8dGV4dGFyZWEgI2xvZ2ZpbGUgcmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGxvZy12aWV3ZXJcXFwiIHJvd3M9XFxcIjMwXFxcIj5cXHJcXG57e2xvZ3R4dH19XFxyXFxuICAgICAgICA8L3RleHRhcmVhPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwidG8tdG9wXFxcIiAqbmdJZj1cXFwibG9ndHh0XFxcIiAoY2xpY2spPVxcXCJzY3JvbGxUb1RvcCgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctY2lyY2xlLXVwXFxcIj48L2k+IFRvcDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgSmhpTG9nZmlsZVNlcnZpY2UgfSBmcm9tICcuL2xvZ2ZpbGUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBKaGlSb3V0ZXNTZXJ2aWNlLCBSb3V0ZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLWxvZ2ZpbGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJ2xvZ2ZpbGUuc2NzcydcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEpoaUxvZ2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBhY3RpdmVSb3V0ZTogUm91dGU7XHJcbiAgICB1cGRhdGluZ0xvZ2ZpbGU6IGJvb2xlYW47XHJcbiAgICBsb2d0eHQ6IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2xvZ2ZpbGUnKSBwcml2YXRlIGxvZ0ZpbGVWaWV3ZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBqaGlMb2dmaWxlU2VydmljZTogSmhpTG9nZmlsZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXNTZXJ2aWNlOiBKaGlSb3V0ZXNTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZXNTZXJ2aWNlLnJvdXRlQ2hhbmdlZCQuc3Vic2NyaWJlKChyb3V0ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUFjdGl2ZVJvdXRlTG9nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUFjdGl2ZVJvdXRlTG9nKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRpbmdMb2dmaWxlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVSb3V0ZSAmJiB0aGlzLmFjdGl2ZVJvdXRlLnN0YXR1cyAhPT0gJ0RPV04nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuamhpTG9nZmlsZVNlcnZpY2UuZ2V0SW5zdGFuY2VMb2dmaWxlKHRoaXMuYWN0aXZlUm91dGUpLnN1YnNjcmliZSgobG9ndHh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ3R4dCA9IGxvZ3R4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRpbmdMb2dmaWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNTAzIHx8IGVycm9yLnN0YXR1cyA9PT0gNTAwIHx8IGVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2d0eHQgPSAnTm8gYXZhaWxhYmxlIGxvZ2ZpbGUuIFxcbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnUGxlYXNlIGNoZWNrOlxcbiAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJy0gaWYgdGhlIG1pY3Jvc2VydmljZSBpcyB1cFxcbiAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJy0gdGhlc2UgcHJvcGVydGllcyBhcmUgc2V0OiBcXG4gJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICArICcgICAgLSBsb2dnaW5nLnBhdGhcXG4gJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICArICcgICAgLSBsb2dnaW5nLmZpbGUgKHRvIGF2b2lkIHVzaW5nIHRoZSBzYW1lIHNwcmluZy5sb2cpXFxuXFxuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICArICdTZWU6XFxuICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnLSBodHRwczovL2RvY3Muc3ByaW5nLmlvL3NwcmluZy1ib290L2RvY3MvY3VycmVudC9yZWZlcmVuY2UvaHRtbC9wcm9kdWN0aW9uLXJlYWR5LWVuZHBvaW50cy5odG1sXFxuICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnLSBodHRwczovL2RvY3Muc3ByaW5nLmlvL3NwcmluZy1ib290L2RvY3MvY3VycmVudC9yZWZlcmVuY2UvaHRtbC9ob3d0by1sb2dnaW5nLmh0bWwnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRpbmdMb2dmaWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUb0JvdHRvbSgpIHtcclxuICAgICAgICB0aGlzLmxvZ0ZpbGVWaWV3ZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLmxvZ0ZpbGVWaWV3ZXIubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dGaWxlVmlld2VyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy5sb2dGaWxlVmlld2VyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsZWRVcDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBwcmV2ZW50IG1lbW9yeSBsZWFrIHdoZW4gY29tcG9uZW50IGRlc3Ryb3llZFxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dmaWxlL2xvZ2ZpbGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSmhpTG9nZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vbG9nZmlsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2ZpbGVSb3V0ZTogUm91dGUgPSB7XHJcbiAgICBwYXRoOiAnbG9ncycsXHJcbiAgICBjb21wb25lbnQ6IEpoaUxvZ2ZpbGVDb21wb25lbnQsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZVRpdGxlOiAnTG9ncydcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dmaWxlL2xvZ2ZpbGUucm91dGUudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbG9nZmlsZS5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9nZmlsZS9sb2dmaWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dmaWxlL2xvZ2ZpbGUuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSmhpTG9nZmlsZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgLy8gZ2V0IHRoZSBSZWdpc3RyeSdzIGxvZ2ZpbGVcclxuICAgIGdldExvZ2ZpbGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9sb2dmaWxlJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMudGV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdGhlIGluc3RhbmNlJ3MgbG9nZmlsZVxyXG4gICAgZ2V0SW5zdGFuY2VMb2dmaWxlKGluc3RhbmNlOiBSb3V0ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLnByZWZpeCAmJiBpbnN0YW5jZS5wcmVmaXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChpbnN0YW5jZS5wcmVmaXggKyAnL21hbmFnZW1lbnQvbG9nZmlsZScpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLnRleHQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldExvZ2ZpbGUoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIExvZyB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBsZXZlbDogc3RyaW5nXHJcbiAgICApIHsgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2cubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcImxvZ2dlcnNcXFwiPiA8aDI+TG9nZ2VyczwvaDI+IDxqaGktcm91dGUtc2VsZWN0b3I+PC9qaGktcm91dGUtc2VsZWN0b3I+IDxwPlRoZXJlIGFyZSB7eyBsb2dnZXJzLmxlbmd0aCB9fSBsb2dnZXJzLjwvcD4gPHNwYW4+RmlsdGVyPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImZpbHRlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcXFwiPiA8dGhlYWQ+IDx0ciB0aXRsZT1cXFwiY2xpY2sgdG8gb3JkZXJcXFwiPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ25hbWUnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3Bhbj5OYW1lPC9zcGFuPjwvdGg+IDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAnbGV2ZWwnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3Bhbj5MZXZlbDwvc3Bhbj48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dHIgKm5nRm9yPVxcXCJsZXQgbG9nZ2VyIG9mIChsb2dnZXJzIHwgcHVyZUZpbHRlcjpmaWx0ZXI6J25hbWUnIHwgb3JkZXJCeTpvcmRlclByb3A6cmV2ZXJzZSlcXFwiPiA8dGQ+PHNtYWxsPnt7bG9nZ2VyLm5hbWUgfCBzbGljZTowOjE0MH19PC9zbWFsbD48L3RkPiA8dGQ+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdUUkFDRScpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdUUkFDRScpID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tc2Vjb25kYXJ5J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc21cXFwiPlRSQUNFPC9idXR0b24+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdERUJVRycpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdERUJVRycpID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tc2Vjb25kYXJ5J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc21cXFwiPkRFQlVHPC9idXR0b24+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdJTkZPJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J0lORk8nKSA/ICdidG4taW5mbycgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5JTkZPPC9idXR0b24+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdXQVJOJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J1dBUk4nKSA/ICdidG4td2FybmluZycgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5XQVJOPC9idXR0b24+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdFUlJPUicpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdFUlJPUicpID8gJ2J0bi1kYW5nZXInIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+RVJST1I8L2J1dHRvbj4gPC90ZD4gPC90cj4gPC90YWJsZT4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZy5tb2RlbCc7XHJcbmltcG9ydCB7IExvZ3NTZXJ2aWNlIH0gZnJvbSAnLi9sb2dzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgSmhpUm91dGVzU2VydmljZSwgUm91dGUgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2poaS1sb2dzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBsb2dnZXJzOiBMb2dbXTtcclxuICAgIHVwZGF0aW5nTG9nczogYm9vbGVhbjtcclxuICAgIGZpbHRlcjogc3RyaW5nO1xyXG4gICAgb3JkZXJQcm9wOiBzdHJpbmc7XHJcbiAgICByZXZlcnNlOiBib29sZWFuO1xyXG5cclxuICAgIGFjdGl2ZVJvdXRlOiBSb3V0ZTtcclxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nc1NlcnZpY2U6IExvZ3NTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVzU2VydmljZTogSmhpUm91dGVzU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSAnJztcclxuICAgICAgICB0aGlzLm9yZGVyUHJvcCA9ICduYW1lJztcclxuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVzU2VydmljZS5yb3V0ZUNoYW5nZWQkLnN1YnNjcmliZSgocm91dGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlBY3RpdmVSb3V0ZUxvZ3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VMZXZlbChuYW1lOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBsb2cgPSBuZXcgTG9nKG5hbWUsIGxldmVsKTtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVSb3V0ZSAmJiB0aGlzLmFjdGl2ZVJvdXRlLnN0YXR1cyAhPT0gJ0RPV04nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nc1NlcnZpY2UuY2hhbmdlSW5zdGFuY2VMZXZlbCh0aGlzLmFjdGl2ZVJvdXRlLCBsb2cpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ3NTZXJ2aWNlLmZpbmRJbnN0YW5jZUFsbCh0aGlzLmFjdGl2ZVJvdXRlKS5zdWJzY3JpYmUoKGxvZ2dlcnMpID0+IHRoaXMubG9nZ2VycyA9IGxvZ2dlcnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUFjdGl2ZVJvdXRlTG9ncygpIHtcclxuICAgICAgICB0aGlzLnVwZGF0aW5nTG9ncyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUm91dGUgJiYgdGhpcy5hY3RpdmVSb3V0ZS5zdGF0dXMgIT09ICdET1dOJykge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3NTZXJ2aWNlLmZpbmRJbnN0YW5jZUFsbCh0aGlzLmFjdGl2ZVJvdXRlKS5zdWJzY3JpYmUoKGxvZ2dlcnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VycyA9IGxvZ2dlcnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0aW5nTG9ncyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDUwMyB8fCBlcnJvci5zdGF0dXMgPT09IDUwMCB8fCBlcnJvci5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRpbmdMb2dzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNTAwIHx8IGVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVzU2VydmljZS5yb3V0ZURvd24odGhpcy5hY3RpdmVSb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlc1NlcnZpY2Uucm91dGVEb3duKHRoaXMuYWN0aXZlUm91dGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBwcmV2ZW50IG1lbW9yeSBsZWFrIHdoZW4gY29tcG9uZW50IGRlc3Ryb3llZFxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IExvZ3NDb21wb25lbnQgfSBmcm9tICcuL2xvZ3MuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dzUm91dGU6IFJvdXRlID0ge1xyXG4gICAgcGF0aDogJ2xvZ2dlcnMnLFxyXG4gICAgY29tcG9uZW50OiBMb2dzQ29tcG9uZW50LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHBhZ2VUaXRsZTogJ0xvZ2dlcnMnXHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZy5tb2RlbCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ3NTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgY2hhbmdlTGV2ZWwobG9nOiBMb2cpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoJ21hbmFnZW1lbnQvbG9ncycsIGxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSW5zdGFuY2VMZXZlbChpbnN0YW5jZTogUm91dGUsIGxvZzogTG9nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5wcmVmaXggJiYgaW5zdGFuY2UucHJlZml4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoaW5zdGFuY2UucHJlZml4ICsgJy9tYW5hZ2VtZW50L2xvZ3MnLCBsb2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VMZXZlbChsb2cpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRBbGwoKTogT2JzZXJ2YWJsZTxMb2dbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2xvZ3MnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRJbnN0YW5jZUFsbChpbnN0YW5jZTogUm91dGUpOiBPYnNlcnZhYmxlPExvZ1tdPiB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLnByZWZpeCAmJiBpbnN0YW5jZS5wcmVmaXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgoaW5zdGFuY2UucHJlZml4ICsgJy9tYW5hZ2VtZW50L2xvZ3MnKSkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlRocmVhZHMgZHVtcDwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXByaW1hcnlcXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7fVxcXCI+QWxsJm5ic3A7PHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGVmYXVsdFxcXCI+e3t0aHJlYWREdW1wQWxsfX08L3NwYW4+PC9zcGFuPiZuYnNwOyA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ1JVTk5BQkxFJ31cXFwiPlJ1bm5hYmxlJm5ic3A7PHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGVmYXVsdFxcXCI+e3t0aHJlYWREdW1wUnVubmFibGV9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1pbmZvXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnV0FJVElORyd9XFxcIj5XYWl0aW5nJm5ic3A7PHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGVmYXVsdFxcXCI+e3t0aHJlYWREdW1wV2FpdGluZ319PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXdhcm5pbmdcXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7dGhyZWFkU3RhdGU6ICdUSU1FRF9XQUlUSU5HJ31cXFwiPlRpbWVkIFdhaXRpbmcmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBUaW1lZFdhaXRpbmd9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1kYW5nZXJcXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7dGhyZWFkU3RhdGU6ICdCTE9DS0VEJ31cXFwiPkJsb2NrZWQmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBCbG9ja2VkfX08L3NwYW4+PC9zcGFuPiZuYnNwOyA8ZGl2IGNsYXNzPVxcXCJtdC0yXFxcIj4mbmJzcDs8L2Rpdj4gRmlsdGVyIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidGhyZWFkRHVtcEZpbHRlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+IDxkaXYgY2xhc3M9XFxcInBhZFxcXCIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgdGhyZWFkRHVtcCB8IHB1cmVGaWx0ZXI6dGhyZWFkRHVtcEZpbHRlcjonbG9ja05hbWUnIHwga2V5c1xcXCI+IDxoNj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIiBbbmdDbGFzc109XFxcImdldEJhZGdlQ2xhc3MoZW50cnkudmFsdWUudGhyZWFkU3RhdGUpXFxcIj57e2VudHJ5LnZhbHVlLnRocmVhZFN0YXRlfX08L3NwYW4+Jm5ic3A7e3tlbnRyeS52YWx1ZS50aHJlYWROYW1lfX0gKElEIHt7ZW50cnkudmFsdWUudGhyZWFkSWR9fSkgPGEgKGNsaWNrKT1cXFwiZW50cnkuc2hvdyA9ICFlbnRyeS5zaG93XFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIj4gPHNwYW4gW2hpZGRlbl09XFxcImVudHJ5LnNob3dcXFwiPlNob3cgU3RhY2tUcmFjZTwvc3Bhbj4gPHNwYW4gW2hpZGRlbl09XFxcIiFlbnRyeS5zaG93XFxcIj5IaWRlIFN0YWNrVHJhY2U8L3NwYW4+IDwvYT4gPC9oNj4gPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgW2hpZGRlbl09XFxcIiFlbnRyeS5zaG93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+IDxkaXYgKm5nRm9yPVxcXCJsZXQgc3Qgb2YgZW50cnkudmFsdWUuc3RhY2tUcmFjZSB8IGtleXNcXFwiIGNsYXNzPVxcXCJicmVha1xcXCI+IDxzYW1wPnt7c3QudmFsdWUuY2xhc3NOYW1lfX0ue3tzdC52YWx1ZS5tZXRob2ROYW1lfX0oPGNvZGU+e3tzdC52YWx1ZS5maWxlTmFtZX19Ont7c3QudmFsdWUubGluZU51bWJlcn19PC9jb2RlPik8L3NhbXA+IDxzcGFuIGNsYXNzPVxcXCJtdC0xXFxcIj48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc20gdGFibGUtcmVzcG9uc2l2ZVxcXCI+IDx0aGVhZD4gPHRyPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkJsb2NrZWQgVGltZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+QmxvY2tlZCBDb3VudDwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+V2FpdGVkIFRpbWU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPldhaXRlZCBDb3VudDwvdGg+IDx0aD5Mb2NrIE5hbWU8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0cj4gPHRkPnt7ZW50cnkudmFsdWUuYmxvY2tlZFRpbWV9fTwvdGQ+IDx0ZD57e2VudHJ5LnZhbHVlLmJsb2NrZWRDb3VudH19PC90ZD4gPHRkPnt7ZW50cnkudmFsdWUud2FpdGVkVGltZX19PC90ZD4gPHRkPnt7ZW50cnkudmFsdWUud2FpdGVkQ291bnR9fTwvdGQ+IDx0ZD48Y29kZT57e2VudHJ5LnZhbHVlLmxvY2tOYW1lfX08L2NvZGU+PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IHB1bGwtbGVmdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPkRvbmU8L2J1dHRvbj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLW1ldHJpY3MtbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICB0aHJlYWREdW1wRmlsdGVyOiBhbnk7XHJcbiAgICB0aHJlYWREdW1wOiBhbnk7XHJcbiAgICB0aHJlYWREdW1wQWxsID0gMDtcclxuICAgIHRocmVhZER1bXBCbG9ja2VkID0gMDtcclxuICAgIHRocmVhZER1bXBSdW5uYWJsZSA9IDA7XHJcbiAgICB0aHJlYWREdW1wVGltZWRXYWl0aW5nID0gMDtcclxuICAgIHRocmVhZER1bXBXYWl0aW5nID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudGhyZWFkRHVtcC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdSVU5OQUJMRScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFJ1bm5hYmxlICs9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdXQUlUSU5HJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wV2FpdGluZyArPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnVElNRURfV0FJVElORycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFRpbWVkV2FpdGluZyArPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnQkxPQ0tFRCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcEJsb2NrZWQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRocmVhZER1bXBBbGwgPSB0aGlzLnRocmVhZER1bXBSdW5uYWJsZSArIHRoaXMudGhyZWFkRHVtcFdhaXRpbmcgK1xyXG4gICAgICAgICAgICB0aGlzLnRocmVhZER1bXBUaW1lZFdhaXRpbmcgKyB0aGlzLnRocmVhZER1bXBCbG9ja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJhZGdlQ2xhc3ModGhyZWFkU3RhdGUpIHtcclxuICAgICAgICBpZiAodGhyZWFkU3RhdGUgPT09ICdSVU5OQUJMRScpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1zdWNjZXNzJztcclxuICAgICAgICB9IGVsc2UgaWYgKHRocmVhZFN0YXRlID09PSAnV0FJVElORycpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1pbmZvJztcclxuICAgICAgICB9IGVsc2UgaWYgKHRocmVhZFN0YXRlID09PSAnVElNRURfV0FJVElORycpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS13YXJuaW5nJztcclxuICAgICAgICB9IGVsc2UgaWYgKHRocmVhZFN0YXRlID09PSAnQkxPQ0tFRCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1kYW5nZXInO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGgyPkFwcGxpY2F0aW9uIE1ldHJpY3M8L2gyPiA8amhpLXJvdXRlLXNlbGVjdG9yPjwvamhpLXJvdXRlLXNlbGVjdG9yPiA8aDM+SlZNIE1ldHJpY3M8L2gzPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzICYmIG1ldHJpY3MuZ2F1Z2VzXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPiA8Yj5NZW1vcnk8L2I+IDxwPjxzcGFuPlRvdGFsIE1lbW9yeTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NIC8ge3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC5tYXgnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgdHlwZT1cXFwic3VjY2Vzc1xcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLm1heCddLnZhbHVlXFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC51c2VkJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwubWF4J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuPkhlYXAgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLnVzZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSAvIHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAubWF4J10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAudXNlZCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4+Tm9uLUhlYXAgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0gLyB7e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLmNvbW1pdHRlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NKTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAuY29tbWl0dGVkJ10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLnVzZWQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC5jb21taXR0ZWQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXNcXFwiPiA8Yj5UaHJlYWRzPC9iPiAoVG90YWw6IHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWV9fSkgPGEgY2xhc3M9XFxcImhhbmRcXFwiIChjbGljayk9XFxcInJlZnJlc2hUaHJlYWREdW1wRGF0YSgpXFxcIiBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjdGhyZWFkRHVtcFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9pPjwvYT4gPHA+PHNwYW4+UnVubmFibGU8L3NwYW4+IHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnJ1bm5hYmxlLmNvdW50J10udmFsdWV9fTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMucnVubmFibGUuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ydW5uYWJsZS5jb3VudCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuPlRpbWVkIFdhaXRpbmc8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy50aW1lZF93YWl0aW5nLmNvdW50J10udmFsdWV9fSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnRpbWVkX3dhaXRpbmcuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcIndhcm5pbmdcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy50aW1lZF93YWl0aW5nLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4+V2FpdGluZzwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZX19KTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMud2FpdGluZy5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwid2FybmluZ1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8cD48c3Bhbj5CbG9ja2VkPC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuYmxvY2tlZC5jb3VudCddLnZhbHVlfX0pPC9wPiA8bmdiLXByb2dyZXNzYmFyIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ibG9ja2VkLmNvdW50J10udmFsdWVcXFwiIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuYmxvY2tlZC5jb3VudCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+IDxiPkdhcmJhZ2UgY29sbGVjdGlvbnM8L2I+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1NYXJrU3dlZXAuY291bnQnXVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5NYXJrIFN3ZWVwIGNvdW50PC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIHRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLU1hcmtTd2VlcC5jb3VudCddLnZhbHVlfX08L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1NYXJrU3dlZXAudGltZSddXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPk1hcmsgU3dlZXAgdGltZTwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1NYXJrU3dlZXAudGltZSddLnZhbHVlfX1tczwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLmNvdW50J11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCI+U2NhdmVuZ2UgY291bnQ8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtU2NhdmVuZ2UuY291bnQnXS52YWx1ZX19PC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtU2NhdmVuZ2UudGltZSddXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPlNjYXZlbmdlIHRpbWU8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtU2NhdmVuZ2UudGltZSddLnZhbHVlfX1tczwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIHdlbGwtbGdcXFwiICpuZ0lmPVxcXCJ1cGRhdGluZ01ldHJpY3MgJiYgIW1ldHJpY3NcXFwiPlVwZGF0aW5nLi4uPC9kaXY+IDxoMz5IVFRQIHJlcXVlc3RzIChldmVudHMgcGVyIHNlY29uZCk8L2gzPiA8cCAqbmdJZj1cXFwibWV0cmljcyAmJiBtZXRyaWNzLmNvdW50ZXJzXFxcIj4gPHNwYW4+QWN0aXZlIHJlcXVlc3RzPC9zcGFuPiA8Yj57e21ldHJpY3MuY291bnRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLmFjdGl2ZVJlcXVlc3RzJ10uY291bnQgfCBudW1iZXI6JzEuMC0wJ319PC9iPiAtIDxzcGFuPlRvdGFsIHJlcXVlc3RzPC9zcGFuPiA8Yj57e21ldHJpY3MudGltZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXF1ZXN0cyddLmNvdW50IHwgbnVtYmVyOicxLjAtMCd9fTwvYj4gPC9wPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIiAqbmdJZj1cXFwibWV0cmljcyAmJiBtZXRyaWNzLnRpbWVycyAmJiBtZXRyaWNzLm1ldGVyc1xcXCI+IDx0aGVhZD4gPHRyPiA8dGg+Q29kZTwvdGg+IDx0aD5Db3VudDwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+TWVhbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PHNwYW4+QXZlcmFnZTwvc3Bhbj4gKDEgbWluKTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PHNwYW4+QXZlcmFnZTwvc3Bhbj4gKDUgbWluKTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PHNwYW4+QXZlcmFnZTwvc3Bhbj4gKDE1IG1pbik8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0cj4gPHRkPk9LPC90ZD4gPHRkPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudFxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5jb3VudFxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLmNvdW50fX08L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm1lYW5fcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10ubTFfcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10ubTVfcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10ubTE1X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8L3RyPiA8dHI+IDx0ZD5Ob3QgRm91bmQ8L3RkPiA8dGQ+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MudGltZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXF1ZXN0cyddLmNvdW50XFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLmNvdW50XFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10uY291bnR9fTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10ubWVhbl9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tMV9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tNV9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tMTVfcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDwvdHI+IDx0cj4gPHRkPlNlcnZlciBlcnJvcjwvdGQ+IDx0ZD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnRcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10uY291bnRcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5jb3VudH19PC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5tZWFuX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm0xX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm01X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm0xNV9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxoMz5TZXJ2aWNlcyBzdGF0aXN0aWNzICh0aW1lIGluIG1pbGxpc2Vjb25kKTwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiICpuZ0lmPVxcXCJzZXJ2aWNlc1N0YXRzXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD5TZXJ2aWNlIG5hbWU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkNvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5NZWFuPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5NaW48L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnA1MDwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+cDc1PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5wOTU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnA5OTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+TWF4PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2Ygc2VydmljZXNTdGF0cyB8IGtleXNcXFwiPiA8dGQ+e3tlbnRyeS5rZXl9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5jb3VudH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1lYW4gKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5taW4gKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5wNTAgKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5wNzUgKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5wOTUgKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5wOTkgKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5tYXggKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8aDMgKm5nSWY9XFxcIm1ldHJpY3MgJiYgbWV0cmljcy5nYXVnZXMgJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXSAmJiBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddLnZhbHVlID4gMFxcXCI+RGF0YVNvdXJjZSBzdGF0aXN0aWNzICh0aW1lIGluIG1pbGxpc2Vjb25kKTwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlcyAmJiBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddICYmIG1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10udmFsdWUgPiAwXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD48c3Bhbj5Vc2FnZTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWV9fSAvIHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZX19KTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+Q291bnQ8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPk1lYW48L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPk1pbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+cDUwPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5wNzU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnA5NTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+cDk5PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5NYXg8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdJZj1cXFwibWV0cmljcy5oaXN0b2dyYW1zXFxcIj4gPHRkPiA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcyBwcm9ncmVzcy1zdHJpcGVkXFxcIj4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZVxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L2Rpdj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5jb3VudH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ubWVhbikgfCBudW1iZXI6JzEuMC0yJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ubWluKSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5wNTApIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLnA3NSkgfCBudW1iZXI6JzEuMC0yJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDk1KSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5wOTkpIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1heCkgfCBudW1iZXI6JzEuMC0yJ319PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpoaU1ldHJpY3NTZXJ2aWNlIH0gZnJvbSAnLi9tZXRyaWNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKaGlSb3V0ZXNTZXJ2aWNlLCBSb3V0ZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLW1ldHJpY3MnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL21ldHJpY3MuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSmhpTWV0cmljc01vbml0b3JpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbWV0cmljczogYW55ID0ge307XHJcbiAgICBjYWNoZXNTdGF0czogYW55ID0ge307XHJcbiAgICBzZXJ2aWNlc1N0YXRzOiBhbnkgPSB7fTtcclxuICAgIHVwZGF0aW5nTWV0cmljcyA9IHRydWU7XHJcbiAgICBKQ0FDSEVfS0VZOiBzdHJpbmc7XHJcblxyXG4gICAgYWN0aXZlUm91dGU6IFJvdXRlO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxyXG4gICAgICAgIHByaXZhdGUgbWV0cmljc1NlcnZpY2U6IEpoaU1ldHJpY3NTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVzU2VydmljZTogSmhpUm91dGVzU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5KQ0FDSEVfS0VZID0gJ2pjYWNoZS5zdGF0aXN0aWNzJztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVzU2VydmljZS5yb3V0ZUNoYW5nZWQkLnN1YnNjcmliZSgocm91dGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlBY3RpdmVSb3V0ZU1ldHJpY3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVzU2VydmljZS5yZWxvYWRSb3V0ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5QWN0aXZlUm91dGVNZXRyaWNzKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRpbmdNZXRyaWNzID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVSb3V0ZSAmJiB0aGlzLmFjdGl2ZVJvdXRlLnN0YXR1cyAhPT0gJ0RPV04nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWV0cmljc1NlcnZpY2UuZ2V0SW5zdGFuY2VNZXRyaWNzKHRoaXMuYWN0aXZlUm91dGUpLnN1YnNjcmliZSgobWV0cmljcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXRyaWNzID0gbWV0cmljcztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRpbmdNZXRyaWNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzU3RhdHMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVzU3RhdHMgPSB7fTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1ldHJpY3MudGltZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1ldHJpY3MudGltZXJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCd3ZWIucmVzdCcpICE9PSAtMSB8fCBrZXkuaW5kZXhPZignc2VydmljZScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzU3RhdHNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWV0cmljcy5nYXVnZXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignamNhY2hlLnN0YXRpc3RpY3MnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtZXRyaWNzLmdhdWdlc1trZXldLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZ2V0cyBvciBwdXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0ga2V5Lmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IGtleS5zdWJzdHIoMCwgaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCB0aGUgbmFtZSBvZiB0aGUgZG9tYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVzU3RhdHNbbmV3S2V5XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogdGhpcy5KQ0FDSEVfS0VZLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNTAzIHx8IGVycm9yLnN0YXR1cyA9PT0gNTAwIHx8IGVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNTAwIHx8IGVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVzU2VydmljZS5yb3V0ZURvd24odGhpcy5hY3RpdmVSb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlc1NlcnZpY2Uucm91dGVEb3duKHRoaXMuYWN0aXZlUm91dGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVGhyZWFkRHVtcERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzU2VydmljZS5pbnN0YW5jZVRocmVhZER1bXAodGhpcy5hY3RpdmVSb3V0ZSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50LCB7c2l6ZTogJ2xnJ30pO1xyXG4gICAgICAgICAgICBtb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS50aHJlYWREdW1wID0gZGF0YTtcclxuICAgICAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTGVmdCBibGFuayBpbnRlbnRpb25hbGx5LCBub3RoaW5nIHRvIGRvIGhlcmVcclxuICAgICAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTGVmdCBibGFuayBpbnRlbnRpb25hbGx5LCBub3RoaW5nIHRvIGRvIGhlcmVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyTmFOKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKGlzTmFOKGlucHV0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldHJpY3NSb3V0ZTogUm91dGUgPSB7XHJcbiAgICBwYXRoOiAnamhpLW1ldHJpY3MnLFxyXG4gICAgY29tcG9uZW50OiBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBwYWdlVGl0bGU6ICdBcHBsaWNhdGlvbiBNZXRyaWNzJ1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKaGlNZXRyaWNzU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIC8vIGdldCB0aGUgUmVnaXN0cnkncyBtZXRyaWNzXHJcbiAgICBnZXRNZXRyaWNzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvbWV0cmljcycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IHRoZSBpbnN0YW5jZSdzIG1ldHJpY3NcclxuICAgIGdldEluc3RhbmNlTWV0cmljcyhpbnN0YW5jZTogUm91dGUpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5wcmVmaXggJiYgaW5zdGFuY2UucHJlZml4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoKGluc3RhbmNlLnByZWZpeCArICcvbWFuYWdlbWVudC9tZXRyaWNzJykpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldHJpY3MoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJlYWREdW1wKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvZHVtcCcpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFuY2VUaHJlYWREdW1wKGluc3RhbmNlOiBSb3V0ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLnByZWZpeCAmJiBpbnN0YW5jZS5wcmVmaXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgoaW5zdGFuY2UucHJlZml4ICsgJy9tYW5hZ2VtZW50L2R1bXAnKSkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGhyZWFkRHVtcCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzIiwiLy8gRE8gTk9UIEVESVQgVEhJUyBGSUxFLCBFRElUIFRIRSBXRUJQQUNLIENPTU1PTiBDT05GSUcgSU5TVEVBRCwgV0hJQ0ggV0lMTCBNT0RJRlkgVEhJUyBGSUxFXHJcbiAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5sZXQgX1ZFUlNJT04gPSAnMC4wLjAnOyAvLyBUaGlzIHZhbHVlIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgd2VicGFja1xyXG5sZXQgX0RFQlVHX0lORk9fRU5BQkxFRCA9IHRydWU7IC8vIFRoaXMgdmFsdWUgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB3ZWJwYWNrXHJcbl9WRVJTSU9OID0gXCIzLjIuM1wiO1xyXG5fREVCVUdfSU5GT19FTkFCTEVEID0gdHJ1ZTtcclxuLyogdHNsaW50OmVuYWJsZSAqL1xyXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IF9WRVJTSU9OO1xyXG5leHBvcnQgY29uc3QgREVCVUdfSU5GT19FTkFCTEVEID0gX0RFQlVHX0lORk9fRU5BQkxFRDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/aWQ9YzBjdW04Y2p0bndnaW1mMHl1cXkzbm1pIS4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAuY29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7IFByb2RDb25maWcgfSBmcm9tICcuL2Jsb2Nrcy9jb25maWcvcHJvZC5jb25maWcnO1xyXG5pbXBvcnQgeyBKSGlwc3RlclJlZ2lzdHJ5QXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcclxuXHJcblByb2RDb25maWcoKTtcclxuXHJcbmlmIChtb2R1bGVbJ2hvdCddKSB7XHJcbiAgICBtb2R1bGVbJ2hvdCddLmFjY2VwdCgpO1xyXG59XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEpIaXBzdGVyUmVnaXN0cnlBcHBNb2R1bGUpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tYWluLnRzIiwiaW1wb3J0ICcuL3ZlbmRvci50cyc7XHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5nMldlYnN0b3JhZ2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XHJcblxyXG5pbXBvcnQgeyBKSGlwc3RlclJlZ2lzdHJ5U2hhcmVkTW9kdWxlLCBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBKSGlwc3RlclJlZ2lzdHJ5SG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XHJcbmltcG9ydCB7IEpIaXBzdGVyUmVnaXN0cnlBZG1pbk1vZHVsZSB9IGZyb20gJy4vYWRtaW4vYWRtaW4ubW9kdWxlJztcclxuaW1wb3J0IHsgSkhpcHN0ZXJSZWdpc3RyeU1vZHVsZSB9IGZyb20gJy4vcmVnaXN0cnkvcmVnaXN0cnkubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IGN1c3RvbUh0dHBQcm92aWRlciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgSmhpTWFpbkNvbXBvbmVudCxcclxuICAgIExheW91dFJvdXRpbmdNb2R1bGUsXHJcbiAgICBOYXZiYXJDb21wb25lbnQsXHJcbiAgICBGb290ZXJDb21wb25lbnQsXHJcbiAgICBQcm9maWxlU2VydmljZSxcclxuICAgIFBhZ2VSaWJib25Db21wb25lbnQsXHJcbiAgICBFcnJvckNvbXBvbmVudFxyXG59IGZyb20gJy4vbGF5b3V0cyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgTGF5b3V0Um91dGluZ01vZHVsZSxcclxuICAgICAgICBOZzJXZWJzdG9yYWdlLmZvclJvb3QoeyBwcmVmaXg6ICdqaGknLCBzZXBhcmF0b3I6ICctJ30pLFxyXG4gICAgICAgIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgSkhpcHN0ZXJSZWdpc3RyeUhvbWVNb2R1bGUsXHJcbiAgICAgICAgSkhpcHN0ZXJSZWdpc3RyeUFkbWluTW9kdWxlLFxyXG4gICAgICAgIEpIaXBzdGVyUmVnaXN0cnlNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBKaGlNYWluQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgICAgICBFcnJvckNvbXBvbmVudCxcclxuICAgICAgICBQYWdlUmliYm9uQ29tcG9uZW50LFxyXG4gICAgICAgIEZvb3RlckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFByb2ZpbGVTZXJ2aWNlLFxyXG4gICAgICAgIGN1c3RvbUh0dHBQcm92aWRlcigpLFxyXG4gICAgICAgIFBhZ2luYXRpb25Db25maWcsXHJcbiAgICAgICAgVXNlclJvdXRlQWNjZXNzU2VydmljZVxyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogWyBKaGlNYWluQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEpIaXBzdGVyUmVnaXN0cnlBcHBNb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZiYXJSb3V0ZTogUm91dGUgPSB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgb3V0bGV0OiAnbmF2YmFyJ1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5yb3V0ZS50cyIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERFQlVHX0lORk9fRU5BQkxFRCB9IGZyb20gJy4uLy4uL2FwcC5jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb2RDb25maWcoKSB7XHJcbiAgICAvLyBkaXNhYmxlIGRlYnVnIGRhdGEgb24gcHJvZCBwcm9maWxlIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcclxuICAgIGlmICghREVCVUdfSU5GT19FTkFCTEVEKSB7XHJcbiAgICAgICAgZW5hYmxlUHJvZE1vZGUoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvcHJvZC5jb25maWcudHMiLCJpbXBvcnQgeyBJVEVNU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiUGFnaW5hdGlvbkNvbmZpZ30gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbmZpZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogTmdiUGFnaW5hdGlvbkNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5ib3VuZGFyeUxpbmtzID0gdHJ1ZTtcclxuICAgICAgICBjb25maWcubWF4U2l6ZSA9IDU7XHJcbiAgICAgICAgY29uZmlnLnBhZ2VTaXplID0gSVRFTVNfUEVSX1BBR0U7XHJcbiAgICAgICAgY29uZmlnLnNpemUgPSAnc20nO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcudHMiLCJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICduZy1qaGlwc3Rlcic7XHJcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQXJncywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoRXhwaXJlZEludGVyY2VwdG9yIGV4dGVuZHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEludGVyY2VwdChvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogUmVxdWVzdE9wdGlvbnNBcmdzIHtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICByZXNwb25zZUludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKChlcnJvciwgc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChMb2dpblNlcnZpY2UpO1xyXG4gICAgICAgICAgICAgICAgbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLWV4cGlyZWQuaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ25nLWpoaXBzdGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3IgZXh0ZW5kcyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sb2NhbFN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKSB8fCB0aGlzLnNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XHJcbiAgICAgICAgaWYgKCEhdG9rZW4pIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzcG9uc2VJbnRlcmNlcHQob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7IC8vIGJ5IHBhc3NcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC5pbnRlcmNlcHRvci50cyIsImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xyXG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlckludGVyY2VwdG9yIGV4dGVuZHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiA8T2JzZXJ2YWJsZTxSZXNwb25zZT4+IG9ic2VydmFibGUuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGVycm9yLnN0YXR1cyA9PT0gNDAxICYmIChlcnJvci50ZXh0KCkgPT09ICcnIHx8XHJcbiAgICAgICAgICAgICAgICAoZXJyb3IuanNvbigpLnBhdGggJiYgZXJyb3IuanNvbigpLnBhdGguaW5kZXhPZignL2FwaS9hY2NvdW50JykgPT09IDAgKSkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoIHtuYW1lOiAnakhpcHN0ZXJSZWdpc3RyeUFwcC5odHRwRXJyb3InLCBjb250ZW50OiBlcnJvcn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9lcnJvcmhhbmRsZXIuaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIEludGVyY2VwdGFibGVIdHRwIH0gZnJvbSAnbmctamhpcHN0ZXInO1xyXG5cclxuaW1wb3J0IHsgQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9hdXRoLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBBdXRoRXhwaXJlZEludGVyY2VwdG9yIH0gZnJvbSAnLi9hdXRoLWV4cGlyZWQuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciB9IGZyb20gJy4vZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5pbnRlcmNlcHRvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0YWJsZUZhY3RvcnkoXHJcbiAgICBiYWNrZW5kOiBYSFJCYWNrZW5kLFxyXG4gICAgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLFxyXG4gICAgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZSxcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXHJcbikge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRlcmNlcHRhYmxlSHR0cChcclxuICAgICAgICBiYWNrZW5kLFxyXG4gICAgICAgIGRlZmF1bHRPcHRpb25zLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgbmV3IEF1dGhJbnRlcmNlcHRvcihsb2NhbFN0b3JhZ2UsIHNlc3Npb25TdG9yYWdlKSxcclxuICAgICAgICAgICAgbmV3IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IoaW5qZWN0b3IpLFxyXG4gICAgICAgICAgICAvLyBPdGhlciBpbnRlcmNlcHRvcnMgY2FuIGJlIGFkZGVkIGhlcmVcclxuICAgICAgICAgICAgbmV3IEVycm9ySGFuZGxlckludGVyY2VwdG9yKGV2ZW50TWFuYWdlciksXHJcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb25JbnRlcmNlcHRvcigpXHJcbiAgICAgICAgXVxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21IdHRwUHJvdmlkZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3ZpZGU6IEh0dHAsXHJcbiAgICAgICAgdXNlRmFjdG9yeTogaW50ZXJjZXB0YWJsZUZhY3RvcnksXHJcbiAgICAgICAgZGVwczogW1xyXG4gICAgICAgICAgICBYSFJCYWNrZW5kLFxyXG4gICAgICAgICAgICBSZXF1ZXN0T3B0aW9ucyxcclxuICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgICAgICAgICAgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICBJbmplY3RvcixcclxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvaHR0cC5wcm92aWRlci50cyIsImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ25nLWpoaXBzdGVyJztcclxuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25JbnRlcmNlcHRvciBleHRlbmRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiA8T2JzZXJ2YWJsZTxSZXNwb25zZT4+IG9ic2VydmFibGUuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20oZXJyb3IuaGVhZGVycy5faGVhZGVycyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1hbGVydCcpIHx8IGFycltpXVswXS5lbmRzV2l0aCgnYXBwLXBhcmFtcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGFycltpXVswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGVhZGVycy5zb3J0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0S2V5ID0gaGVhZGVycy5sZW5ndGggPj0gMSA/IGVycm9yLmhlYWRlcnMuZ2V0KGhlYWRlcnNbMF0pIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbGVydEtleSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFsZXJ0U2VydmljZS5zdWNjZXNzKGFsZXJ0S2V5LCB7IHBhcmFtOiByZXNwb25zZS5oZWFkZXJzKGhlYWRlcnNbMV0pfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL25vdGlmaWNhdGlvbi5pbnRlcmNlcHRvci50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXVyZWthU3RhdHVzU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBmaW5kQWxsKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9ldXJla2Evc3RhdHVzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvZXVyZWthLnN0YXR1cy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5KSGlwc3RlciBSZWdpc3RyeSA8c21hbGw+e3t2ZXJzaW9ufX08L3NtYWxsPjwvaDE+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiB0ZXh0LWNlbnRlclxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8c3BhbiAqbmdJZj1cXFwiYWNjb3VudFxcXCI+IFlvdSBhcmUgbG9nZ2VkIGluIGFzIHVzZXIgXFxcInt7YWNjb3VudC5sb2dpbn19XFxcIi4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8c3Bhbj5Zb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkLjwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiPlBsZWFzZSBzaWduIGluPC9hPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTZcXFwiICpuZ0lmPVxcXCJzdGF0dXNcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtb3V0bGluZS1wcmltYXJ5XFxcIj4gPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXIgY2FyZC1wcmltYXJ5XFxcIj4gPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5TeXN0ZW0gU3RhdHVzPC9oMz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj4gPHRib2R5PiA8dHI+IDx0ZD5FbnZpcm9ubWVudDwvdGQ+IDx0ZD57e3N0YXR1cy5lbnZpcm9ubWVudH19PC90ZD4gPC90cj4gPHRyPiA8dGQ+RGF0YSBDZW50ZXI8L3RkPiA8dGQ+e3tzdGF0dXMuZGF0YWNlbnRlcn19PC90ZD4gPC90cj4gPHRyPiA8dGQ+Q3VycmVudCBUaW1lPC90ZD4gPHRkPnt7c3RhdHVzLmN1cnJlbnRUaW1lfX08L3RkPiA8L3RyPiA8dHI+IDx0ZD5TeXN0ZW0gVXB0aW1lPC90ZD4gPHRkPnt7c3RhdHVzLnVwVGltZX19PC90ZD4gPC90cj4gPHRyPiA8dGQ+QmVsb3cgUmVuZXcgVGhyZXNob2xkPC90ZD4gPHRkPnt7c3RhdHVzLmlzQmVsb3dSZW5ld1RocmVzaG9sZH19PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC02XFxcIiAqbmdJZj1cXFwiYXBwSW5zdGFuY2VzXFxcIj4gPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLW91dGxpbmUtcHJpbWFyeVxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyIGNhcmQtcHJpbWFyeVxcXCI+IDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+SW5zdGFuY2VzIFJlZ2lzdGVyZWQ8L2gzPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoPkFwcDwvdGg+IDx0aD5JbnN0YW5jZSBJRDwvdGg+IDx0aD5TdGF0dXM8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBhcHAgb2YgYXBwSW5zdGFuY2VzXFxcIj4gPHRkPnt7YXBwLm5hbWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwiYnJlYWtcXFwiPnt7YXBwLmluc3RhbmNlSWR9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBmb250LXdlaWdodC1ub3JtYWxcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QmFkZ2VDbGFzcyhhcHAuc3RhdHVzKVxcXCI+IHt7YXBwLnN0YXR1c319IDwvc3Bhbj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtNlxcXCIgKm5nSWY9XFxcInN0YXR1c1xcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1vdXRsaW5lLXByaW1hcnlcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlciBjYXJkLXByaW1hcnlcXFwiPiA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkdlbmVyYWwgSW5mbzwvaDM+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+IDx0Ym9keT4gPHRyPiA8dGQ+VG90YWwgQXZhaWxhYmxlIE1lbW9yeTwvdGQ+IDx0ZD57e3N0YXR1cy5nZW5lcmFsU3RhdHNbJ3RvdGFsLWF2YWlsLW1lbW9yeSddfX08L3RkPiA8L3RyPiA8dHI+IDx0ZD5DdXJyZW50IE1lbW9yeSBVc2FnZTwvdGQ+IDx0ZD57e3N0YXR1cy5nZW5lcmFsU3RhdHNbJ2N1cnJlbnQtbWVtb3J5LXVzYWdlJ119fTwvdGQ+IDwvdHI+IDx0cj4gPHRkPk51bWJlciBvZiBDUFU8L3RkPiA8dGQ+e3tzdGF0dXMuZ2VuZXJhbFN0YXRzWydudW0tb2YtY3B1cyddfX08L3RkPiA8L3RyPiA8dHI+IDx0ZD5JbnN0YW5jZSBJcCBBZGRyZXNzPC90ZD4gPHRkPnt7c3RhdHVzLmluc3RhbmNlSW5mby5pcEFkZHJ9fTwvdGQ+IDwvdHI+IDx0cj4gPHRkPkluc3RhbmNlIFN0YXR1czwvdGQ+IDx0ZD4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgZm9udC13ZWlnaHQtbm9ybWFsXFxcIiBbbmdDbGFzc109XFxcImdldEJhZGdlQ2xhc3Moc3RhdHVzLmluc3RhbmNlSW5mby5zdGF0dXMpXFxcIj4ge3tzdGF0dXMuaW5zdGFuY2VJbmZvLnN0YXR1c319IDwvc3Bhbj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC02XFxcIiAqbmdJZj1cXFwiaGVhbHRoRGF0YVxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1vdXRsaW5lLXByaW1hcnlcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlciBjYXJkLXByaW1hcnlcXFwiPiA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkhlYWx0aDwvaDM+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj4gPHRhYmxlIGlkPVxcXCJoZWFsdGhDaGVja1xcXCIgY2xhc3M9XFxcInRhYmxlXFxcIj4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgaGVhbHRoIG9mIGhlYWx0aERhdGFcXFwiPiA8dGQ+PHNwYW4gY2xhc3M9XFxcInRleHQtY2FwaXRhbGl6ZVxcXCI+e3tiYXNlTmFtZShoZWFsdGgubmFtZSl9fTwvc3Bhbj4ge3tzdWJTeXN0ZW1OYW1lKGhlYWx0aC5uYW1lKX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGZvbnQtd2VpZ2h0LW5vcm1hbFxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCYWRnZUNsYXNzKGhlYWx0aC5zdGF0dXMpXFxcIj4ge3toZWFsdGguc3RhdHVzfX0gPC9zcGFuPiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcclxuXHJcbmltcG9ydCB7IEFjY291bnQsIExvZ2luTW9kYWxTZXJ2aWNlLCBQcmluY2lwYWwgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBKaGlIZWFsdGhTZXJ2aWNlIH0gZnJvbSAnLi4vYWRtaW4nO1xyXG5pbXBvcnQgeyBKaGlBcHBsaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vcmVnaXN0cnknO1xyXG5cclxuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gJy4uL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBFdXJla2FTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi9ldXJla2Euc3RhdHVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5PQXV0aDJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL29hdXRoMi9sb2dpbi1vYXV0aDIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLWhvbWUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJ2hvbWUuc2NzcydcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYWNjb3VudDogQWNjb3VudDtcclxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcclxuICAgIHVwZGF0aW5nSGVhbHRoOiBib29sZWFuO1xyXG4gICAgaGVhbHRoRGF0YTogYW55O1xyXG4gICAgYXBwSW5zdGFuY2VzOiBhbnk7XHJcbiAgICBzdGF0dXM6IGFueTtcclxuICAgIHZlcnNpb246IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luT0F1dGgyU2VydmljZTogTG9naW5PQXV0aDJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgZXVyZWthU3RhdHVzU2VydmljZTogRXVyZWthU3RhdHVzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwbGljYXRpb25zU2VydmljZTogSmhpQXBwbGljYXRpb25zU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgaGVhbHRoU2VydmljZTogSmhpSGVhbHRoU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gVkVSU0lPTiA/ICd2JyArIFZFUlNJT04gOiAnJztcclxuICAgICAgICB0aGlzLmFwcEluc3RhbmNlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xyXG4gICAgICAgICAgICBpZiAoIWFjY291bnQgfHwgIXRoaXMuaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGVEYXNoYm9hcmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQXV0aGVudGljYXRpb25TdWNjZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLCAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRGFzaGJvYXJkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmluY2lwYWwuaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlSW5mbygpLnN1YnNjcmliZSgocHJvZmlsZUluZm8pID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2ZpbGVJbmZvLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ29hdXRoMicpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5PQXV0aDJTZXJ2aWNlLmxvZ2luKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwb3B1bGF0ZURhc2hib2FyZCgpIHtcclxuICAgICAgICB0aGlzLmV1cmVrYVN0YXR1c1NlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uc1NlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFwcCBvZiBkYXRhLmFwcGxpY2F0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbnN0IG9mIGFwcC5pbnN0YW5jZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0Lm5hbWUgPSBhcHAubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcEluc3RhbmNlcy5wdXNoKGluc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoU2VydmljZS5jaGVja0hlYWx0aCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhEYXRhID0gdGhpcy5oZWFsdGhTZXJ2aWNlLnRyYW5zZm9ybUhlYWx0aERhdGEocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gZmFsc2U7XHJcbiAgICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoRGF0YSA9IHRoaXMuaGVhbHRoU2VydmljZS50cmFuc2Zvcm1IZWFsdGhEYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFzZU5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRCYXNlTmFtZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJTeXN0ZW1OYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoU2VydmljZS5nZXRTdWJTeXN0ZW1OYW1lKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJhZGdlQ2xhc3Moc3RhdHVzU3RhdGUpIHtcclxuICAgICAgICBpZiAoc3RhdHVzU3RhdGUgPT09ICdVUCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1zdWNjZXNzJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLWRhbmdlcic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBKSGlwc3RlclJlZ2lzdHJ5U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcclxuXHJcbmltcG9ydCB7IEhPTUVfUk9VVEUsIEhvbWVDb21wb25lbnQgfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IEV1cmVrYVN0YXR1c1NlcnZpY2UgfSBmcm9tICcuL2V1cmVrYS5zdGF0dXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEpoaUxvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgSkhpcHN0ZXJSZWdpc3RyeVNoYXJlZE1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbIEhPTUVfUk9VVEUgXSwgeyB1c2VIYXNoOiB0cnVlIH0pXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBKaGlMb2dpbk1vZGFsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRXVyZWthU3RhdHVzU2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSkhpcHN0ZXJSZWdpc3RyeUhvbWVNb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLyc7XHJcblxyXG5leHBvcnQgY29uc3QgSE9NRV9ST1VURTogUm91dGUgPSB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhdXRob3JpdGllczogW10sXHJcbiAgICAgICAgcGFnZVRpdGxlOiAnSkhpcHN0ZXIgUmVnaXN0cnknXHJcbiAgICB9LFxyXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5yb3V0ZS50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ob21lLnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V1cmVrYS5zdGF0dXMuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaG9tZS5yb3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaG9tZS5tb2R1bGUnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiaGlwc3RlciBpbWctZmx1aWQgaW1nLXJvdW5kZWRcXFwiPjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj4gPGgxPkVycm9yIFBhZ2UhPC9oMT4gPGRpdiBbaGlkZGVuXT1cXFwiIWVycm9yTWVzc2FnZVxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+e3tlcnJvck1lc3NhZ2V9fSA8L2Rpdj4gPC9kaXY+IDxkaXYgW2hpZGRlbl09XFxcIiFlcnJvcjQwM1xcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+WW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhlIHBhZ2UuIDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdqaGktZXJyb3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBlcnJvcjQwMzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICApIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JSb3V0ZTogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdlcnJvcicsXHJcbiAgICAgICAgY29tcG9uZW50OiBFcnJvckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGF1dGhvcml0aWVzOiBbXSxcclxuICAgICAgICAgICAgcGFnZVRpdGxlOiAnRXJyb3IgcGFnZSEnXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ2FjY2Vzc2RlbmllZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBFcnJvckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGF1dGhvcml0aWVzOiBbXSxcclxuICAgICAgICAgICAgcGFnZVRpdGxlOiAnRXJyb3IgcGFnZSEnXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLnJvdXRlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+IDxwPkpIaXBzdGVyIFJlZ2lzdHJ5IC0gPGEgaHJlZj1cXFwiaHR0cDovL3d3dy5qaGlwc3Rlci50ZWNoL1xcXCI+amhpcHN0ZXIuZ2l0aHViLmlvPC9hPjwvcD4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLWZvb3RlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHt9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsImV4cG9ydCAqIGZyb20gJy4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9lcnJvci9lcnJvci5yb3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWFpbi9tYWluLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXQtcm91dGluZy5tb2R1bGUnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvaW5kZXgudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgbmF2YmFyUm91dGUgfSBmcm9tICcuLi9hcHAucm91dGUnO1xyXG5pbXBvcnQgeyBlcnJvclJvdXRlIH0gZnJvbSAnLi8nO1xyXG5cclxuY29uc3QgTEFZT1VUX1JPVVRFUyA9IFtcclxuICAgIG5hdmJhclJvdXRlLFxyXG4gICAgLi4uZXJyb3JSb3V0ZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChMQVlPVVRfUk9VVEVTLCB7IHVzZUhhc2g6IHRydWUgfSlcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRSb3V0aW5nTW9kdWxlIHt9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9sYXlvdXQtcm91dGluZy5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGpoaS1wYWdlLXJpYmJvbj48L2poaS1wYWdlLXJpYmJvbj4gPGRpdj4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwibmF2YmFyXFxcIj48L3JvdXRlci1vdXRsZXQ+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkIGpoLWNhcmRcXFwiPiA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+IDxyb3V0ZXItb3V0bGV0IG5hbWU9XFxcInBvcHVwXFxcIj48L3JvdXRlci1vdXRsZXQ+IDwvZGl2PiA8amhpLWZvb3Rlcj48L2poaS1mb290ZXI+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIE5hdmlnYXRpb25FbmQsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU3RhdGVTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLW1haW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKaGlNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlICRzdG9yYWdlU2VydmljZTogU3RhdGVTdG9yYWdlU2VydmljZSxcclxuICAgICkge31cclxuXHJcbiAgICBwcml2YXRlIGdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XHJcbiAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmcgPSAocm91dGVTbmFwc2hvdC5kYXRhICYmIHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10pID8gcm91dGVTbmFwc2hvdC5kYXRhWydwYWdlVGl0bGUnXSA6ICdqSGlwc3RlclJlZ2lzdHJ5QXBwJztcclxuICAgICAgICBpZiAocm91dGVTbmFwc2hvdC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5nZXRQYWdlVGl0bGUocm91dGVTbmFwc2hvdC5maXJzdENoaWxkKSB8fCB0aXRsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHRoaXMuZ2V0UGFnZVRpdGxlKHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBSb3V0ZXNSZWNvZ25pemVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge307XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzdGluYXRpb25EYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzdGluYXRpb25OYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkV2ZW50ID0gZXZlbnQuc3RhdGUucm9vdC5maXJzdENoaWxkLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uRXZlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IGRlc3RpbmF0aW9uRXZlbnQucGFyYW1zO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uRGF0YSA9IGRlc3RpbmF0aW9uRXZlbnQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk5hbWUgPSBkZXN0aW5hdGlvbkV2ZW50LnVybFswXS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbSA9IHtuYW1lOiB0aGlzLnJvdXRlci51cmwuc2xpY2UoMSl9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7bmFtZTogZGVzdGluYXRpb25OYW1lLCBkYXRhOiBkZXN0aW5hdGlvbkRhdGF9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmFnZVNlcnZpY2Uuc3RvcmVEZXN0aW5hdGlvblN0YXRlKGRlc3RpbmF0aW9uLCBwYXJhbXMsIGZyb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci10b2dnbGVhYmxlLW1kIGpoLW5hdmJhclxcXCI+IDxkaXYgY2xhc3M9XFxcImpoLWxvZ28tY29udGFpbmVyIGZsb2F0LWxlZnRcXFwiPiA8YSBjbGFzcz1cXFwiamgtbmF2YmFyLXRvZ2dsZXIgaGlkZGVuLWxnLXVwIGZsb2F0LXJpZ2h0XFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbmF2YmFyUmVzcG9uc2l2ZVxcXCIgYXJpYS1jb250cm9scz1cXFwibmF2YmFyUmVzcG9uc2l2ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtbGFiZWw9XFxcIlRvZ2dsZSBuYXZpZ2F0aW9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzXFxcIj48L2k+IDwvYT4gPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZCBsb2dvIGZsb2F0LWxlZnRcXFwiIHJvdXRlckxpbms9XFxcIi9cXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwibG9nby1pbWdcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm5hdmJhci10aXRsZVxcXCI+UmVnaXN0cnk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItdmVyc2lvblxcXCI+e3t2ZXJzaW9ufX08L3NwYW4+IDwvYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgaWQ9XFxcIm5hdmJhclJlc3BvbnNpdmVcXFwiIFtuZ2JDb2xsYXBzZV09XFxcImlzTmF2YmFyQ29sbGFwc2VkXFxcIiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdiBtbC1hdXRvXFxcIj4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCIvXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWhvbWVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkhvbWU8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIidST0xFX0FETUlOJ1xcXCIgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiZXVyZWthLW1lbnVcXFwiPiA8c3Bhbj4gPGkgY2xhc3M9XFxcImZhIGZhLXBvZGNhc3RcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkV1cmVrYTwvc3Bhbj4gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nYkRyb3Bkb3duTWVudT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiByb3V0ZXJMaW5rPVxcXCJhcHBsaWNhdGlvbnNcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtY2xvdWRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tc21cXFwiPkluc3RhbmNlczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIHJvdXRlckxpbms9XFxcImhpc3RvcnlcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtaG91cmdsYXNzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLXNtXFxcIj5IaXN0b3J5PC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgcm91dGVyTGluaz1cXFwicmVwbGljYXNcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtY2xvdWQtZG93bmxvYWRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tc21cXFwiPlJlcGxpY2FzPC9zcGFuPiA8L2E+IDwvbGk+IDwvdWw+IDwvbGk+IDxsaSAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCInUk9MRV9BRE1JTidcXFwiIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImNvbmZpZ3VyYXRpb24tbWVudVxcXCI+IDxzcGFuPiA8aSBjbGFzcz1cXFwiZmEgZmEtY29nc1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+Q29uZmlndXJhdGlvbjwvc3Bhbj4gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nYkRyb3Bkb3duTWVudT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiByb3V0ZXJMaW5rPVxcXCJjb25maWdcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtbGVhZlxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1zbVxcXCI+Q2xvdWQgY29uZmlnPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgcm91dGVyTGluaz1cXFwiZW5jcnlwdGlvblxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1rZXlcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tc21cXFwiPkVuY3J5cHRpb248L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiByb3V0ZXJMaW5rPVxcXCJzc2hcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtbG9ja1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1zbVxcXCI+U1NIPC9zcGFuPiA8L2E+IDwvbGk+IDwvdWw+IDwvbGk+IDxsaSAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCInUk9MRV9BRE1JTidcXFwiIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImFkbWluLW1lbnVcXFwiPiA8c3Bhbj4gPGkgY2xhc3M9XFxcImZhIGZhLXVzZXItcGx1c1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+QWRtaW5pc3RyYXRpb248L3NwYW4+IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPiA8L3NwYW4+IDwvYT4gPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZ2JEcm9wZG93bk1lbnU+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImpoaS1tZXRyaWNzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtdGFjaG9tZXRlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+TWV0cmljczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJqaGktaGVhbHRoXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtaGVhcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkhlYWx0aDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJqaGktY29uZmlndXJhdGlvblxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWxpc3RcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkNvbmZpZ3VyYXRpb248L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwibG9nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWZpbGUtdGV4dC1vXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5Mb2dzPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdJZj1cXFwic3dhZ2dlckVuYWJsZWRcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiZG9jc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWJvb2tcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkFQSTwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJsb2dnZXJzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtdGFza3NcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkxvZ2dlcnM8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCIgaWQ9XFxcImxvZ291dFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1zaWduLW91dFxcXCI+PC9zcGFuPiA8L2E+IDwvbGk+IDwvdWw+IDwvZGl2PiA8L25hdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9wcm9maWxlcy9wcm9maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcmluY2lwYWwsIExvZ2luTW9kYWxTZXJ2aWNlLCBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xyXG5cclxuaW1wb3J0IHsgVkVSU0lPTiwgREVCVUdfSU5GT19FTkFCTEVEIH0gZnJvbSAnLi4vLi4vYXBwLmNvbnN0YW50cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLW5hdmJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogW1xyXG4gICAgICAgICduYXZiYXIuc2NzcydcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgaW5Qcm9kdWN0aW9uOiBib29sZWFuO1xyXG4gICAgaXNOYXZiYXJDb2xsYXBzZWQ6IGJvb2xlYW47XHJcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xyXG4gICAgc3dhZ2dlckVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XHJcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxyXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gVkVSU0lPTiA/ICd2JyArIFZFUlNJT04gOiAnJztcclxuICAgICAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldFByb2ZpbGVJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckF1dGhlbnRpY2F0aW9uU3VjY2VzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQXV0aGVudGljYXRpb25TdWNjZXNzKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnYXV0aGVudGljYXRpb25TdWNjZXNzJywgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQcm9maWxlSW5mbygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlTmF2YmFyKCkge1xyXG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmluY2lwYWwuaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlTmF2YmFyKCk7XHJcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTmF2YmFyKCkge1xyXG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSAhdGhpcy5pc05hdmJhckNvbGxhcHNlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZVVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSA/IHRoaXMucHJpbmNpcGFsLmdldEltYWdlVXJsKCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2ZpbGVJbmZvKCkge1xyXG4gICAgICAgIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZUluZm8oKS5zdWJzY3JpYmUoKHByb2ZpbGVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5Qcm9kdWN0aW9uID0gcHJvZmlsZUluZm8uaW5Qcm9kdWN0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnN3YWdnZXJFbmFibGVkID0gcHJvZmlsZUluZm8uc3dhZ2dlckVuYWJsZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25hdmJhci5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLXBhZ2UtcmliYm9uJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJpYmJvblwiICpuZ0lmPVwicmliYm9uRW52XCI+PGEgaHJlZj1cIlwiPnt7cmliYm9uRW52fX08L2E+PC9kaXY+YCxcclxuICAgIHN0eWxlVXJsczogW1xyXG4gICAgICAgICdwYWdlLXJpYmJvbi5zY3NzJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZVJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJvZmlsZUluZm86IFByb2ZpbGVJbmZvO1xyXG4gICAgcmliYm9uRW52OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlSW5mbygpLnN1YnNjcmliZSgocHJvZmlsZUluZm8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5mbyA9IHByb2ZpbGVJbmZvO1xyXG4gICAgICAgICAgICB0aGlzLnJpYmJvbkVudiA9IHByb2ZpbGVJbmZvLnJpYmJvbkVudjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY29tcG9uZW50LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3BhZ2UtcmliYm9uLnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFByb2ZpbGVJbmZvIHtcclxuICAgIGFjdGl2ZVByb2ZpbGVzOiBzdHJpbmdbXTtcclxuICAgIHJpYmJvbkVudjogc3RyaW5nO1xyXG4gICAgaW5Qcm9kdWN0aW9uOiBib29sZWFuO1xyXG4gICAgc3dhZ2dlckVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuYXRpdmVTZWFyY2hMb2NhdGlvbj86IHN0cmluZztcclxuICAgIGdpdFVyaT86IHN0cmluZztcclxuICAgIGdpdFNlYXJjaExvY2F0aW9uPzogc3RyaW5nO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wcm9maWxlLWluZm8ubW9kZWwudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVJbmZvIH0gZnJvbSAnLi9wcm9maWxlLWluZm8ubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgcHJvZmlsZUluZm9VcmwgPSAnYXBpL3Byb2ZpbGUtaW5mbyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBnZXRQcm9maWxlSW5mbygpOiBPYnNlcnZhYmxlPFByb2ZpbGVJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5wcm9maWxlSW5mb1VybClcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwaSA9IG5ldyBQcm9maWxlSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgcGkuYWN0aXZlUHJvZmlsZXMgPSBkYXRhLmFjdGl2ZVByb2ZpbGVzO1xyXG4gICAgICAgICAgICAgICAgcGkucmliYm9uRW52ID0gZGF0YS5yaWJib25FbnY7XHJcbiAgICAgICAgICAgICAgICBwaS5uYXRpdmVTZWFyY2hMb2NhdGlvbiA9IGRhdGEubmF0aXZlU2VhcmNoTG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICBwaS5naXRTZWFyY2hMb2NhdGlvbiA9IGRhdGEuZ2l0U2VhcmNoTG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICBwaS5pblByb2R1Y3Rpb24gPSBkYXRhLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ3Byb2QnKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICBwaS5zd2FnZ2VyRW5hYmxlZCA9IGRhdGEuYWN0aXZlUHJvZmlsZXMuaW5kZXhPZignc3dhZ2dlcicpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwaTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJoZWFkXFxcIj4gPGgyIGNsYXNzPVxcXCJkLWlubGluZS1ibG9ja1xcXCI+QXBwbGljYXRpb24gSW5zdGFuY2VzPC9oMj4gPGpoaS1yZWZyZXNoLXNlbGVjdG9yIGNsYXNzPVxcXCJmbG9hdC1yaWdodCByZWZyZXNoLWxlZnQtc2lkZVxcXCI+PC9qaGktcmVmcmVzaC1zZWxlY3Rvcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFwcHMgY29sLW1kLTVcXFwiICpuZ0lmPVxcXCJkYXRhXFxcIj4gPHVsIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj4gPGxpIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0ge3thcHAuYWN0aXZlfX1cXFwiICpuZ0Zvcj1cXFwibGV0IGFwcCBvZiBkYXRhLmFwcGxpY2F0aW9ucyB8IG9yZGVyQnk6bmFtZVxcXCIgKGNsaWNrKT1cXFwic2hvdyhhcHAubmFtZSlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYWxlcnRcXFwiICpuZ0lmPVxcXCIoYXBwLmluc3RhbmNlcyB8IGZpbHRlcjp7c3RhdHVzOidVUCd9KS5sZW5ndGggPCBhcHAuaW5zdGFuY2VzLmxlbmd0aFxcXCI+Jm5ic3A7PC9zcGFuPiB7e2FwcC5uYW1lfX0gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlLWluZm9cXFwiPnt7KGFwcC5pbnN0YW5jZXMgfCBmaWx0ZXI6e3N0YXR1czonVVAnfSkubGVuZ3RofX0gLyB7e2FwcC5pbnN0YW5jZXMubGVuZ3RofX08L3NwYW4+IDwvbGk+IDwvdWw+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJkYXRhXFxcIj4gPGRpdiBpZD1cXFwiaW5zdGFuY2VzXFxcIiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj4gPGgzPkluc3RhbmNlczwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtcmVzcG9uc2l2ZSBkLXRhYmxlXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz1cXFwidy01MFxcXCI+SUQ8L3RoPiA8dGggY2xhc3M9XFxcInctNTBcXFwiPlN0YXR1czwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGluc3RhbmNlIG9mIGluc3RhbmNlc1xcXCI+IDx0ZD4gPGEgaHJlZj1cXFwie3tpbnN0YW5jZS5ob21lUGFnZVVybH19XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+e3tpbnN0YW5jZS5pbnN0YW5jZUlkfX08L2E+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlLXN1Y2Nlc3NcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QmFkZ2VDbGFzcyhpbnN0YW5jZS5zdGF0dXMpXFxcIj4ge3tpbnN0YW5jZS5zdGF0dXN9fSA8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmbG9hdC1yaWdodFxcXCIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgKGluc3RhbmNlLm1ldGFkYXRhIHwga2V5cyApXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWRlZmF1bHQgZm9udC13ZWlnaHQtbm9ybWFsXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtaW5mbyBmb250LXdlaWdodC1ub3JtYWxcXFwiPnt7ZW50cnkua2V5fX08L3NwYW4+IHt7ZW50cnkudmFsdWV9fSA8L3NwYW4+IDwvc3Bhbj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogdHNsaW50OmRpc2FibGU6bm8tYWNjZXNzLW1pc3NpbmctbWVtYmVyICovXHJcbi8vIFRPRE8gbGludCBkaXNhYmxlZCBhcyB0aGUgZmlsdGVyIHBpcGUgdXNlZCBpbiB0ZW1wbGF0ZSBzZWVtcyB0byB0cmlnZ2VyIHRoaXNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKaGlBcHBsaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9hcHBsaWNhdGlvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEpoaVJlZnJlc2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlZnJlc2gvcmVmcmVzaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2poaS1hcHBsaWNhdGlvbnMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAnYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSmhpQXBwbGljYXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgYXBwbGljYXRpb246IGFueTtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIGluc3RhbmNlczogYW55O1xyXG4gICAgYWN0aXZlSW5zdGFuY2U6IGFueTtcclxuXHJcbiAgICByZWZyZXNoUmVsb2FkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBhcHBsaWNhdGlvbnNTZXJ2aWNlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBhcHBsaWNhdGlvbnNTZXJ2aWNlOiBKaGlBcHBsaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVmcmVzaFNlcnZpY2U6IEpoaVJlZnJlc2hTZXJ2aWNlXHJcbiAgICApIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUmVsb2FkU3Vic2NyaXB0aW9uID0gdGhpcy5yZWZyZXNoU2VydmljZS5yZWZyZXNoUmVsb2FkJC5zdWJzY3JpYmUoKGVtcHR5KSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUmVsb2FkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbnNTZXJ2aWNlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uc1NlcnZpY2VTdWJzY3JpcHRpb24gPSB0aGlzLmFwcGxpY2F0aW9uc1NlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KHRoaXMuYXBwbGljYXRpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuYXBwbGljYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhkYXRhLmFwcGxpY2F0aW9uc1swXS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coYXBwKSB7XHJcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbiA9IGFwcDtcclxuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGRhdGFBcHAgb2YgdGhpcy5kYXRhLmFwcGxpY2F0aW9ucykge1xyXG4gICAgICAgICAgICBkYXRhQXBwLmFjdGl2ZSA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoZGF0YUFwcC5uYW1lID09PSB0aGlzLmFwcGxpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlcyA9IGRhdGFBcHAuaW5zdGFuY2VzO1xyXG4gICAgICAgICAgICAgICAgZGF0YUFwcC5hY3RpdmUgPSAnYWN0aXZlJztcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmFkZ2VDbGFzcyhzdGF0dXNTdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0dXNTdGF0ZSAmJiBzdGF0dXNTdGF0ZSA9PT0gJ1VQJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLXN1Y2Nlc3MnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2UtZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBKaGlBcHBsaWNhdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2FwcGxpY2F0aW9ucy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcGxpY2F0aW9uc1JvdXRlOiBSb3V0ZSA9IHtcclxuICAgIHBhdGg6ICdhcHBsaWNhdGlvbnMnLFxyXG4gICAgY29tcG9uZW50OiBKaGlBcHBsaWNhdGlvbnNDb21wb25lbnQsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZVRpdGxlOiAnQXBwbGljYXRpb25zJ1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpoaUFwcGxpY2F0aW9uc1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgZmluZEFsbCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdhcGkvZXVyZWthL2FwcGxpY2F0aW9ucycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwiaGVhZFxcXCI+IDxoMiBjbGFzcz1cXFwiZC1pbmxpbmUtYmxvY2tcXFwiPlNwcmluZyBDbG91ZCBDb25maWd1cmF0aW9uPC9oMj4gPGpoaS1yZWZyZXNoLXNlbGVjdG9yIGNsYXNzPVxcXCJmbG9hdC1yaWdodCByZWZyZXNoLWxlZnQtc2lkZVxcXCI+PC9qaGktcmVmcmVzaC1zZWxlY3Rvcj4gPC9kaXY+IDxmb3JtICNmb3JtPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInJlZnJlc2goKVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgZm9yPVxcXCJwcm9maWxlXFxcIj48c3Ryb25nPmFwcDwvc3Ryb25nPjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiYXBwbGljYXRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJhcHBsaWNhdGlvblxcXCIgbmFtZT1cXFwiYXBwbGljYXRpb25cXFwiIHJlcXVpcmVkPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBmb3I9XFxcInByb2ZpbGVcXFwiPjxzdHJvbmc+UHJvZmlsZTwvc3Ryb25nPjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicHJvZmlsZVxcXCIgWyhuZ01vZGVsKV09XFxcInByb2ZpbGVcXFwiIG5hbWU9XFxcInByb2ZpbGVcXFwiIHJlcXVpcmVkPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcIiFpc05hdGl2ZVxcXCI+IDxsYWJlbCBmb3I9XFxcImxhYmVsXFxcIj48c3Ryb25nPkdpdCBMYWJlbDogPC9zdHJvbmc+PC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJsYWJlbFxcXCIgbmFtZT1cXFwibGFiZWxcXFwiIFsobmdNb2RlbCldPVxcXCJsYWJlbFxcXCIgcmVxdWlyZWQ+IDwvZGl2PiA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZVxcXCI+IDwvZm9ybT4gPGRpdiAqbmdJZj1cXFwiY29uZmlnQXNZYW1sXFxcIj4gPGgzPkNvbmZpZ3VyYXRpb248L2gzPiA8bmdiLXRhYnNldCB0eXBlPVxcXCJ0YWJzXFxcIj4gPG5nYi10YWIgdGl0bGU9XFxcIllBTUxcXFwiIGlkPVxcXCJ5YW1sXFxcIj4gPHRlbXBsYXRlIG5nYlRhYkNvbnRlbnQ+IDxwcmUgY2xhc3M9XFxcImNvZGUtYmxvY2tcXFwiPnt7Y29uZmlnQXNZYW1sfX08L3ByZT4gPC90ZW1wbGF0ZT4gPC9uZ2ItdGFiPiA8bmdiLXRhYiB0aXRsZT1cXFwiUHJvcGVydGllc1xcXCIgaWQ9XFxcInByb3BlcnRpZXNcXFwiPiA8dGVtcGxhdGUgbmdiVGFiQ29udGVudD4gPHByZSBjbGFzcz1cXFwiY29kZS1ibG9ja1xcXCI+e3tjb25maWdBc1Byb3BlcnRpZXN9fTwvcHJlPiA8L3RlbXBsYXRlPiA8L25nYi10YWI+IDxuZ2ItdGFiIHRpdGxlPVxcXCJKU09OXFxcIiBpZD1cXFwianNvblxcXCI+IDx0ZW1wbGF0ZSBuZ2JUYWJDb250ZW50PiA8cHJlIGNsYXNzPVxcXCJjb2RlLWJsb2NrXFxcIj57e2NvbmZpZ0FzSnNvbn19PC9wcmU+IDwvdGVtcGxhdGU+IDwvbmdiLXRhYj4gPG5nYi10YWIgdGl0bGU9XFxcIlRhYmxlXFxcIiBpZD1cXFwidGFibGVcXFwiPiA8dGVtcGxhdGUgbmdiVGFiQ29udGVudD4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXJlc3BvbnNpdmUgZC10YWJsZVxcXCI+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IHByb3BlcnR5IG9mIGNvbmZpZ0FzS2V5VmFsdWVQYWlyc1xcXCI+IDx0ZD57eyBwcm9wZXJ0eS5rZXkgfX08L3RkPiA8dGQ+e3sgcHJvcGVydHkudmFsdWUgfX08L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L3RlbXBsYXRlPiA8L25nYi10YWI+IDwvbmdiLXRhYnNldD4gPC9kaXY+IDxoMyBjbGFzcz1cXFwiaGVhZCBib3R0b21cXFwiPkNvbmZpZ3VyYXRpb24gU291cmNlIEluZm9ybWF0aW9uPC9oMz4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD5UeXBlPC90aD4gPHRoICpuZ0lmPVxcXCIhaXNOYXRpdmVcXFwiPlJlcG9zaXRvcnkgVVJJPC90aD4gPHRoPkxvY2F0aW9uPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nSWY9XFxcImlzTmF0aXZlXFxcIj4gPHRkPk5hdGl2ZSAoTG9jYWwgRmlsZXN5c3RlbSk8L3RkPiA8dGQ+e3sgbmF0aXZlU2VhcmNoTG9jYXRpb24gfX08L3RkPiA8L3RyPiA8dHIgKm5nSWY9XFxcIiFpc05hdGl2ZVxcXCI+IDx0ZD5HaXQ8L3RkPiA8dGQ+e3sgZ2l0VXJpIH19PC90ZD4gPHRkPi97eyBnaXRTZWFyY2hMb2NhdGlvbiB9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvY29uZmlnL2NvbmZpZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2NvbmZpZy9jb25maWcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpoaUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEpoaUFwcGxpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBKaGlSZWZyZXNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWZyZXNoL3JlZnJlc2guc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdqaGktY29uZmlnJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb25maWcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKaGlDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBhcHBsaWNhdGlvbjogc3RyaW5nO1xyXG4gICAgcHJvZmlsZTogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGFjdGl2ZVJlZ2lzdHJ5UHJvZmlsZXM6IGFueTtcclxuICAgIGlzTmF0aXZlOiBib29sZWFuO1xyXG4gICAgbmF0aXZlU2VhcmNoTG9jYXRpb246IHN0cmluZztcclxuICAgIGdpdFVyaTogc3RyaW5nO1xyXG4gICAgZ2l0U2VhcmNoTG9jYXRpb246IHN0cmluZztcclxuICAgIGNvbmZpZ0FzWWFtbDogYW55O1xyXG4gICAgY29uZmlnQXNQcm9wZXJ0aWVzOiBhbnk7XHJcbiAgICBjb25maWdBc0pzb246IGFueTtcclxuICAgIGNvbmZpZ0FzS2V5VmFsdWVQYWlyczogYW55O1xyXG4gICAgYXBwbGljYXRpb25MaXN0OiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICAgIHJlZnJlc2hSZWxvYWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IEpoaUNvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwbGljYXRpb25zU2VydmljZTogSmhpQXBwbGljYXRpb25zU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVmcmVzaFNlcnZpY2U6IEpoaVJlZnJlc2hTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0gJ2FwcGxpY2F0aW9uJztcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSAncHJvZCc7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9ICdtYXN0ZXInO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUmVnaXN0cnlQcm9maWxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNOYXRpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25MaXN0ID0gWydhcHBsaWNhdGlvbiddO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubG9hZCgpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFJlbG9hZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlSW5mbygpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVSZWdpc3RyeVByb2ZpbGVzID0gcmVzcG9uc2UuYWN0aXZlUHJvZmlsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgPSB0aGlzLmFjdGl2ZVJlZ2lzdHJ5UHJvZmlsZXMuaW5jbHVkZXMoJ25hdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZVNlYXJjaExvY2F0aW9uID0gcmVzcG9uc2UubmF0aXZlU2VhcmNoTG9jYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuZ2l0VXJpID0gcmVzcG9uc2UuZ2l0VXJpO1xyXG4gICAgICAgICAgICB0aGlzLmdpdFNlYXJjaExvY2F0aW9uID0gcmVzcG9uc2UuZ2l0U2VhcmNoTG9jYXRpb247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVmcmVzaFJlbG9hZFN1YnNjcmlwdGlvbiA9IHRoaXMucmVmcmVzaFNlcnZpY2UucmVmcmVzaFJlbG9hZCQuc3Vic2NyaWJlKChlbXB0eSkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ0FzWWFtbCh0aGlzLmFwcGxpY2F0aW9uLCB0aGlzLnByb2ZpbGUsIHRoaXMubGFiZWwpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdBc1lhbWwgPSByZXNwb25zZTtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnQXNZYW1sID0gJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdBc1Byb3BlcnRpZXModGhpcy5hcHBsaWNhdGlvbiwgdGhpcy5wcm9maWxlLCB0aGlzLmxhYmVsKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdBc1Byb3BlcnRpZXMgPSByZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdBc1Byb3BlcnRpZXMuc3BsaXQoJ1xcbicpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZVNwbGl0ID0gcHJvcGVydHkuc3BsaXQoJzogJyk7XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZUFycmF5LnB1c2goe2tleToga2V5VmFsdWVTcGxpdFswXSwgdmFsdWU6IGtleVZhbHVlU3BsaXRbMV19KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnQXNLZXlWYWx1ZVBhaXJzID0ga2V5VmFsdWVBcnJheTtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnQXNQcm9wZXJ0aWVzID0gJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdBc0pzb24odGhpcy5hcHBsaWNhdGlvbiwgdGhpcy5wcm9maWxlLCB0aGlzLmxhYmVsKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnQXNKc29uID0gcmVzcG9uc2U7XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ0FzSnNvbiA9IHt9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uc1NlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFwcGxpY2F0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbkxpc3QgPSBbJ2FwcGxpY2F0aW9uJ107XHJcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGxpY2F0aW9ucy5mb3JFYWNoKChhcHBsaWNhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSBhcHBsaWNhdGlvbi5pbnN0YW5jZXNbMF0uaW5zdGFuY2VJZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXBwbGljYXRpb25OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZUlkLmluZGV4T2YoJzonKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lID0gYXBwbGljYXRpb24ubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uTmFtZSA9IGluc3RhbmNlSWQuc3Vic3RyKDAsIGluc3RhbmNlSWQuaW5kZXhPZignOicpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbkxpc3QucHVzaChhcHBsaWNhdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2NvbmZpZy9jb25maWcuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSmhpQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maWcuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWdSb3V0ZTogUm91dGUgPSB7XHJcbiAgICBwYXRoOiAnY29uZmlnJyxcclxuICAgIGNvbXBvbmVudDogSmhpQ29uZmlnQ29tcG9uZW50LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHBhZ2VUaXRsZTogJ0NvbmZpZ3VyYXRpb24nXHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvY29uZmlnL2NvbmZpZy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlnU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGdldENvbmZpZ0FzWWFtbChhcHBsaWNhdGlvbjogc3RyaW5nLCBwcm9maWxlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdjb25maWcvJyArIGxhYmVsICsgJy8nICsgYXBwbGljYXRpb24gKyAnLScgKyBwcm9maWxlICsgJy55bWwnKS5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmZpZ0FzUHJvcGVydGllcyhhcHBsaWNhdGlvbjogc3RyaW5nLCBwcm9maWxlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdjb25maWcvJyArIGxhYmVsICsgJy8nICsgYXBwbGljYXRpb24gKyAnLScgKyBwcm9maWxlICsgJy5wcm9wZXJ0aWVzJykubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25maWdBc0pzb24oYXBwbGljYXRpb246IHN0cmluZywgcHJvZmlsZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnY29uZmlnLycgKyBsYWJlbCArICcvJyArIGFwcGxpY2F0aW9uICsgJy0nICsgcHJvZmlsZSArICcuanNvbicpLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9jb25maWcvY29uZmlnLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwiaGVhZFxcXCI+IDxoMiBjbGFzcz1cXFwiZC1pbmxpbmUtYmxvY2tcXFwiPkVuY3J5cHQgYW5kIGRlY3J5cHQgcHJvcGVydGllczwvaDI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj4gPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+IDxuZ2ItdGFic2V0IHR5cGU9XFxcInRhYnNcXFwiIGNsYXNzPVxcXCJuYXYtZmlsbFxcXCI+IDxuZ2ItdGFiIHRpdGxlPVxcXCJFbmNyeXB0XFxcIiBpZD1cXFwiZW5jcnlwdFxcXCI+IDx0ZW1wbGF0ZSBuZ2JUYWJDb250ZW50PiA8Zm9ybT4gPHRleHRhcmVhIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbXktMVxcXCIgaWQ9XFxcInRleHRUb0VuY3J5cHRcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJ0ZXh0VG9FbmNyeXB0XFxcIiBuYW1lPVxcXCJlbmNyeXB0VGV4dFxcXCIgI25hbWU9XFxcIm5nTW9kZWxcXFwiPjwvdGV4dGFyZWE+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbZGlzYWJsZWRdPVxcXCJ0ZXh0VG9FbmNyeXB0ID09PSAnJ1xcXCIgKGNsaWNrKT1cXFwiZW5jcnlwdCgpXFxcIj5FbmNyeXB0PC9idXR0b24+IDwvZm9ybT4gPC90ZW1wbGF0ZT4gPC9uZ2ItdGFiPiA8bmdiLXRhYiB0aXRsZT1cXFwiRGVjcnlwdFxcXCIgaWQ9XFxcImRlY3J5cHRcXFwiPiA8dGVtcGxhdGUgbmdiVGFiQ29udGVudD4gPGZvcm0+IDx0ZXh0YXJlYSB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG15LTFcXFwiIGlkPVxcXCJlbmNyeXB0ZWRUZXh0XFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwiZW5jcnlwdGVkVGV4dFxcXCIgbmFtZT1cXFwiZGVjcnlwdFRleHRcXFwiICNuYW1lPVxcXCJuZ01vZGVsXFxcIj48L3RleHRhcmVhPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiZW5jcnlwdGVkVGV4dCA9PT0gJydcXFwiIChjbGljayk9XFxcImRlY3J5cHQoKVxcXCI+RGVjcnlwdDwvYnV0dG9uPiA8L2Zvcm0+IDwvdGVtcGxhdGU+IDwvbmdiLXRhYj4gPC9uZ2ItdGFic2V0PiA8ZGl2ICpuZ0lmPVxcXCJyZXN1bHRcXFwiPiA8aDM+UmVzdWx0OjwvaDM+IDxwcmUgY2xhc3M9XFxcImNvZGUtYmxvY2tcXFwiPnt7cmVzdWx0fX08L3ByZT4gPC9kaXY+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBwYWRcXFwiPiA8YSAoY2xpY2spPVxcXCJzaG93TW9yZSA9ICFzaG93TW9yZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+IDxzcGFuICpuZ0lmPVxcXCJzaG93TW9yZVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1jaXJjbGUtZG93blxcXCI+PC9zcGFuPiZuYnNwO3Nob3cgbW9yZSA8L3NwYW4+IDxzcGFuICpuZ0lmPVxcXCIhc2hvd01vcmVcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctY2lyY2xlLXVwXFxcIj48L3NwYW4+Jm5ic3A7c2hvdyBsZXNzIDwvc3Bhbj4gPC9hPiA8L2Rpdj4gPGRpdiBbbmdiQ29sbGFwc2VdPVxcXCJzaG93TW9yZVxcXCI+IDxoMz48c3BhbiBjbGFzcz1cXFwiZmEgZmEtaW5mby1jaXJjbGVcXFwiPjwvc3Bhbj4gVXNpbmcgRW5jcnlwdGlvbjwvaDM+IDxwPiBJbiBvcmRlciB0byBub3QgbGVhdmUgeW91ciBzZWNyZXRzIGluIHBsYWluIHRleHQgYXQgcmVzdCwgZW5jcnlwdCB0aGVtIHVzaW5nIHRoaXMgVUkuIFRoZW4gc3RvcmUgdGhlIGVuY3J5cHRlZCB2YWx1ZSBsaWtlIHRoaXM6IDwvcD4gPHByZSBjbGFzcz1cXFwiY29kZS1ibG9ja1xcXCI+XFxyXFxuc2FtcGxlOlxcclxcbiAgICBwcm9wZXJ0eTogJ3t7ICd7JyB9fWNpcGhlcnt7ICd9JyB9fUZLU0FKREZHWU9TOEY3R0xIQUtFUkdGSExTQUonXFxyXFxuICAgICAgICAgICAgICAgIDwvcHJlPiA8cCBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj4gPHN0cm9uZz5XYXJuaW5nPC9zdHJvbmc+OiBCZWZvcmUgYmVpbmcgYWJsZSB0byBlbmNyeXB0L2RlY3J5cHQgeW91ciBwcm9wZXJ0aWVzIHZhbHVlcywgeW91IHdpbGwgbmVlZCB0byBjb25maWd1cmUgYSBzdHJvbmcgZW5jcnlwdGlvbiBrZXkgaW4gdGhlIDxjb2RlPmVuY3J5cHQua2V5PC9jb2RlPiBwcm9wZXJ0eS4gPGJyPldoZW4gdXNpbmcgdGhlIEpIaXBzdGVyIFJlZ2lzdHJ5IGRvY2tlciBpbWFnZSwgeW91IGNhbiBzZXQgdGhpcyB3aXRoIHRoZSA8Y29kZT5FTkNSWVBUX0tFWTwvY29kZT4gZW52aXJvbm1lbnQgdmFyaWFibGUuIE5vdGUgdGhhdCB0aGlzIHByb3BlcnR5IG9ubHkgbmVlZHMgdG8gYmUgc2V0IGZvciB0aGUgSkhpcHN0ZXIgUmVnaXN0cnkgYXMgeW91ciBhcHBsaWNhdGlvbnMgd2lsbCByZXRyaWV2ZSB0aGUgZGVjcnlwdGVkIHZhbHVlcyBkaXJlY3RseSBmcm9tIHRoZSBjb25maWcgc2VydmVyLiA8L3A+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9lbmNyeXB0aW9uL2VuY3J5cHRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9lbmNyeXB0aW9uL2VuY3J5cHRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKaGlFbmNyeXB0aW9uU2VydmljZSB9IGZyb20gJy4vZW5jcnlwdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEpoaUFwcGxpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBKaGlSZWZyZXNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWZyZXNoL3JlZnJlc2guc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdqaGktZW5jcnlwdGlvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZW5jcnlwdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEpoaUVuY3J5cHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBzaG93TW9yZTogYm9vbGVhbjtcclxuICAgIHRleHRUb0VuY3J5cHQ6IHN0cmluZztcclxuICAgIGVuY3J5cHRlZFRleHQ6IHN0cmluZztcclxuICAgIHJlc3VsdDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW5jcnlwdGlvblNlcnZpY2U6IEpoaUVuY3J5cHRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50ZXh0VG9FbmNyeXB0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5lbmNyeXB0ZWRUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgIH1cclxuXHJcbiAgICBlbmNyeXB0KCkge1xyXG4gICAgICAgIHRoaXMuZW5jcnlwdGlvblNlcnZpY2UuZW5jcnlwdCh0aGlzLnRleHRUb0VuY3J5cHQpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgdGhpcy5lbmNyeXB0ZWRUZXh0ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY3J5cHQoKSB7XHJcbiAgICAgICAgdGhpcy5lbmNyeXB0aW9uU2VydmljZS5kZWNyeXB0KHRoaXMuZW5jcnlwdGVkVGV4dCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRUb0VuY3J5cHQgPSByZXNwb25zZTtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9lbmNyeXB0aW9uL2VuY3J5cHRpb24uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSmhpRW5jcnlwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZW5jcnlwdGlvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuY3J5cHRpb25Sb3V0ZTogUm91dGUgPSB7XHJcbiAgICBwYXRoOiAnZW5jcnlwdGlvbicsXHJcbiAgICBjb21wb25lbnQ6IEpoaUVuY3J5cHRpb25Db21wb25lbnQsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZVRpdGxlOiAnRW5jcnlwdGlvbidcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9lbmNyeXB0aW9uL2VuY3J5cHRpb24ucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpoaUVuY3J5cHRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgZW5jcnlwdCh0ZXh0VG9FbmNyeXB0OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnY29uZmlnL2VuY3J5cHQnLCB0ZXh0VG9FbmNyeXB0KS5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3tjaXBoZXJ9JyArIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNyeXB0KHRleHRUb0RlY3J5cHQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdjb25maWcvZGVjcnlwdCcsIHRleHRUb0RlY3J5cHQpLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9lbmNyeXB0aW9uL2VuY3J5cHRpb24uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJoZWFkXFxcIj4gPGgyIGNsYXNzPVxcXCJkLWlubGluZS1ibG9ja1xcXCI+SW5zdGFuY2VzIGhpc3Rvcnk8L2gyPiA8amhpLXJlZnJlc2gtc2VsZWN0b3IgY2xhc3M9XFxcImZsb2F0LXJpZ2h0IHJlZnJlc2gtbGVmdC1zaWRlXFxcIj48L2poaS1yZWZyZXNoLXNlbGVjdG9yPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+IDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPiA8bmdiLXRhYnNldCBhY3RpdmVJZD1cXFwicmVnaXN0ZXJlZFxcXCIgKHRhYkNoYW5nZSk9XFxcImJlZm9yZUNoYW5nZSgkZXZlbnQpXFxcIj4gPG5nYi10YWIgaWQ9XFxcInJlZ2lzdGVyZWRcXFwiIHRpdGxlPVxcXCJMYXN0IHJlZ2lzdGVyZWQgbGVhc2VzXFxcIj4gPHRlbXBsYXRlIG5nYlRhYkNvbnRlbnQ+PC90ZW1wbGF0ZT4gPC9uZ2ItdGFiPiA8bmdiLXRhYiBpZD1cXFwiY2FuY2VsZWRcXFwiIHRpdGxlPVxcXCJMYXN0IGNhbmNlbGVkIGxlYXNlc1xcXCI+IDx0ZW1wbGF0ZSBuZ2JUYWJDb250ZW50PjwvdGVtcGxhdGU+IDwvbmdiLXRhYj4gPC9uZ2ItdGFic2V0PiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD5UaW1lPC90aD4gPHRoPkluc3RhbmNlPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5ICpuZ0lmPVxcXCJpdGVtc1xcXCI+IDx0ciAqbmdGb3I9XFxcImxldCBpbnN0YW5jZSBvZiBpdGVtc1xcXCI+IDx0ZD4ge3tpbnN0YW5jZS5rZXkgfCBkYXRlOidtZWRpdW0nfX0gPC90ZD4gPHRkPiB7e2luc3RhbmNlLnZhbHVlfX0gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JUYWJDaGFuZ2VFdmVudCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgSmhpSGlzdG9yeVNlcnZpY2UgfSBmcm9tICcuL2hpc3Rvcnkuc2VydmljZSc7XHJcbmltcG9ydCB7IEpoaVJlZnJlc2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlZnJlc2gvcmVmcmVzaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2poaS1oaXN0b3J5JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9oaXN0b3J5LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSmhpSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGl0ZW1zOiBhbnk7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBhY3RpdmVLZXk6IGFueTtcclxuXHJcbiAgICByZWZyZXNoUmVsb2FkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBoaXN0b3J5U2VydmljZTogSmhpSGlzdG9yeVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWZyZXNoU2VydmljZTogSmhpUmVmcmVzaFNlcnZpY2VcclxuICAgICkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hSZWxvYWRTdWJzY3JpcHRpb24gPSB0aGlzLnJlZnJlc2hTZXJ2aWNlLnJlZnJlc2hSZWxvYWQkLnN1YnNjcmliZSgoZW1wdHkpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hSZWxvYWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeVNlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVLZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUodGhpcy5hY3RpdmVLZXkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZSgncmVnaXN0ZXJlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUtleSA9IGtleTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5kYXRhID8gdGhpcy5kYXRhW2tleV0gOiBudWxsO1xyXG4gICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKG9iaikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7a2V5OiBrLCB2YWx1ZTogb2JqW2tdfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuc29ydEl0ZW1zKHRoaXMuaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZUNoYW5nZSgkZXZlbnQ6IE5nYlRhYkNoYW5nZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgkZXZlbnQubmV4dElkKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzb3J0SXRlbXMoaXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGEua2V5IDwgYi5rZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGIua2V5IDwgYS5rZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBKaGlIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9oaXN0b3J5LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgaGlzdG9yeVJvdXRlOiBSb3V0ZSA9IHtcclxuICAgIHBhdGg6ICdoaXN0b3J5JyxcclxuICAgIGNvbXBvbmVudDogSmhpSGlzdG9yeUNvbXBvbmVudCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBwYWdlVGl0bGU6ICdIaXN0b3J5J1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSmhpSGlzdG9yeVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBmaW5kQWxsKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9ldXJla2EvbGFzdG4nKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvaGlzdG9yeS9oaXN0b3J5LnNlcnZpY2UudHMiLCJleHBvcnQgKiBmcm9tICcuL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMucm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9jb25maWcuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9jb25maWcucm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2VuY3J5cHRpb24vZW5jcnlwdGlvbi5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2VuY3J5cHRpb24vZW5jcnlwdGlvbi5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9lbmNyeXB0aW9uL2VuY3J5cHRpb24ucm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hpc3RvcnkvaGlzdG9yeS5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9oaXN0b3J5L2hpc3Rvcnkucm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlcGxpY2FzL3JlcGxpY2FzLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVwbGljYXMvcmVwbGljYXMuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVwbGljYXMvcmVwbGljYXMucm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NzaC9zc2guY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9zc2gvc3NoLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NzaC9zc2gucm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlZ2lzdHJ5LnJvdXRlJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9pbmRleC50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBKSGlwc3RlclJlZ2lzdHJ5U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICByZWdpc3RyeVN0YXRlLFxyXG4gICAgSmhpQXBwbGljYXRpb25zQ29tcG9uZW50LFxyXG4gICAgSmhpQ29uZmlnQ29tcG9uZW50LFxyXG4gICAgSmhpRW5jcnlwdGlvbkNvbXBvbmVudCxcclxuICAgIEpoaUhpc3RvcnlDb21wb25lbnQsXHJcbiAgICBKaGlSZXBsaWNhc0NvbXBvbmVudCxcclxuICAgIEpoaVNTSENvbXBvbmVudCxcclxuICAgIEpoaUFwcGxpY2F0aW9uc1NlcnZpY2UsXHJcbiAgICBKaGlDb25maWdTZXJ2aWNlLFxyXG4gICAgSmhpRW5jcnlwdGlvblNlcnZpY2UsXHJcbiAgICBKaGlIaXN0b3J5U2VydmljZSxcclxuICAgIEpoaVJlcGxpY2FzU2VydmljZSxcclxuICAgIEpoaVNTSFNlcnZpY2VcclxufSBmcm9tICcuLyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QocmVnaXN0cnlTdGF0ZSwge3VzZUhhc2g6IHRydWV9KVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEpoaUFwcGxpY2F0aW9uc0NvbXBvbmVudCxcclxuICAgICAgICBKaGlDb25maWdDb21wb25lbnQsXHJcbiAgICAgICAgSmhpRW5jcnlwdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBKaGlIaXN0b3J5Q29tcG9uZW50LFxyXG4gICAgICAgIEpoaVJlcGxpY2FzQ29tcG9uZW50LFxyXG4gICAgICAgIEpoaVNTSENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW10sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBKaGlBcHBsaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgIEpoaUNvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgSmhpRW5jcnlwdGlvblNlcnZpY2UsXHJcbiAgICAgICAgSmhpSGlzdG9yeVNlcnZpY2UsXHJcbiAgICAgICAgSmhpUmVwbGljYXNTZXJ2aWNlLFxyXG4gICAgICAgIEpoaVNTSFNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEpIaXBzdGVyUmVnaXN0cnlNb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9yZWdpc3RyeS5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgYXBwbGljYXRpb25zUm91dGUsIGNvbmZpZ1JvdXRlLCBlbmNyeXB0aW9uUm91dGUsIGhpc3RvcnlSb3V0ZSwgcmVwbGljYXNSb3V0ZSwgc3NoUm91dGUgfSBmcm9tICcuLyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkJztcclxuXHJcbmNvbnN0IFJFR0lTVFJZX1JPVVRFUyA9IFtcclxuICAgIGFwcGxpY2F0aW9uc1JvdXRlLFxyXG4gICAgY29uZmlnUm91dGUsXHJcbiAgICBlbmNyeXB0aW9uUm91dGUsXHJcbiAgICBoaXN0b3J5Um91dGUsXHJcbiAgICByZXBsaWNhc1JvdXRlLFxyXG4gICAgc3NoUm91dGVcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RyeVN0YXRlOiBSb3V0ZXMgPSBbe1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9BRE1JTiddXHJcbiAgICB9LFxyXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXSxcclxuICAgIGNoaWxkcmVuOiBSRUdJU1RSWV9ST1VURVNcclxufV07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvcmVnaXN0cnkucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwiaGVhZFxcXCI+IDxoMiBjbGFzcz1cXFwiZC1pbmxpbmUtYmxvY2tcXFwiPlJlZ2lzdHJ5IFJlcGxpY2FzPC9oMj4gPGpoaS1yZWZyZXNoLXNlbGVjdG9yIGNsYXNzPVxcXCJmbG9hdC1yaWdodCByZWZyZXNoLWxlZnQtc2lkZVxcXCI+PC9qaGktcmVmcmVzaC1zZWxlY3Rvcj4gPC9kaXY+IDxkaXYgaWQ9XFxcInJlcGxpY2FzXFxcIiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+IDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgcmVwbGljYSBvZiByZXBsaWNhc1xcXCI+IDx0ZD4gPGEgaHJlZj1cXFwiaHR0cDovL3t7cmVwbGljYX19XFxcIj57e3JlcGxpY2F9fTwvYT4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgcGFkXFxcIj4gPGEgKGNsaWNrKT1cXFwic2hvd01vcmUgPSAhc2hvd01vcmVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPiA8c3BhbiAqbmdJZj1cXFwic2hvd01vcmVcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctY2lyY2xlLWRvd25cXFwiPjwvc3Bhbj4mbmJzcDtzaG93IG1vcmUgPC9zcGFuPiA8c3BhbiAqbmdJZj1cXFwiIXNob3dNb3JlXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWNpcmNsZS11cFxcXCI+PC9zcGFuPiZuYnNwO3Nob3cgbGVzcyA8L3NwYW4+IDwvYT4gPC9kaXY+IDxkaXYgW25nYkNvbGxhcHNlXT1cXFwic2hvd01vcmVcXFwiPiA8aDM+PHNwYW4gY2xhc3M9XFxcImZhIGZhLWluZm8tY2lyY2xlXFxcIj48L3NwYW4+IENvbmZpZ3VyaW5nIHJlcGxpY2F0aW9uPC9oMz4gPHA+IEhlcmUgaXMgdGhlIFNwcmluZyBDbG91ZCBOZXRmbGl4IG9mZmljaWFsIGRvY3VtZW50YXRpb24gZm9yIGNvbmZpZ3VyaW5nIHJlcGxpY2F0aW9uOiA8L3A+IDx1bD4gPGxpPiA8YSBocmVmPVxcXCJodHRwOi8vY2xvdWQuc3ByaW5nLmlvL3NwcmluZy1jbG91ZC1zdGF0aWMvc3ByaW5nLWNsb3VkLmh0bWwjX3N0YW5kYWxvbmVfbW9kZVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPiBTdGFuZGFsb25lIG1vZGUgKG5vIHJlcGxpY2F0aW9uKSA8L2E+IDwvbGk+IDxsaT4gPGEgaHJlZj1cXFwiaHR0cDovL2Nsb3VkLnNwcmluZy5pby9zcHJpbmctY2xvdWQtc3RhdGljL3NwcmluZy1jbG91ZC5odG1sI19wZWVyX2F3YXJlbmVzc1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPiBQZWVyIGF3YXJlIG1vZGUgKHJlcGxpY2F0aW9uIGJldHdlZW4gcGVlcnMpIDwvYT4gPC9saT4gPC91bD4gPGg0PlN0YW5kYWxvbmUgbW9kZTwvaDQ+IDxwPiBCeSBkZWZhdWx0LCB0aGUgSkhpcHN0ZXIgUmVnaXN0cnkgd29ya3MgaW4gc3RhbmRhbG9uZSBtb2RlOiB5b3Ugd2lsbCBzZWUgb25lIHJlcGxpY2EgaW4gdGhpcyBzY3JlZW4sIHdoaWNoIHRoZSBjdXJyZW50IHN0YW5kYWxvbmUgcmVnaXN0cnk6IHRoZSBhZGRyZXNzIG9mIHRoZSByZXBsaWNhIHNob3VsZCBiZSB0aGUgc2FtZSBhcyB0aGUgYWRkcmVzcyBvZiB5b3VyIHNlcnZlci4gPC9wPiA8aDQ+UGVlciBhd2FyZSBtb2RlPC9oND4gPHA+IFRoZSBKSGlwc3RlciBSZWdpc3RyeSBhbHNvIHdvcmtzIGluIFxcXCJwZWVyIGF3YXJlIG1vZGVcXFwiLCBhbmQgcHJvdmlkZXMgZm9yIHRoaXMgdHdvIHByZS1kZWZpbmVkIFNwcmluZyBwcm9maWxlcywgbmFtZWQgXFxcInBlZXIxXFxcIiBhbmQgXFxcInBlZXIyXFxcIi4gVGhvc2UgcHJvZmlsZXMgYXJlIG1vc3RseSBoZXJlIGFzIHdvcmtpbmcgZXhhbXBsZXMsIGFzIHlvdSB3aWxsIHByb2JhYmx5IHdhbnQgc29tZXRoaW5nIGRpZmZlcmVudCBpbiBwcm9kdWN0aW9uLiA8L3A+IDxwPiBUaG9zZSBwcm9maWxlcyB0cmlnZ2VyIHNvbWUgc3BlY2lmaWMgU3ByaW5nIEJvb3QgY29uZmlndXJhdGlvbnMsIHdoaWNoIGFyZSBhdmFpbGFibGUgaW4geW91ciByZWdpc3RyeSdzIDxjb2RlPnNyYy9tYWluL3Jlc291cmNlcy9jb25maWc8L2NvZGU+IGZvbGRlci4gPC9wPiA8cD4gVGhvc2UgcHJvZmlsZXMgZXhwZWN0IHRvIGhhdmUgMiBkaWZmZXJlbnQgaG9zdHMsIG9uZSBmb3IgZWFjaCByZXBsaWNhOiB0aGlzIGlzIHJlcXVpcmVkIGJ5IEV1cmVrYSwgd2hpY2ggZXhwZWN0cyB0byBoYXZlIHJlcGxpY2FzIG9uIGRpZmZlcmVudCBzZXJ2ZXJzLiBJZiB5b3Ugd2FudCB0byBydW4gdGhpcyBvbiB5b3VyIGxvY2FsIG1hY2hpbmUsIHlvdSBuZWVkIHRvIHBvaW50IHRob3NlIDIgaG9zdG5hbWVzIHRvIHlvdXIgbG9jYWwgYWRkcmVzcywgZm9yIGV4YW1wbGUgb24gYSBVbml4L01hY09TWCBzeXN0ZW0sIGVkaXQgPGNvZGU+L2V0Yy9ob3N0czwvY29kZT4gdG8gYWRkIHRob3NlIGxpbmVzOiA8L3A+IDxwcmUgY2xhc3M9XFxcImNvZGUtYmxvY2tcXFwiPiMgRXVyZWthIHBlZXJzXFxyXFxuMTI3LjAuMC4xXFx0ZXVyZWthLXBlZXItMVxcclxcbjEyNy4wLjAuMVxcdGV1cmVrYS1wZWVyLTI8L3ByZT4gPHA+IFJ1bm5pbmcgYSBwZWVyLWF3YXJlIGRldmVsb3BtZW50IGNsdXN0ZXIgaXMgdGhlbiBqdXN0IGEgbWF0dGVyIG9mIHJ1bm5pbmc6IDwvcD4gPHVsPiA8bGk+IDxjb2RlPi4vbXZudyAtUGRldixnaXQscGVlcjE8L2NvZGU+IDwvbGk+IDxsaT4gPGNvZGU+Li9tdm53IC1QZGV2LGdpdCxwZWVyMjwvY29kZT4gPC9saT4gPC91bD4gPHA+IEhlcmUgaXMgYSBzYW1wbGUgd29ya2luZyBjb25maWd1cmF0aW9uIGZvciBcXFwicGVlcjFcXFwiLiBOb3RlIHRoYXQgaXRzIFxcXCJzZXJ2aWNlVXJsXFxcIiBwb2ludHMgdG8gXFxcInBlZXIyXFxcIjogPC9wPiA8cHJlIGNsYXNzPVxcXCJjb2RlLWJsb2NrXFxcIj5cXHJcXG5zZXJ2ZXI6XFxyXFxuICAgIHBvcnQ6IDg3NjFcXHJcXG5ldXJla2E6XFxyXFxuICAgIGluc3RhbmNlOlxcclxcbiAgICAgICAgaG9zdG5hbWU6IGV1cmVrYS1wZWVyLTFcXHJcXG4gICAgc2VydmVyOlxcclxcbiAgICAgICAgZW5hYmxlLXNlbGYtcHJlc2VydmF0aW9uOiB0cnVlXFxyXFxuICAgICAgICByZWdpc3RyeS1zeW5jLXJldHJ5LXdhaXQtbXM6IDUwMFxcclxcbiAgICAgICAgYS1zZ2NhY2hlLWV4cGlyeS10aW1lb3V0LW1zOiA2MDAwMFxcclxcbiAgICAgICAgZXZpY3Rpb24taW50ZXJ2YWwtdGltZXItaW4tbXM6IDMwMDAwXFxyXFxuICAgICAgICBwZWVyLWV1cmVrYS1ub2Rlcy11cGRhdGUtaW50ZXJ2YWwtbXM6IDMwMDAwXFxyXFxuICAgICAgICByZW5ld2FsLXRocmVzaG9sZC11cGRhdGUtaW50ZXJ2YWwtbXM6IDE1MDAwXFxyXFxuICAgIGNsaWVudDpcXHJcXG4gICAgICAgIGZldGNoLXJlZ2lzdHJ5OiB0cnVlXFxyXFxuICAgICAgICByZWdpc3Rlci13aXRoLWV1cmVrYTogdHJ1ZVxcclxcbiAgICAgICAgc2VydmljZVVybDpcXHJcXG4gICAgICAgICAgICBkZWZhdWx0Wm9uZTogaHR0cDovL2FkbWluOmFkbWluQGV1cmVrYS1wZWVyLTI6ODc2Mi9ldXJla2EvPC9wcmU+IDxwPiBIZXJlIGlzIHRoZSBzYW1lIGNvbmZpZ3VyYXRpb24gZm9yIFxcXCJwZWVyMlxcXCIsIHdoaWNoIGhhcyBhIFxcXCJzZXJ2aWNlVXJsXFxcIiBwb2ludGluZyB0byBcXFwicGVlcjFcXFwiOiA8L3A+IDxwcmUgY2xhc3M9XFxcImNvZGUtYmxvY2tcXFwiPlxcclxcbnNlcnZlcjpcXHJcXG4gICAgcG9ydDogODc2MlxcclxcbmV1cmVrYTpcXHJcXG4gICAgaW5zdGFuY2U6XFxyXFxuICAgICAgICBob3N0bmFtZTogZXVyZWthLXBlZXItMlxcclxcbiAgICBzZXJ2ZXI6XFxyXFxuICAgICAgICBlbmFibGUtc2VsZi1wcmVzZXJ2YXRpb246IHRydWVcXHJcXG4gICAgICAgIHJlZ2lzdHJ5LXN5bmMtcmV0cnktd2FpdC1tczogNTAwXFxyXFxuICAgICAgICBhLXNnY2FjaGUtZXhwaXJ5LXRpbWVvdXQtbXM6IDYwMDAwXFxyXFxuICAgICAgICBldmljdGlvbi1pbnRlcnZhbC10aW1lci1pbi1tczogMzAwMDBcXHJcXG4gICAgICAgIHBlZXItZXVyZWthLW5vZGVzLXVwZGF0ZS1pbnRlcnZhbC1tczogMzAwMDBcXHJcXG4gICAgICAgIHJlbmV3YWwtdGhyZXNob2xkLXVwZGF0ZS1pbnRlcnZhbC1tczogMTUwMDBcXHJcXG4gICAgY2xpZW50OlxcclxcbiAgICAgICAgZmV0Y2gtcmVnaXN0cnk6IHRydWVcXHJcXG4gICAgICAgIHJlZ2lzdGVyLXdpdGgtZXVyZWthOiB0cnVlXFxyXFxuICAgICAgICBzZXJ2aWNlVXJsOlxcclxcbiAgICAgICAgICAgIGRlZmF1bHRab25lOiBodHRwOi8vYWRtaW46YWRtaW5AZXVyZWthLXBlZXItMTo4NzYxL2V1cmVrYS88L3ByZT4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvcmVwbGljYXMvcmVwbGljYXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9yZXBsaWNhcy9yZXBsaWNhcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVwbGljYXMuY29tcG9uZW50LnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9yZXBsaWNhcy9yZXBsaWNhcy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L3JlcGxpY2FzL3JlcGxpY2FzLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSmhpUmVwbGljYXNTZXJ2aWNlIH0gZnJvbSAnLi9yZXBsaWNhcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSmhpUmVmcmVzaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVmcmVzaC9yZWZyZXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLXJlcGxpY2FzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZXBsaWNhcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAncmVwbGljYXMuY29tcG9uZW50LnNjc3MnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKaGlSZXBsaWNhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHNob3dNb3JlOiBib29sZWFuO1xyXG4gICAgcmVwbGljYXM6IGFueTtcclxuXHJcbiAgICByZWZyZXNoUmVsb2FkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXBsaWNhc1NlcnZpY2U6IEpoaVJlcGxpY2FzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVmcmVzaFNlcnZpY2U6IEpoaVJlZnJlc2hTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnNob3dNb3JlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hSZWxvYWRTdWJzY3JpcHRpb24gPSB0aGlzLnJlZnJlc2hTZXJ2aWNlLnJlZnJlc2hSZWxvYWQkLnN1YnNjcmliZSgoZW1wdHkpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hSZWxvYWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMucmVwbGljYXNTZXJ2aWNlLmZpbmRBbGwoKS5zdWJzY3JpYmUoKHJlcGxpY2FzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwbGljYXMgPSByZXBsaWNhcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L3JlcGxpY2FzL3JlcGxpY2FzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEpoaVJlcGxpY2FzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXBsaWNhcy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxpY2FzUm91dGU6IFJvdXRlID0ge1xyXG4gICAgcGF0aDogJ3JlcGxpY2FzJyxcclxuICAgIGNvbXBvbmVudDogSmhpUmVwbGljYXNDb21wb25lbnQsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZVRpdGxlOiAnUmVwbGljYXMnXHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvcmVwbGljYXMvcmVwbGljYXMucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpoaVJlcGxpY2FzU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBmaW5kQWxsKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9ldXJla2EvcmVwbGljYXMnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvcmVwbGljYXMvcmVwbGljYXMuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+U1NIIFB1YmxpYyBLZXk8L2gyPiA8cD4gVGhpcyBpcyB0aGUgU1NIIHB1YmxpYyBrZXkgc3RvcmVkIGluIHRoaXMgc2VydmVyJ3MgPGNvZGU+JiMxMjY7Ly5zc2gvaWRfcnNhLnB1YjwvY29kZT4gPC9wPiA8cD4gVGhpcyBrZXkgc2hvdWxkIGJlIHVzZWQgdG8gZ3JhbnQgYWNjZXNzIGZvciB0aGlzIHNlcnZlciB0byB0aGUgR2l0IHJlcG9zaXRvcnkgd2hpY2ggaG9sZHMgdGhlIFNwcmluZyBDbG91ZCBDb25maWd1cmF0aW9uIGZpbGVzLiA8L3A+IDxoMz5Zb3VyIFNTSCBwdWJsaWMga2V5PC9oMz4gPHByZT57e2RhdGF9fTwvcHJlPiA8aHI+IDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIHBhZFxcXCI+IDxhIChjbGljayk9XFxcInNob3dNb3JlID0gIXNob3dNb3JlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj4gPHNwYW4gKm5nSWY9XFxcInNob3dNb3JlXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWNpcmNsZS1kb3duXFxcIj48L3NwYW4+Jm5ic3A7c2hvdyBtb3JlIDwvc3Bhbj4gPHNwYW4gKm5nSWY9XFxcIiFzaG93TW9yZVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1jaXJjbGUtdXBcXFwiPjwvc3Bhbj4mbmJzcDtzaG93IGxlc3MgPC9zcGFuPiA8L2E+IDwvZGl2PiA8ZGl2IFtuZ2JDb2xsYXBzZV09XFxcInNob3dNb3JlXFxcIj4gPGgzPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1pbmZvLWNpcmNsZVxcXCI+PC9zcGFuPiBVc2luZyBTU0ggd2l0aCBEb2NrZXI8L2gzPiA8cD4gSGVyZSBhcmUgZGV0YWlsZWQgaW5zdHJ1Y3Rpb24gd2hlbiB1c2luZyB0aGUgSkhpcHN0ZXIgUmVnaXN0cnkgRG9ja2VyIGltYWdlLCBhdmFpbGFibGUgYXQgPGEgaHJlZj1cXFwiaHR0cHM6Ly9odWIuZG9ja2VyLmNvbS9yL2poaXBzdGVyL2poaXBzdGVyLXJlZ2lzdHJ5L1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPmpoaXBzdGVyL2poaXBzdGVyLXJlZ2lzdHJ5LzwvYT4uIDwvcD4gPHVsPiA8bGk+TG9nIGluIGluc2lkZSB0aGUgY29udGFpbmVyOiA8Y29kZT5kb2NrZXIgZXhlYyAtaXQgJmx0O2NvbnRhaW5lcklkT3JOYW1lJmd0OyBzaDwvY29kZT48L2xpPiA8bGk+R2VuZXJhdGUgYW4gU1NIIGtleTogPGNvZGU+c3NoLWtleWdlbjwvY29kZT48L2xpPiA8bGk+Q29weSB0aGUgcHVibGljIGtleSBpbiA8Y29kZT4vcm9vdC8uc3NoL2lkX3JzYS5wdWI8L2NvZGU+IHRvIHRoZSByZW1vdGUgR2l0IHJlcG9zaXRvcnkgeW91IHdhbnQgdG8gYWNjZXNzIChpbiBHaXRodWIsIGdvIHRvIHlvdXIgc2V0dGluZ3MvU1NIIGtleXMpPC9saT4gPGxpPlRlc3QgaW5zaWRlIHlvdXIgY29udGFpbmVyIHRoYXQgdGhlIFNTSCBjb25uZWN0aW9uIGlzIHdvcmtpbmc6IDx1bD4gPGxpPkxvZyBpbiB0byB5b3VyIEdpdCBwcm92aWRlciB1c2luZyB5b3VyIHNzaCBrZXk6IDxjb2RlPnNzaCAtVCBnaXRAZ2l0aHViLmNvbTwvY29kZT48L2xpPiA8bGk+V2hlbiBhc2tlZCB0byB0byBhZGQgdGhlIEdpdCByZXBvc2l0b3J5IGhvc3QgdG8gdGhlIGxpc3Qgb2Yga25vd24gaG9zdHMsIHJlcGx5IDxiPnllczwvYj48L2xpPiA8L3VsPiA8L2xpPiA8bGk+UmVzdGFydCB0aGUgcmVnaXN0cnkgd2l0aG91dCByZW1vdmluZyB0aGUgY29udGFpbmVyLCBpdCBzaG91bGQgYmUgYWJsZSB0byByZWFkIGEgR2l0IHJlcG8gc2VjdXJlZCBieSBTU0g8L2xpPiA8L3VsPiA8cD4gSW4gb3JkZXIgbm90IHRvIGxvc2Ugb3VyIHNldHVwIGV2ZXJ5IHRpbWUgeW91IHJlY3JlYXRlIG9yIHVwZGF0ZSB0aGUgY29udGFpbmVyLCB5b3UgY2FuIG1vdW50IHRoZSA8Y29kZT4vcm9vdC8uc3NoLzwvY29kZT4gZm9sZGVyIHRvIGEgRG9ja2VyIHZvbHVtZS4gPC9wPiA8cD5UbyBzZXR1cCB5b3VyIG93biBnaXQgcmVwbywgZWRpdCB0aGUgR0lUX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBwYXNzZWQgdG8geW91ciBjb250YWluZXIsIGZvciBleGFtcGxlIHVzaW5nIERvY2tlciBDb21wb3NlOjwvcD4gPHByZSBjbGFzcz1cXFwiY29kZS1ibG9ja1xcXCI+XFxyXFxuICAgIHZlcnNpb246ICcyJ1xcclxcbiAgICAgIHNlcnZpY2VzOlxcclxcbiAgICAgICAgamhpcHN0ZXItcmVnaXN0cnk6XFxyXFxuICAgICAgICAgIGNvbnRhaW5lcl9uYW1lOiBqaGlwc3Rlci1yZWdpc3RyeVxcclxcbiAgICAgICAgICBpbWFnZTogamhpcHN0ZXIvamhpcHN0ZXItcmVnaXN0cnlcXHJcXG4gICAgICB2b2x1bWVzOlxcclxcbiAgICAgICAgLSAuL3NzaC86L3Jvb3QvLnNzaC9cXHJcXG4gICAgICBlbnZpcm9ubWVudDpcXHJcXG4gICAgICAgIC0gU1BSSU5HX1BST0ZJTEVTX0FDVElWRT1wcm9kXFxyXFxuICAgICAgICAtIEdJVF9VUkk9Z2l0QGdpdGh1Yi5jb206amhpcHN0ZXIvamhpcHN0ZXItcmVnaXN0cnkuZ2l0XFxyXFxuICAgICAgICAtIEdJVF9TRUFSQ0hfUEFUSFM9Y2VudHJhbC1jb25maWdcXHJcXG4gICAgICBwb3J0czpcXHJcXG4gICAgICAgIC0gODc2MTo4NzYxXFxyXFxuICAgICAgICA8L3ByZT4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvc3NoL3NzaC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L3NzaC9zc2guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSmhpU1NIU2VydmljZSB9IGZyb20gJy4vc3NoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2poaS1hcHBsaWNhdGlvbnMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NzaC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKaGlTU0hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZGF0YTogYW55O1xyXG4gICAgc2hvd01vcmU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzc2hTZXJ2aWNlOiBKaGlTU0hTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TW9yZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zc2hTZXJ2aWNlLmdldFNzaFB1YmxpY0tleSgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9zc2gvc3NoLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEpoaVNTSENvbXBvbmVudCB9IGZyb20gJy4vc3NoLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3Qgc3NoUm91dGU6IFJvdXRlID0ge1xyXG4gICAgcGF0aDogJ3NzaCcsXHJcbiAgICBjb21wb25lbnQ6IEpoaVNTSENvbXBvbmVudCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBwYWdlVGl0bGU6ICdTU0ggcHVibGljIGtleSdcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9zc2gvc3NoLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKaGlTU0hTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgZ2V0U3NoUHVibGljS2V5KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9zc2gvcHVibGljX2tleScpLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9zc2gvc3NoLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIEFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLWFsZXJ0LWVycm9yJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0c1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhbGVydCBvZiBhbGVydHNcIiAgW25nQ2xhc3NdPVwie1xcJ2FsZXJ0LnBvc2l0aW9uXFwnOiB0cnVlLCBcXCd0b2FzdFxcJzogYWxlcnQudG9hc3R9XCI+XHJcbiAgICAgICAgICAgICAgICA8bmdiLWFsZXJ0IHR5cGU9XCJ7e2FsZXJ0LnR5cGV9fVwiIGNsb3NlPVwiYWxlcnQuY2xvc2UoYWxlcnRzKVwiPjxwcmUgW2lubmVySFRNTF09XCJhbGVydC5tc2dcIj48L3ByZT48L25nYi1hbGVydD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSmhpQWxlcnRFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgYWxlcnRzOiBhbnlbXTtcclxuICAgIGNsZWFuSHR0cEVycm9yTGlzdGVuZXI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLCBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyID0gZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnakhpcHN0ZXJSZWdpc3RyeUFwcC5odHRwRXJyb3InLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IHJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaHR0cFJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdGlvbiByZWZ1c2VkLCBzZXJ2ZXIgbm90IHJlYWNoYWJsZVxyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydCgnU2VydmVyIG5vdCByZWFjaGFibGUnLCAnZXJyb3Iuc2VydmVyLm5vdC5yZWFjaGFibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKGh0dHBSZXNwb25zZS5oZWFkZXJzLl9oZWFkZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldWzBdLmVuZHNXaXRoKCdhcHAtZXJyb3InKSB8fCBhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1wYXJhbXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGFycltpXVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ySGVhZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5S2V5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySGVhZGVyID0gaHR0cFJlc3BvbnNlLmhlYWRlcnMuZ2V0KGhlYWRlcnNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlLZXkgPSBodHRwUmVzcG9uc2UuaGVhZGVycy5nZXQoaGVhZGVyc1sxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHlOYW1lID0gZW50aXR5S2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoZXJyb3JIZWFkZXIsIGVycm9ySGVhZGVyLCB7IGVudGl0eU5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChodHRwUmVzcG9uc2UudGV4dCgpICE9PSAnJyAmJiBodHRwUmVzcG9uc2UuanNvbigpICYmIGh0dHBSZXNwb25zZS5qc29uKCkuZmllbGRFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSBodHRwUmVzcG9uc2UuanNvbigpLmZpZWxkRXJyb3JzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmllbGRFcnJvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRXJyb3IgPSBmaWVsZEVycm9yc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgJ3NvbWV0aGluZ1sxNF0ub3RoZXJbNF0uaWQnIHRvICdzb21ldGhpbmdbXS5vdGhlcltdLmlkJyBzbyB0cmFuc2xhdGlvbnMgY2FuIGJlIHdyaXR0ZW4gdG8gaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEZpZWxkID0gZmllbGRFcnJvci5maWVsZC5yZXBsYWNlKC9cXFtcXGQqXFxdL2csICdbXScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gY29udmVydGVkRmllbGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlZEZpZWxkLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGaWVsZCAnICsgZmllbGROYW1lICsgJyBjYW5ub3QgYmUgZW1wdHknLCAnZXJyb3IuJyArIGZpZWxkRXJyb3IubWVzc2FnZSwgeyBmaWVsZE5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGh0dHBSZXNwb25zZS50ZXh0KCkgIT09ICcnICYmIGh0dHBSZXNwb25zZS5qc29uKCkgJiYgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UsIGh0dHBSZXNwb25zZS5qc29uKCkubWVzc2FnZSwgaHR0cFJlc3BvbnNlLmpzb24oKS5wYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KCdOb3QgZm91bmQnLCAnZXJyb3IudXJsLm5vdC5mb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0dHBSZXNwb25zZS50ZXh0KCkgIT09ICcnICYmIGh0dHBSZXNwb25zZS5qc29uKCkgJiYgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgdGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmRlc3Ryb3kodGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXJyb3JBbGVydChtZXNzYWdlLCBrZXk/LCBkYXRhPykge1xyXG4gICAgICAgIHRoaXMuYWxlcnRzLnB1c2goXHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmFkZEFsZXJ0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIG1zZzogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0OiB0aGlzLmFsZXJ0U2VydmljZS5pc1RvYXN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQtZXJyb3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLWFsZXJ0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0c1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhbGVydCBvZiBhbGVydHNcIiBbbmdDbGFzc109XCJ7XFwnYWxlcnQucG9zaXRpb25cXCc6IHRydWUsIFxcJ3RvYXN0XFwnOiBhbGVydC50b2FzdH1cIj5cclxuICAgICAgICAgICAgICAgIDxuZ2ItYWxlcnQgW3R5cGVdPVwiYWxlcnQudHlwZVwiIChjbG9zZSk9XCJhbGVydC5jbG9zZShhbGVydHMpXCI+PHByZSBbaW5uZXJIVE1MXT1cImFsZXJ0Lm1zZ1wiPjwvcHJlPjwvbmdiLWFsZXJ0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKaGlBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGFsZXJ0czogYW55W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hbGVydHMgPSB0aGlzLmFsZXJ0U2VydmljZS5nZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFjY291bnRTZXJ2aWNlICB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGdldCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdhcGkvYWNjb3VudCcpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZShhY2NvdW50OiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudCcsIGFjY291bnQpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYWNjb3VudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZlclByb3ZpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcclxuICAgICAgICBwcml2YXRlICRsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSAkc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRsb2NhbFN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKSB8fCB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGNyZWRlbnRpYWxzKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGNyZWRlbnRpYWxzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHJlbWVtYmVyTWU6IGNyZWRlbnRpYWxzLnJlbWVtYmVyTWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2F1dGhlbnRpY2F0ZScsIGRhdGEpLm1hcChhdXRoZW50aWNhdGVTdWNjZXNzLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBhdXRoZW50aWNhdGVTdWNjZXNzKHJlc3ApIHtcclxuICAgICAgICAgICAgY29uc3QgYmVhcmVyVG9rZW4gPSByZXNwLmhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJyk7XHJcbiAgICAgICAgICAgIGlmIChiZWFyZXJUb2tlbiAmJiBiZWFyZXJUb2tlbi5zbGljZSgwLCA3KSA9PT0gJ0JlYXJlciAnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqd3QgPSBiZWFyZXJUb2tlbi5zbGljZSg3LCBiZWFyZXJUb2tlbi5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZUF1dGhlbnRpY2F0aW9uVG9rZW4oand0LCBjcmVkZW50aWFscy5yZW1lbWJlck1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBqd3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5XaXRoVG9rZW4oand0LCByZW1lbWJlck1lKSB7XHJcbiAgICAgICAgaWYgKGp3dCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlQXV0aGVudGljYXRpb25Ub2tlbihqd3QsIHJlbWVtYmVyTWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGp3dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdhdXRoLWp3dC1zZXJ2aWNlIFByb21pc2UgcmVqZWN0Jyk7IC8vIFB1dCBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlIGhlcmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgcmVtZW1iZXJNZSkge1xyXG4gICAgICAgIGlmIChyZW1lbWJlck1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5zdG9yZSgnYXV0aGVudGljYXRpb25Ub2tlbicsIGp3dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2Uuc3RvcmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nLCBqd3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5jbGVhcignYXV0aGVudGljYXRpb25Ub2tlbicpO1xyXG4gICAgICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5jbGVhcignYXV0aGVudGljYXRpb25Ub2tlbicpO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC1qd3Quc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlc3Npb25TZXJ2ZXJQcm92aWRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwXHJcbiAgICApIHt9XHJcblxyXG4gICAgbG9naW4oY3JlZGVudGlhbHMpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSAnal91c2VybmFtZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGNyZWRlbnRpYWxzLnVzZXJuYW1lKSArXHJcbiAgICAgICAgICAgICcmal9wYXNzd29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGNyZWRlbnRpYWxzLnBhc3N3b3JkKSArXHJcbiAgICAgICAgICAgICcmcmVtZW1iZXItbWU9JyArIGNyZWRlbnRpYWxzLnJlbWVtYmVyTWUgKyAnJnN1Ym1pdD1Mb2dpbic7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzICh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9hdXRoZW50aWNhdGlvbicsIGRhdGEsIHsgaGVhZGVycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAvLyBsb2dvdXQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvbG9nb3V0Jywge30pLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRvIGdldCBhIG5ldyBjc3JmIHRva2VuIGNhbGwgdGhlIGFwaVxyXG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KCdhcGkvYWNjb3VudCcpLnN1YnNjcmliZSgoKSA9PiB7fSwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9hdXRoLXNlc3Npb24uc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENTUkZTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHt9XHJcblxyXG4gICAgZ2V0Q1NSRihuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgbmFtZSA9IGAke25hbWUgPyBuYW1lIDogJ1hTUkYtVE9LRU4nfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29va2llU2VydmljZS5nZXQobmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9jc3JmLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuL3ByaW5jaXBhbC5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAd2hhdEl0RG9lcyBDb25kaXRpb25hbGx5IGluY2x1ZGVzIGFuIEhUTUwgZWxlbWVudCBpZiBjdXJyZW50IHVzZXIgaGFzIGFueVxyXG4gKiBvZiB0aGUgYXV0aG9yaXRpZXMgcGFzc2VkIGFzIHRoZSBgZXhwcmVzc2lvbmAuXHJcbiAqXHJcbiAqIEBob3dUb1VzZVxyXG4gKiBgYGBcclxuICogICAgIDxzb21lLWVsZW1lbnQgKmpoaUhhc0FueUF1dGhvcml0eT1cIidST0xFX0FETUlOJ1wiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKlxyXG4gKiAgICAgPHNvbWUtZWxlbWVudCAqamhpSGFzQW55QXV0aG9yaXR5PVwiWydST0xFX0FETUlOJywgJ1JPTEVfVVNFUiddXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqIGBgYFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tqaGlIYXNBbnlBdXRob3JpdHldJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlIHtcclxuXHJcbiAgICBwcml2YXRlIGF1dGhvcml0aWVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLCBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGpoaUhhc0FueUF1dGhvcml0eSh2YWx1ZTogc3RyaW5nfHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5hdXRob3JpdGllcyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBbIDxzdHJpbmc+IHZhbHVlIF0gOiA8c3RyaW5nW10+IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgICAgIC8vIEdldCBub3RpZmllZCBlYWNoIHRpbWUgYXV0aGVudGljYXRpb24gc3RhdGUgY2hhbmdlcy5cclxuICAgICAgICB0aGlzLnByaW5jaXBhbC5nZXRBdXRoZW50aWNhdGlvblN0YXRlKCkuc3Vic2NyaWJlKChpZGVudGl0eSkgPT4gdGhpcy51cGRhdGVWaWV3KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByaW5jaXBhbC5oYXNBbnlBdXRob3JpdHkodGhpcy5hdXRob3JpdGllcykudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL2FjY291bnQuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcmluY2lwYWwge1xyXG4gICAgcHJpdmF0ZSB1c2VySWRlbnRpdHk6IGFueTtcclxuICAgIHByaXZhdGUgYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblN0YXRlID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudFNlcnZpY2VcclxuICAgICkge31cclxuXHJcbiAgICBhdXRoZW50aWNhdGUoaWRlbnRpdHkpIHtcclxuICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IGlkZW50aXR5O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGlkZW50aXR5ICE9PSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5uZXh0KHRoaXMudXNlcklkZW50aXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNBbnlBdXRob3JpdHkoYXV0aG9yaXRpZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmhhc0FueUF1dGhvcml0eURpcmVjdChhdXRob3JpdGllcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0FueUF1dGhvcml0eURpcmVjdChhdXRob3JpdGllczogc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRlZCB8fCAhdGhpcy51c2VySWRlbnRpdHkgfHwgIXRoaXMudXNlcklkZW50aXR5LmF1dGhvcml0aWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV0aG9yaXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlcklkZW50aXR5LmF1dGhvcml0aWVzLmluZGV4T2YoYXV0aG9yaXRpZXNbaV0pICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNBdXRob3JpdHkoYXV0aG9yaXR5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRlbnRpdHkoKS50aGVuKChpZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGlkLmF1dGhvcml0aWVzICYmIGlkLmF1dGhvcml0aWVzLmluZGV4T2YoYXV0aG9yaXR5KSAhPT0gLTEpO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpdHkoZm9yY2U/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBpZiAoZm9yY2UgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVjayBhbmQgc2VlIGlmIHdlIGhhdmUgcmV0cmlldmVkIHRoZSB1c2VySWRlbnRpdHkgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSwgcmV1c2UgaXQgYnkgaW1tZWRpYXRlbHkgcmVzb2x2aW5nXHJcbiAgICAgICAgaWYgKHRoaXMudXNlcklkZW50aXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy51c2VySWRlbnRpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmV0cmlldmUgdGhlIHVzZXJJZGVudGl0eSBkYXRhIGZyb20gdGhlIHNlcnZlciwgdXBkYXRlIHRoZSBpZGVudGl0eSBvYmplY3QsIGFuZCB0aGVuIHJlc29sdmUuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudC5nZXQoKS50b1Byb21pc2UoKS50aGVuKChhY2NvdW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IGFjY291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VySWRlbnRpdHk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUubmV4dCh0aGlzLnVzZXJJZGVudGl0eSk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSWRlbnRpdHlSZXNvbHZlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VySWRlbnRpdHkgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdXRoZW50aWNhdGlvblN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZVVybCgpOiBTdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSWRlbnRpdHlSZXNvbHZlZCgpID8gdGhpcy51c2VySWRlbnRpdHkuaW1hZ2VVcmwgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0YXRlU3RvcmFnZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSAkc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICAgIGdldFByZXZpb3VzU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdwcmV2aW91c1N0YXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQcmV2aW91c1N0YXRlKCkge1xyXG4gICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLmNsZWFyKCdwcmV2aW91c1N0YXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVQcmV2aW91c1N0YXRlKHByZXZpb3VzU3RhdGVOYW1lLCBwcmV2aW91c1N0YXRlUGFyYW1zKSB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHsgJ25hbWUnOiBwcmV2aW91c1N0YXRlTmFtZSwgJ3BhcmFtcyc6IHByZXZpb3VzU3RhdGVQYXJhbXMgfTtcclxuICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5zdG9yZSgncHJldmlvdXNTdGF0ZScsIHByZXZpb3VzU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc3RpbmF0aW9uU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdkZXN0aW5hdGlvblN0YXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5zdG9yZSgncHJldmlvdXNVcmwnLCB1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUoJ3ByZXZpb3VzVXJsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVEZXN0aW5hdGlvblN0YXRlKGRlc3RpbmF0aW9uU3RhdGUsIGRlc3RpbmF0aW9uU3RhdGVQYXJhbXMsIGZyb21TdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uSW5mbyA9IHtcclxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzoge1xyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBkZXN0aW5hdGlvblN0YXRlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAnZGF0YSc6IGRlc3RpbmF0aW9uU3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3BhcmFtcyc6IGRlc3RpbmF0aW9uU3RhdGVQYXJhbXMsXHJcbiAgICAgICAgICAgICdmcm9tJzoge1xyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBmcm9tU3RhdGUubmFtZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2Uuc3RvcmUoJ2Rlc3RpbmF0aW9uU3RhdGUnLCBkZXN0aW5hdGlvbkluZm8pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBMb2dpbk1vZGFsU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclJvdXRlQWNjZXNzU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzdGF0ZVN0b3JhZ2VTZXJ2aWNlOiBTdGF0ZVN0b3JhZ2VTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4ge1xyXG5cclxuICAgICAgICBjb25zdCBhdXRob3JpdGllcyA9IHJvdXRlLmRhdGFbJ2F1dGhvcml0aWVzJ107XHJcbiAgICAgICAgaWYgKCFhdXRob3JpdGllcyB8fCBhdXRob3JpdGllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0xvZ2luKGF1dGhvcml0aWVzLCBzdGF0ZS51cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTG9naW4oYXV0aG9yaXRpZXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHByaW5jaXBhbCA9IHRoaXMucHJpbmNpcGFsO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGFjY291bnQgJiYgcHJpbmNpcGFsLmhhc0FueUF1dGhvcml0eURpcmVjdChhdXRob3JpdGllcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlU3RvcmFnZVNlcnZpY2Uuc3RvcmVVcmwodXJsKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhY2Nlc3NkZW5pZWQnXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHNob3cgdGhlIGxvZ2luIGRpYWxvZywgaWYgdGhlIHVzZXIgaGFzbid0IGxvZ2dlZCBpbiB5ZXRcclxuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UudHMiLCJleHBvcnQgY29uc3QgSVRFTVNfUEVSX1BBR0UgPSAyMDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMvcGFnaW5hdGlvbi5jb25zdGFudHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYWxlcnQvYWxlcnQtZXJyb3IuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2NzcmYuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGgvYWNjb3VudC5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2F1dGgtand0LnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGgvYXV0aC1zZXNzaW9uLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGgvaGFzLWFueS1hdXRob3JpdHkuZGlyZWN0aXZlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9naW4vbG9naW4tbW9kYWwuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vb2F1dGgyL2xvZ2luLW9hdXRoMi5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2VyL2FjY291bnQubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXIvdXNlci5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlci91c2VyLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JvdXRlcy9yb3V0ZS5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVzL3JvdXRlLXNlbGVjdG9yLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVzL3JvdXRlcy5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZWZyZXNoL3JlZnJlc2gtc2VsZWN0b3IuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9yZWZyZXNoL3JlZnJlc2guc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLWxpYnMubW9kdWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQtY29tbW9uLm1vZHVsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLm1vZHVsZSc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2luZGV4LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBKaGlMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5Nb2RhbFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcclxuICAgICkge31cclxuXHJcbiAgICBvcGVuKCk6IE5nYk1vZGFsUmVmIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEpoaUxvZ2luTW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnbmF2J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1vZGFsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9LCAocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGFsUmVmO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+U2lnbiBpbjwvaDQ+IDxidXR0b24gYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdjbG9zZWQnKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPng8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00IG9mZnNldC1tZC00XFxcIj4gPGgxPlNpZ24gaW48L2gxPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJhdXRoZW50aWNhdGlvbkVycm9yXFxcIj4gPHN0cm9uZz5GYWlsZWQgdG8gc2lnbiBpbiE8L3N0cm9uZz4gUGxlYXNlIGNoZWNrIHlvdXIgY3JlZGVudGlhbHMgYW5kIHRyeSBhZ2Fpbi4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxmb3JtIGNsYXNzPVxcXCJmb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJsb2dpbigpXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lXFxcIj5Mb2dpbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ1c2VybmFtZVxcXCIgaWQ9XFxcInVzZXJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciB1c2VybmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJuYW1lXFxcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIHBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVja1xcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJyZW1lbWJlck1lXFxcIj4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwicmVtZW1iZXJNZVxcXCIgaWQ9XFxcInJlbWVtYmVyTWVcXFwiIFsobmdNb2RlbCldPVxcXCJyZW1lbWJlck1lXFxcIiBjaGVja2VkPVxcXCJjaGVja2VkXFxcIj4gPHNwYW4+UmVtZW1iZXIgbWU8L3NwYW4+IDwvbGFiZWw+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+U2lnbiBpbjwvYnV0dG9uPiA8L2Zvcm0+IDxwPjwvcD4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCI+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJyZXF1ZXN0UmVzZXRQYXNzd29yZCgpXFxcIj5EaWQgeW91IGZvcmdldCB5b3VyIHBhc3N3b3JkPzwvYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiPiA8c3Bhbj5Zb3UgZG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD88L3NwYW4+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJyZWdpc3RlcigpXFxcIj5SZWdpc3RlciBhIG5ldyBhY2NvdW50PC9hPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcclxuXHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLWxvZ2luLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEpoaUxvZ2luTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgYXV0aGVudGljYXRpb25FcnJvcjogYm9vbGVhbjtcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICByZW1lbWJlck1lOiBib29sZWFuO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIGNyZWRlbnRpYWxzOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcclxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVTdG9yYWdlU2VydmljZTogU3RhdGVTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKSwgJ2ZvY3VzJywgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogbnVsbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4oe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZW1iZXJNZVxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdsb2dpbiBzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlci51cmwgPT09ICcvcmVnaXN0ZXInIHx8ICgvYWN0aXZhdGUvLnRlc3QodGhpcy5yb3V0ZXIudXJsKSkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnVybCA9PT0gJy9maW5pc2hSZXNldCcgfHwgdGhpcy5yb3V0ZXIudXJsID09PSAnL3JlcXVlc3RSZXNldCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3Qoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2F1dGhlbnRpY2F0aW9uU3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VuZGluZyBBdXRoZW50aWNhdGlvbiBTdWNjZXNzJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIC8vIHByZXZpb3VzU3RhdGUgd2FzIHNldCBpbiB0aGUgYXV0aEV4cGlyZWRJbnRlcmNlcHRvciBiZWZvcmUgYmVpbmcgcmVkaXJlY3RlZCB0byBsb2dpbiBtb2RhbC5cclxuICAgICAgICAgICAgLy8gLy8gc2luY2UgbG9naW4gaXMgc3VjY2VzZnVsLCBnbyB0byBzdG9yZWQgcHJldmlvdXNTdGF0ZSBhbmQgY2xlYXIgcHJldmlvdXNTdGF0ZVxyXG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5nZXRVcmwoKTtcclxuICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcigpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ3RvIHN0YXRlIHJlZ2lzdGVyJyk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVnaXN0ZXInXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdFJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCd0byBzdGF0ZSByZXF1ZXN0UmVzZXQnKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZXNldCcsICdyZXF1ZXN0J10pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4uL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmVyUHJvdmlkZXIgfSBmcm9tICcuLi9hdXRoL2F1dGgtand0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZlclByb3ZpZGVyOiBBdXRoU2VydmVyUHJvdmlkZXJcclxuICAgICkge31cclxuXHJcbiAgICBsb2dpbihjcmVkZW50aWFscywgY2FsbGJhY2s/KSB7XHJcbiAgICAgICAgY29uc3QgY2IgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2ZXJQcm92aWRlci5sb2dpbihjcmVkZW50aWFscykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSh0cnVlKS50aGVuKChhY2NvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNiKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYihlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbldpdGhUb2tlbihqd3QsIHJlbWVtYmVyTWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmVyUHJvdmlkZXIubG9naW5XaXRoVG9rZW4oand0LCByZW1lbWJlck1lKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmVyUHJvdmlkZXIubG9nb3V0KCkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuYXV0aGVudGljYXRlKG51bGwpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlc3Npb25TZXJ2ZXJQcm92aWRlciB9IGZyb20gJy4uL2F1dGgvYXV0aC1zZXNzaW9uLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5PQXV0aDJTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZlclByb3ZpZGVyOiBBdXRoU2Vzc2lvblNlcnZlclByb3ZpZGVyXHJcbiAgICApIHt9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgbGV0IHBvcnQgPSAobG9jYXRpb24ucG9ydCA/ICc6JyArIGxvY2F0aW9uLnBvcnQgOiAnJyk7XHJcbiAgICAgICAgaWYgKHBvcnQgPT09ICc6OTAwMCcpIHtcclxuICAgICAgICAgICAgcG9ydCA9ICc6ODc2MSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLy8nICsgbG9jYXRpb24uaG9zdG5hbWUgKyBwb3J0ICsgJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZlclByb3ZpZGVyLmxvZ291dCgpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmF1dGhlbnRpY2F0ZShudWxsKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9vYXV0aDIvbG9naW4tb2F1dGgyLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZ3JvdXBCeSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyb3VwQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKGNvbGxlY3Rpb246IE9iamVjdFtdICwgdGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBbXTtcclxuXHJcbiAgICAgICAgY29sbGVjdGlvbi5mb3JFYWNoKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5VmFsID0gdGhpcy5kZWVwRmluZChjb2wsIHRlcm0pO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG5ld1ZhbHVlLmZpbmRJbmRleCggKG15T2JqKSA9PiBteU9iai5rZXkgPT09IGtleVZhbCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVtpbmRleF0udmFsdWUucHVzaChjb2wpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWUucHVzaCh7a2V5OiBrZXlWYWwsIHZhbHVlOiBbY29sXX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVlcEZpbmQob2JqLCBwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aHMgPSBwYXRoLnRvU3RyaW5nKCkuc3BsaXQoL1suXFxbXFxdXS8pO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gb2JqO1xyXG5cclxuICAgICAgICBwYXRocy5mb3JFYWNoKChvbmVQYXRoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvbmVQYXRoICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50W29uZVBhdGhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbb25lUGF0aF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY3VycmVudDtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcGlwZS9ncm91cC1ieS5waXBlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBuZ2JEcm9wZG93bj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgdGltZXNcXFwiIFtuZ0NsYXNzXT1cXFwiY2xhc3NUaW1lKClcXFwiIGlkPVxcXCJyZWZyZXNoTWVudVxcXCIgbmdiRHJvcGRvd25Ub2dnbGU+ICZuYnNwOyA8c3BhbiBjbGFzcz1cXFwidGltZXMtdGV4dFxcXCIgW2lubmVySFRNTF09XFxcImdldEFjdGl2ZVJlZnJlc2hUaW1lKClcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwicmVmcmVzaE1lbnVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24taGVhZGVyXFxcIj5SZWZyZXNoIHRpbWVzIChpbiBzZWNvbmRzKTwvc3Bhbj4gPGRpdiAqbmdGb3I9XFxcImxldCB0aW1lIG9mIHJlZnJlc2hUaW1lc1xcXCI+IDxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIChjbGljayk9XFxcInNldEFjdGl2ZVJlZnJlc2hUaW1lKHRpbWUpO1xcXCIgW25nQ2xhc3NdPVxcXCJzdGF0ZVRpbWUodGltZSlcXFwiPiA8c3BhbiAqbmdJZj1cXFwidGltZSA+IDA7IGVsc2UgZGlzYWJsZWRUZW1wbGF0ZVxcXCI+e3t0aW1lfX08L3NwYW4+IDxuZy10ZW1wbGF0ZSAjZGlzYWJsZWRUZW1wbGF0ZT5kaXNhYmxlZDwvbmctdGVtcGxhdGU+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tZGl2aWRlclxcXCI+PC9kaXY+IDxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW0gbWFudWFsLXJlZnJlc2hcXFwiIChjbGljayk9XFxcIm1hbnVhbFJlZnJlc2goKVxcXCI+IFJlZnJlc2ggbm93ICZuYnNwOzxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZWZyZXNoXFxcIj48L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcmVmcmVzaC9yZWZyZXNoLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3JlZnJlc2gvcmVmcmVzaC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVmcmVzaC1zZWxlY3Rvci5jb21wb25lbnQuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yZWZyZXNoL3JlZnJlc2gtc2VsZWN0b3IuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcmVmcmVzaC9yZWZyZXNoLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBKaGlSZWZyZXNoU2VydmljZSB9IGZyb20gJy4vcmVmcmVzaC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdqaGktcmVmcmVzaC1zZWxlY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVmcmVzaC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAncmVmcmVzaC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcydcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEpoaVJlZnJlc2hTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBhY3RpdmVSZWZyZXNoVGltZTogbnVtYmVyO1xyXG4gICAgcmVmcmVzaFRpbWVzOiBudW1iZXJbXTtcclxuICAgIHJlZnJlc2hUaW1lcjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcmVmcmVzaENoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlZnJlc2hTZXJ2aWNlOiBKaGlSZWZyZXNoU2VydmljZSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFRpbWVzID0gWzAsIDUsIDEwLCAzMCwgNjAsIDMwMF07XHJcbiAgICAgICAgdGhpcy5hY3RpdmVSZWZyZXNoVGltZSA9IHRoaXMucmVmcmVzaFRpbWVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUmVmcmVzaFRpbWUgPSB0aGlzLnJlZnJlc2hTZXJ2aWNlLmdldFNlbGVjdGVkUmVmcmVzaFRpbWUoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5yZWZyZXNoU2VydmljZS5yZWZyZXNoQ2hhbmdlZCQuc3Vic2NyaWJlKChlbXB0eSkgPT4gdGhpcy5sYXVuY2hUaW1lcih0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5sYXVuY2hUaW1lcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLyoqIHByZXZlbnQgbWVtb3J5IGxlYWsgd2hlbiBjb21wb25lbnQgZGVzdHJveWVkICoqL1xyXG4gICAgICAgIHRoaXMucmVmcmVzaENoYW5nZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICBpZiAodGhpcy5yZWZyZXNoVGltZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGltZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFudWFsUmVmcmVzaCgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hTZXJ2aWNlLnJlZnJlc2hSZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2hhbmdlIGFjdGl2ZSB0aW1lIG9ubHkgaWYgZXhpc3RzLCBlbHNlIDAgKiovXHJcbiAgICBzZXRBY3RpdmVSZWZyZXNoVGltZSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGltZSAmJiB0aGlzLnJlZnJlc2hUaW1lcy5maW5kSW5kZXgoKHQpID0+IHQgPT09IHRpbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVJlZnJlc2hUaW1lID0gdGltZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVJlZnJlc2hUaW1lID0gdGhpcy5yZWZyZXNoVGltZXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmcmVzaFNlcnZpY2Uuc3RvcmVTZWxlY3RlZFJlZnJlc2hUaW1lKHRpbWUpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFNlcnZpY2UucmVmcmVzaENoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogSW5pdCB0aGUgdGltZXIgKiovXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmVmcmVzaFRpbWUgJiYgdGhpcy5hY3RpdmVSZWZyZXNoVGltZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGltZXIgPSBPYnNlcnZhYmxlLmludGVydmFsKHRoaXMuYWN0aXZlUmVmcmVzaFRpbWUgKiAxMDAwKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoU2VydmljZS5yZWZyZXNoUmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogTGF1bmNoIChvciByZWxhdW5jaCBpZiB0cnVlKSB0aGUgdGltZXIuICoqL1xyXG4gICAgbGF1bmNoVGltZXIocmVsYXVuY2g6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAocmVsYXVuY2ggJiYgdGhpcy5yZWZyZXNoVGltZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGltZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkgUEFSVFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gICAgY2xhc3NUaW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmVmcmVzaFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ZhIGZhLXBhdXNlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1yZXBlYXQnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlVGltZSh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aW1lID09PSB0aGlzLmFjdGl2ZVJlZnJlc2hUaW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYWN0aXZlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZlUmVmcmVzaFRpbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVSZWZyZXNoVGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZGlzYWJsZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVSZWZyZXNoVGltZSArICcgc2VjLic7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3JlZnJlc2gvcmVmcmVzaC1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcclxuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSmhpUmVmcmVzaFNlcnZpY2Uge1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUgc291cmNlc1xyXG4gICAgcHJpdmF0ZSByZWZyZXNoQ2hhbmdlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIHByaXZhdGUgcmVmcmVzaFJlbG9hZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIHJlZnJlc2hDaGFuZ2VkJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcmVmcmVzaFJlbG9hZCQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXHJcbiAgICAgICAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTogU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDaGFuZ2VkJCA9IHRoaXMucmVmcmVzaENoYW5nZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUmVsb2FkJCA9IHRoaXMucmVmcmVzaFJlbG9hZFNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDaGFuZ2VkU291cmNlLm5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFJlbG9hZFNvdXJjZS5uZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRSZWZyZXNoVGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdyZWZyZXNoVGltZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlU2VsZWN0ZWRSZWZyZXNoVGltZSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNlc3Npb25TdG9yYWdlLnN0b3JlKCdyZWZyZXNoVGltZScsIHRpbWUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yZWZyZXNoL3JlZnJlc2guc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3V0ZS1zZWxlY3RvciBjb2wteGwtMTIgZC1pbmxpbmUtZmxleFxcXCIgKm5nSWY9XFxcInJvdXRlc1xcXCI+IDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBuZ2JEcm9wZG93biAjZHJvcElkPVxcXCJuZ2JEcm9wZG93blxcXCI+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XFxcIiBpZD1cXFwic29ydE1lbnVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIFtpbm5lckhUTUxdPVxcXCJnZXRBY3RpdmVSb3V0ZSgpXFxcIj48L2J1dHRvbj4gPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzb3J0TWVudVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgKGNsaWNrKT1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXFxcIj4gPHAgY2xhc3M9XFxcImQtZmxleFxcXCI+IDxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgZC1mbGV4IHNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBhbiBhcHBsaWNhdGlvbi4uLlxcXCIgWyhuZ01vZGVsKV09XFxcInNlYXJjaGVkSW5zdGFuY2VcXFwiIChjbGljayk9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCIgKGlucHV0KT1cXFwic2VhcmNoQnlBcHBOYW1lKCRldmVudClcXFwiPiA8L3A+IDxkaXYgKm5nRm9yPVxcXCJsZXQgYXBwIG9mIHJvdXRlcyB8IGdyb3VwQnkgOiAnYXBwTmFtZSdcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24taGVhZGVyXFxcIiAoY2xpY2spPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPnt7YXBwLmtleX19PC9zcGFuPiA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiAqbmdGb3I9XFxcImxldCByb3V0ZSBvZiBhcHAudmFsdWVcXFwiIChjbGljayk9XFxcInNldEFjdGl2ZVJvdXRlKHJvdXRlKTsgY2xvc2VEcm9wRG93bihkcm9wSWQpO1xcXCIgW25nQ2xhc3NdPVxcXCJzdGF0ZShyb3V0ZSlcXFwiPiA8c3Bhbj57e3JvdXRlLmFwcE5hbWUgfCB1cHBlcmNhc2V9fSB7e3JvdXRlLnNlcnZpY2VJZCA/ICcoJyArIHJvdXRlLnNlcnZpY2VJZCArICcpJyA6ICcnIH19PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBmb250LXdlaWdodC1ub3JtYWxcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QmFkZ2VDbGFzc1JvdXRlKHJvdXRlKVxcXCI+IHt7cm91dGUuc3RhdHVzfX0gPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGpoaS1yZWZyZXNoLXNlbGVjdG9yPjwvamhpLXJlZnJlc2gtc2VsZWN0b3I+IDxwICpuZ0lmPVxcXCJ1cGRhdGluZ1JvdXRlcyAmJiAoIXJvdXRlcyB8fCByb3V0ZXMubGVuZ3RoID09IDApXFxcIj5Mb2FkaW5nLi4uPC9wPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yb3V0ZXMvcm91dGUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcm91dGVzL3JvdXRlLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yb3V0ZS1zZWxlY3Rvci5jb21wb25lbnQuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yb3V0ZXMvcm91dGUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcm91dGVzL3JvdXRlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuaW1wb3J0IHsgSmhpUm91dGVzU2VydmljZSB9IGZyb20gJy4vcm91dGVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vcm91dGUubW9kZWwnO1xyXG5pbXBvcnQgeyBOZ2JEcm9wZG93biB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgSmhpUmVmcmVzaFNlcnZpY2UgfSBmcm9tICcuLi9yZWZyZXNoL3JlZnJlc2guc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnamhpLXJvdXRlLXNlbGVjdG9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9yb3V0ZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAncm91dGUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKaGlSb3V0ZVNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGFjdGl2ZVJvdXRlOiBSb3V0ZTtcclxuICAgIHJvdXRlczogUm91dGVbXTtcclxuICAgIHNhdmVkUm91dGVzOiBSb3V0ZVtdO1xyXG4gICAgdXBkYXRpbmdSb3V0ZXM6IGJvb2xlYW47XHJcbiAgICBzZWFyY2hlZEluc3RhbmNlID0gJyc7XHJcbiAgICByb3V0ZVJlbG9hZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcm91dGVEb3duU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgcmVmcmVzaFJlbG9hZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVzU2VydmljZTogSmhpUm91dGVzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlZnJlc2hTZXJ2aWNlOiBKaGlSZWZyZXNoU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUm91dGUgPSB0aGlzLnJvdXRlc1NlcnZpY2UuZ2V0U2VsZWN0ZWRJbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlKCk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUmVsb2FkU3Vic2NyaXB0aW9uID0gdGhpcy5yZWZyZXNoU2VydmljZS5yZWZyZXNoUmVsb2FkJC5zdWJzY3JpYmUoKHJlbG9hZCkgPT4gdGhpcy51cGRhdGVSb3V0ZSgpKTtcclxuICAgICAgICB0aGlzLnJvdXRlUmVsb2FkU3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZXNTZXJ2aWNlLnJvdXRlUmVsb2FkJC5zdWJzY3JpYmUoKHJlbG9hZCkgPT4gdGhpcy51cGRhdGVSb3V0ZSgpKTtcclxuICAgICAgICB0aGlzLnJvdXRlRG93blN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVzU2VydmljZS5yb3V0ZURvd24kLnN1YnNjcmliZSgocm91dGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kb3duUm91dGUocm91dGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVJvdXRlKG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIC8qKiBwcmV2ZW50IG1lbW9yeSBsZWFrIHdoZW4gY29tcG9uZW50IGRlc3Ryb3llZCAqKi9cclxuICAgICAgICB0aGlzLnJvdXRlUmVsb2FkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZURvd25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hSZWxvYWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2hhbmdlIGFjdGl2ZSByb3V0ZSBvbmx5IGlmIGV4aXN0cywgZWxzZSBjaG9vc2UgUmVnaXN0cnkgKiovXHJcbiAgICBzZXRBY3RpdmVSb3V0ZShpbnN0YW5jZTogUm91dGUpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UgJiYgdGhpcy5yb3V0ZXMgJiYgdGhpcy5yb3V0ZXMuZmluZEluZGV4KChyKSA9PiByLmFwcE5hbWUgPT09IGluc3RhbmNlLmFwcE5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVJvdXRlID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdXRlcyAmJiB0aGlzLnJvdXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUm91dGUgPSB0aGlzLnJvdXRlc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZXNTZXJ2aWNlLnN0b3JlU2VsZWN0ZWRJbnN0YW5jZSh0aGlzLmFjdGl2ZVJvdXRlKTtcclxuICAgICAgICB0aGlzLnJvdXRlc1NlcnZpY2Uucm91dGVDaGFuZ2UodGhpcy5hY3RpdmVSb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVSb3V0ZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0aW5nUm91dGVzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJvdXRlc1NlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZSgocm91dGVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRSb3V0ZXMgPSByb3V0ZXM7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaGVkSW5zdGFuY2UgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVJvdXRlKSB7IC8qKiBpbiBjYXNlIG9mIG5ldyByZWZyZXNoIGNhbGwgKiovXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVJvdXRlKHRoaXMuYWN0aXZlUm91dGUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVJvdXRlKHJvdXRlc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGluZ1JvdXRlcyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA1MDMgfHwgZXJyb3Iuc3RhdHVzID09PSA1MDAgfHwgZXJyb3Iuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDUwMCB8fCBlcnJvci5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG93blJvdXRlKHRoaXMuYWN0aXZlUm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUm91dGUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0aW5nUm91dGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvd25Sb3V0ZShpbnN0YW5jZTogUm91dGUpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2Uuc3RhdHVzID0gJ0RPV04nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkgUEFSVFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gICAgZ2V0QWN0aXZlUm91dGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlUm91dGUuc2VydmljZUlkID8gdGhpcy5hY3RpdmVSb3V0ZS5zZXJ2aWNlSWQudG9VcHBlckNhc2UoKSA6IHRoaXMuYWN0aXZlUm91dGUuYXBwTmFtZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJhZGdlQ2xhc3NSb3V0ZShyb3V0ZTogUm91dGUpIHtcclxuICAgICAgICBpZiAocm91dGUgJiYgIXJvdXRlLnN0YXR1cykge1xyXG4gICAgICAgICAgICByb3V0ZS5zdGF0dXMgPSAnVVAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYWRnZUNsYXNzKHJvdXRlLnN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCYWRnZUNsYXNzKHN0YXR1c1N0YXRlKSB7XHJcbiAgICAgICAgaWYgKHN0YXR1c1N0YXRlICYmIChzdGF0dXNTdGF0ZSA9PT0gJ1VQJyB8fCBzdGF0dXNTdGF0ZS50b0xvd2VyQ2FzZSgpID09PSAnc3RhcnRpbmcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLXN1Y2Nlc3MnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2UtZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUocm91dGU6IFJvdXRlKSB7XHJcbiAgICAgICAgaWYgKHJvdXRlICYmIHJvdXRlLnN0YXR1cyAmJiByb3V0ZS5zdGF0dXMgPT09ICdET1dOJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Rpc2FibGVkJztcclxuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlICYmIHJvdXRlLnNlcnZpY2VJZCA9PT0gdGhpcy5hY3RpdmVSb3V0ZS5zZXJ2aWNlSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hCeUFwcE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoZWRJbnN0YW5jZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXMgPSB0aGlzLnNhdmVkUm91dGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVzID0gdGhpcy5zYXZlZFJvdXRlcy5maWx0ZXIoKHJvdXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGUuYXBwTmFtZS5pbmNsdWRlcyh0aGlzLnNlYXJjaGVkSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSB0aGUgZHJvcGRvd24gZWxlbWVudC5cclxuICAgICAqIFRoZSBkcm9wZG93biBjYW4gYmUgY2xvc2VkIGRpcmVjdGx5IGluIHRoZSBIVE1MLCBidXQgY2F1c2UgdGhlIHdhcm5pbmdcclxuICAgICAqIChcIlRoZSBtZXRob2QgXCJkcm9wXCIgdGhhdCB5b3UncmUgdHJ5aW5nIHRvIGFjY2VzcyBkb2VzIG5vdCBleGlzdCBpbiB0aGUgY2xhc3MgZGVjbGFyYXRpb24uXCIpLlxyXG4gICAgICogQHBhcmFtIGRyb3Bkb3duXHJcbiAgICAgKi9cclxuICAgIGNsb3NlRHJvcERvd24oZHJvcGRvd246IE5nYkRyb3Bkb3duKSB7XHJcbiAgICAgICAgaWYgKGRyb3Bkb3duKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yb3V0ZXMvcm91dGUtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIFJvdXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBwYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHByZWZpeDogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBhcHBOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHN0YXR1czogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBzZXJ2aWNlSWQ6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgc2VydmljZUluc3RhbmNlczogYW55W11cclxuICAgICkgeyB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcm91dGVzL3JvdXRlLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vcm91dGUubW9kZWwnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKaGlSb3V0ZXNTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHNvdXJjZXNcclxuICAgIHByaXZhdGUgcm91dGVDaGFuZ2VkU291cmNlID0gbmV3IFN1YmplY3Q8Um91dGU+KCk7XHJcbiAgICBwcml2YXRlIHJvdXRlRG93blNvdXJjZSA9IG5ldyBTdWJqZWN0PFJvdXRlPigpO1xyXG4gICAgcHJpdmF0ZSByb3V0ZVJlbG9hZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICByb3V0ZUNoYW5nZWQkOiBPYnNlcnZhYmxlPFJvdXRlPjtcclxuICAgIHJvdXRlRG93biQ6IE9ic2VydmFibGU8Um91dGU+O1xyXG4gICAgcm91dGVSZWxvYWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcclxuICAgICAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucm91dGVDaGFuZ2VkJCA9IHRoaXMucm91dGVDaGFuZ2VkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIHRoaXMucm91dGVEb3duJCA9IHRoaXMucm91dGVEb3duU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIHRoaXMucm91dGVSZWxvYWQkID0gdGhpcy5yb3V0ZVJlbG9hZFNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQWxsKCk6IE9ic2VydmFibGU8Um91dGVbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3JvdXRlcycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVDaGFuZ2Uocm91dGU6IFJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZUNoYW5nZWRTb3VyY2UubmV4dChyb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsb2FkUm91dGVzKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVSZWxvYWRTb3VyY2UubmV4dCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZURvd24ocm91dGU6IFJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZURvd25Tb3VyY2UubmV4dChyb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgnaW5zdGFuY2VJZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlU2VsZWN0ZWRJbnN0YW5jZShpbnN0YW5jZSkge1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2Uuc3RvcmUoJ2luc3RhbmNlSWQnLCBpbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3JvdXRlcy9yb3V0ZXMuc2VydmljZS50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBTYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xyXG5pbXBvcnQgeyBHcm91cEJ5UGlwZSB9IGZyb20gJy4vcGlwZS9ncm91cC1ieS5waXBlJztcclxuaW1wb3J0IHtcclxuICAgIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRMaWJzTW9kdWxlLFxyXG4gICAgSmhpQWxlcnRDb21wb25lbnQsXHJcbiAgICBKaGlBbGVydEVycm9yQ29tcG9uZW50LFxyXG4gICAgSmhpUm91dGVTZWxlY3RvckNvbXBvbmVudCxcclxuICAgIEpoaVJlZnJlc2hTZWxlY3RvckNvbXBvbmVudFxyXG59IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydFNlcnZpY2VQcm92aWRlcihzYW5pdGl6ZXI6IFNhbml0aXplcikge1xyXG4gICAgLy8gc2V0IGJlbG93IHRvIHRydWUgdG8gbWFrZSBhbGVydHMgbG9vayBsaWtlIHRvYXN0XHJcbiAgICBjb25zdCBpc1RvYXN0ID0gZmFsc2U7XHJcbiAgICByZXR1cm4gbmV3IEFsZXJ0U2VydmljZShzYW5pdGl6ZXIsIGlzVG9hc3QpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRMaWJzTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSmhpQWxlcnRDb21wb25lbnQsXHJcbiAgICAgICAgSmhpQWxlcnRFcnJvckNvbXBvbmVudCxcclxuICAgICAgICBKaGlSb3V0ZVNlbGVjdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIEpoaVJlZnJlc2hTZWxlY3RvckNvbXBvbmVudCxcclxuICAgICAgICBHcm91cEJ5UGlwZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogQWxlcnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiBhbGVydFNlcnZpY2VQcm92aWRlcixcclxuICAgICAgICAgICAgZGVwczogW1Nhbml0aXplcl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFRpdGxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRMaWJzTW9kdWxlLFxyXG4gICAgICAgIEpoaUFsZXJ0Q29tcG9uZW50LFxyXG4gICAgICAgIEpoaUFsZXJ0RXJyb3JDb21wb25lbnQsXHJcbiAgICAgICAgSmhpUm91dGVTZWxlY3RvckNvbXBvbmVudCxcclxuICAgICAgICBKaGlSZWZyZXNoU2VsZWN0b3JDb21wb25lbnQsXHJcbiAgICAgICAgR3JvdXBCeVBpcGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRDb21tb25Nb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLWNvbW1vbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5nSmhpcHN0ZXJNb2R1bGUgfSBmcm9tICduZy1qaGlwc3Rlcic7XHJcbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsTW9kdWxlIH0gZnJvbSAnbmd4LWluZmluaXRlLXNjcm9sbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5nYk1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgTmdKaGlwc3Rlck1vZHVsZS5mb3JSb290KHtcclxuICAgICAgICB9KSxcclxuICAgICAgICBJbmZpbml0ZVNjcm9sbE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOZ2JNb2R1bGUsXHJcbiAgICAgICAgTmdKaGlwc3Rlck1vZHVsZSxcclxuICAgICAgICBJbmZpbml0ZVNjcm9sbE1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSkhpcHN0ZXJSZWdpc3RyeVNoYXJlZExpYnNNb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLWxpYnMubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgSkhpcHN0ZXJSZWdpc3RyeVNoYXJlZExpYnNNb2R1bGUsXHJcbiAgICBKSGlwc3RlclJlZ2lzdHJ5U2hhcmVkQ29tbW9uTW9kdWxlLFxyXG4gICAgQ1NSRlNlcnZpY2UsXHJcbiAgICBBdXRoU2VydmVyUHJvdmlkZXIsXHJcbiAgICBBdXRoU2Vzc2lvblNlcnZlclByb3ZpZGVyLFxyXG4gICAgQWNjb3VudFNlcnZpY2UsXHJcbiAgICBVc2VyU2VydmljZSxcclxuICAgIFN0YXRlU3RvcmFnZVNlcnZpY2UsXHJcbiAgICBMb2dpblNlcnZpY2UsXHJcbiAgICBMb2dpbk1vZGFsU2VydmljZSxcclxuICAgIExvZ2luT0F1dGgyU2VydmljZSxcclxuICAgIFByaW5jaXBhbCxcclxuICAgIEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZSxcclxuICAgIEpoaUxvZ2luTW9kYWxDb21wb25lbnQsXHJcbiAgICBKaGlSb3V0ZXNTZXJ2aWNlLFxyXG4gICAgSmhpUmVmcmVzaFNlcnZpY2VcclxufSBmcm9tICcuLyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRMaWJzTW9kdWxlLFxyXG4gICAgICAgIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBKaGlMb2dpbk1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEpoaVJvdXRlc1NlcnZpY2UsXHJcbiAgICAgICAgSmhpUmVmcmVzaFNlcnZpY2UsXHJcbiAgICAgICAgQXV0aFNlcnZlclByb3ZpZGVyLFxyXG4gICAgICAgIEF1dGhTZXNzaW9uU2VydmVyUHJvdmlkZXIsXHJcbiAgICAgICAgQ29va2llU2VydmljZSxcclxuICAgICAgICBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgTG9naW5Nb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgTG9naW5PQXV0aDJTZXJ2aWNlLFxyXG4gICAgICAgIEFjY291bnRTZXJ2aWNlLFxyXG4gICAgICAgIFN0YXRlU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgUHJpbmNpcGFsLFxyXG4gICAgICAgIENTUkZTZXJ2aWNlLFxyXG4gICAgICAgIEF1dGhTZXJ2ZXJQcm92aWRlcixcclxuICAgICAgICBVc2VyU2VydmljZSxcclxuICAgICAgICBEYXRlUGlwZVxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW0poaUxvZ2luTW9kYWxDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSmhpTG9naW5Nb2RhbENvbXBvbmVudCxcclxuICAgICAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUsXHJcbiAgICAgICAgRGF0ZVBpcGVcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKSGlwc3RlclJlZ2lzdHJ5U2hhcmVkTW9kdWxlIHt9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJleHBvcnQgY2xhc3MgQWNjb3VudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgYWN0aXZhdGVkOiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyBhdXRob3JpdGllczogc3RyaW5nW10sXHJcbiAgICAgICAgcHVibGljIGVtYWlsOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBsYW5nS2V5OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGxvZ2luOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGltYWdlVXJsOiBzdHJpbmdcclxuICAgICkgeyB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci9hY2NvdW50Lm1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgcHVibGljIGlkPzogYW55O1xyXG4gICAgcHVibGljIGxvZ2luPzogc3RyaW5nO1xyXG4gICAgcHVibGljIGZpcnN0TmFtZT86IHN0cmluZztcclxuICAgIHB1YmxpYyBsYXN0TmFtZT86IHN0cmluZztcclxuICAgIHB1YmxpYyBlbWFpbD86IHN0cmluZztcclxuICAgIHB1YmxpYyBhY3RpdmF0ZWQ/OiBCb29sZWFuO1xyXG4gICAgcHVibGljIGxhbmdLZXk/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXV0aG9yaXRpZXM/OiBhbnlbXTtcclxuICAgIHB1YmxpYyBjcmVhdGVkQnk/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY3JlYXRlZERhdGU/OiBEYXRlO1xyXG4gICAgcHVibGljIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nO1xyXG4gICAgcHVibGljIGxhc3RNb2RpZmllZERhdGU/OiBEYXRlO1xyXG4gICAgcHVibGljIHBhc3N3b3JkPzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGlkPzogYW55LFxyXG4gICAgICAgIGxvZ2luPzogc3RyaW5nLFxyXG4gICAgICAgIGZpcnN0TmFtZT86IHN0cmluZyxcclxuICAgICAgICBsYXN0TmFtZT86IHN0cmluZyxcclxuICAgICAgICBlbWFpbD86IHN0cmluZyxcclxuICAgICAgICBhY3RpdmF0ZWQ/OiBCb29sZWFuLFxyXG4gICAgICAgIGxhbmdLZXk/OiBzdHJpbmcsXHJcbiAgICAgICAgYXV0aG9yaXRpZXM/OiBhbnlbXSxcclxuICAgICAgICBjcmVhdGVkQnk/OiBzdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlZERhdGU/OiBEYXRlLFxyXG4gICAgICAgIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nLFxyXG4gICAgICAgIGxhc3RNb2RpZmllZERhdGU/OiBEYXRlLFxyXG4gICAgICAgIHBhc3N3b3JkPzogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQgPyBpZCA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2dpbiA9IGxvZ2luID8gbG9naW4gOiBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lID8gZmlyc3ROYW1lIDogbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWUgPyBsYXN0TmFtZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsID8gZW1haWwgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkID0gYWN0aXZhdGVkID8gYWN0aXZhdGVkIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYW5nS2V5ID0gbGFuZ0tleSA/IGxhbmdLZXkgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBhdXRob3JpdGllcyA/IGF1dGhvcml0aWVzIDogbnVsbDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRCeSA9IGNyZWF0ZWRCeSA/IGNyZWF0ZWRCeSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkRGF0ZSA9IGNyZWF0ZWREYXRlID8gY3JlYXRlZERhdGUgOiBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdE1vZGlmaWVkQnkgPSBsYXN0TW9kaWZpZWRCeSA/IGxhc3RNb2RpZmllZEJ5IDogbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RNb2RpZmllZERhdGUgPSBsYXN0TW9kaWZpZWREYXRlID8gbGFzdE1vZGlmaWVkRGF0ZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkID8gcGFzc3dvcmQgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgcmVzb3VyY2VVcmwgPSAnYXBpL3VzZXJzJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGNyZWF0ZSh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJlc291cmNlVXJsLCB1c2VyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodXNlcjogVXNlcik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnJlc291cmNlVXJsLCB1c2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKGxvZ2luOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnJlc291cmNlVXJsfS8ke2xvZ2lufWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnkocmVxPzogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIGlmIChyZXEpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnNldCgncGFnZScsIHJlcS5wYWdlKTtcclxuICAgICAgICAgICAgcGFyYW1zLnNldCgnc2l6ZScsIHJlcS5zaXplKTtcclxuICAgICAgICAgICAgaWYgKHJlcS5zb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucGFyYW1zTWFwLnNldCgnc29ydCcsIHJlcS5zb3J0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnJlc291cmNlVXJsLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUobG9naW46IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnJlc291cmNlVXJsfS8ke2xvZ2lufWApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2E4NTRlNmQwNzg1YmE0YjlkNzE1MDQ5YzBiZGJjYjMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjZDNhMWQ3ODJlODViYTM3Njc3YzFhMjA5OWJjMDAyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTMwZGViMjZiNGViMTUyMTQzMzAyMWUzMjZjYmNjMmMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL0Bhbmd1bGFyL2NvcmUuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvT2JzZXJ2YWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSgyMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3ViamVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL0Bhbmd1bGFyL2NvbW1vbi5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9AYW5ndWxhci9mb3Jtcy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMTk3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMjAwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMjA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmd4LWluZmluaXRlLXNjcm9sbC9tb2R1bGVzL25neC1pbmZpbml0ZS1zY3JvbGwuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDIwNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vc3JjL21haW4vd2ViYXBwL2FwcC92ZW5kb3IudHMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMjA5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg4MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvUnguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL0Bhbmd1bGFyL2h0dHAuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMjAyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmctamhpcHN0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSgxOTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvQGFuZ3VsYXIvcm91dGVyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDE5OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMjAzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXdlYnN0b3JhZ2UvZGlzdC9hcHAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9