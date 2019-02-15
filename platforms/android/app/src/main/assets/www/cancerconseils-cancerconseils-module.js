(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cancerconseils-cancerconseils-module"],{

/***/ "./src/app/cancerconseils/cancerconseils.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/cancerconseils/cancerconseils.module.ts ***!
  \*********************************************************/
/*! exports provided: CancerconseilsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerconseilsPageModule", function() { return CancerconseilsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cancerconseils_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancerconseils.page */ "./src/app/cancerconseils/cancerconseils.page.ts");







var routes = [
    {
        path: '',
        component: _cancerconseils_page__WEBPACK_IMPORTED_MODULE_6__["CancerconseilsPage"]
    }
];
var CancerconseilsPageModule = /** @class */ (function () {
    function CancerconseilsPageModule() {
    }
    CancerconseilsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cancerconseils_page__WEBPACK_IMPORTED_MODULE_6__["CancerconseilsPage"]]
        })
    ], CancerconseilsPageModule);
    return CancerconseilsPageModule;
}());



/***/ }),

/***/ "./src/app/cancerconseils/cancerconseils.page.html":
/*!*********************************************************!*\
  !*** ./src/app/cancerconseils/cancerconseils.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n   <!----> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card padding>\n    <ion-img src=\"/assets/3.jpg\"></ion-img>\n    <h2>Les Conseils</h2>\n    <p style=\"font-size:18px;\">\n      Si vous êtes atteint d’un cancer du poumon non à petites cellules, votre équipe de soins élaborera un plan de traitement juste pour vous.<br>\n       Il se basera sur votre santé et des renseignements spécifiques sur le cancer. Quand votre équipe de soins décide quels traitements vous proposer pour le cancer du poumon non à petites cellules, elle prend en considération les éléments suivants : \n       <br>\n       le stade du cancer la possibilité d’enlever le cancer par chirurgie votre état de santé global, dont votre fonction pulmonaire vos préférences personnelles (ce que vous voulez) On peut vous proposer l’un ou plusieurs des traitements suivants pour le cancer du poumon non à petites cellules:\n        Chirurgie. ... Radiothérapie. ... Chimiothérapie. ... Chimioradiothérapie. ... Traitement ciblé ... Immunothérapie. ... Traitements endobronchiques. ... Suivi. </p>\n        </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cancerconseils/cancerconseils.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/cancerconseils/cancerconseils.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmNlcmNvbnNlaWxzL2NhbmNlcmNvbnNlaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cancerconseils/cancerconseils.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/cancerconseils/cancerconseils.page.ts ***!
  \*******************************************************/
/*! exports provided: CancerconseilsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerconseilsPage", function() { return CancerconseilsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CancerconseilsPage = /** @class */ (function () {
    function CancerconseilsPage() {
    }
    CancerconseilsPage.prototype.ngOnInit = function () {
    };
    CancerconseilsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancerconseils',
            template: __webpack_require__(/*! ./cancerconseils.page.html */ "./src/app/cancerconseils/cancerconseils.page.html"),
            styles: [__webpack_require__(/*! ./cancerconseils.page.scss */ "./src/app/cancerconseils/cancerconseils.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CancerconseilsPage);
    return CancerconseilsPage;
}());



/***/ })

}]);
//# sourceMappingURL=cancerconseils-cancerconseils-module.js.map