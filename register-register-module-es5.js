(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n      <ion-row class=\"ion-justify-content-center expandHeight\">\n          <ion-col size=\"12\" class=\"ion-align-self-center\">\n              <ion-card #registerCard id=\"registerCard\">\n                  <ion-card-header>\n                      <ion-card-title class=\"ion-text-center\">Register</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                      <form [formGroup]=\"registerForm\">\n                          <ion-item-group>\n                              <ion-item lines=\"full\">\n                                  <ion-input placeholder=\"Name\" formControlName=\"name\" type=\"text\" inputmode=\"text\"></ion-input>\n                              </ion-item>\n                              <ion-item lines=\"full\">\n                                  <ion-input placeholder=\"Email\" formControlName=\"email\" type=\"email\" inputmode=\"email\"></ion-input>\n                              </ion-item>\n                              <ion-item lines=\"full\">\n                                    <ion-input placeholder=\"Password\" formControlName=\"password\"\n                                             [type]=\"showPassword ? 'text': 'password'\"></ion-input>\n                                  <ion-icon [name]=\"showPassword ? 'eye-off': 'eye'\" size=\"large\"\n                                            (click)=\"togglePasswordFieldType()\"></ion-icon>\n                              </ion-item>\n                              <ion-item lines=\"full\">\n                                   <ion-input placeholder=\"Confirm Password\" formControlName=\"passwordConfirm\"\n                                             [type]=\"showPassword ? 'text': 'password'\"></ion-input>\n                              </ion-item>\n                              <ion-button expand=\"block\" (click)=\"doRegister()\" [disabled]=\"!registerForm.valid\"> Register\n                              </ion-button>\n                              <ion-button fill=\"outline\" size=\"small\" color=\"success\" [routerLink]=\"['/auth/login']\">Login\n                              </ion-button>\n                          </ion-item-group>\n                      </form>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/auth/register/register.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/auth/register/register.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/auth/register/register.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/auth/register/register.component.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_model_expense__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/model/expense */
      "./src/app/model/expense.ts");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(fireAuth, router) {
          _classCallCheck(this, RegisterComponent);

          this.fireAuth = fireAuth;
          this.router = router;
          this.showPassword = false;
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doRegister",
          value: function doRegister() {
            var _this = this;

            var _this$registerForm$va = this.registerForm.value,
                email = _this$registerForm$va.email,
                password = _this$registerForm$va.password;
            email && password && this.fireAuth.createUserWithEmailAndPassword(email, password).then(function (response) {
              return response !== null ? _this.router.navigateByUrl(src_app_model_expense__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"].LOGIN) : false;
            });
          }
        }, {
          key: "togglePasswordFieldType",
          value: function togglePasswordFieldType() {
            this.showPassword = !this.showPassword;
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.component.scss */
        "./src/app/auth/register/register.component.scss"))["default"]]
      })], RegisterComponent);
      /***/
    },

    /***/
    "./src/app/auth/register/register.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/auth/register/register.module.ts ***!
      \**************************************************/

    /*! exports provided: RegisterModule */

    /***/
    function srcAppAuthRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
        return RegisterModule;
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


      var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./register.component */
      "./src/app/auth/register/register.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var RegisterModule = function RegisterModule() {
        _classCallCheck(this, RegisterModule);
      };

      RegisterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
        }])]
      })], RegisterModule);
      /***/
    },

    /***/
    "./src/app/model/expense.ts":
    /*!**********************************!*\
      !*** ./src/app/model/expense.ts ***!
      \**********************************/

    /*! exports provided: StorageKeys, AppRoutes, ExpenseTypes */

    /***/
    function srcAppModelExpenseTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageKeys", function () {
        return StorageKeys;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpenseTypes", function () {
        return ExpenseTypes;
      });

      var StorageKeys;

      (function (StorageKeys) {
        StorageKeys["INSTALL_DATE"] = "INSTALL_DATE";
        StorageKeys["ACTIVE_USER"] = "ACTIVE_USER";
      })(StorageKeys || (StorageKeys = {}));

      var AppRoutes;

      (function (AppRoutes) {
        AppRoutes["LOGIN"] = "/auth/login";
        AppRoutes["REGISTER"] = "/auth/register";
        AppRoutes["FORGOT_PASSWORD"] = "auth/forgot-password";
        AppRoutes["TABS"] = "/tabs";
        AppRoutes["AUTH"] = "/auth";
      })(AppRoutes || (AppRoutes = {}));

      var ExpenseTypes;

      (function (ExpenseTypes) {
        ExpenseTypes[ExpenseTypes["All"] = 0] = "All";
        ExpenseTypes[ExpenseTypes["Games"] = 1] = "Games";
        ExpenseTypes[ExpenseTypes["Movies"] = 2] = "Movies";
        ExpenseTypes[ExpenseTypes["Sports"] = 3] = "Sports";
        ExpenseTypes[ExpenseTypes["DiningOut"] = 4] = "DiningOut";
        ExpenseTypes[ExpenseTypes["Groceries"] = 5] = "Groceries";
        ExpenseTypes[ExpenseTypes["Electronics"] = 6] = "Electronics";
        ExpenseTypes[ExpenseTypes["Furniture"] = 7] = "Furniture";
        ExpenseTypes[ExpenseTypes["Maintenance"] = 8] = "Maintenance";
        ExpenseTypes[ExpenseTypes["Mortgage"] = 9] = "Mortgage";
        ExpenseTypes[ExpenseTypes["Pets"] = 10] = "Pets";
        ExpenseTypes[ExpenseTypes["Rent"] = 11] = "Rent";
        ExpenseTypes[ExpenseTypes["Services"] = 12] = "Services";
        ExpenseTypes[ExpenseTypes["Clothing"] = 13] = "Clothing";
        ExpenseTypes[ExpenseTypes["Gifts"] = 14] = "Gifts";
        ExpenseTypes[ExpenseTypes["Insurance"] = 15] = "Insurance";
        ExpenseTypes[ExpenseTypes["Medical"] = 16] = "Medical";
        ExpenseTypes[ExpenseTypes["Taxes"] = 17] = "Taxes";
        ExpenseTypes[ExpenseTypes["General"] = 18] = "General";
        ExpenseTypes[ExpenseTypes["Cleaning"] = 19] = "Cleaning";
        ExpenseTypes[ExpenseTypes["Electricity"] = 20] = "Electricity";
        ExpenseTypes[ExpenseTypes["Gas"] = 21] = "Gas";
        ExpenseTypes[ExpenseTypes["Internet"] = 22] = "Internet";
        ExpenseTypes[ExpenseTypes["Mobile"] = 23] = "Mobile";
        ExpenseTypes[ExpenseTypes["Water"] = 24] = "Water";
        ExpenseTypes[ExpenseTypes["Others"] = 25] = "Others";
      })(ExpenseTypes || (ExpenseTypes = {}));
      /***/

    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map