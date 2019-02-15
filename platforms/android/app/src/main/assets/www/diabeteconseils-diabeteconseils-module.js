(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["diabeteconseils-diabeteconseils-module"],{

/***/ "./src/app/diabeteconseils/diabeteconseils.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/diabeteconseils/diabeteconseils.module.ts ***!
  \***********************************************************/
/*! exports provided: DiabeteconseilsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiabeteconseilsPageModule", function() { return DiabeteconseilsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diabeteconseils_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diabeteconseils.page */ "./src/app/diabeteconseils/diabeteconseils.page.ts");







var routes = [
    {
        path: '',
        component: _diabeteconseils_page__WEBPACK_IMPORTED_MODULE_6__["DiabeteconseilsPage"]
    }
];
var DiabeteconseilsPageModule = /** @class */ (function () {
    function DiabeteconseilsPageModule() {
    }
    DiabeteconseilsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_diabeteconseils_page__WEBPACK_IMPORTED_MODULE_6__["DiabeteconseilsPage"]]
        })
    ], DiabeteconseilsPageModule);
    return DiabeteconseilsPageModule;
}());



/***/ }),

/***/ "./src/app/diabeteconseils/diabeteconseils.page.html":
/*!***********************************************************!*\
  !*** ./src/app/diabeteconseils/diabeteconseils.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Les Conseils ( Diabète )</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card padding>\n        <ion-img src=\"/assets/1.jpg\"></ion-img>\n        <h2>Les Conseils</h2>\n        <p style=\"font-size:18px;\">\n             - 5 fruits et légumes par jour, avec un maximum de 3 fruits.<br>\n             - 3 produits laitiers par jour. <br>\n             - Viande / poisson /œufs 1 à 2 fois par jour. <br>\n             - Limiter les quantités de matières grasses. <br>\n             - Consommer suffisamment de glucides mais en les choisissant bien.       \n            </p>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/diabeteconseils/diabeteconseils.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/diabeteconseils/diabeteconseils.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWJldGVjb25zZWlscy9kaWFiZXRlY29uc2VpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/diabeteconseils/diabeteconseils.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/diabeteconseils/diabeteconseils.page.ts ***!
  \*********************************************************/
/*! exports provided: DiabeteconseilsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiabeteconseilsPage", function() { return DiabeteconseilsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiabeteconseilsPage = /** @class */ (function () {
    function DiabeteconseilsPage() {
    }
    DiabeteconseilsPage.prototype.ngOnInit = function () {
    };
    DiabeteconseilsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diabeteconseils',
            template: __webpack_require__(/*! ./diabeteconseils.page.html */ "./src/app/diabeteconseils/diabeteconseils.page.html"),
            styles: [__webpack_require__(/*! ./diabeteconseils.page.scss */ "./src/app/diabeteconseils/diabeteconseils.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiabeteconseilsPage);
    return DiabeteconseilsPage;
}());



/***/ })

}]);
//# sourceMappingURL=diabeteconseils-diabeteconseils-module.js.map