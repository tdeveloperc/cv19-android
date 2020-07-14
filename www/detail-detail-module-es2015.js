(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngFor=\"let lists of list\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{lists.title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-button (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\n        <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n        Dove sono\n      </ion-button>-->\n      <ion-button color=\"black\" (click)='prosesLogout()'>\n        <ion-icon *ngIf=\"visible\" slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!visible\" color=\"success\" routerLink=\"/accedi/Login\">\n        Login\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngFor=\"let lists of list\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Detail</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <h1 style=\"text-align: center;\">Guarda la galleria</h1>\n  <ion-slides>\n\n    <ion-slide>\n      <div class=\"slide\">\n        <img class=\"img-fluid\" src=\"{{'data:image/jpg;base64,' + lists.img1}}\">\n        <p>{{lists.description}}</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <img class=\"img-fluid\" src=\"{{'data:image/jpg;base64,' + lists.img2}}\">\n\n    </ion-slide>\n\n    <ion-slide>\n      <img class=\"img-fluid\" src=\"{{'data:image/jpg;base64,' + lists.img3}}\">\n\n    </ion-slide>\n\n    <ion-slide>\n      <img class=\"img-fluid\" src=\"{{'data:image/jpg;base64,' + lists.img4}}\">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"assets/images/map-marker-icon.png\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n\n  <div [fullscreen]=\"true\">\n    <ion-item>\n      <ion-label>Filtra per stelle</ion-label>\n      <ion-select [(ngModel)]='filter' name=\"prezzo\" value=\"0\" okText=\"Scegli\" cancelText=\"Chiudi\" id=\"filter\">\n        <ion-select-option value=\"1\">1 Stella</ion-select-option>\n        <ion-select-option value=\"2\">2 Stelle</ion-select-option>\n        <ion-select-option value=\"3\">3 Stelle</ion-select-option>\n        <ion-select-option value=\"4\">4 Stelle</ion-select-option>\n        <ion-select-option value=\"5\">5 Stelle</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button expand=\"block\" color=\"success\" class=\"ion-no-margin\"\n          (click)=\"tryFilter()\" [disabled]=\"disabledButton\">Filtra</ion-button>\n          <ion-button expand=\"block\" color=\"primary\" class=\"ion-no-margin\"\n          (click)=\"deleteFilter()\" [disabled]=\"disabledButton\">Cancella filtri</ion-button>\n  </div>\n\n  <div *ngIf=\"!filtro\">\n  <div *ngFor=\"let liste of lista\" [fullscreen]=\"true\">\n    <ion-item id=\"{{liste.rating}}\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/images/94x94.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{liste.username}}</h2>\n        <h3>{{liste.titolo}}</h3>\n        <p>{{liste.recensione}}</p>\n        <h4 *ngIf=\"liste.rating==1\">\n          <ion-icon color=\"primary\" name=\"star\" ></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==2\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n\n        <h4 *ngIf=\"liste.rating==3\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==4\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==5\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n        </h4>\n      </ion-label>\n    </ion-item>\n  </div>\n</div>\n<div *ngIf=\"filtro\">\n  <div  *ngFor=\"let liste of newlist\" [fullscreen]=\"true\">\n    <ion-item id=\"{{liste.rating}}\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/images/94x94.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{liste.username}}</h2>\n        <h3>{{liste.titolo}}</h3>\n        <p>{{liste.recensione}}</p>\n        <h4 *ngIf=\"liste.rating==1\">\n          <ion-icon color=\"primary\" name=\"star\" ></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==2\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n\n        <h4 *ngIf=\"liste.rating==3\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==4\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==5\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n        </h4>\n      </ion-label>\n    </ion-item>\n  </div>\n</div>\n\n    <div *ngIf=\"!visible\">\n      <div class=\"widget_title\">\n        <h6>Accedere per scrivere recensione</h6>\n      </div>\n      <ion-button color=\"success\" routerLink=\"/accedi/Login\">\n        Login\n      </ion-button>\n    </div>\n    <div *ngIf=\"visible\">\n      <div class=\"widget_title\">\n        <h4>Scrivi una recensione</h4>\n      </div>\n      <div class=\"form-group\">\n        <ion-label position=\"floating\">Quante stelle vuoi dargli?</ion-label>\n        <div *ngIf=\"rating==0\">\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <div *ngIf=\"rating==1\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <div *ngIf=\"rating==2\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n\n        <div *ngIf=\"rating==3\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <div *ngIf=\"rating==4\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <div *ngIf=\"rating==5\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <ion-list no-lines padding-top>\n          <ion-item>\n\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Inserisci e-mail</ion-label>\n            <ion-input type=\"text\" placeholder=\"you@website.com\" [(ngModel)]='email'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Inserisci titolo</ion-label>\n            <ion-input type=\"text\" placeholder=\"Titolo\" [(ngModel)]='titolo'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Cosa pensi di loro?</ion-label>\n            <ion-textarea [(ngModel)]='recensione' cols=\"50\" rows=\"5\" placeholder=\"Scrivi la tua opinione\"  required></ion-textarea>\n          </ion-item>\n        </ion-list>\n        <ion-button expand=\"block\" color=\"success\" class=\"ion-no-margin\"\n          (click)=\"tryReview(lists.id, datastorage.username, datastorage.id)\" [disabled]=\"disabledButton\">Invia\n          Recensione</ion-button>\n      </div>\n    </div>\n\n  <!-- <ion-content>\n     Listings \n\n  </ion-content> -->\n</ion-content>");

/***/ }),

/***/ "./src/app/detail/detail-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/detail/detail-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/detail/detail-routing.module.ts");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"],
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 1rem;\n  font-size: 16px;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 20px;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n\n.widget_title {\n  position: relative;\n  margin: 0 auto 30px;\n  padding-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.widget_title h4 {\n  font-size: 22px;\n}\n\n.widget_title::after {\n  background-color: #38ccff;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 0;\n  position: absolute;\n  transition: all 0.5s ease 0s;\n  width: 50px;\n}\n\n.sidebar_wrap .widget_title {\n  margin: 0 auto 18px;\n  padding-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQXBwXFxDVjE5L3NyY1xcYXBwXFxkZXRhaWxcXGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURFRTtFQUNFLHFDQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FER0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7QUNBSjs7QURFSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQU47O0FESUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiA2MHB4IDAgNDBweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XHJcbiAgfVxyXG5cclxuICBwIGIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcclxuICB9XHJcblxyXG4gICNtYXBfY2FudmFzIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI2FkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAjbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gIH1cclxuICBcclxuICAubWFwLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgI21hcF9jZW50ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndpZGdldF90aXRsZSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1hcmdpbjowIGF1dG8gMzBweDtcdFxyXG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIC53aWRnZXRfdGl0bGUgaDQge1xyXG4gICAgZm9udC1zaXplOjIycHg7XHJcbiAgfVxyXG5cclxuICAud2lkZ2V0X3RpdGxlOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhjY2ZmO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXJfd3JhcCAud2lkZ2V0X3RpdGxlIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDE4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIH0iLCJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2lwZXItc2xpZGUgaDIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA2MHB4IDAgNDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xufVxuXG5wIGIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbiNhZGRyZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXAtd3JhcHBlciAjbWFwX2NlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgbWFyZ2luLXRvcDogLTQxcHg7XG59XG5cbi53aWRnZXRfdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud2lkZ2V0X3RpdGxlIGg0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ud2lkZ2V0X3RpdGxlOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGNjZmY7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogM3B4O1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uc2lkZWJhcl93cmFwIC53aWRnZXRfdGl0bGUge1xuICBtYXJnaW46IDAgYXV0byAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/post-provider */ "./src/app/providers/post-provider.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");









let DetailPage = class DetailPage {
    constructor(geolocation, nativeGeocoder, storage, navCtrl, http, accsPrvds, route, toastCtrl, loadingCtrl, router) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.http = http;
        this.accsPrvds = accsPrvds;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.rate = 0;
        this.email = "";
        this.recensione = "";
        this.titolo = "";
        this.rating = 0;
        this.i = 0;
        this.filtro = false;
    }
    ngOnInit() {
        this.getData();
        this.getReview();
        //this.loadMap();
    }
    ionViewDidEnter() {
        this.storage.get('storage_xxx').then((res) => {
            this.datastorage = res;
            this.name = ' - Benvenuto ' + this.datastorage.username;
            this.visible = true;
        });
    }
    prosesLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.clear();
            this.navCtrl.navigateRoot('/accedi/Login');
            const toast = yield this.toastCtrl.create({
                message: 'Logout avvenuto',
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
            this.visible = !this.visible;
        });
    }
    onRate(rate) {
        this.rating = rate;
    }
    getReview() {
        return new Promise(resolve => {
            let body = {
                aksi: 'getReview',
                id: this.route.snapshot.paramMap.get('id')
            };
            this.accsPrvds.postData(body, '/file_aksi.php').subscribe((res) => {
                this.lista = JSON.parse(JSON.stringify(res['result']));
            });
        });
    }
    getData() {
        return new Promise(resolve => {
            let body = {
                aksi: 'getdataDetail',
                id: this.route.snapshot.paramMap.get('id')
            };
            this.accsPrvds.postData(body, '/file_aksi.php').subscribe((res) => {
                this.list = JSON.parse(JSON.stringify(res['result']));
                this.loadMap(this.list[0]['latitudine'], this.list[0]['longitudine']);
            });
        });
    }
    loadMap(latitudine, longitudine) {
        let options = { timeout: 10000, enableHighAccuracy: true, maximumAge: 3600 };
        this.geolocation.getCurrentPosition(options).then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            let latLng = new google.maps.LatLng(latitudine, longitudine);
            let mapOptions = {
                center: latLng,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            this.getAddressFromCoords(latitudine, longitudine);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.map.addListener('dragend', () => {
                this.latitude = this.map.center.lat();
                this.longitude = this.map.center.lng();
                this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getAddressFromCoords(lattitude, longitude) {
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then((result) => {
            this.address = "";
            let responseAddress = [];
            for (let [key, value] of Object.entries(result[0])) {
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (let value of responseAddress) {
                this.address += value + ", ";
            }
            this.address = this.address.slice(0, -2);
        })
            .catch((error) => {
            this.address = "Address Not Available!";
        });
    }
    tryReview(id_event, username, id_user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id_event = id_event;
            if (this.datastorage.visualizza_nome == '1') {
                this.username = this.datastorage.name;
            }
            else {
                this.username = username;
            }
            this.id_user = id_user;
            if (this.rating == 0) {
                this.presentToast('Numero stelle richiesto');
            }
            else if (this.email == "") {
                this.presentToast('E-mail Obbligatoria');
            }
            else if (this.titolo == "") {
                this.presentToast('Titolo Richiesto');
            }
            else if (this.recensione == "") {
                this.presentToast('Recensione Obbligatoria');
            }
            else {
                this.disabledButton = true;
                const loader = yield this.loadingCtrl.create({
                    message: "Attendi per favore",
                });
                loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'insertReview',
                        id_event: this.id_event,
                        id_user: this.id_user,
                        titolo: this.titolo,
                        rating: this.rating,
                        username: this.username,
                        email: this.email,
                        recensione: this.recensione
                    };
                    this.accsPrvds.postData(body, '/file_aksi.php').subscribe((res) => {
                        if (res.success == true) {
                            loader.dismiss();
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                            setTimeout(function () {
                                window.location.reload();
                            }, 5000);
                        }
                        else {
                            this.disabledButton = false;
                            loader.dismiss();
                            this.presentToast(res.msg);
                        }
                    });
                });
            }
        });
    }
    presentToast(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: a,
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        });
    }
    tryFilter() {
        let j = 0;
        this.newlist = new Array();
        if (this.filter != null) {
            for (let i = 0; i < this.lista.length; i++) {
                if (this.lista[i].rating == this.filter) {
                    this.newlist.push({
                        username: this.lista[i].username,
                        title: this.lista[i].title,
                        recensione: this.lista[i].recensione,
                        rating: this.lista[i].rating
                    });
                    j = 1;
                    this.filtro = true;
                }
            }
            if (j == 0) {
                this.presentToast('Nessuna corrispondenza con il filtro');
                this.filtro = false;
            }
        }
    }
    deleteFilter() {
        this.filtro = false;
    }
};
DetailPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false })
], DetailPage.prototype, "mapElement", void 0);
DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")).default]
    })
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=detail-detail-module-es2015.js.map