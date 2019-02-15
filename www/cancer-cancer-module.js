(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cancer-cancer-module"],{

/***/ "./src/app/cancer/cancer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/cancer/cancer.module.ts ***!
  \*****************************************/
/*! exports provided: CancerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerPageModule", function() { return CancerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cancer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancer.page */ "./src/app/cancer/cancer.page.ts");







var routes = [
    {
        path: '',
        component: _cancer_page__WEBPACK_IMPORTED_MODULE_6__["CancerPage"]
    }
];
var CancerPageModule = /** @class */ (function () {
    function CancerPageModule() {
    }
    CancerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cancer_page__WEBPACK_IMPORTED_MODULE_6__["CancerPage"]]
        })
    ], CancerPageModule);
    return CancerPageModule;
}());



/***/ }),

/***/ "./src/app/cancer/cancer.page.html":
/*!*****************************************!*\
  !*** ./src/app/cancer/cancer.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Cancer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class=\"padd\">\n        <ion-button expand=\"block\" size=\"large\" color=\"dark\" (click)=\"goTocancercauses()\">\n            <ion-icon name=\"medkit\"></ion-icon>\n            Causes\n          </ion-button>\n    </div>\n    \n    <div class=\"padd\">\n      <ion-button expand=\"block\" size=\"large\" color=\"danger\" (click)=\"goTocancerconsequences()\">\n          <ion-icon name=\"medkit\"></ion-icon>\n          Consequences\n        </ion-button>\n    \n      </div>\n      <div class=\"padd\">\n          <ion-button expand=\"block\" size=\"large\" color=\"success\" (click)=\"goTocancerconseils()\">\n              <ion-icon name=\"medkit\"></ion-icon>\n              Conseils\n            </ion-button>\n        \n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cancer/cancer.page.scss":
/*!*****************************************!*\
  !*** ./src/app/cancer/cancer.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padd {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQWR2aWNlcy9zcmMvYXBwL2NhbmNlci9jYW5jZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYW5jZXIvY2FuY2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRke1xuICAgIG1hcmdpbi1ib3R0b206MjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cancer/cancer.page.ts":
/*!***************************************!*\
  !*** ./src/app/cancer/cancer.page.ts ***!
  \***************************************/
/*! exports provided: CancerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerPage", function() { return CancerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CancerPage = /** @class */ (function () {
    function CancerPage(router) {
        this.router = router;
    }
    CancerPage.prototype.ngOnInit = function () {
    };
    CancerPage.prototype.goTocancercauses = function () {
        this.router.navigate(['/cancercauses']);
    };
    CancerPage.prototype.goTocancerconsequences = function () {
        this.router.navigate(['/cancerconsequences']);
    };
    CancerPage.prototype.goTocancerconseils = function () {
        this.router.navigate(['/cancerconseils']);
    };
    CancerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancer',
            template: __webpack_require__(/*! ./cancer.page.html */ "./src/app/cancer/cancer.page.html"),
            styles: [__webpack_require__(/*! ./cancer.page.scss */ "./src/app/cancer/cancer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CancerPage);
    return CancerPage;
}());



/***/ })

}]);
//# sourceMappingURL=cancer-cancer-module.js.map