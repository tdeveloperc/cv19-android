function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *ngFor=\"let lists of list\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{lists.title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-button (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\n        <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n        Dove sono\n      </ion-button>-->\n      <ion-button color=\"black\" (click)='prosesLogout()'>\n        <ion-icon *ngIf=\"visible\" slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!visible\" color=\"success\" routerLink=\"/accedi/Login\">\n        Login\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngFor=\"let lists of list\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Detail</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <h1 style=\"text-align: center;\">Guarda la galleria</h1>\n  <ion-slides>\n\n    <ion-slide>\n      <div class=\"slide\">\n        <img class=\"img-fluid\" src=\"{{'data:image/jpg;base64,' + lists.img1}}\">\n        <p>{{lists.description}}</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <img class=\"img-fluid\" src=\"{{'data:image/jpg;base64,' + lists.img2}}\">\n\n    </ion-slide>\n\n    <ion-slide>\n      <img class=\"img-fluid\" src=\"{{'data:image/jpg;base64,' + lists.img3}}\">\n\n    </ion-slide>\n\n    <ion-slide>\n      <img class=\"img-fluid\" src=\"{{'data:image/jpg;base64,' + lists.img4}}\">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"assets/images/map-marker-icon.png\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n\n  <div [fullscreen]=\"true\">\n    <ion-item>\n      <ion-label>Filtra per stelle</ion-label>\n      <ion-select [(ngModel)]='filter' name=\"prezzo\" value=\"0\" okText=\"Scegli\" cancelText=\"Chiudi\">\n        <ion-select-option value=\"\">Nessun valore </ion-select-option>\n        <ion-select-option value=\"1\">1 Stella</ion-select-option>\n        <ion-select-option value=\"2\">2 Stelle</ion-select-option>\n        <ion-select-option value=\"3\">3 Stelle</ion-select-option>\n        <ion-select-option value=\"4\">4 Stelle</ion-select-option>\n        <ion-select-option value=\"5\">5 Stelle</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button expand=\"block\" color=\"success\" class=\"ion-no-margin\"\n          (click)=\"tryFilter()\" [disabled]=\"disabledButton\">Filtra</ion-button>\n          <ion-button expand=\"block\" color=\"primary\" class=\"ion-no-margin\"\n          (click)=\"deleteFilter()\" [disabled]=\"disabledButton\">Cancella filtri</ion-button>\n  </div>\n\n  <div *ngIf=\"!filtro\">\n  <div *ngFor=\"let liste of lista\" [fullscreen]=\"true\">\n    <ion-item id=\"{{liste.rating}}\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/images/94x94.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{liste.username}}</h2>\n        <h3>{{liste.titolo}}</h3>\n        <p>{{liste.recensione}}</p>\n        <h4 *ngIf=\"liste.rating==1\">\n          <ion-icon color=\"primary\" name=\"star\" ></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==2\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n\n        <h4 *ngIf=\"liste.rating==3\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==4\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==5\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n        </h4>\n      </ion-label>\n    </ion-item>\n  </div>\n</div>\n<div *ngIf=\"filtro\">\n  <div  *ngFor=\"let liste of newlist\" [fullscreen]=\"true\">\n    <ion-item id=\"{{liste.rating}}\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/images/94x94.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{liste.username}}</h2>\n        <h3>{{liste.titolo}}</h3>\n        <p>{{liste.recensione}}</p>\n        <h4 *ngIf=\"liste.rating==1\">\n          <ion-icon color=\"primary\" name=\"star\" ></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==2\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n\n        <h4 *ngIf=\"liste.rating==3\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==4\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </h4>\n        <h4 *ngIf=\"liste.rating==5\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n        </h4>\n      </ion-label>\n    </ion-item>\n  </div>\n</div>\n\n    <div *ngIf=\"!visible\">\n      <div class=\"widget_title\">\n        <h6>Accedere per scrivere recensione</h6>\n      </div>\n      <ion-button color=\"success\" routerLink=\"/accedi/Login\">\n        Login\n      </ion-button>\n    </div>\n    <div *ngIf=\"visible\">\n      <div class=\"widget_title\">\n        <h4>Scrivi una recensione</h4>\n      </div>\n      <div class=\"form-group\">\n        <ion-label position=\"floating\">Quante stelle vuoi dargli?</ion-label>\n        <div *ngIf=\"rating==0\">\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <div *ngIf=\"rating==1\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <div *ngIf=\"rating==2\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n\n        <div *ngIf=\"rating==3\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <div *ngIf=\"rating==4\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <div *ngIf=\"rating==5\">\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(1)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(2)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(3)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(4)\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\" (click)=\"onRate(5)\"></ion-icon>\n        </div>\n        <ion-list no-lines padding-top>\n          <ion-item>\n\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Inserisci e-mail</ion-label>\n            <ion-input type=\"text\" placeholder=\"you@website.com\" [(ngModel)]='email'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Inserisci titolo</ion-label>\n            <ion-input type=\"text\" placeholder=\"Titolo\" [(ngModel)]='titolo'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Cosa pensi di loro?</ion-label>\n            <ion-textarea [(ngModel)]='recensione' cols=\"50\" rows=\"5\" placeholder=\"Scrivi la tua opinione\"  required></ion-textarea>\n          </ion-item>\n        </ion-list>\n        <ion-button expand=\"block\" color=\"success\" class=\"ion-no-margin\"\n          (click)=\"tryReview(lists.id, datastorage.username, datastorage.id)\" [disabled]=\"disabledButton\">Invia\n          Recensione</ion-button>\n      </div>\n    </div>\n\n  <!-- <ion-content>\n     Listings \n\n  </ion-content> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/detail/detail-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/detail/detail-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: DetailPageRoutingModule */

  /***/
  function srcAppDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
      return DetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/detail/detail.page.ts");

    var routes = [{
      path: '',
      component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }];

    var DetailPageRoutingModule = function DetailPageRoutingModule() {
      _classCallCheck(this, DetailPageRoutingModule);
    };

    DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/detail/detail.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/detail/detail.module.ts ***!
    \*****************************************/

  /*! exports provided: DetailPageModule */

  /***/
  function srcAppDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
      return DetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-routing.module */
    "./src/app/detail/detail-routing.module.ts");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/detail/detail.page.ts");

    var DetailPageModule = function DetailPageModule() {
      _classCallCheck(this, DetailPageModule);
    };

    DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
      declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })], DetailPageModule);
    /***/
  },

  /***/
  "./src/app/detail/detail.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/detail/detail.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 1rem;\n  font-size: 16px;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 20px;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n\n.widget_title {\n  position: relative;\n  margin: 0 auto 30px;\n  padding-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.widget_title h4 {\n  font-size: 22px;\n}\n\n.widget_title::after {\n  background-color: #38ccff;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 0;\n  position: absolute;\n  transition: all 0.5s ease 0s;\n  width: 50px;\n}\n\n.sidebar_wrap .widget_title {\n  margin: 0 auto 18px;\n  padding-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQXBwXFxDVjE5L3NyY1xcYXBwXFxkZXRhaWxcXGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURFRTtFQUNFLHFDQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FER0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7QUNBSjs7QURFSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQU47O0FESUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiA2MHB4IDAgNDBweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XHJcbiAgfVxyXG5cclxuICBwIGIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcclxuICB9XHJcblxyXG4gICNtYXBfY2FudmFzIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI2FkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAjbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gIH1cclxuICBcclxuICAubWFwLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgI21hcF9jZW50ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndpZGdldF90aXRsZSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1hcmdpbjowIGF1dG8gMzBweDtcdFxyXG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIC53aWRnZXRfdGl0bGUgaDQge1xyXG4gICAgZm9udC1zaXplOjIycHg7XHJcbiAgfVxyXG5cclxuICAud2lkZ2V0X3RpdGxlOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhjY2ZmO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXJfd3JhcCAud2lkZ2V0X3RpdGxlIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDE4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIH0iLCJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2lwZXItc2xpZGUgaDIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA2MHB4IDAgNDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xufVxuXG5wIGIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbiNhZGRyZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXAtd3JhcHBlciAjbWFwX2NlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgbWFyZ2luLXRvcDogLTQxcHg7XG59XG5cbi53aWRnZXRfdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud2lkZ2V0X3RpdGxlIGg0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ud2lkZ2V0X3RpdGxlOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGNjZmY7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogM3B4O1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uc2lkZWJhcl93cmFwIC53aWRnZXRfdGl0bGUge1xuICBtYXJnaW46IDAgYXV0byAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/detail/detail.page.ts":
  /*!***************************************!*\
    !*** ./src/app/detail/detail.page.ts ***!
    \***************************************/

  /*! exports provided: DetailPage */

  /***/
  function srcAppDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
      return DetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../providers/post-provider */
    "./src/app/providers/post-provider.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var DetailPage = /*#__PURE__*/function () {
      function DetailPage(geolocation, nativeGeocoder, storage, navCtrl, http, accsPrvds, route, toastCtrl, loadingCtrl, router) {
        _classCallCheck(this, DetailPage);

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

      _createClass(DetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
          this.getReview(); //this.loadMap();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.storage.get('storage_xxx').then(function (res) {
            _this.datastorage = res;
            _this.name = ' - Benvenuto ' + _this.datastorage.username;
            _this.visible = true;
          });
          this.storage.get('storage_xxxxx').then(function (res) {
            _this.newlist = res;
          });
          this.storage.get('storage_xxxxxx').then(function (res) {
            _this.filtro = res;
          });
          this.storage.remove('storage_xxxxx');
          this.storage.remove('storage_xxxxxx');
        }
      }, {
        key: "prosesLogout",
        value: function prosesLogout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.storage.clear();
                    this.navCtrl.navigateRoot('/accedi/Login');
                    _context.next = 4;
                    return this.toastCtrl.create({
                      message: 'Logout avvenuto',
                      duration: 1500,
                      position: 'bottom'
                    });

                  case 4:
                    toast = _context.sent;
                    toast.present();
                    this.visible = !this.visible;

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onRate",
        value: function onRate(rate) {
          console.log(rate);
          this.rating = rate;
        }
      }, {
        key: "getReview",
        value: function getReview() {
          var _this2 = this;

          return new Promise(function (resolve) {
            var body = {
              aksi: 'getReview',
              id: _this2.route.snapshot.paramMap.get('id')
            };

            _this2.accsPrvds.postData(body, '/file_aksi.php').subscribe(function (res) {
              _this2.lista = JSON.parse(JSON.stringify(res['result']));
            });
          });
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this3 = this;

          return new Promise(function (resolve) {
            var body = {
              aksi: 'getdataDetail',
              id: _this3.route.snapshot.paramMap.get('id')
            };

            _this3.accsPrvds.postData(body, '/file_aksi.php').subscribe(function (res) {
              _this3.list = JSON.parse(JSON.stringify(res['result']));
              console.log('lat ' + _this3.list[0]['latitudine'] + ' long ' + _this3.list[0]['longitudine']);

              _this3.loadMap(_this3.list[0]['latitudine'], _this3.list[0]['longitudine']);
            });
          });
        }
      }, {
        key: "loadMap",
        value: function loadMap(latitudine, longitudine) {
          var _this4 = this;

          var options = {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 3600
          };
          this.geolocation.getCurrentPosition(options).then(function (resp) {
            console.log('lat ' + latitudine + ' long ' + longitudine);
            _this4.latitude = resp.coords.latitude;
            _this4.longitude = resp.coords.longitude;
            var latLng = new google.maps.LatLng(latitudine, longitudine);
            var mapOptions = {
              center: latLng,
              zoom: 14,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            _this4.getAddressFromCoords(latitudine, longitudine);

            _this4.map = new google.maps.Map(_this4.mapElement.nativeElement, mapOptions);

            _this4.map.addListener('dragend', function () {
              _this4.latitude = _this4.map.center.lat();
              _this4.longitude = _this4.map.center.lng();

              _this4.getAddressFromCoords(_this4.map.center.lat(), _this4.map.center.lng());
            });
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
        }
      }, {
        key: "getAddressFromCoords",
        value: function getAddressFromCoords(lattitude, longitude) {
          var _this5 = this;

          console.log("getAddressFromCoords " + lattitude + " " + longitude);
          var options = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(function (result) {
            _this5.address = "";
            var responseAddress = [];

            for (var _i = 0, _Object$entries = Object.entries(result[0]); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              if (value.length > 0) responseAddress.push(value);
            }

            responseAddress.reverse();

            for (var _i2 = 0, _responseAddress = responseAddress; _i2 < _responseAddress.length; _i2++) {
              var _value = _responseAddress[_i2];
              _this5.address += _value + ", ";
            }

            _this5.address = _this5.address.slice(0, -2);
          })["catch"](function (error) {
            _this5.address = "Address Not Available!";
          });
        }
      }, {
        key: "tryReview",
        value: function tryReview(id_event, username, id_user) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.id_event = id_event;

                    if (this.datastorage.visualizza_nome == '1') {
                      this.username = this.datastorage.name;
                    } else {
                      this.username = username;
                    }

                    this.id_user = id_user;
                    console.log('evento: ' + this.username);
                    console.log(this.titolo);
                    console.log(this.rating);

                    if (!(this.rating == 0)) {
                      _context2.next = 10;
                      break;
                    }

                    this.presentToast('Numero stelle richiesto');
                    _context2.next = 29;
                    break;

                  case 10:
                    if (!(this.email == "")) {
                      _context2.next = 14;
                      break;
                    }

                    this.presentToast('E-mail Obbligatoria');
                    _context2.next = 29;
                    break;

                  case 14:
                    if (!(this.titolo == "")) {
                      _context2.next = 18;
                      break;
                    }

                    this.presentToast('Titolo Richiesto');
                    _context2.next = 29;
                    break;

                  case 18:
                    if (!(this.recensione == "")) {
                      _context2.next = 22;
                      break;
                    }

                    this.presentToast('Recensione Obbligatoria');
                    _context2.next = 29;
                    break;

                  case 22:
                    this.disabledButton = true;
                    _context2.next = 25;
                    return this.loadingCtrl.create({
                      message: "Attendi per favore"
                    });

                  case 25:
                    loader = _context2.sent;
                    loader.present();
                    console.log('Nome: ' + this.recensione);
                    return _context2.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'insertReview',
                        id_event: _this6.id_event,
                        id_user: _this6.id_user,
                        titolo: _this6.titolo,
                        rating: _this6.rating,
                        username: _this6.username,
                        email: _this6.email,
                        recensione: _this6.recensione
                      };

                      _this6.accsPrvds.postData(body, '/file_aksi.php').subscribe(function (res) {
                        if (res.success == true) {
                          loader.dismiss();
                          _this6.disabledButton = false;

                          _this6.presentToast(res.msg);

                          setTimeout(function () {
                            window.location.reload();
                          }, 5000);
                        } else {
                          _this6.disabledButton = false;
                          loader.dismiss();

                          _this6.presentToast(res.msg);
                        }
                      });
                    }));

                  case 29:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastCtrl.create({
                      message: a,
                      duration: 1500,
                      position: 'bottom'
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "tryFilter",
        value: function tryFilter() {
          var j = 0;

          if (this.filter != null) {
            for (var i = 0; i < this.lista.length; i++) {
              if (this.lista[i].rating == this.filter) {
                this.newlist.push({
                  username: this.lista[i].username,
                  title: this.lista[i].title,
                  recensione: this.lista[i].recensione,
                  rating: this.lista[i].rating
                });
                this.filtro = true;
              }
            }
          }

          this.storage.set('storage_xxxxx', this.newlist);
          this.storage.set('storage_xxxxxx', this.filtro); //create storage Session
        }
      }, {
        key: "deleteFilter",
        value: function deleteFilter() {
          this.filtro = false;
        }
      }]);

      return DetailPage;
    }();

    DetailPage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": false
    })], DetailPage.prototype, "mapElement", void 0);
    DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/detail/detail.page.scss"))["default"]]
    })], DetailPage);
    /***/
  }
}]);
//# sourceMappingURL=detail-detail-module-es5.js.map