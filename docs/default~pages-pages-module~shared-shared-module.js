(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-pages-module~shared-shared-module"],{

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/language.service */ "kyOO");
// Dependencies



class HeaderComponent {
    constructor(languageService) {
        this.languageService = languageService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 0, vars: 0, template: function HeaderComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-routing.module */ "Sj5B");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.component */ "duh5");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "n9Sv");
/* harmony import */ var _policies_policies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./policies/policies.component */ "iziw");
// Modules





// Components






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharedRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_5__["SharedComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
        _policies_policies_component__WEBPACK_IMPORTED_MODULE_9__["PoliciesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharedRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _shared_component__WEBPACK_IMPORTED_MODULE_5__["SharedComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                    _policies_policies_component__WEBPACK_IMPORTED_MODULE_9__["PoliciesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharedRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sj5B":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.component */ "duh5");
// Modules


// Components



const routes = [
    {
        path: '', component: _shared_component__WEBPACK_IMPORTED_MODULE_2__["SharedComponent"], children: []
    }
];
class SharedRoutingModule {
}
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "duh5":
/*!********************************************!*\
  !*** ./src/app/shared/shared.component.ts ***!
  \********************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharedComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(); };
SharedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedComponent, selectors: [["app-shared"]], decls: 2, vars: 0, template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shared works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shared',
                templateUrl: './shared.component.html',
                styleUrls: ['./shared.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iziw":
/*!*******************************************************!*\
  !*** ./src/app/shared/policies/policies.component.ts ***!
  \*******************************************************/
/*! exports provided: PoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return PoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PoliciesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PoliciesComponent.ɵfac = function PoliciesComponent_Factory(t) { return new (t || PoliciesComponent)(); };
PoliciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PoliciesComponent, selectors: [["app-policies"]], decls: 2, vars: 0, template: function PoliciesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "policies works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpY2llcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoliciesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-policies',
                templateUrl: './policies.component.html',
                styleUrls: ['./policies.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _policies_policies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../policies/policies.component */ "iziw");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
    openNew(url) {
        window.open(url, "_blank");
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 14, vars: 0, consts: [[1, "footer_section"], [1, "logo_footer"], ["src", "../../../assets/images/logos/hortenza-complete.png", "alt", "...", 1, "logo"], [1, "container-text"], ["href", "#"], [1, "social-media_footer"], ["href", "https://www.facebook.com/hortenzapachuca/", "target", "_blank", 1, "social-icon"], [1, "fab", "fa-facebook-f"], ["href", "https://www.instagram.com/hortenzapachuca/?hl=es", "target", "_blank", 1, "social-icon"], [1, "fab", "fa-instagram"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Copyright 2021 Hortenza. Todos los derechos reservados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pol\u00EDtica de Privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_policies_policies_component__WEBPACK_IMPORTED_MODULE_1__["PoliciesComponent"]], styles: [".footer_section[_ngcontent-%COMP%] {\r\n  background-color: #363636;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding-top: 3em;\r\n  padding-bottom: 3em;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n  width: 120px;\r\n  height: 120px;\r\n}\r\n\r\n.container-text[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  font-family: 'Mulish', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  line-height: 200%;\r\n}\r\n\r\n.container-text[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-family: 'Mulish', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  border-bottom: 2px solid #C0994D;\r\n}\r\n\r\n.social-media_footer[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: floralwhite;\r\n  width: 65px;\r\n  height: 65px;\r\n  list-style:none;\r\n  margin: 10px;\r\n  border-radius: 50%;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #C0994D;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(230, 230, 230);\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%]:active{\r\n  background-color: rgb(194, 194, 194);\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .footer_section[_ngcontent-%COMP%] {\r\n  height: 550px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  }\r\n\r\n  .container-text[_ngcontent-%COMP%]{\r\n    width: 80vw;\r\n    line-height: 200%;\r\n    text-align: center;\r\n  }\r\n\r\n  \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0hHOztBQUVIO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0VBQ0EsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7OztBQUlGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbi5iZy1wcmltYXJ5LTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuZGl2W2NsYXNzKj1cImNvbC1cIl0uc3BhY2VyLWRvdWJsZS1tZCxcclxuLnNwYWNlci1kb3VibGUtbWQge1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubWVkaWEge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLm1lZGlhLWJvZHkge1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgLW1zLWZsZXg6IDE7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuXHJcbi5tYXgtd2lkdGgteGxnIHtcclxuICBtYXgtd2lkdGg6IDlyZW07XHJcbn1cclxuLm1heC13aWR0aC1sZyB7XHJcbiAgbWF4LXdpZHRoOiA2cmVtO1xyXG59XHJcbi5tYXgtd2lkdGgtbWQge1xyXG4gIG1heC13aWR0aDogMy43NXJlbTtcclxufVxyXG4ubWF4LXdpZHRoLXNtIHtcclxuICBtYXgtd2lkdGg6IDMuNDM3NXJlbTtcclxufVxyXG4ubWF4LXdpZHRoLXhzbSB7XHJcbiAgbWF4LXdpZHRoOiAycmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4udGV4dC13aGl0ZSB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmQtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWxpZ2h0IHtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtZGFyayB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45NykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQtc2l6ZS0xMCB7XHJcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcclxufVxyXG4uZm9udC1zaXplLTEyIHtcclxuICBmb250LXNpemU6IC43NXJlbTtcclxufVxyXG4uZm9udC1zaXplLTEzIHtcclxuICBmb250LXNpemU6IC44MTI1cmVtO1xyXG59XHJcbi5mb250LXNpemUtMTQge1xyXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxufVxyXG4uZm9udC1zaXplLTE1IHtcclxuICBmb250LXNpemU6IC45Mzc1cmVtO1xyXG59XHJcbi5mb250LXdlaWdodC0zMDAge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLmZvbnQtd2VpZ2h0LTQwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uZm9udC13ZWlnaHQtNjAwIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5mb250LXdlaWdodC03MDAge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC1pbmxpbmUge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubGlzdC1pbmxpbmUtaXRlbSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubGlzdC1pbmxpbmUtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG59XHJcblxyXG4uc29jaWFsLWljb246aG92ZXIge1xyXG4gIG9wYWNpdHk6IC43O1xyXG4gIGNvbG9yOiAgI2Y3OTExODtcclxufVxyXG5cclxuXHJcbi50ZXh0LW11dGVkIHtcclxuICBjb2xvcjogIzhjOThhNCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4uZm9vdGVyX3NlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwYWRkaW5nLXRvcDogM2VtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzZW07XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXRleHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXItdGV4dCA+IGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzA5OTREO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhX2Zvb3RlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59IFxyXG5cclxuLnNvY2lhbC1pY29ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICB3aWR0aDogNjVweDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogI0MwOTk0RDtcclxufVxyXG5cclxuLnNvY2lhbC1pY29uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxufVxyXG5cclxuLnNvY2lhbC1pY29uOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZm9vdGVyX3NlY3Rpb24ge1xyXG4gIGhlaWdodDogNTUwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci10ZXh0e1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBsaW5lLWhlaWdodDogMjAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIFxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kyOO":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
// Dependencies



class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.m_selected = '';
        this.m_selected = 'es';
    }
    onPromiseLanguage() {
        const temp_language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(this.m_selected);
    }
    onSelectLanguage(temp_lang) {
        this.translate.use(temp_lang);
        this.m_selected = temp_lang;
    }
    onGetLanguage() {
        return this.m_selected;
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "n9Sv":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-pages-module~shared-shared-module.js.map