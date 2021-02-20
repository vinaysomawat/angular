(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");


var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"],
        children: [
            { path: ':category', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"] }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* =======================================================\r\n*\r\n* \tTemplate Style \r\n*\tEdit this section\r\n*\r\n* ======================================================= */\r\n\r\nbody {\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-weight: 400;\r\n\tfont-size: 15px;\r\n\tline-height: 1.8;\r\n\tcolor: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n\tbody {\r\n\t\tfont-size: 16px;\r\n\t}\r\n\th2 {\r\n\t\ttext-align: center;\r\n\t}\r\n\tcanvas {\r\n\t\tbackground: #EEE;\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t}\r\n}\r\n\r\ncanvas {\r\n\tbackground: #EEE;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\n\r\na {\r\n\tcolor: #2c98f0;\r\n\ttransition: 0.5s;\r\n}\r\n\r\na:hover,\r\na:active,\r\na:focus {\r\n\tcolor: #2c98f0;\r\n\toutline: none;\r\n\ttext-decoration: none !important;\r\n}\r\n\r\np {\r\n\tmargin-bottom: 1.5em;\r\n\tcolor: black;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nx {\r\n\tmargin-bottom: 1.5em;\r\n\tbackground-color: darkkhaki;\r\n\tcolor: black;\r\n\t-webkit-backface-visibility: visible;\r\n\t        backface-visibility: visible;\r\n}\r\n\r\nh1,\r\nh4,\r\nh5,\r\nh6 {\r\n\tcolor: #000;\r\n\tfont-family: \"Playfair Display\", Georgia, serif;\r\n\tfont-weight: 400;\r\n\tmargin: 0 0 30px 0;\r\n}\r\n\r\nh2 {\r\n\tcolor: #000;\r\n\tfont-family: \"Playfair Display\", Georgia, serif;\r\n\tfont-weight: 200;\r\n\tmargin: 0 0 20px 0;\r\n}\r\n\r\nh3 {\r\n\tcolor: #000;\r\n\tfont-family: \"Playfair Display\", Georgia, serif;\r\n\tfont-weight: 200;\r\n\tmargin: 0 0 30px 0;\r\n}\r\n\r\nfigure {\r\n\tmargin-bottom: 2.5em;\r\n\tfloat: left;\r\n\twidth: 100%;\r\n}\r\n\r\nfigure figcaption {\r\n\tfont-size: 16px;\r\n\twidth: 80%;\r\n\tmargin: 20px auto 0px auto;\r\n\tcolor: #b3b3b3;\r\n\tfont-style: italic;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n\tfigure figcaption {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\n::-webkit-selection {\r\n\tcolor: #fff;\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n::-moz-selection {\r\n\tcolor: #fff;\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n::selection {\r\n\tcolor: #fff;\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n#colorlib-page {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n}\r\n\r\n#colorlib-aside {\r\n\tpadding-top: 3em;\r\n\tpadding-bottom: 1px;\r\n\tfloat: left;\r\n\twidth: 300px;\r\n\tposition: fixed;\r\n\tz-index: 1001;\r\n\tbackground-color: #f9bf3f;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-aside {\r\n\t\twidth: 300px;\r\n\t\t-webkit-transform: translateX(-300px);\r\n\t\ttransform: translateX(-300px);\r\n\t\tpadding-top: 4em;\r\n\t\tbackground-color: #f9bf3f;\r\n\t\theight: auto;\r\n\t}\r\n}\r\n\r\n#colorlib-aside .author-img {\r\n\twidth: 150px;\r\n\theight: 150px;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 30px;\r\n\tborder-radius: 50%;\r\n\tborder: 3px solid white;\r\n}\r\n\r\n#colorlib-aside h1 {\r\n\tcolor: #000;\r\n\tfont-family: 'Raleway', sans-serif;\r\n}\r\n\r\n#colorlib-aside .position {\r\n\tdisplay: block;\r\n\tmargin-bottom: 2em;\r\n\tfont-size: 12px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#colorlib-aside #colorlib-logo {\r\n\ttext-align: right;\r\n\tfont-weight: 700;\r\n\tfont-size: 30px;\r\n\tmargin-bottom: .5em;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\r\n\r\n#colorlib-aside #colorlib-logo a {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n\tpadding-right: .3em;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu .collapse {\r\n\tdisplay: block !important;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul {\r\n\ttext-align: center;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-aside #colorlib-main-menu ul {\r\n\t\tmargin: 0 0 2em 0;\r\n\t}\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li {\r\n\tmargin: 0 0 10px 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li a {\r\n\tcolor: rgba(0, 0, 0, 0.7);\r\n\ttext-decoration: none;\r\n\tposition: relative;\r\n\tpadding: 10px 0;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li a:after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\theight: 1px;\r\n\tbottom: 7px;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbackground-color: #2c98f0;\r\n\tvisibility: hidden;\r\n\t-webkit-transform: scaleX(0);\r\n\ttransform: scaleX(0);\r\n\ttransition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li a:hover {\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li a:hover:after {\r\n\tvisibility: visible;\r\n\t-webkit-transform: scaleX(1);\r\n\ttransform: scaleX(1);\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li.active a {\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li.active a:after {\r\n\tvisibility: visible;\r\n\t-webkit-transform: scaleX(1);\r\n\ttransform: scaleX(1);\r\n}\r\n\r\n#colorlib-aside .colorlib-footer {\r\n\tfont-size: 20px;\r\n\ttext-align: center;\r\n\tfont-weight: 400;\r\n\tcolor: rgba(0, 0, 0, 0.5);\r\n\tpadding: 0 20px;\r\n\twidth: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-aside .colorlib-footer {\r\n\t\tposition: fixed;\r\n\t\theight: auto;\r\n\t}\r\n}\r\n\r\n#colorlib-aside .colorlib-footer span {\r\n\tdisplay: block;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer ul {\r\n\tpadding: 0 20px;\r\n\tmargin: 0 0 10px 0;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer ul li {\r\n\tpadding: 0 20px;\r\n\tmargin: 0 0 10px 0;\r\n\tdisplay: inline;\r\n\tlist-style: none;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer h3 {\r\n\tfont-family: inherit;\r\n\tpadding: 4px;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer h3 a {\r\n\tcolor: #FF722C;\r\n\tfont-size: 18px;\r\n}\r\n\r\n#rcorners2 {\r\n\tborder-radius: 15px;\r\n\tbackground: black;\r\n\tpadding: 20px;\r\n\twidth: 50%;\r\n\theight: 40px;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer ul li a {\r\n\tcolor: rgba(255, 255, 255, 0.3);\r\n\tpadding: 4px;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer ul li a:hover,\r\n#colorlib-aside .colorlib-footer ul li a:active,\r\n#colorlib-aside .colorlib-footer ul li a:focus {\r\n\ttext-decoration: none;\r\n\toutline: none;\r\n\tcolor: black;\r\n}\r\n\r\n.container-wrap {\r\n\tmax-width: 1170px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n#colorlib-main {\r\n\twidth: calc(100% - 300px);\r\n\tfloat: right;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-main {\r\n\t\twidth: 100%;\r\n\t\tpadding: 0 1em;\r\n\t}\r\n}\r\n\r\n#colorlib-hero {\r\n\tmin-height: 500px;\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tmargin-bottom: 10em;\r\n\tclear: both;\r\n}\r\n\r\n#colorlib-hero .flexslider {\r\n\tborder: none;\r\n\tz-index: 1;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n#colorlib-hero .flexslider .slides {\r\n\tposition: relative;\r\n\toverflow: visible;\r\n}\r\n\r\n#colorlib-hero .flexslider .slides li {\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: bottom center;\r\n\tmin-height: 400px;\r\n\tposition: relative;\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-control-nav {\r\n\tbottom: 20px;\r\n\tz-index: 1000;\r\n\tleft: 20px;\r\n\tfloat: left;\r\n\twidth: auto;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .flex-control-nav {\r\n\t\tright: 20px;\r\n\t\ttop: 100px;\r\n\t}\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-control-nav li {\r\n\tdisplay: block;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-control-nav li a {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tbox-shadow: none;\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tcursor: pointer;\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-control-nav li a.flex-active {\r\n\tcursor: pointer;\r\n\tbackground: transparent;\r\n\tborder: 2px solid #2c98f0;\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-direction-nav {\r\n\tdisplay: none;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text {\r\n\tdisplay: table;\r\n\topacity: 0;\r\n\tmin-height: 500px;\r\n\tz-index: 9;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\tmin-height: 700px;\r\n\tpadding: 2.5em;\r\n\tposition: relative;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner {\r\n\t\ttext-align: center;\r\n\t}\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h1,\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h2 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tcolor: black;\r\n\tfont-family: \"Playfair Display\", Georgia, serif;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h1 {\r\n\tmargin-bottom: 20px;\r\n\tfont-size: 60px;\r\n\tline-height: 1.3;\r\n\tfont-weight: 700;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner h1 {\r\n\t\tfont-size: 28px;\r\n\t}\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h2 {\r\n\tfont-size: 10px;\r\n\tline-height: 1.5;\r\n\tmargin-bottom: 30px;\r\n\tfont-weight: 300;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h2 a {\r\n\tcolor: rgba(44, 152, 240, 0.8);\r\n\tborder-bottom: 1px solid rgba(44, 152, 240, 0.7);\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .heading-section {\r\n\tfont-size: 50px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner .heading-section {\r\n\t\tfont-size: 30px;\r\n\t}\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner s .colorlib-lead {\r\n\tfont-size: 20px;\r\n\tcolor: #fff;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner p {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn {\r\n\tfont-size: 12px;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tcolor: #000;\r\n\tpadding: 10px 15px !important;\r\n\tborder: none;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn.btn-learn {\r\n\tcolor: #000;\r\n\tborder: 1px solid #000;\r\n\tbackground: transparent !important;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn.btn-learn:hover {\r\n\tbackground: transparent !important;\r\n\tborder: 1px solid #000 !important;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\nbody.offcanvas {\r\n\toverflow-x: hidden;\r\n}\r\n\r\nbody.offcanvas #colorlib-aside {\r\n\t-webkit-transform: translateX(0);\r\n\ttransform: translateX(0);\r\n\twidth: 300px;\r\n\tbackground-color: #f9bf3f;\r\n\tz-index: 999;\r\n\tposition: fixed;\r\n}\r\n\r\nbody.offcanvas #colorlib-main,\r\nbody.offcanvas .colorlib-nav-toggle {\r\n\ttop: 0;\r\n\t-webkit-transform: translateX(300px);\r\n\ttransform: translateX(300px);\r\n}\r\n\r\n.colorlib-narrow-content {\r\n\tpadding: 0 4.5em;\r\n}\r\n\r\n@media screen and (max-width: 878px) {\r\n\t.colorlib-narrow-content {\r\n\t\twidth: 100%;\r\n\t\tpadding: 0 1em;\r\n\t}\r\n}\r\n\r\n.no-gutters {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.colorlib-experience,\r\n.colorlib-skills,\r\n.colorlib-education,\r\n.colorlib-blog,\r\n.colorlib-work,\r\n.colorlib-about,\r\n.colorlib-installation,\r\n.colorlib-services,\r\n.colorlib-footer,\r\n.colorlib-contact {\r\n\tpadding-top: 5em;\r\n\tpadding-bottom: 0em;\r\n\tclear: both;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.colorlib-experience,\r\n\t.colorlib-skills,\r\n\t.colorlib-education,\r\n\t.colorlib-blog,\r\n\t.colorlib-work,\r\n\t.colorlib-about,\r\n\t.colorlib-installation,\r\n\t.colorlib-services,\r\n\t.colorlib-contact {\r\n\t\tpadding-top: 2em;\r\n\t\tpadding-bottom: 0em;\r\n\t}\r\n}\r\n\r\n#colorlib-footer2 {\r\n\tbackground: black;\r\n\twidth: 100%;\r\n\tpadding-bottom: 3em;\r\n\tpadding-top: 2em;\r\n\tpadding-right: 2em;\r\n}\r\n\r\n#colorlib-footer2 .h2 {\r\n\tcolor: red;\r\n\ttext-align: center;\r\n}\r\n\r\n.author-img {\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n\tbackground-repeat: no-repeat;\r\n\tposition: relative;\r\n}\r\n\r\n.colorlib-heading {\r\n\tfont-size: 18px;\r\n\tmargin-bottom: 2em;\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 5px;\r\n\tline-height: 1.8;\r\n\tposition: relative;\r\n}\r\n\r\n.colorlib-heading span {\r\n\tdisplay: block;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.colorlib-heading {\r\n\t\tmargin-bottom: 2em;\r\n\t}\r\n}\r\n\r\n.heading-meta {\r\n\tmargin-bottom: 15px;\r\n\tdisplay: block;\r\n\tfont-size: 10px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #999999;\r\n\tfont-weight: 500;\r\n\tletter-spacing: 5px;\r\n}\r\n\r\n.about-img {\r\n\twidth: 100%;\r\n\theight: 600px;\r\n\tmargin-bottom: 10px;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.about-desc h3 {\r\n\tfont-size: 18px;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 5px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.about-desc h1 {\r\n\tfont-size: 38px;\r\n\tfont-weight: 400;\r\n\tfont-family: \"Montserrat\", Georgia, serif;\r\n}\r\n\r\n.hire {\r\n\tpadding: 2em;\r\n\tbackground: #f9bf3f;\r\n}\r\n\r\n.hire h2 {\r\n\tline-height: 1.5;\r\n}\r\n\r\n.hire .btn-hire {\r\n\tcolor: #000;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tbordeR: 1px solid #000;\r\n\tpadding: 2px 10px;\r\n}\r\n\r\n.fancy-collapse-panel .panel-default>.panel-heading {\r\n\tpadding: 0;\r\n}\r\n\r\n#projects {\r\n\tpadding: 50px 15px;\r\n\tborder-bottom: 1px solid #dcd9d9;\r\n\ttext-align: center\r\n}\r\n\r\n#projects h2 {\r\n\tcolor: #374054;\r\n\tmargin-bottom: 50px\r\n}\r\n\r\n.project {\r\n\tposition: relative;\r\n\tmax-width: 900px;\r\n\tmargin: 0 auto 30px auto;\r\n\toverflow: hidden;\r\n\tbackground: #fff;\r\n\tborder-radius: 4px\r\n}\r\n\r\n.project-image {\r\n\tfloat: left\r\n}\r\n\r\n.project-info {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\t-webkit-transform: translateY(-50%);\r\n\t        transform: translateY(-50%);\r\n\tmargin-left: 300px;\r\n\tpadding: 15px\r\n}\r\n\r\n.project-info h3 {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 300;\r\n\tcolor: #374054;\r\n\tmargin: 0 0 15px 0\r\n}\r\n\r\n.project-info p {\r\n\tcolor: #74808a;\r\n\tmargin: 0 0 15px 0;\r\n\tfont-size: 0.9em\r\n}\r\n\r\n.no-image .project-info {\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\tpadding: 30px 15px;\r\n\t-webkit-transform: none;\r\n\t        transform: none\r\n}\r\n\r\n#more-projects {\r\n\tdisplay: none\r\n}\r\n\r\n.panel-heading a {\r\n\tpadding: 20px 25px;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tfont-weight: 500;\r\n\tfont-size: 14px;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tbackground-color: #2c98f0;\r\n\tcolor: #fff;\r\n\tposition: relative;\r\n\t-ms-box-shadow: none !important;\r\n\t-o-box-shadow: none !important;\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n.panel {\r\n\t-ms-box-shadow: none !important;\r\n\t-o-box-shadow: none !important;\r\n\tbox-shadow: none !important;\r\n\tborder: none;\r\n}\r\n\r\n.panel-heading a:after {\r\n\tfont-family: \"icomoon\";\r\n\tcontent: \"\\e115\";\r\n\tposition: absolute;\r\n\tright: 20px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\ttop: 50%;\r\n\tline-height: 1;\r\n\tmargin-top: -7px;\r\n}\r\n\r\n.panel-heading a.collapsed:after {\r\n\tcontent: \"\\e114\";\r\n}\r\n\r\n.panel-heading a.collapsed {\r\n\tbackground: #f2f3f7;\r\n\tborder: 1px solid #e6e6e6 !important;\r\n\tcolor: #333333;\r\n}\r\n\r\n.panel-body {\r\n\tpadding: 1.5em;\r\n\tmargin-top: 5px;\r\n\tborder: 1px solid #e6e6e6 !important;\r\n}\r\n\r\n.timeline-centered {\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.timeline-centered:before,\r\n.timeline-centered:after {\r\n\tcontent: \" \";\r\n\tdisplay: table;\r\n}\r\n\r\n.timeline-centered:after {\r\n\tclear: both;\r\n}\r\n\r\n.timeline-centered:before,\r\n.timeline-centered:after {\r\n\tcontent: \" \";\r\n\tdisplay: table;\r\n}\r\n\r\n.timeline-centered:after {\r\n\tclear: both;\r\n}\r\n\r\n.timeline-centered:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\twidth: 4px;\r\n\tbackground: #f9bf3f;\r\n\ttop: 20px;\r\n\tbottom: 20px;\r\n\tmargin-left: 29px;\r\n}\r\n\r\n.timeline-centered .timeline-entry {\r\n\tposition: relative;\r\n\tmargin-top: 5px;\r\n\tmargin-left: 30px;\r\n\tmargin-bottom: 10px;\r\n\tclear: both;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner {\r\n\tposition: relative;\r\n\tmargin-left: -20px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\r\n\tdisplay: block;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tbackground: #2c98f0;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tbox-shadow: 0 0 0 5px #f2f3f7;\r\n\tline-height: 40px;\r\n\tfloat: left;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\r\n\tcolor: #fff;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\r\n\tbackground: #f9bf3f;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\r\n\tbackground: #2fa499;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\r\n\tbackground: #fff;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\r\n\tposition: relative;\r\n\tbackground: #f9bf3f;\r\n\tpadding: 1.5em;\r\n\tmargin-left: 60px;\r\n\tbackground-clip: padding-box;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-style: solid;\r\n\tborder-width: 9px 9px 9px 0;\r\n\tborder-color: transparent #f2f3f7 transparent transparent;\r\n\tleft: 0;\r\n\ttop: 10px;\r\n\tmargin-left: -9px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p+p {\r\n\tmargin-top: 15px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\r\n\tfont-size: 20px;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\r\n\tcolor: #000;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\r\n\t-webkit-opacity: .4;\r\n\t-moz-opacity: .4;\r\n\topacity: .4;\r\n\t-ms-filter: alpha(opacity=40);\r\n\tfilter: alpha(opacity=40);\r\n\tfont-size: 16px;\r\n}\r\n\r\n.services {\r\n\tmargin-bottom: 30px;\r\n\tpadding: 1.5em;\r\n\t-ms-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);\r\n\t-o-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);\r\n\tbox-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);\r\n\tborder-bottom: 2px solid #2c98f0;\r\n}\r\n\r\n.services .icon2 {\r\n\tdisplay: block;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.services .icon2 i {\r\n\tfont-size: 30px;\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n.services h3 {\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.services.color-2 {\r\n\tborder-bottom: 2px solid #ec5453;\r\n}\r\n\r\n.services.color-2 .icon2 i {\r\n\tcolor: #ec5453;\r\n}\r\n\r\n.services.color-3 {\r\n\tborder-bottom: 2px solid #f9bf3f;\r\n}\r\n\r\n.services.color-3 .icon2 i {\r\n\tcolor: #f9bf3f;\r\n}\r\n\r\n.services.color-4 {\r\n\tborder-bottom: 2px solid #a84cb8;\r\n}\r\n\r\n.services.color-4 .icon2 i {\r\n\tcolor: #a84cb8;\r\n}\r\n\r\n.services.color-5 {\r\n\tborder-bottom: 2px solid #2fa499;\r\n}\r\n\r\n.services.color-5 .icon2 i {\r\n\tcolor: #2fa499;\r\n}\r\n\r\n.services.color-6 {\r\n\tborder-bottom: 2px solid #4054b2;\r\n}\r\n\r\n.services.color-6 .icon2 i {\r\n\tcolor: #4054b2;\r\n}\r\n\r\n.services {\r\n\tmargin-bottom: 80px;\r\n\tposition: relative;\r\n\tz-index: 0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.services {\r\n\t\tmargin-bottom: 4em;\r\n\t}\r\n}\r\n\r\n.services .icon {\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: 0;\r\n\tright: 0;\r\n\twidth: 100px;\r\n\theight: 50px;\r\n\tdisplay: table;\r\n\tmargin: 0 auto;\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n.services .icon:before,\r\n.services .icon:after {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tcontent: '';\r\n}\r\n\r\n.services .icon:before {\r\n\ttop: -30px;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-style: solid;\r\n\tborder-width: 0 50px 30px 50px;\r\n\tborder-color: transparent transparent #2c98f0 transparent;\r\n}\r\n\r\n.services .icon:after {\r\n\tbottom: -30px;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-style: solid;\r\n\tborder-width: 30px 50px 0 50px;\r\n\tborder-color: #2c98f0 transparent transparent transparent;\r\n}\r\n\r\n.services .icon i {\r\n\tfont-size: 30px;\r\n\tcolor: #fff;\r\n\tz-index: 1;\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.services .desc {\r\n\tmargin-top: 60px;\r\n}\r\n\r\n.services .desc h3 {\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.services.color-2 .icon {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.services.color-2 .icon:before {\r\n\tborder-color: transparent transparent #ec5453 transparent;\r\n}\r\n\r\n.services.color-2 .icon:after {\r\n\tborder-color: #ec5453 transparent transparent transparent;\r\n}\r\n\r\n.services.color-3 .icon {\r\n\tbackground: #f9bf3f;\r\n}\r\n\r\n.services.color-3 .icon:before {\r\n\tborder-color: transparent transparent #f9bf3f transparent;\r\n}\r\n\r\n.services.color-3 .icon:after {\r\n\tborder-color: #f9bf3f transparent transparent transparent;\r\n}\r\n\r\n.services.color-4 .icon {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.services.color-4 .icon:before {\r\n\tborder-color: transparent transparent #a84cb8 transparent;\r\n}\r\n\r\n.services.color-4 .icon:after {\r\n\tborder-color: #a84cb8 transparent transparent transparent;\r\n}\r\n\r\n.services.color-5 .icon {\r\n\tbackground: #2fa499;\r\n}\r\n\r\n.services.color-5 .icon:before {\r\n\tborder-color: transparent transparent #2fa499 transparent;\r\n}\r\n\r\n.services.color-5 .icon:after {\r\n\tborder-color: #2fa499 transparent transparent transparent;\r\n}\r\n\r\n.services.color-6 .icon {\r\n\tbackground: #4054b2;\r\n}\r\n\r\n.services.color-6 .icon:before {\r\n\tborder-color: transparent transparent #4054b2 transparent;\r\n}\r\n\r\n.services.color-6 .icon:after {\r\n\tborder-color: #4054b2 transparent transparent transparent;\r\n}\r\n\r\n.progress-wrap h3 {\r\n\tfont-size: 16px;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.progress {\r\n\theight: 6px;\r\n\tbox-shadow: none;\r\n\tbackground: #f2f3f7;\r\n\toverflow: visible;\r\n}\r\n\r\n.progress-bar {\r\n\tbackground: #2c98f0;\r\n\tbox-shadow: none;\r\n\tfont-size: 12px;\r\n\tline-height: 1.2;\r\n\tcolor: #000;\r\n\tfont-weight: 600;\r\n\ttext-align: right;\r\n\tposition: relative;\r\n\toverflow: visible;\r\n\tborder-radius: 8px;\r\n}\r\n\r\n.progress-bar:after {\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\tright: 0;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tcontent: '';\r\n\tbackground: #2c98f0;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.progress-bar span {\r\n\tposition: absolute;\r\n\ttop: -22px;\r\n\tright: -32px;\r\n}\r\n\r\n.progress-bar.color-1 {\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n.progress-bar.color-1:after {\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n.progress-bar.color-1 span {\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n.progress-bar.color-2 {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.progress-bar.color-2:after {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.progress-bar.color-2 span {\r\n\tcolor: #ec5453;\r\n\tpadding-top: 2px;\r\n}\r\n\r\n.progress-bar.color-3 {\r\n\tbackground: #f9bf3f;\r\n}\r\n\r\n.progress-bar.color-3:after {\r\n\tbackground: #f9bf3f;\r\n}\r\n\r\n.progress-bar.color-3 span {\r\n\tcolor: #f9bf3f;\r\n}\r\n\r\n.progress-bar.color-4 {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-4:after {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-4 span {\r\n\tcolor: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-5 {\r\n\tbackground: #2fa499;\r\n}\r\n\r\n.progress-bar.color-5:after {\r\n\tbackground: #2fa499;\r\n}\r\n\r\n.progress-bar.color-5 span {\r\n\tcolor: #2fa499;\r\n}\r\n\r\n.progress-bar.color-6 {\r\n\tbackground: #4054b2;\r\n}\r\n\r\n.progress-bar.color-6:after {\r\n\tbackground: #4054b2;\r\n}\r\n\r\n.progress-bar.color-6 span {\r\n\tcolor: #4054b2;\r\n}\r\n\r\n.progress-bar.color-7 {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.progress-bar.color-7:after {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.progress-bar.color-7 span {\r\n\tcolor: #ec5453;\r\n}\r\n\r\n.progress-bar.color-8 {\r\n\tbackground: #f9bf3f;\r\n}\r\n\r\n.progress-bar.color-8:after {\r\n\tbackground: #f9bf3f;\r\n}\r\n\r\n.progress-bar.color-8 span {\r\n\tcolor: #f9bf3f;\r\n}\r\n\r\n.progress-bar.color-9 {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-9:after {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-9 span {\r\n\tcolor: #a84cb8;\r\n}\r\n\r\n.progress-wrap h3 {\r\n\tpadding-bottom: 14px;\r\n}\r\n\r\n.colorlib-feature {\r\n\ttext-align: left;\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tmargin-bottom: 20px;\r\n\tposition: relative;\r\n}\r\n\r\n.colorlib-feature .colorlib-icon {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tdisplay: table;\r\n\ttext-align: center;\r\n\tbackground: #f2f3f7;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.colorlib-feature .colorlib-icon i {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\tcolor: #2c98f0;\r\n\tfont-size: 20px;\r\n\theight: 50px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n\t.colorlib-feature .colorlib-icon i {\r\n\t\tfont-size: 20px;\r\n\t}\r\n}\r\n\r\n.colorlib-feature .colorlib-text {\r\n\tpadding-left: 60px;\r\n\twidth: 100%;\r\n}\r\n\r\n.colorlib-feature .colorlib-text h2,\r\n.colorlib-feature .colorlib-text h3 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.colorlib-feature .colorlib-text h3 {\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 20px;\r\n\tcolor: rgba(0, 0, 0, 0.7);\r\n\tfont-size: 14px;\r\n\tletter-spacing: 3px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.colorlib-feature.colorlib-feature-sm .colorlib-text {\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.colorlib-feature.colorlib-feature-sm .colorlib-icon i {\r\n\tcolor: #2c98f0;\r\n\tfont-size: 20px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n\t.colorlib-feature.colorlib-feature-sm .colorlib-icon i {\r\n\t\tfont-size: 28px;\r\n\t}\r\n}\r\n\r\n.blog-entry {\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tbackground: #fff;\r\n\tmargin-bottom: 2em;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.blog-entry {\r\n\t\tmargin-bottom: 3em;\r\n\t}\r\n}\r\n\r\n.blog-entry .blog-img {\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.blog-entry .blog-img img {\r\n\tposition: relative;\r\n\tmax-width: 100%;\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.blog-entry .desc h3 {\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 25px;\r\n\tline-height: auto;\r\n\tfont-weight: 500;\r\n\tletter-spacing: 0.5px;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n}\r\n\r\n.blog-entry .desc h3 a {\r\n\tcolor: #000;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.blog-entry .desc span {\r\n\tdisplay: block;\r\n\tmargin-bottom: 20px;\r\n\tfont-size: 12px;\r\n\tcolor: rgba(0, 0, 0, 0.4) !important;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.blog-entry .desc span small i {\r\n\tcolor: #999999;\r\n}\r\n\r\n.blog-entry .desc .lead {\r\n\tfont-size: 12px;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tcolor: #000;\r\n}\r\n\r\n.blog-entry:hover .blog-img img {\r\n\t-webkit-transform: scale(1.1);\r\n\ttransform: scale(1.1);\r\n}\r\n\r\n.work-menu span {\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.work-menu span:first-child {\r\n\tmargin-left: 0;\r\n}\r\n\r\n.work-menu span a {\r\n\tcolor: #000;\r\n}\r\n\r\n.work-menu span a.active {\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n.project {\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n\tbackground-repeat: no-repeat;\r\n\tposition: relative;\r\n\theight: 300px;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.project .desc {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbackground: #2c98f0;\r\n\topacity: 0;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.project .desc .con {\r\n\tpadding: 20px;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\theight: 300px;\r\n}\r\n\r\n.project .desc .con .icon {\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\tleft: 20px;\r\n\tright: 20px;\r\n}\r\n\r\n.project .desc .con .icon span {\r\n\tdisplay: inline;\r\n\tpadding-right: 5px;\r\n}\r\n\r\n.project .desc .con .icon span a {\r\n\tcolor: #333333;\r\n\tpadding: 5px;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.project .desc .con .icon i {\r\n\tfont-size: 16px;\r\n\tcolor: #333333;\r\n}\r\n\r\n.project .desc h3 {\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translate3d(0, -15px, 0);\r\n\ttransform: translate3d(0, -15px, 0);\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.project .desc h3 a {\r\n\tcolor: #fff;\r\n}\r\n\r\n.project .desc span {\r\n\tdisplay: block;\r\n\tcolor: rgba(255, 255, 255, 0.7);\r\n\tfont-size: 13px;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translate3d(0, 15px, 0);\r\n\ttransform: translate3d(0, 15px, 0);\r\n}\r\n\r\n.project .desc span a {\r\n\tcolor: #000;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.project .desc {\r\n\t\topacity: 1;\r\n\t\tbackground: rgba(0, 0, 0, 0.4);\r\n\t}\r\n\t.project .desc h3 {\r\n\t\tfont-style: 28px;\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t\tcolor: #000;\r\n\t}\r\n\t.project .desc span {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n}\r\n\r\n.project:hover .desc {\r\n\topacity: 1;\r\n}\r\n\r\n.project:hover .desc h3 {\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n}\r\n\r\n.project:hover .desc span {\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n}\r\n\r\n.btn-load-more {\r\n\twidth: 100%;\r\n}\r\n\r\n#colorlib-counter {\r\n\tposition: relative;\r\n\tclear: both;\r\n\tmargin-bottom: 5em;\r\n}\r\n\r\n.colorlib-counters {\r\n\tpadding: 3em 0;\r\n\tbackground-size: cover;\r\n\tbackground-attachment: fixed;\r\n\tbackground-position: center;\r\n\talign-items: stretch;\r\n}\r\n\r\n.colorlib-counters .overlay {\r\n\tz-index: 0;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbackground: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.colorlib-counters .icon {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tdisplay: table;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.colorlib-counters .icon i {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tfont-size: 50px;\r\n\tcolor: #2c98f0;\r\n\tbackground: #fff;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.colorlib-counters .counter-wrap {\r\n\tborder: 1px solid red !important;\r\n}\r\n\r\n.colorlib-counters .colorlib-counter {\r\n\tfont-size: 40px;\r\n\tdisplay: block;\r\n\tcolor: white;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\twidth: 100%;\r\n\tfont-weight: 700;\r\n\tmargin-bottom: .3em;\r\n}\r\n\r\n.colorlib-counters .colorlib-counter-label {\r\n\tcolor: rgba(255, 255, 255, 0.7);\r\n\ttext-transform: uppercase;\r\n\tfont-size: 14px;\r\n\tletter-spacing: 5px;\r\n\tmargin-bottom: 2em;\r\n\tdisplay: block;\r\n}\r\n\r\n.colorlib-social {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\ttext-align: center;\r\n}\r\n\r\n.colorlib-social li {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tlist-style: none;\r\n\tdisplay: -moz-inline-stack;\r\n\tdisplay: inline-block;\r\n\tzoom: 1;\r\n\t*display: inline;\r\n}\r\n\r\n.colorlib-social li a {\r\n\tfont-size: 22px;\r\n\tcolor: #000;\r\n\tpadding: 10px;\r\n\tdisplay: -moz-inline-stack;\r\n\tdisplay: inline-block;\r\n\tzoom: 1;\r\n\t*display: inline;\r\n\tborder-radius: 7px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.colorlib-social li a {\r\n\t\tpadding: 10px 8px;\r\n\t}\r\n}\r\n\r\n.colorlib-social li a:hover {\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n.colorlib-social li a:hover,\r\n.colorlib-social li a:active,\r\n.colorlib-social li a:focus {\r\n\toutline: none;\r\n\ttext-decoration: none;\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n#map {\r\n\twidth: 100%;\r\n\theight: 700px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#map {\r\n\t\theight: 200px;\r\n\t}\r\n}\r\n\r\n.colorlib-bg-color {\r\n\tbackground: #fafafa;\r\n\tposition: relative;\r\n}\r\n\r\n.pagination {\r\n\tpadding: 0;\r\n}\r\n\r\n.pagination li {\r\n\tmargin: 2px;\r\n}\r\n\r\n.pagination li a {\r\n\tcolor: #000;\r\n\tbackground: transparent;\r\n\tcolor: #000;\r\n\tmargin: 2px;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.pagination li a:first-child {\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.pagination li a:hover,\r\n.pagination li a:focus {\r\n\tbackground: #2c98f0;\r\n\tcolor: #fff;\r\n\tborder: 1px solid #2c98f0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.pagination li a {\r\n\t\tpadding: 7px 15px;\r\n\t}\r\n}\r\n\r\n.pagination li.active a {\r\n\tbackground: #2c98f0;\r\n\tborder: 1px solid #2c98f0 !important;\r\n}\r\n\r\n.pagination li.active a:hover,\r\n.pagination li.active a:focus {\r\n\tbackground: #2c98f0;\r\n\tcolor: #fff;\r\n\tborder: 1px solid #2c98f0 !important;\r\n}\r\n\r\n.btn {\r\n\tmargin-right: 4px;\r\n\tmargin-bottom: 4px;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-weight: 400;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tborder-radius: 2px;\r\n\ttransition: 0.5s;\r\n\tpadding: 8px 15px !important;\r\n}\r\n\r\n.btn.btn-sm {\r\n\tpadding: 4px 15px !important;\r\n}\r\n\r\n.btn.btn-md {\r\n\tpadding: 8px 20px !important;\r\n}\r\n\r\n.btn.btn-lg {\r\n\tpadding: 18px 36px !important;\r\n}\r\n\r\n.btn:hover,\r\n.btn:active,\r\n.btn:focus {\r\n\tbox-shadow: none !important;\r\n\toutline: none !important;\r\n}\r\n\r\n.btn-primary {\r\n\tbackground: #2c98f0;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #2c98f0;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary:active {\r\n\tbackground: #44a4f2 !important;\r\n\tborder-color: #44a4f2 !important;\r\n}\r\n\r\n.btn-primary.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #2c98f0;\r\n\tborder: 2px solid #2c98f0;\r\n}\r\n\r\n.btn-primary.btn-outline:hover,\r\n.btn-primary.btn-outline:focus,\r\n.btn-primary.btn-outline:active {\r\n\tbackground: #2c98f0;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-success {\r\n\tbackground: #5cb85c;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #5cb85c;\r\n}\r\n\r\n.btn-success:hover,\r\n.btn-success:focus,\r\n.btn-success:active {\r\n\tbackground: #4cae4c !important;\r\n\tborder-color: #4cae4c !important;\r\n}\r\n\r\n.btn-success.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #5cb85c;\r\n\tborder: 2px solid #5cb85c;\r\n}\r\n\r\n.btn-success.btn-outline:hover,\r\n.btn-success.btn-outline:focus,\r\n.btn-success.btn-outline:active {\r\n\tbackground: #5cb85c;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-info {\r\n\tbackground: #5bc0de;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #5bc0de;\r\n}\r\n\r\n.btn-info:hover,\r\n.btn-info:focus,\r\n.btn-info:active {\r\n\tbackground: #46b8da !important;\r\n\tborder-color: #46b8da !important;\r\n}\r\n\r\n.btn-info.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #5bc0de;\r\n\tborder: 2px solid #5bc0de;\r\n}\r\n\r\n.btn-info.btn-outline:hover,\r\n.btn-info.btn-outline:focus,\r\n.btn-info.btn-outline:active {\r\n\tbackground: #5bc0de;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-warning {\r\n\tbackground: #f0ad4e;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #f0ad4e;\r\n}\r\n\r\n.btn-warning:hover,\r\n.btn-warning:focus,\r\n.btn-warning:active {\r\n\tbackground: #eea236 !important;\r\n\tborder-color: #eea236 !important;\r\n}\r\n\r\n.btn-warning.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #f0ad4e;\r\n\tborder: 2px solid #f0ad4e;\r\n}\r\n\r\n.btn-warning.btn-outline:hover,\r\n.btn-warning.btn-outline:focus,\r\n.btn-warning.btn-outline:active {\r\n\tbackground: #f0ad4e;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-danger {\r\n\tbackground: #d9534f;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #d9534f;\r\n}\r\n\r\n.btn-danger:hover,\r\n.btn-danger:focus,\r\n.btn-danger:active {\r\n\tbackground: #d43f3a !important;\r\n\tborder-color: #d43f3a !important;\r\n}\r\n\r\n.btn-danger.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #d9534f;\r\n\tborder: 2px solid #d9534f;\r\n}\r\n\r\n.btn-danger.btn-outline:hover,\r\n.btn-danger.btn-outline:focus,\r\n.btn-danger.btn-outline:active {\r\n\tbackground: #d9534f;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-outline {\r\n\tbackground: none;\r\n\tborder: 2px solid gray;\r\n\tfont-size: 16px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.btn-outline:hover,\r\n.btn-outline:focus,\r\n.btn-outline:active {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.form-control {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n\tbox-shadow: none;\r\n\tbackground: transparent;\r\n\tborder: transparent;\r\n\tbackground: #f2f3f7;\r\n\theight: 54px;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\ttransition: 0.3s;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.form-control:active,\r\n.form-control:focus {\r\n\toutline: none;\r\n\tbox-shadow: none;\r\n\tborder-color: transparent;\r\n\tbackground: #f0f0f0;\r\n}\r\n\r\n#message {\r\n\theight: 130px;\r\n}\r\n\r\n.colorlib-nav-toggle {\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.colorlib-nav-toggle.active i::before,\r\n.colorlib-nav-toggle.active i::after {\r\n\tbackground: #000;\r\n}\r\n\r\n.colorlib-nav-toggle.dark.active i::before,\r\n.colorlib-nav-toggle.dark.active i::after {\r\n\tbackground: #000;\r\n}\r\n\r\n.colorlib-nav-toggle:hover,\r\n.colorlib-nav-toggle:focus,\r\n.colorlib-nav-toggle:active {\r\n\toutline: none;\r\n\tborder-bottom: none !important;\r\n}\r\n\r\n.colorlib-nav-toggle i {\r\n\tposition: relative;\r\n\tdisplay: -moz-inline-stack;\r\n\tdisplay: inline-block;\r\n\tzoom: 1;\r\n\t*display: inline;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tcolor: #000;\r\n\tfont: bold 14px/.4 Helvetica;\r\n\ttext-transform: uppercase;\r\n\ttext-indent: -55px;\r\n\tbackground: #000;\r\n\ttransition: all .2s ease-out;\r\n}\r\n\r\n.colorlib-nav-toggle i::before,\r\n.colorlib-nav-toggle i::after {\r\n\tcontent: '';\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tbackground: #000;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttransition: 0.2s;\r\n}\r\n\r\n.colorlib-nav-toggle.dark i {\r\n\tposition: relative;\r\n\tcolor: #000;\r\n\tbackground: #000;\r\n\ttransition: all .2s ease-out;\r\n}\r\n\r\n.colorlib-nav-toggle.dark i::before,\r\n.colorlib-nav-toggle.dark i::after {\r\n\tbackground: #000;\r\n\ttransition: 0.2s;\r\n}\r\n\r\n.colorlib-nav-toggle i::before {\r\n\ttop: -7px;\r\n}\r\n\r\n.colorlib-nav-toggle i::after {\r\n\tbottom: -7px;\r\n}\r\n\r\n.colorlib-nav-toggle:hover i::before {\r\n\ttop: -10px;\r\n}\r\n\r\n.colorlib-nav-toggle:hover i::after {\r\n\tbottom: -10px;\r\n}\r\n\r\n.colorlib-nav-toggle.active i {\r\n\tbackground: transparent;\r\n}\r\n\r\n.colorlib-nav-toggle.active i::before {\r\n\ttop: 0;\r\n\t-webkit-transform: rotateZ(45deg);\r\n\ttransform: rotateZ(45deg);\r\n}\r\n\r\n.colorlib-nav-toggle.active i::after {\r\n\tbottom: 0;\r\n\t-webkit-transform: rotateZ(-45deg);\r\n\ttransform: rotateZ(-45deg);\r\n}\r\n\r\n.colorlib-nav-toggle {\r\n\tposition: fixed;\r\n\tleft: -5px;\r\n\ttop: 0px;\r\n\tz-index: 9999;\r\n\tcursor: pointer;\r\n\topacity: 1;\r\n\tvisibility: hidden;\r\n\tpadding: 20px;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.colorlib-nav-toggle {\r\n\t\topacity: 1;\r\n\t\tvisibility: visible;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n\t.col-xxs-12 {\r\n\t\tfloat: none;\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\n.row-bottom-padded-lg {\r\n\tpadding-bottom: 7em;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.row-bottom-padded-lg {\r\n\t\tpadding-bottom: 1em;\r\n\t}\r\n}\r\n\r\n.row-bottom-padded-md {\r\n\tpadding-bottom: 3em;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.row-bottom-padded-md {\r\n\t\tpadding-bottom: 1em;\r\n\t}\r\n}\r\n\r\n.row-bottom-padded-sm {\r\n\tpadding-bottom: 1em;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.row-bottom-padded-sm {\r\n\t\tpadding-bottom: 1em;\r\n\t}\r\n}\r\n\r\n.row-pt-md {\r\n\tpadding-top: 3em;\r\n}\r\n\r\n.col-padding {\r\n\tpadding: 10px !important;\r\n}\r\n\r\n.js .animate-box {\r\n\topacity: 0;\r\n}\r\n\r\n/* Buy me a coffe button css*/\r\n\r\n.bmc-button img {\r\n\twidth: 27px !important;\r\n\tmargin-bottom: 0px !important;\r\n\tbox-shadow: none !important;\r\n\tborder: none !important;\r\n\tvertical-align: middle !important;\r\n}\r\n\r\n.bmc-button {\r\n\tline-height: 36px !important;\r\n\theight: 37px !important;\r\n\ttext-decoration: none !important;\r\n\tdisplay: inline-flex !important;\r\n\tcolor: #FFFFFF !important;\r\n\tbackground-color: #000 !important;\r\n\tborder-radius: 3px !important;\r\n\tborder: 1px solid transparent !important;\r\n\tpadding: 1px 9px !important;\r\n\tfont-size: 22px !important;\r\n\tletter-spacing: 0.6px !important;\r\n\tbox-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;\r\n\t-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\r\n\tmargin: 0 auto !important;\r\n\tfont-family: 'Cookie', cursive !important;\r\n\tbox-sizing: border-box !important;\r\n\ttransition: 0.3s all linear !important;\r\n}\r\n\r\n.bmc-button:hover,\r\n.bmc-button:active,\r\n.bmc-button:focus {\r\n\t-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\r\n\ttext-decoration: none !important;\r\n\tbox-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\r\n\topacity: 0.85 !important;\r\n\tcolor: #FFFFFF !important;\r\n}\r\n\r\n.badge-secondary {\r\n\tmargin-left: 2px;\r\n\tmargin-right: 2px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-page\">\r\n  <div class=\"container-wrap\">\r\n      <a href=\"#\" class=\"js-colorlib-nav-toggle colorlib-nav-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n          <i></i>\r\n      </a> \r\n      <app-sidebar></app-sidebar>\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Vinay Somawat - Portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.setProjectData = function (data) {
        this.projectData = data;
    };
    AppService.prototype.getProjectData = function () {
        return this.projectData;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/data/profile.json":
/*!***********************************!*\
  !*** ./src/app/data/profile.json ***!
  \***********************************/
/*! exports provided: username, image_path, intro, banner, skills, workExperience, education, mail, github, githubusername, buymecoffee, quora, linkdin, codechef, hackerRank, hackerearth, geeksforgeeks, default */
/***/ (function(module) {

module.exports = {"username":"Vinay Somawat","image_path":"/assets/images/profile.jpg","intro":["Hi, Welcome to my portfolio.","I am a software developer engineer and computer science undergraduate student at National Institute of Technology, Warangal."],"banner":"You will be happy to know that I have completed over 20+ projects successfully!","skills":[{"label":"Algorithms/C++(STL)","value":"50"},{"label":"MongoDB/ExpressJS/NodeJS","value":"50"},{"label":"Python/Django/MySQL","value":"50"},{"label":"AWS/GCP","value":"50"},{"label":"Bootstrap/HTML/JavaScript","value":"50"},{"label":"Java/Android/Spring-boot","value":"50"},{"label":"Word/Excel/Photoshop","value":"50"},{"label":"Git/Trello/Postman/ChromeDevTools","value":"50"},{"label":"Documentation Writing/Communication","value":"50"}],"workExperience":[{"company_name":"ThinkPedia LLP","designation":"Software Developement Engineering Intern","time_period":"May 2019 - June 2019","summary":["Developed Customer Web Application for social media management from scratch.","Designed frontend with Angular 7 and backend services with Java framework spring-boot.","Worked in System Design, System Testing, API Integration and Cloud Services for the deployment and production of the application."]},{"company_name":"Fossasia Organization","designation":"Open Source Contributor","time_period":"December 2018 - April 2019","summary":["Contributed in projects Badgeyay, OpenEvent Frontend, account.susi.ai.","Raised 13 pull requests and 10+ front-end and backend issues. Also reviewed, perfected and pushed the codes of other developers in production."]}],"education":[{"degree":"Bachelors in Computer Science and Engineering","institute":"National Institute of Technology, Warangal","summary":["Courses undertaken Data Strucutures and Algorithms, Operating Systems, Database Management Systems, Networks, Distributed Computing, Object Oriented Programming, Computer Architecture."]},{"degree":"Intermediate","institute":"Board of Secondary Education, Rajasthan","summary":["Courses undertaken Physics, Chemistry and Mathematics."]}],"mail":"vinaysomawat40@gmail.com","github":"https://github.com/vinaysomawat","githubusername":"vinaysomawat","buymecoffee":"https://www.buymeacoffee.com/r194dME8y","quora":"https://quora.com/profile/Vinay-Somawat","linkdin":"https://www.linkedin.com/in/vinaysomawat/","codechef":"https://www.codechef.com/users/somawatvinay","hackerRank":"https://www.hackerrank.com/somawatvinay","hackerearth":"https://www.hackerrank.com/somawatvinay","geeksforgeeks":"https://auth.geeksforgeeks.org/user/somawatvinay/profile"};

/***/ }),

/***/ "./src/app/data/projects.json":
/*!************************************!*\
  !*** ./src/app/data/projects.json ***!
  \************************************/
/*! exports provided: projectTitles, androidProject, webProject, softwareProject, default */
/***/ (function(module) {

module.exports = {"projectTitles":[{"title":"Web-Dev Projects","code":"webprojects"},{"title":"Software Projects","code":"softwareprojects"},{"title":"Android Projects","code":"androidprojects"}],"androidProject":{"label":"Android Projects","description":[],"data":[{"project_name":"NITW-CSE","image_path":"/assets/image_paths/nitwcse.jpg","summary":"App contains details of Dept courses, ref. books, research, publication and faculty profile.","demoURL":"https://github.com/vinaysomawat/NITW-CSE","technologies":["Java","XML","Android SDK"]},{"project_name":"CareerHigh-App","image_path":"/assets/image_paths/carrerhigh.png","summary":"The app shows the content of website careerhigh.in in android devices.","demoURL":"https://github.com/vinaysomawat/CareerHigh-Android","technologies":["Java","XML","Android SDK"]}]},"webProject":{"label":"Web Projects","description":["Websites and Web Apps are the first line of communication between enterprices and potential guests or visitors.","Web development services help your company to increase product knowledge, maintain communication between you and potential clients, sell your products or services, generate leads for the business, and increase the popularity of your company and much more."],"data":[{"project_name":"Travographer-Portal","image_path":"/assets/image_paths/tg-portal.png","summary":"It is an implementation to Setup Amazon S3 in a Django Project, how to use S3 to handle user uploaded files.","demoURL":"https://github.com/vinaysomawat/Travographer-Portal","technologies":["Django","AWS","Bootstrap","JavaScript","Heroku"]},{"project_name":"Programming Diaries","image_path":"/assets/image_paths/programmingdiaries.png","summary":"Developed an blog application to provide content on Programming, web and android development to all the programmers and budding programmers across the internet.","demoURL":"https://programmingdiaries.herokuapp.com/","technologies":["Django","SQLite3","Bootstrap","HTML5","CSS3","JavaScript","Heroku"]},{"project_name":"DeveloperAtYourDoor","image_path":"/assets/image_paths/developeratyourdoor.png","summary":"Angular and spring based tool which shows a filtered list of developer profiles using back end APIs.","demoURL":"https://github.com/vinaysomawat/DeveloperAtYourDoor","technologies":["Spring","Angular","Bootstrap","MongoDB","HTML5","CSS3","JavaScript","Heroku"]},{"project_name":"Web-Porfolio","image_path":"/assets/image_paths/portfolio.png","summary":"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.","demoURL":"https://vinaysomawat.github.io/","technologies":["Bootstrap","HTML5","CSS3","JavaScript","Jquery"]},{"project_name":"Resume Builder","image_path":"/assets/image_paths/resume-builder.png","summary":"Web based editor to build Resumes in a customizable templates.","demoURL":"https://vinaysomawat.github.io/Resume-Builder","technologies":["Bootstrap","HTML5","CSS3","JavaScript","Jquery"]},{"project_name":"Django File Handle","image_path":"/assets/image_paths/djangofilehandle.png","summary":"Users can upload any img/pdf file and can view it with its cover picture with delete functionality.","demoURL":"http://somawatvinay.pythonanywhere.com/","technologies":["Django","Python","MySQL","Bootstrap","HTML5","CSS3","JavaScript"]}]},"softwareProject":{"label":"Software Projects","description":[""],"data":[{"project_name":"Pizza Ordering ChatBOT","image_path":"/assets/image_paths/pizzaorderchatbot.png","summary":"ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.","demoURL":"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot","technologies":["DialogFlow","Firebase"]},{"project_name":"WhatsApp-Bot","image_path":"/assets/image_paths/whatsappbot.jpg","summary":"Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.","demoURL":"https://github.com/vinaysomawat/WhatsApp-Bot","technologies":["Selenium","Chrome WebDriver","Python"]},{"project_name":"Bill Generator","image_path":"/assets/image_paths/billgenerator.png","summary":"GUI to transfer data to excel sheets and generate bills on the local shops.","demoURL":"https://github.com/vinaysomawat/Bill-Generator","technologies":["Tkinter","Openxlpy","Python"]},{"project_name":"Nodejs-web-crawling","image_path":"/assets/image_paths/nodejswebcrawling.png","summary":"By sending HTTP request to a particular URL and then by extracting HTML of that web page for getting useful information is known as crawling or web scraping.","demoURL":"https://github.com/vinaysomawat/Nodejs-Web-Crawling","technologies":["Nodejs","HTML5","CSS3","JavaScript"]},{"project_name":"Calculator GUI","image_path":"/assets/image_paths/calculatorgui.png","summary":"Calculator GUI for mathematical calculation.","demoURL":"https://github.com/vinaysomawat/Calculator-using-tkinter","technologies":["Tkinter","Python"]}]}};

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-main\">\r\n   <section\r\n      class=\"colorlib-about\"\r\n      data-section=\"about\">\r\n      <div class=\"colorlib-narrow-content\">\r\n         <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n               <div\r\n                  class=\"row row-bottom-padded-sm animate-box\"\r\n                  data-animate-effect=\"fadeInLeft\">\r\n                  <div class=\"col-md-12\">\r\n                     <div class=\"about-desc\">\r\n                        <h1>\r\n                           <strong>{{profileData.username}}</strong>\r\n                        </h1>\r\n                        <hr>\r\n                        <div *ngFor=\"let itemIntro of profileData.intro\">\r\n                           <p>{{itemIntro}}</p>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"row\">\r\n                  <div *ngFor=\"let item of projectData.projectTitles\">\r\n                     <div \r\n                        class=\"col-md-3 animate-box\"\r\n                        data-animate-effect=\"fadeInRight\"\r\n                        (click)=\"toggleProject(item.code)\">\r\n                        <div class=\"services color-2\">\r\n                           <span class=\"icon2\">\r\n                              <i class=\"fa fa-code\"></i>\r\n                           </span>\r\n                           <h3>{{item.title}}</h3>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <!-- <div\r\n                     class=\"col-md-3 animate-box\"\r\n                     data-animate-effect=\"fadeInRight\">\r\n                     <a routerLink=\"/web-development\">\r\n                        <div class=\"services color-2\">\r\n                           <span class=\"icon2\">\r\n                              <i class=\"fa fa-code\"></i>\r\n                           </span>\r\n                           <h3>\r\n                              Web\r\n                              <br>\r\n                              Designing\r\n                           </h3>\r\n                        </div>\r\n                     </a>\r\n                  </div>\r\n                  <div\r\n                     class=\"col-md-3 animate-box\"\r\n                     data-animate-effect=\"fadeInRight\">\r\n                     <a routerLink=\"/software-development\">\r\n                        <div class=\"services color-3\">\r\n                           <span class=\"icon2\">\r\n                              <i class=\"fa fa-terminal\"></i>\r\n                           </span>\r\n                           <h3>Software Development</h3>\r\n                        </div>\r\n                     </a>\r\n                  </div>\r\n                  <div\r\n                     class=\"col-md-3 animate-box\"\r\n                     data-animate-effect=\"fadeInRight\">\r\n                     <a routerLink=\"/android-development\">\r\n                        <div class=\"services color-4\">\r\n                           <span class=\"icon2\">\r\n                              <i class=\"fa fa-android\"></i>\r\n                           </span>\r\n                           <h3>Android Applications</h3>\r\n                        </div>\r\n                     </a>\r\n                  </div> -->\r\n               </div>\r\n               <div class=\"row\">\r\n                  <div\r\n                     class=\"col-md-12 animate-box\"\r\n                     data-animate-effect=\"fadeInLeft\">\r\n                     <div class=\"hire\">\r\n                        <h2>{{profileData.banner}}</h2>\r\n                        <!-- <a href=\"#\" class=\"btn-hire\" style=\"text-align: center;\">Download Resume</a> -->\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section>\r\n   <!-- ----Skills-------------- -->\r\n   <section\r\n      class=\"colorlib-skills\"\r\n      data-section=\"skills\">\r\n      <div class=\"colorlib-narrow-content\">\r\n         <div class=\"row\">\r\n            <div\r\n               class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n               data-animate-effect=\"fadeInLeft\">\r\n               <!-- <span class=\"heading-meta\">My Specialty</span> -->\r\n               <div class=\"about-desc\">\r\n                  <h1>Skills</h1>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <p>\r\n            Some of the significant aptitudes which will assist me with achieving your objectives.\r\n         </p>\r\n         <div class=\"row\">\r\n            <div\r\n               class=\"col-md-8 animate-box\"\r\n               data-animate-effect=\"fadeInLeft\">\r\n               <div\r\n                  class=\"progress-wrap\"\r\n                  *ngFor=\"let skill of profileData.skills\">\r\n                  <h3 style=\"font-weight: 500;\">{{skill.label}}</h3>\r\n                  <!-- <div class=\"progress\">\r\n                 <div class=\"progress-bar color-1\" role=\"progressbar\" aria-valuenow=\"50\"\r\n              aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%;\">\r\n                    <span>{{skill.progressval}}%</span>\r\n                 </div>\r\n              </div> -->\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section>\r\n\r\n\r\n\r\n   <!-- ------------Work Experience--------- -->\r\n   <section\r\n      class=\"colorlib-experience\"\r\n      data-section=\"experience\">\r\n      <div class=\"colorlib-narrow-content\">\r\n         <div class=\"row\">\r\n            <div\r\n               class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n               data-animate-effect=\"fadeInLeft\">\r\n               <div class=\"about-desc\">\r\n                  <h1>\r\n                     Work\r\n                     <span style=\"color: #f9bf3f\">Experience</span>\r\n                  </h1>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n               <div class=\"timeline-centered\">\r\n                  <article\r\n                     class=\"timeline-entry animate-box\"\r\n                     data-animate-effect=\"fadeInLeft\"\r\n                     *ngFor=\"let workexp of profileData.workExperience\">\r\n                     <div class=\"timeline-entry-inner\">\r\n                        <div class=\"timeline-icon color-1\">\r\n                           <i class=\"fa fa-code\"></i>\r\n                        </div>\r\n                        <div class=\"timeline-label\">\r\n                           <h2>\r\n                              <a href=\"#\">{{workexp.company_name}}</a>\r\n                              <span>{{workexp.time_period}}</span>\r\n                           </h2>\r\n                           <p>\r\n                              <strong>{{workexp.designation}}</strong>\r\n                           </p>\r\n                           <div *ngFor=\"let item of workexp.summary\">\r\n                              <span style=\"font-weight: 500;\">{{item}}</span>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </article>\r\n                  <article\r\n                     class=\"timeline-entry begin animate-box\"\r\n                     data-animate-effect=\"fadeInBottom\">\r\n                     <div class=\"timeline-entry-inner\">\r\n                        <div class=\"timeline-icon color-none\"></div>\r\n                     </div>\r\n                  </article>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section>\r\n\r\n\r\n   <!-- ------------Education--------- -->\r\n   <section\r\n      class=\"colorlib-experience\"\r\n      data-section=\"experience\">\r\n      <div class=\"colorlib-narrow-content\">\r\n         <div class=\"row\">\r\n            <div\r\n               class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n               data-animate-effect=\"fadeInLeft\">\r\n               <div class=\"about-desc\">\r\n                  <h1>Education</h1>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n               <div class=\"timeline-centered\">\r\n                  <article\r\n                     class=\"timeline-entry animate-box\"\r\n                     data-animate-effect=\"fadeInLeft\"\r\n                     *ngFor=\"let education of profileData.education\">\r\n                     <div class=\"timeline-entry-inner\">\r\n                        <div class=\"timeline-icon color-1\">\r\n                           <i class=\"fa fa-code\"></i>\r\n                        </div>\r\n                        <div class=\"timeline-label\">\r\n                           <h2>{{education.degree}}</h2>\r\n                           <p>\r\n                              <strong>{{education.institute}}</strong>\r\n                           </p>\r\n                           <div *ngFor=\"let item of education.summary\">\r\n                              <span style=\"font-weight: 500;\">{{item}}</span>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </article>\r\n                  <article\r\n                     class=\"timeline-entry begin animate-box\"\r\n                     data-animate-effect=\"fadeInBottom\">\r\n                     <div class=\"timeline-entry-inner\">\r\n                        <div class=\"timeline-icon color-none\"></div>\r\n                     </div>\r\n                  </article>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section>\r\n\r\n\r\n   <!-- ------Contact-------- -->\r\n   <section\r\n      class=\"colorlib-contact\"\r\n      data-section=\"contact\">\r\n      <div class=\"colorlib-narrow-content\">\r\n         <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n               <div\r\n                  class=\"row row-bottom-padded-sm animate-box\"\r\n                  data-animate-effect=\"fadeInLeft\">\r\n                  <div class=\"about-desc\">\r\n                     <h1>Contact</h1>\r\n                  </div>\r\n                  <p>\r\n                     On the off chance that you might want to connect with me, be it for investigating innovation, business, or to simply say hello, don't hesitate to send me an email at\r\n                     <strong>{{profileData.mail}}</strong>\r\n                  </p>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section>\r\n   <!-- ----------Footer----------- -->\r\n   <section\r\n      class=\"colorlib-footer\"\r\n      data-section=\"footer\">\r\n      <div class=\"colorlib-narrow-content\">\r\n         <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n               <div\r\n                  class=\"row row-bottom-padded-sm animate-box\"\r\n                  data-animate-effect=\"fadeInLeft\">\r\n                  <div class=\"hire\">\r\n                     <p style=\"text-align: center\">\r\n                        <strong>\r\n                           If you like my work and efforts, please consider buying me a coffee.\r\n                           <br>\r\n                           Thank you for your support!\r\n                        </strong>\r\n                     </p>\r\n                     <div align=center>\r\n                        <link href=\"https://fonts.googleapis.com/css?family=Cookie\" rel=\"stylesheet\">\r\n                        <a\r\n                           class=\"bmc-button\"\r\n                           target=\"_blank\"\r\n                           href=\"{{profileData.buymecoffee}}\">\r\n                           <img\r\n                              src=\"https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg\"\r\n                              alt=\"Buy me a coffee\">\r\n                           <span style=\"margin-left:5px\">Buy me a coffee</span>\r\n                        </a>\r\n                        <br>\r\n                        <br>\r\n                        <p style=\"font-size: 30px; margin-bottom: 0px;\">\r\n                           <a\r\n                              href=\"https://twitter.com/Vinay_Somawat\"\r\n                              style=\"color: black;\"\r\n                              class=\"fa fa-twitter\"></a>\r\n                           &nbsp;&nbsp;&nbsp;&nbsp;\r\n                           <a\r\n                              href=\"{{profileData.linkdin}}\"\r\n                              style=\"color: black;\"\r\n                              class=\"fa fa-linkedin\"></a>\r\n                           &nbsp;&nbsp;&nbsp;&nbsp;\r\n                           <a\r\n                              href=\"{{profileData.quora}}\"\r\n                              style=\"color: black;\"\r\n                              class=\"fa fa-quora\"></a>\r\n                           &nbsp;&nbsp;&nbsp;&nbsp;\r\n                           <a\r\n                              href=\"{{profileData.github}}\"\r\n                              style=\"color: black;\"\r\n                              class=\"fa fa-github\"></a>\r\n                        </p>\r\n                     </div>\r\n                     <p style=\"text-align: center; margin-bottom: -20px;\">\r\n                        <strong>\r\n                           &copy; No Copyrights, feel free to use this template.\r\n                        </strong>\r\n                     </p>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_profile_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/profile.json */ "./src/app/data/profile.json");
var _data_profile_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/profile.json */ "./src/app/data/profile.json", 1);
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/projects.json */ "./src/app/data/projects.json");
var _data_projects_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects.json */ "./src/app/data/projects.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(appservice, route, router) {
        this.appservice = appservice;
        this.route = route;
        this.router = router;
        this.profileData = _data_profile_json__WEBPACK_IMPORTED_MODULE_3__;
        this.projectData = _data_projects_json__WEBPACK_IMPORTED_MODULE_4__;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toggleProject = function (val) {
        if (val == 'webprojects') {
            this.appservice.setProjectData(_data_projects_json__WEBPACK_IMPORTED_MODULE_4__['webProject']);
        }
        else if (val == 'androidprojects') {
            this.appservice.setProjectData(_data_projects_json__WEBPACK_IMPORTED_MODULE_4__['androidProject']);
        }
        else if (val == 'softwareprojects') {
            this.appservice.setProjectData(_data_projects_json__WEBPACK_IMPORTED_MODULE_4__['softwareProject']);
        }
        this.router.navigate(['/projects', { category: val }]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-main\">\n   <section\n      class=\"colorlib-about\"\n      data-section=\"about\">\n      <div class=\"colorlib-narrow-content\">\n         <div class=\"row\">\n            <div class=\"col-md-12\">\n               <div\n                  class=\"row row-bottom-padded-sm animate-box\"\n                  data-animate-effect=\"fadeInLeft\">\n                  <div class=\"col-md-12\">\n                     <div class=\"about-desc\">\n                        <h2>{{projectData.label}}</h2>\n                        <hr>\n                        <div *ngFor=\"let itemDescription of projectData.description\">\n                           <p>{{itemDescription}}</p>\n                        </div>\n                        <div class=\"col-md-12\">\n                           <article\n                              class=\"timeline-entry animate-box\"\n                              data-animate-effect=\"fadeInRight\"\n                              *ngFor=\"let item of projectData.data\">\n                              <br>\n                              <ul class=\"fa-ul mb-0\">\n                                 <!-- <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\"> -->\n                                 <li>\n                                    <i class=\"fa-li fa fa-check\"></i>\n                                    <div>\n                                       <a\n                                          href=\"{{item.demoURL}}\"\n                                          style=\"text-decoration:none;\">\n                                          <div>\n                                             <h4 class=\"mb-3\">{{item.project_name}}</h4>\n                                          </div>\n                                          <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-3\">\n                                             <div id=\"divMain\">\n                                                <div\n                                                   id='left-div'\n                                                   class=\"resume-content\">\n                                                   <img\n                                                      style='float:left; margin:0 20px;'\n                                                      width='300px;'\n                                                      class='img-fluid'\n                                                      src='{{item.image_path}}'>\n                                                </div>\n                                                <div\n                                                   id='right-div'\n                                                   class='resume-content'>\n                                                   <div class=\"subheading mb-0\">\n                                                      <p>{{item.summary}}</p>\n                                                   </div>\n                                                   <div class=\"mb-0\">\n                                                      <span\n                                                         class='badge badge-secondary'\n                                                         *ngFor=\"let techItem of item.technologies\">\n                                                         {{techItem}}\n                                                      </span>\n                                                   </div>\n                                                </div>\n                                             </div>\n                                          </div>\n                                       </a>\n                                    </div>\n                                 </li>\n                              </ul>\n                           </article>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </section>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(appservice) {
        this.appservice = appservice;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projectData = this.appservice.getProjectData();
        console.log(this.projectData);
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"colorlib-aside\" role=\"complementary\" class=\"border js-fullheight\" style=\"height: 841px;\">\r\n   <div class=\"text-center\">\r\n      <img class=\"author-img\" src=\"../../assets/images/profile.jpg\">\r\n      <h1 id=\"colorlib-logo\"><a routerLink=\"/\">Vinay Somawat</a></h1>\r\n   </div>\r\n   <nav id=\"colorlib-main-menu\" role=\"navigation\" class=\"navbar\">\r\n      <div id=\"navbar\" class=\"collapse\">\r\n         <ul>\r\n            <li><a routerLink=\"/\" >Home</a></li>\r\n            <li><a routerLink=\"/competitive-programming\" >Programming Profile</a></li>\r\n            <li><a routerLink=\"/web-development\" >Web Development</a></li>\r\n            <li><a routerLink=\"/software-development\" >Software Development</a></li>\r\n            <li><a routerLink=\"/android-development\" >Android Development</a></li>\r\n         </ul>\r\n      </div>\r\n   </nav>\r\n</aside>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal Projects\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map