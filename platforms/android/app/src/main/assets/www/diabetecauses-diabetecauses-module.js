(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["diabetecauses-diabetecauses-module"],{

/***/ "./src/app/diabetecauses/diabetecauses.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/diabetecauses/diabetecauses.module.ts ***!
  \*******************************************************/
/*! exports provided: DiabetecausesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiabetecausesPageModule", function() { return DiabetecausesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diabetecauses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diabetecauses.page */ "./src/app/diabetecauses/diabetecauses.page.ts");







var routes = [
    {
        path: '',
        component: _diabetecauses_page__WEBPACK_IMPORTED_MODULE_6__["DiabetecausesPage"]
    }
];
var DiabetecausesPageModule = /** @class */ (function () {
    function DiabetecausesPageModule() {
    }
    DiabetecausesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_diabetecauses_page__WEBPACK_IMPORTED_MODULE_6__["DiabetecausesPage"]]
        })
    ], DiabetecausesPageModule);
    return DiabetecausesPageModule;
}());



/***/ }),

/***/ "./src/app/diabetecauses/diabetecauses.page.html":
/*!*******************************************************!*\
  !*** ./src/app/diabetecauses/diabetecauses.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Les causes ( Diabète ) </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n        <ion-card padding>\n          <ion-img src=\"/assets/1.jpg\"></ion-img>\n          <h2>Les Causes</h2>\n          <p style=\"font-size:18px;\">\n              Cause de diabète Le diabète de type 2 est causé par la résistance à l'insuline et une production insuffisante de celle-ci. Comme l'organisme ne peut utiliser l'insuline aussi bien qu'il le devrait ou parce que le pancréas n'en produit pas suffisamment, le glucose ne peut être transporté à l'intérieur des cellules à partir du sang. \n          </p>\n        </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/diabetecauses/diabetecauses.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/diabetecauses/diabetecauses.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWJldGVjYXVzZXMvZGlhYmV0ZWNhdXNlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/diabetecauses/diabetecauses.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/diabetecauses/diabetecauses.page.ts ***!
  \*****************************************************/
/*! exports provided: DiabetecausesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiabetecausesPage", function() { return DiabetecausesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiabetecausesPage = /** @class */ (function () {
    function DiabetecausesPage() {
    }
    DiabetecausesPage.prototype.ngOnInit = function () {
    };
    DiabetecausesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diabetecauses',
            template: __webpack_require__(/*! ./diabetecauses.page.html */ "./src/app/diabetecauses/diabetecauses.page.html"),
            styles: [__webpack_require__(/*! ./diabetecauses.page.scss */ "./src/app/diabetecauses/diabetecauses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiabetecausesPage);
    return DiabetecausesPage;
}());



/***/ })

}]);
//# sourceMappingURL=diabetecauses-diabetecauses-module.js.map