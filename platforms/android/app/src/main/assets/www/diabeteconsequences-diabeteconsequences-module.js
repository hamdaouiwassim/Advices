(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["diabeteconsequences-diabeteconsequences-module"],{

/***/ "./src/app/diabeteconsequences/diabeteconsequences.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/diabeteconsequences/diabeteconsequences.module.ts ***!
  \*******************************************************************/
/*! exports provided: DiabeteconsequencesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiabeteconsequencesPageModule", function() { return DiabeteconsequencesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diabeteconsequences_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diabeteconsequences.page */ "./src/app/diabeteconsequences/diabeteconsequences.page.ts");







var routes = [
    {
        path: '',
        component: _diabeteconsequences_page__WEBPACK_IMPORTED_MODULE_6__["DiabeteconsequencesPage"]
    }
];
var DiabeteconsequencesPageModule = /** @class */ (function () {
    function DiabeteconsequencesPageModule() {
    }
    DiabeteconsequencesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_diabeteconsequences_page__WEBPACK_IMPORTED_MODULE_6__["DiabeteconsequencesPage"]]
        })
    ], DiabeteconsequencesPageModule);
    return DiabeteconsequencesPageModule;
}());



/***/ }),

/***/ "./src/app/diabeteconsequences/diabeteconsequences.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/diabeteconsequences/diabeteconsequences.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Les consequences ( Diabète )</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card padding>\n        <ion-img src=\"/assets/1.jpg\"></ion-img>\n        <h2>Les Consequences</h2>\n        <p style=\"font-size:18px;\">\n             Les maladies cardiovasculaires sont de 2 à 4 fois plus fréquentes chez les diabétiques. Le taux élevé de glucose dans le sang contribue à la coagulation du sang, ce qui augmente le risque d'obstruction de vaisseaux sanguins près du cœur (infarctus) ou au cerveau (AVC). L'âge, l'hérédité, l'hypertension, l'embonpoint et le tabagisme accroissent également les risques, notamment chez les diabétiques de type II. La probabilité de développer un infarctus du myocarde est multipliée par deux à quatre chez un diabétique et ces infarctus sont souvent deux fois plus mortels. Les troubles oculaires constituent une complication du diabète fréquente : près de 2 % de toutes les personnes atteintes de diabète il y a 15 ans sont aujourd'hui aveugles, tandis que 10 % d'entre elles souffrent de graves handicaps visuels. La rétinopathie diabétique (pour près de 80 % pour des diabétiques de type I et II), l'œdème maculaire et la cataracte sont les maladies les plus fréquentes*. Les neuropathies. Un taux de glucose trop élevé est toxique pour les nerfs. Le diagnostic est souvent tardif car les symptômes sont, très souvent, inexistants. La neuropathie est un facteur de risque de complication du diabète avec l’apparition d’ulcère qui, dans les stades les plus graves, peuvent conduire à des amputations. La neuropathie peut être très douloureuse. Elle peut aussi toucher les nerfs qui contrôlent la digestion, la pression sanguine, le rythme cardiaque, les organes sexuels et la vessie. Une sensibilité aux infections. Le diabète fragilise et multiplie le risque d’infection de la peau, des gencives, des voies respiratoires, du vagin ou de la vessie, parfois difficiles à guérir. La néphropathie est une complication rénale du diabète. Le rein est un filtre qui élimine, via l’urine, ce dont le corps n’a pas besoin ou ce qui est en excès (sodium, potassium, urée, albumine, glucose et eau). A cause du diabète, le filtre rénal s'encrasse : il n'élimine plus certains déchets qui s'accumulent dans l'organisme, provoquant une augmentation de la pression artérielle. Là aussi, la maladie se développe sans bruit. Il faut pourtant repérer les premiers signes pour éviter les complications, allant de l'insuffisance rénale à la maladie rénale irréversible. L’impuissance. Le diabète est la première cause organique des troubles de l'érection, et entre 20 et 60 ans, un patient diabétique sur trois en serait victime. Cette proportion atteindrait un patient sur deux chez les 50 à 60 ans        \n            </p>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/diabeteconsequences/diabeteconsequences.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/diabeteconsequences/diabeteconsequences.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWJldGVjb25zZXF1ZW5jZXMvZGlhYmV0ZWNvbnNlcXVlbmNlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/diabeteconsequences/diabeteconsequences.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/diabeteconsequences/diabeteconsequences.page.ts ***!
  \*****************************************************************/
/*! exports provided: DiabeteconsequencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiabeteconsequencesPage", function() { return DiabeteconsequencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiabeteconsequencesPage = /** @class */ (function () {
    function DiabeteconsequencesPage() {
    }
    DiabeteconsequencesPage.prototype.ngOnInit = function () {
    };
    DiabeteconsequencesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diabeteconsequences',
            template: __webpack_require__(/*! ./diabeteconsequences.page.html */ "./src/app/diabeteconsequences/diabeteconsequences.page.html"),
            styles: [__webpack_require__(/*! ./diabeteconsequences.page.scss */ "./src/app/diabeteconsequences/diabeteconsequences.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiabeteconsequencesPage);
    return DiabeteconsequencesPage;
}());



/***/ })

}]);
//# sourceMappingURL=diabeteconsequences-diabeteconsequences-module.js.map