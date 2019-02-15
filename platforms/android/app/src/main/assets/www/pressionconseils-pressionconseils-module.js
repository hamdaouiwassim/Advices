(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pressionconseils-pressionconseils-module"],{

/***/ "./src/app/pressionconseils/pressionconseils.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pressionconseils/pressionconseils.module.ts ***!
  \*************************************************************/
/*! exports provided: PressionconseilsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressionconseilsPageModule", function() { return PressionconseilsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pressionconseils_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pressionconseils.page */ "./src/app/pressionconseils/pressionconseils.page.ts");







var routes = [
    {
        path: '',
        component: _pressionconseils_page__WEBPACK_IMPORTED_MODULE_6__["PressionconseilsPage"]
    }
];
var PressionconseilsPageModule = /** @class */ (function () {
    function PressionconseilsPageModule() {
    }
    PressionconseilsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pressionconseils_page__WEBPACK_IMPORTED_MODULE_6__["PressionconseilsPage"]]
        })
    ], PressionconseilsPageModule);
    return PressionconseilsPageModule;
}());



/***/ }),

/***/ "./src/app/pressionconseils/pressionconseils.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pressionconseils/pressionconseils.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Les conseils ( Pression artérielle  )</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card padding>\n    <ion-img src=\"/assets/2.jpg\"></ion-img>\n    <h2>Les Conseils</h2>\n    <p style=\"font-size:18px;\">\n      Limiter les apports en sel: pas plus de 6g/j. Evitez donc : De rajouter du sel : c’est-à-dire de mettre la salière sur la table et cuisiner avec le moins d’apports en sel. De consommer les produit qui sont les plus riches en sel (tels que les viandes poissons fumés, la charcuterie, les chips, les conserves, les biscuits apéritifs, le fromage, etc.). Les plat préparés et/ou industriel : n’hésitez pas à contrôler l’étiquette afin de vérifier le taux de sel ou de sodium. Favoriser les apports en potassium et magnésium en Consommant toujours 5 fruits et légumes par jour Intégrant au moins une fois par semaine des légumineuses (avec par exemple : fèves, pois-chiche, haricots blancs et lentilles) Mangeant une petite poignée de fruits secs, tels que des raisins ou des abricots secs Optimiser les apports en calcium Consommer, par exemple, un produit laitier à chaque repas On peut également avoir recours à des eaux en bouteille riche en calcium comme par exemple : Hépar, Contrex, Courmayeur Diminuer les apports en acide gras saturés Les charcuteries et le beurre Le fromage (mais pas plus de 30 g/j) Les produits industriels (par exemple, les plats tout prêts) Réduire au maximum la consommation de viennoiseries, pâtisseries, biscuits, barre chocolatées Limiter la consommation d’alcool Ne pas prendre de friandise à base de réglisse ni de boisson à base d’antésite (concentré de réglisse) car ce sont sont des hypertenseurs naturels. </p>\n     </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pressionconseils/pressionconseils.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pressionconseils/pressionconseils.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNzaW9uY29uc2VpbHMvcHJlc3Npb25jb25zZWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pressionconseils/pressionconseils.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pressionconseils/pressionconseils.page.ts ***!
  \***********************************************************/
/*! exports provided: PressionconseilsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressionconseilsPage", function() { return PressionconseilsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PressionconseilsPage = /** @class */ (function () {
    function PressionconseilsPage() {
    }
    PressionconseilsPage.prototype.ngOnInit = function () {
    };
    PressionconseilsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pressionconseils',
            template: __webpack_require__(/*! ./pressionconseils.page.html */ "./src/app/pressionconseils/pressionconseils.page.html"),
            styles: [__webpack_require__(/*! ./pressionconseils.page.scss */ "./src/app/pressionconseils/pressionconseils.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PressionconseilsPage);
    return PressionconseilsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pressionconseils-pressionconseils-module.js.map