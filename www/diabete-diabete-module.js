(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["diabete-diabete-module"],{

/***/ "./src/app/diabete/diabete.module.ts":
/*!*******************************************!*\
  !*** ./src/app/diabete/diabete.module.ts ***!
  \*******************************************/
/*! exports provided: DiabetePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiabetePageModule", function() { return DiabetePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diabete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diabete.page */ "./src/app/diabete/diabete.page.ts");







var routes = [
    {
        path: '',
        component: _diabete_page__WEBPACK_IMPORTED_MODULE_6__["DiabetePage"]
    }
];
var DiabetePageModule = /** @class */ (function () {
    function DiabetePageModule() {
    }
    DiabetePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_diabete_page__WEBPACK_IMPORTED_MODULE_6__["DiabetePage"]]
        })
    ], DiabetePageModule);
    return DiabetePageModule;
}());



/***/ }),

/***/ "./src/app/diabete/diabete.page.html":
/*!*******************************************!*\
  !*** ./src/app/diabete/diabete.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      \n    <ion-title>diabete</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class=\"padd\">\n        <ion-button expand=\"block\" size=\"large\" color=\"dark\" (click)=\"goTodiabetecauses()\">\n            <ion-icon name=\"medkit\"></ion-icon>\n            Causes\n          </ion-button>\n    </div>\n    \n    <div class=\"padd\">\n      <ion-button expand=\"block\" size=\"large\" color=\"danger\" (click)=\"goTodiabeteconsequences()\">\n          <ion-icon name=\"medkit\"></ion-icon>\n          Consequences\n        </ion-button>\n    \n      </div>\n      <div class=\"padd\">\n          <ion-button expand=\"block\" size=\"large\" color=\"success\" (click)=\"goTodiabeteconseils()\">\n              <ion-icon name=\"medkit\"></ion-icon>\n              Conseils\n            </ion-button>\n        \n      </div>\n     \n       \n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/diabete/diabete.page.scss":
/*!*******************************************!*\
  !*** ./src/app/diabete/diabete.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padd {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQWR2aWNlcy9zcmMvYXBwL2RpYWJldGUvZGlhYmV0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RpYWJldGUvZGlhYmV0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZHtcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/diabete/diabete.page.ts":
/*!*****************************************!*\
  !*** ./src/app/diabete/diabete.page.ts ***!
  \*****************************************/
/*! exports provided: DiabetePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiabetePage", function() { return DiabetePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DiabetePage = /** @class */ (function () {
    function DiabetePage(router) {
        this.router = router;
    }
    DiabetePage.prototype.ngOnInit = function () {
    };
    DiabetePage.prototype.goTodiabetecauses = function () {
        this.router.navigate(['/diabetecauses']);
    };
    DiabetePage.prototype.goTodiabeteconsequences = function () {
        this.router.navigate(['/diabeteconsequences']);
    };
    DiabetePage.prototype.goTodiabeteconseils = function () {
        this.router.navigate(['/diabeteconseils']);
    };
    DiabetePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diabete',
            template: __webpack_require__(/*! ./diabete.page.html */ "./src/app/diabete/diabete.page.html"),
            styles: [__webpack_require__(/*! ./diabete.page.scss */ "./src/app/diabete/diabete.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DiabetePage);
    return DiabetePage;
}());



/***/ })

}]);
//# sourceMappingURL=diabete-diabete-module.js.map