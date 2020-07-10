function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accedi-accedi-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accedi/accedi.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accedi/accedi.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccediAccediPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Accedi</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-list no-lines padding-top>\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Username\"  [(ngModel)] ='username'></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)] ='password'></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-button expand=\"block\" color=\"success\" class=\"ion-no-margin\" (click)=\"tryLogin()\" [disabled]=\"disabledButton\">Login</ion-button>\n  <div padding-top>\n    <ion-button expand=\"block\" style=\"margin-top: 20px;\" class=\"ion-no-margin\" routerLink=\"/signup/Registrati\">Sei un nuovo utente? Registrati</ion-button>\n  </div>\n\n  <div padding-top>\n    <ion-button expand=\"block\" color=\"warning\" style=\"margin-top: 20px;\" class=\"ion-no-margin\" routerLink=\"/folder/Home\">Torna in Home</ion-button>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/accedi/accedi-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/accedi/accedi-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: AccediPageRoutingModule */

  /***/
  function srcAppAccediAccediRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccediPageRoutingModule", function () {
      return AccediPageRoutingModule;
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


    var _accedi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accedi.page */
    "./src/app/accedi/accedi.page.ts");

    var routes = [{
      path: '',
      component: _accedi_page__WEBPACK_IMPORTED_MODULE_3__["AccediPage"]
    }];

    var AccediPageRoutingModule = function AccediPageRoutingModule() {
      _classCallCheck(this, AccediPageRoutingModule);
    };

    AccediPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccediPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/accedi/accedi.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/accedi/accedi.module.ts ***!
    \*****************************************/

  /*! exports provided: AccediPageModule */

  /***/
  function srcAppAccediAccediModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccediPageModule", function () {
      return AccediPageModule;
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


    var _accedi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accedi-routing.module */
    "./src/app/accedi/accedi-routing.module.ts");
    /* harmony import */


    var _accedi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accedi.page */
    "./src/app/accedi/accedi.page.ts");

    var AccediPageModule = function AccediPageModule() {
      _classCallCheck(this, AccediPageModule);
    };

    AccediPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _accedi_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccediPageRoutingModule"]],
      declarations: [_accedi_page__WEBPACK_IMPORTED_MODULE_6__["AccediPage"]]
    })], AccediPageModule);
    /***/
  },

  /***/
  "./src/app/accedi/accedi.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/accedi/accedi.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccediAccediPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ios page-user-login .toolbar-background, .md page-user-login .toolbar-background, .wp page-user-login .toolbar-background {\n  background: transparent;\n  border-style: none;\n}\n.ios page-user-login .toolbar::after, .ios page-user-login .header-md::after, .md page-user-login .toolbar::after, .md page-user-login .header-md::after, .wp page-user-login .toolbar::after, .wp page-user-login .header-md::after {\n  background-image: none;\n}\n.ios page-user-login ion-content, .md page-user-login ion-content, .wp page-user-login ion-content {\n  background-image: url('bg-pattern.png');\n  background-size: 100% auto;\n}\n.ios page-user-login .centerAlign, .md page-user-login .centerAlign, .wp page-user-login .centerAlign {\n  display: table-cell;\n  vertical-align: middle;\n  border: #ff0000 1px solid;\n}\n.ios page-user-login .item, .md page-user-login .item, .wp page-user-login .item {\n  border: #000000 1px solid !important;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZWRpL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQXBwXFxDVjE5L3NyY1xcYXBwXFxhY2NlZGlcXGFjY2VkaS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY2VkaS9hY2NlZGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQXFCLHVCQUFBO0VBQXdCLGtCQUFBO0FDQ3JEO0FEQVE7RUFBbUMsc0JBQUE7QUNHM0M7QURGUTtFQUNHLHVDQUFBO0VBQ0EsMEJBQUE7QUNJWDtBRENRO0VBQWUsbUJBQUE7RUFBcUIsc0JBQUE7RUFBd0IseUJBQUE7QUNJcEU7QURGUTtFQUFNLG9DQUFBO0VBQXNDLG1CQUFBO0FDTXBEIiwiZmlsZSI6InNyYy9hcHAvYWNjZWRpL2FjY2VkaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9zLC5tZCwud3B7XHJcbiAgICBwYWdlLXVzZXItbG9naW4ge1xyXG4gICAgICAgIC50b29sYmFyLWJhY2tncm91bmR7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IGJvcmRlci1zdHlsZTpub25lO31cclxuICAgICAgICAudG9vbGJhcjo6YWZ0ZXIsLmhlYWRlci1tZDo6YWZ0ZXJ7IGJhY2tncm91bmQtaW1hZ2U6bm9uZTt9XHJcbiAgICAgICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctcGF0dGVybi5wbmcnKTtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSBhdXRvO1xyXG4gICAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgICAvLy5zY3JvbGwtY29udGVudCB7IGRpc3BsYXk6IHRhYmxlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9XHJcbiAgICAgICAgLmNlbnRlckFsaWduIHsgZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgYm9yZGVyOiNmZjAwMDAgMXB4IHNvbGlkOyB9XHJcbiAgXHJcbiAgICAgICAgLml0ZW17Ym9yZGVyOiAjMDAwMDAwIDFweCBzb2xpZCAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOjEwcHg7fVxyXG4gICAgfVxyXG4gIH1cclxuICAiLCIuaW9zIHBhZ2UtdXNlci1sb2dpbiAudG9vbGJhci1iYWNrZ3JvdW5kLCAubWQgcGFnZS11c2VyLWxvZ2luIC50b29sYmFyLWJhY2tncm91bmQsIC53cCBwYWdlLXVzZXItbG9naW4gLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG4uaW9zIHBhZ2UtdXNlci1sb2dpbiAudG9vbGJhcjo6YWZ0ZXIsIC5pb3MgcGFnZS11c2VyLWxvZ2luIC5oZWFkZXItbWQ6OmFmdGVyLCAubWQgcGFnZS11c2VyLWxvZ2luIC50b29sYmFyOjphZnRlciwgLm1kIHBhZ2UtdXNlci1sb2dpbiAuaGVhZGVyLW1kOjphZnRlciwgLndwIHBhZ2UtdXNlci1sb2dpbiAudG9vbGJhcjo6YWZ0ZXIsIC53cCBwYWdlLXVzZXItbG9naW4gLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLmlvcyBwYWdlLXVzZXItbG9naW4gaW9uLWNvbnRlbnQsIC5tZCBwYWdlLXVzZXItbG9naW4gaW9uLWNvbnRlbnQsIC53cCBwYWdlLXVzZXItbG9naW4gaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JnLXBhdHRlcm4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbn1cbi5pb3MgcGFnZS11c2VyLWxvZ2luIC5jZW50ZXJBbGlnbiwgLm1kIHBhZ2UtdXNlci1sb2dpbiAuY2VudGVyQWxpZ24sIC53cCBwYWdlLXVzZXItbG9naW4gLmNlbnRlckFsaWduIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiAjZmYwMDAwIDFweCBzb2xpZDtcbn1cbi5pb3MgcGFnZS11c2VyLWxvZ2luIC5pdGVtLCAubWQgcGFnZS11c2VyLWxvZ2luIC5pdGVtLCAud3AgcGFnZS11c2VyLWxvZ2luIC5pdGVtIHtcbiAgYm9yZGVyOiAjMDAwMDAwIDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/accedi/accedi.page.ts":
  /*!***************************************!*\
    !*** ./src/app/accedi/accedi.page.ts ***!
    \***************************************/

  /*! exports provided: AccediPage */

  /***/
  function srcAppAccediAccediPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccediPage", function () {
      return AccediPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_post_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../providers/post-provider */
    "./src/app/providers/post-provider.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var AccediPage = /*#__PURE__*/function () {
      function AccediPage(router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds, storage, navCtrl) {
        _classCallCheck(this, AccediPage);

        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.username = "";
        this.password = "";
      }

      _createClass(AccediPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.disabledButton = 'false';
        }
      }, {
        key: "tryLogin",
        value: function tryLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.username == "")) {
                      _context.next = 4;
                      break;
                    }

                    this.presentToast('Username Richiesta');
                    _context.next = 14;
                    break;

                  case 4:
                    if (!(this.password == "")) {
                      _context.next = 8;
                      break;
                    }

                    this.presentToast('Password Obbligatoria');
                    _context.next = 14;
                    break;

                  case 8:
                    this.disabledButton = true;
                    _context.next = 11;
                    return this.loadingCtrl.create({
                      message: "Attendi per favore"
                    });

                  case 11:
                    loader = _context.sent;
                    loader.present();
                    return _context.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'login',
                        username: _this.username,
                        password: _this.password
                      };

                      _this.accsPrvds.postData(body, '/file_aksi.php').subscribe(function (res) {
                        if (res.success == true) {
                          loader.dismiss();
                          _this.disabledButton = false;

                          _this.presentToast('Login Effettuato');

                          _this.storage.set('storage_xxx', res.result); //create storage Session


                          _this.navCtrl.navigateRoot(['/folder/Home']);
                        } else {
                          _this.disabledButton = false;
                          loader.dismiss();

                          _this.presentToast('Username o Password Errata');
                        }
                      });
                    }));

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: a,
                      duration: 1500,
                      position: 'top'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AccediPage;
    }();

    AccediPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _providers_post_provider__WEBPACK_IMPORTED_MODULE_3__["PostProvider"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AccediPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accedi',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./accedi.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accedi/accedi.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./accedi.page.scss */
      "./src/app/accedi/accedi.page.scss"))["default"]]
    })], AccediPage);
    /***/
  }
}]);
//# sourceMappingURL=accedi-accedi-module-es5.js.map