(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pression-pression-module"],{

/***/ "./src/app/pression/pression.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pression/pression.module.ts ***!
  \*********************************************/
/*! exports provided: PressionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressionPageModule", function() { return PressionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pression_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pression.page */ "./src/app/pression/pression.page.ts");







var routes = [
    {
        path: '',
        component: _pression_page__WEBPACK_IMPORTED_MODULE_6__["PressionPage"]
    }
];
var PressionPageModule = /** @class */ (function () {
    function PressionPageModule() {
    }
    PressionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pression_page__WEBPACK_IMPORTED_MODULE_6__["PressionPage"]]
        })
    ], PressionPageModule);
    return PressionPageModule;
}());



/***/ }),

/***/ "./src/app/pression/pression.page.html":
/*!*********************************************!*\
  !*** ./src/app/pression/pression.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pression</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class=\"padd\">\n        <ion-button expand=\"block\" size=\"large\" color=\"dark\" (click)=\"goTopressioncauses()\">\n            <ion-icon name=\"medkit\"></ion-icon>\n            Causes\n          </ion-button>\n    </div>\n    \n    <div class=\"padd\">\n      <ion-button expand=\"block\" size=\"large\" color=\"danger\" (click)=\"goTopressionconsequences()\">\n          <ion-icon name=\"medkit\"></ion-icon>\n          Consequences\n        </ion-button>\n    \n      </div>\n      <div class=\"padd\">\n          <ion-button expand=\"block\" size=\"large\" color=\"success\" (click)=\"goTopressionconseils()\">\n              <ion-icon name=\"medkit\"></ion-icon>\n              Conseils\n            </ion-button>\n        \n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pression/pression.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pression/pression.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padd {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQWR2aWNlcy9zcmMvYXBwL3ByZXNzaW9uL3ByZXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJlc3Npb24vcHJlc3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGR7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pression/pression.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pression/pression.page.ts ***!
  \*******************************************/
/*! exports provided: PressionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressionPage", function() { return PressionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PressionPage = /** @class */ (function () {
    function PressionPage(router) {
        this.router = router;
    }
    PressionPage.prototype.ngOnInit = function () {
    };
    PressionPage.prototype.goTopressioncauses = function () {
        this.router.navigate(['/pressioncauses']);
    };
    PressionPage.prototype.goTopressionconsequences = function () {
        this.router.navigate(['/pressionconsequences']);
    };
    PressionPage.prototype.goTopressionconseils = function () {
        this.router.navigate(['/pressionconseils']);
    };
    PressionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pression',
            template: __webpack_require__(/*! ./pression.page.html */ "./src/app/pression/pression.page.html"),
            styles: [__webpack_require__(/*! ./pression.page.scss */ "./src/app/pression/pression.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PressionPage);
    return PressionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pression-pression-module.js.map