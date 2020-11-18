(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-card class=\"ion-no-margin\">\n      <ion-card-header>\n          <ion-card-title class=\"ion-text-center\">Forgot Password ?</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n          <form [formGroup]=\"forgotPasswordForm\">\n              <ion-item-group>\n                  <ion-item lines=\"full\">\n                      <ion-input placeholder=\"Email\" formControlName=\"email\"></ion-input>\n                  </ion-item>\n                  <ion-button class=\"ion-margin-top\" expand=\"block\"\n                   [disabled]=\"!forgotPasswordForm.valid\" (click)=\"onSubmit()\">Submit</ion-button>\n                  <ion-button fill=\"outline\" [routerLink]=\"['/auth/login']\" color=\"success\">Login</ion-button>\n                  <ion-button fill=\"outline\" [routerLink]=\"['/auth/register']\" color=\"success\">Register</ion-button>\n              </ion-item-group>\n          </form>\n      </ion-card-content>\n  </ion-card>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/auth/forgot-password/forgot-password-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/auth/forgot-password/forgot-password-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ForgotPasswordRoutingModule */

    /***/
    function srcAppAuthForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function () {
        return ForgotPasswordRoutingModule;
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


      var _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password.component */
      "./src/app/auth/forgot-password/forgot-password.component.ts");

      var routes = [{
        path: '',
        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
      }];

      var ForgotPasswordRoutingModule = function ForgotPasswordRoutingModule() {
        _classCallCheck(this, ForgotPasswordRoutingModule);
      };

      ForgotPasswordRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/forgot-password/forgot-password.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/auth/forgot-password/forgot-password.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthForgotPasswordForgotPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/auth/forgot-password/forgot-password.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function srcAppAuthForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
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


      var src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/model/expense */
      "./src/app/model/expense.ts");
      /* harmony import */


      var src_app_services_action_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/action/action.service */
      "./src/app/services/action/action.service.ts");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(fireAuth, actionService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.fireAuth = fireAuth;
          this.actionService = actionService;
          this.forgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
          });
        }

        _createClass(ForgotPasswordComponent, [{
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            console.log('Submitting Reset Password Request');
            this.fireAuth.sendPasswordResetEmail(this.forgotPasswordForm.value.email).then(function () {
              return _this.actionService.presentResetAlert('Password Reset', 'Sent reset password link over email', 'Go To Login', src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"].LOGIN);
            })["catch"](function (err) {
              console.log(err);

              _this.actionService.presentResetAlert('Password Rest', 'Please input valid email', 'Close', src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"].FORGOT_PASSWORD);
            });
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: src_app_services_action_action_service__WEBPACK_IMPORTED_MODULE_5__["ActionService"]
        }];
      };

      ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot-password.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgot-password.component.scss */
        "./src/app/auth/forgot-password/forgot-password.component.scss"))["default"]]
      })], ForgotPasswordComponent);
      /***/
    },

    /***/
    "./src/app/auth/forgot-password/forgot-password.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/auth/forgot-password/forgot-password.module.ts ***!
      \****************************************************************/

    /*! exports provided: ForgotPasswordModule */

    /***/
    function srcAppAuthForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function () {
        return ForgotPasswordModule;
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


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "./src/app/auth/forgot-password/forgot-password-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.component */
      "./src/app/auth/forgot-password/forgot-password.component.ts");

      var ForgotPasswordModule = function ForgotPasswordModule() {
        _classCallCheck(this, ForgotPasswordModule);
      };

      ForgotPasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      })], ForgotPasswordModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map