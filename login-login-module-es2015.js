(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"ion-no-margin\">\n    <ion-row class=\"ion-justify-content-center expandHeight\">\n      <ion-col size=\"12\" class=\"ion-align-self-center\">\n        <ion-card #loginFormCard id=\"loginFormCard\">\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">Login</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n              <ion-item-group>\n                <ion-item lines=\"full\">\n                  <ion-input placeholder=\"Email\" formControlName=\"email\"></ion-input>\n                </ion-item>\n                <ion-item lines=\"full\">\n                  <ion-input placeholder=\"Password\" formControlName=\"password\"\n                    [type]=\"showPassword ? 'text': 'password'\"></ion-input>\n                  <ion-icon [name]=\"showPassword ? 'eye-off': 'eye'\" size=\"large\" (click)=\"togglePasswordFieldType()\">\n                  </ion-icon>\n                </ion-item>\n                <br>\n                <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login\n                </ion-button>\n                <br />\n                <ion-button fill=\"outline\" size=\"small\" [routerLink]=\"['/auth/forgot-password']\" color=\"warning\">Forgot\n                  Password\n                </ion-button>\n                <ion-button fill=\"outline\" size=\"small\" [routerLink]=\"['/auth/register']\" color=\"success\">\n                  Register\n                </ion-button>\n              </ion-item-group>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _model_expense__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/expense */ "./src/app/model/expense.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");








let LoginComponent = class LoginComponent {
    constructor(router, authService, userService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.showPassword = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('test1@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('hello123', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(8)])
        });
        _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Device.getInfo().then((deviceInfo) => {
            if (deviceInfo.platform !== 'web') {
                _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Keyboard.setResizeMode({ mode: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["KeyboardResize"].None });
                _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Keyboard.addListener('keyboardWillShow', () => {
                    console.log('Keyboard Event');
                });
            }
        });
    }
    doLogin() {
        const { email, password } = this.loginForm.value;
        this.authService.loginWithEmailAndPassword(email, password).then((res) => {
            this.userService.setCurrentUser(res.user);
            this.router.navigateByUrl(_model_expense__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"].TABS);
        });
    }
    togglePasswordFieldType() {
        this.showPassword = !this.showPassword;
    }
    ngOnInit() { }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }])
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/model/expense.ts":
/*!**********************************!*\
  !*** ./src/app/model/expense.ts ***!
  \**********************************/
/*! exports provided: StorageKeys, AppRoutes, ExpenseTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageKeys", function() { return StorageKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseTypes", function() { return ExpenseTypes; });
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


/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map