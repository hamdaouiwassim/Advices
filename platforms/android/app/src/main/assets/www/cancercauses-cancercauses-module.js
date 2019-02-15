(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cancercauses-cancercauses-module"],{

/***/ "./src/app/cancercauses/cancercauses.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cancercauses/cancercauses.module.ts ***!
  \*****************************************************/
/*! exports provided: CancercausesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancercausesPageModule", function() { return CancercausesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cancercauses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancercauses.page */ "./src/app/cancercauses/cancercauses.page.ts");







var routes = [
    {
        path: '',
        component: _cancercauses_page__WEBPACK_IMPORTED_MODULE_6__["CancercausesPage"]
    }
];
var CancercausesPageModule = /** @class */ (function () {
    function CancercausesPageModule() {
    }
    CancercausesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cancercauses_page__WEBPACK_IMPORTED_MODULE_6__["CancercausesPage"]]
        })
    ], CancercausesPageModule);
    return CancercausesPageModule;
}());



/***/ }),

/***/ "./src/app/cancercauses/cancercauses.page.html":
/*!*****************************************************!*\
  !*** ./src/app/cancercauses/cancercauses.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Les Causes ( Cancer de poumon ) </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card padding>\n        <ion-img src=\"/assets/3.jpg\"></ion-img>\n        <h2>Les Causes</h2>\n        <p style=\"font-size:18px;\">\n            Plus une personne a fumé pendant longtemps et plus elle fume, plus grand est son risque de cancer du poumon. Si vous cessez de fumer avant qu'un cancer se développe, les lésions de tissu pulmonaire causées par le tabac commenceront à guérir. Le risque de cancer pour un ex-fumeur ne sera pas aussi faible que pour une personne qui n'a jamais fumé, mais il diminuera quand même avec le temps. L'usage du cigare et de la pipe entraîne presque le même degré de risque de cancer du poumon que l'usage de la cigarette.         </p>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cancercauses/cancercauses.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/cancercauses/cancercauses.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmNlcmNhdXNlcy9jYW5jZXJjYXVzZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cancercauses/cancercauses.page.ts":
/*!***************************************************!*\
  !*** ./src/app/cancercauses/cancercauses.page.ts ***!
  \***************************************************/
/*! exports provided: CancercausesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancercausesPage", function() { return CancercausesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CancercausesPage = /** @class */ (function () {
    function CancercausesPage() {
    }
    CancercausesPage.prototype.ngOnInit = function () {
    };
    CancercausesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancercauses',
            template: __webpack_require__(/*! ./cancercauses.page.html */ "./src/app/cancercauses/cancercauses.page.html"),
            styles: [__webpack_require__(/*! ./cancercauses.page.scss */ "./src/app/cancercauses/cancercauses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CancercausesPage);
    return CancercausesPage;
}());



/***/ })

}]);
//# sourceMappingURL=cancercauses-cancercauses-module.js.map