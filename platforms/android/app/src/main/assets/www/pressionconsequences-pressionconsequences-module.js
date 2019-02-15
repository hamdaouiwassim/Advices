(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pressionconsequences-pressionconsequences-module"],{

/***/ "./src/app/pressionconsequences/pressionconsequences.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pressionconsequences/pressionconsequences.module.ts ***!
  \*********************************************************************/
/*! exports provided: PressionconsequencesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressionconsequencesPageModule", function() { return PressionconsequencesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pressionconsequences_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pressionconsequences.page */ "./src/app/pressionconsequences/pressionconsequences.page.ts");







var routes = [
    {
        path: '',
        component: _pressionconsequences_page__WEBPACK_IMPORTED_MODULE_6__["PressionconsequencesPage"]
    }
];
var PressionconsequencesPageModule = /** @class */ (function () {
    function PressionconsequencesPageModule() {
    }
    PressionconsequencesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pressionconsequences_page__WEBPACK_IMPORTED_MODULE_6__["PressionconsequencesPage"]]
        })
    ], PressionconsequencesPageModule);
    return PressionconsequencesPageModule;
}());



/***/ }),

/***/ "./src/app/pressionconsequences/pressionconsequences.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pressionconsequences/pressionconsequences.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Les consequences ( Pression artérielle  )</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card padding>\n    <ion-img src=\"/assets/2.jpg\"></ion-img>\n    <h2>Les consequences</h2>\n    <p style=\"font-size:18px;\">\n      Si votre tension est supérieure à 14/9 au repos, au calme et ceci sur plusieurs semaines, on peut parler d’hypertension Les conséquences sont multiples et peuvent toucher différents organes : tels que : Le cerveau : l'hypertension est le plus gros facteur de risque des accidents vasculaires, que l'on appelle aussi \" attaque cérébrale \". Une personne hypertendue multiplie par 10 ce risque ! Le cœur : l'hypertension augmente le risque d'infarctus du myocarde Les artères : l'hypertension les rend plus rigides Les reins : l'hypertension peut entraîner une insuffisance rénale  </p>\n     </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pressionconsequences/pressionconsequences.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pressionconsequences/pressionconsequences.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNzaW9uY29uc2VxdWVuY2VzL3ByZXNzaW9uY29uc2VxdWVuY2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pressionconsequences/pressionconsequences.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pressionconsequences/pressionconsequences.page.ts ***!
  \*******************************************************************/
/*! exports provided: PressionconsequencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressionconsequencesPage", function() { return PressionconsequencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PressionconsequencesPage = /** @class */ (function () {
    function PressionconsequencesPage() {
    }
    PressionconsequencesPage.prototype.ngOnInit = function () {
    };
    PressionconsequencesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pressionconsequences',
            template: __webpack_require__(/*! ./pressionconsequences.page.html */ "./src/app/pressionconsequences/pressionconsequences.page.html"),
            styles: [__webpack_require__(/*! ./pressionconsequences.page.scss */ "./src/app/pressionconsequences/pressionconsequences.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PressionconsequencesPage);
    return PressionconsequencesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pressionconsequences-pressionconsequences-module.js.map