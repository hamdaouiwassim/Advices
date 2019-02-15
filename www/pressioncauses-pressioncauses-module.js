(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pressioncauses-pressioncauses-module"],{

/***/ "./src/app/pressioncauses/pressioncauses.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pressioncauses/pressioncauses.module.ts ***!
  \*********************************************************/
/*! exports provided: PressioncausesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressioncausesPageModule", function() { return PressioncausesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pressioncauses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pressioncauses.page */ "./src/app/pressioncauses/pressioncauses.page.ts");







var routes = [
    {
        path: '',
        component: _pressioncauses_page__WEBPACK_IMPORTED_MODULE_6__["PressioncausesPage"]
    }
];
var PressioncausesPageModule = /** @class */ (function () {
    function PressioncausesPageModule() {
    }
    PressioncausesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pressioncauses_page__WEBPACK_IMPORTED_MODULE_6__["PressioncausesPage"]]
        })
    ], PressioncausesPageModule);
    return PressioncausesPageModule;
}());



/***/ }),

/***/ "./src/app/pressioncauses/pressioncauses.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pressioncauses/pressioncauses.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Les causes ( Pression artérielle  ) </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card padding>\n    <ion-img src=\"/assets/2.jpg\"></ion-img>\n    <h2>Les Causes</h2>\n    <p style=\"font-size:18px;\">\n      Elle est causée par une multitude de facteurs dont les effets s'accumulent avec les années. Les principaux sont liés à l'âge, à l'hérédité (surtout pour les hommes) et aux habitudes de vie. Ainsi, l'obésité, la sédentarité, le tabagisme, l'abus d'alcool et le stress contribuent à l'hypertension artérielle.  </p>\n     </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pressioncauses/pressioncauses.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pressioncauses/pressioncauses.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNzaW9uY2F1c2VzL3ByZXNzaW9uY2F1c2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pressioncauses/pressioncauses.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pressioncauses/pressioncauses.page.ts ***!
  \*******************************************************/
/*! exports provided: PressioncausesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressioncausesPage", function() { return PressioncausesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PressioncausesPage = /** @class */ (function () {
    function PressioncausesPage() {
    }
    PressioncausesPage.prototype.ngOnInit = function () {
    };
    PressioncausesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pressioncauses',
            template: __webpack_require__(/*! ./pressioncauses.page.html */ "./src/app/pressioncauses/pressioncauses.page.html"),
            styles: [__webpack_require__(/*! ./pressioncauses.page.scss */ "./src/app/pressioncauses/pressioncauses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PressioncausesPage);
    return PressioncausesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pressioncauses-pressioncauses-module.js.map