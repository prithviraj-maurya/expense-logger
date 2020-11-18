(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity/activity.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity/activity.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Activity</ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/budget/budget.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/budget/budget.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Budget</ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-card no-margin>\n      <ion-card-header color=\"primary\">\n        <ion-card-title class=\"ion-text-center\">\n          Today's Total: ${{ totalSum  | number : '1.2-2'}}\n        </ion-card-title>\n        <ion-card-subtitle>{{ (dateSelected || todaysDate) | date}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-footer>\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-button expand=\"full\" fill=\"clear\" (click)=\"resetDate()\">Today</ion-button>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button fill=\"clear\" expand=\"full\" (click)=\"selected.open()\">Date</ion-button>\n            <ion-item lines=\"none\" hidden>\n              <ion-datetime #selected (ionChange)=\"selectedDate(selected.value)\" [min]=\"2020\" [max]=\"todaysDate\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button expand=\"full\" fill=\"clear\" (click)=\"categorySelect.open()\">Category</ion-button>\n            <ion-item hidden>\n              <ion-select #categorySelect placeholder=\"Select One\">\n                <ion-select-option [value]=\"type.value\" *ngFor=\"let type of categories | keyvalue\">{{ type.value }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button expand=\"full\" fill=\"clear\" (click)=\"filterActionSheet()\">\n              <ion-text *ngIf=\"sortIndex > 0\">Amount <ion-icon\n                  [name]=\"sortIndex === 1 ? 'caret-up-outline' : 'caret-down-outline'\">\n                </ion-icon>\n              </ion-text>\n              <ion-text *ngIf=\"sortIndex === 0\">Filter</ion-text>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-footer>\n    </ion-card>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"expenses\">\n  <ion-card *ngIf=\"expenses.length === 0\">\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">\n        No expense added yet\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card *ngFor=\"let expense of expenses | category: categorySelect.value\">\n    <ion-toolbar>\n      <ion-buttons slot=\"end\">\n        <!-- <ion-button>\n          <ion-icon name=\"help-circle-outline\" size=\"large\"></ion-icon>\n        </ion-button> -->\n        <ion-button (click)=\"editExpense(expense)\">\n          <ion-icon name=\"create-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"deleteExpense(expense)\">\n          <ion-icon name=\"trash-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title slot=\"start\">Amount: {{ expense.amount  | number : '1.2-2'}}</ion-title>\n    </ion-toolbar>\n    <ion-card-content>\n      <ion-item>\n        {{ expense.description }}\n      </ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">{{ expense.createdOn | date }}</ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">{{ expense.type | titlecase }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"presentModal()\" color=\"success\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"currentUser\">\n  <ion-img src=\"assets/avatar-image.png\" width=\"100\" height=\"100\"></ion-img>\n</ion-content>\n<ion-card>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-center\">\n      Email: {{email}}\n    </ion-card-title>\n  </ion-card-header>\n</ion-card>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"danger\" (click)=\"doLogout()\">Logout</ion-button>\n  <ion-button expand=\"full\" color=\"danger\" (click)=\"clearData()\">Reset Data</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/add-expense/add-expense.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/add-expense/add-expense.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Add Expense</ion-title>\n    <ion-icon name=\"close-circle-outline\" slot=\"end\" size=\"large\" (click)=\"dismissModal()\"></ion-icon>\n  </ion-toolbar>\n\n  <form [formGroup]=\"addExpenseForm\">\n    <ion-item>\n      <ion-label>\n        Amount:\n        <ion-input placeholder=\"Enter Amount\" type=\"number\" inputmode=\"decimal\" formControlName=\"amount\"></ion-input>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Description:\n        <ion-input placeholder=\"Enter Description\" type=\"text\" formControlName=\"description\"></ion-input>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Select Type</ion-label>\n      <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" interface=\"popover\" formControlName=\"type\">\n        <ion-select-option [value]=\"type.value\" *ngFor=\"let type of expenseTypes | keyvalue\">{{ type.value }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-toolbar>\n        <ion-buttons>\n          <ion-button *ngIf=\"expense\" color=\"primary\" (click)=\"saveExpense()\" [disabled]=\"!addExpenseForm.valid\">SAVE</ion-button>\n          <ion-button *ngIf=\"!expense\" color=\"primary\" (click)=\"addExpense()\" [disabled]=\"!addExpenseForm.valid\">ADD</ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-item>\n  </form>\n</ion-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"dashboard\">\n      <ion-icon name=\"list-circle\" size=\"large\"></ion-icon>\n      <!-- <ion-label>Dashboard</ion-label> -->\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab=\"activity\">\n      <ion-icon name=\"ellipse\"></ion-icon>\n      <ion-label>Activity</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"budget\">\n      <ion-icon name=\"square\"></ion-icon>\n      <ion-label>Budget</ion-label>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"settings\">\n      <ion-icon name=\"settings\" size=\"large\"></ion-icon>\n      <!-- <ion-label>Settings</ion-label> -->\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/activity/activity.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/activity/activity.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/activity/activity.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/activity/activity.component.ts ***!
  \******************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ActivityComponent = class ActivityComponent {
    constructor() { }
    ngOnInit() { }
};
ActivityComponent.ctorParameters = () => [];
ActivityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity/activity.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./activity.component.scss */ "./src/app/pages/activity/activity.component.scss")).default]
    })
], ActivityComponent);



/***/ }),

/***/ "./src/app/pages/activity/activity.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/activity/activity.module.ts ***!
  \***************************************************/
/*! exports provided: ActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityModule", function() { return ActivityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity.component */ "./src/app/pages/activity/activity.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ActivityModule = class ActivityModule {
};
ActivityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_activity_component__WEBPACK_IMPORTED_MODULE_3__["ActivityComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _activity_component__WEBPACK_IMPORTED_MODULE_3__["ActivityComponent"] }])
        ]
    })
], ActivityModule);



/***/ }),

/***/ "./src/app/pages/budget/budget.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/budget/budget.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1ZGdldC9idWRnZXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/budget/budget.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/budget/budget.component.ts ***!
  \**************************************************/
/*! exports provided: BudgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetComponent", function() { return BudgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BudgetComponent = class BudgetComponent {
    constructor() { }
    ngOnInit() { }
};
BudgetComponent.ctorParameters = () => [];
BudgetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-budget',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./budget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/budget/budget.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./budget.component.scss */ "./src/app/pages/budget/budget.component.scss")).default]
    })
], BudgetComponent);



/***/ }),

/***/ "./src/app/pages/budget/budget.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/budget/budget.module.ts ***!
  \***********************************************/
/*! exports provided: BudgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetModule", function() { return BudgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _budget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./budget.component */ "./src/app/pages/budget/budget.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let BudgetModule = class BudgetModule {
};
BudgetModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_budget_component__WEBPACK_IMPORTED_MODULE_3__["BudgetComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _budget_component__WEBPACK_IMPORTED_MODULE_3__["BudgetComponent"] }])
        ]
    })
], BudgetModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/expense */ "./src/app/model/expense.ts");
/* harmony import */ var src_app_services_action_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/action/action.service */ "./src/app/services/action/action.service.ts");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var src_app_shared_components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/add-expense/add-expense.component */ "./src/app/shared/components/add-expense/add-expense.component.ts");








let DashboardComponent = class DashboardComponent {
    constructor(modalController, dataService, actionService, actionSheetController) {
        this.modalController = modalController;
        this.dataService = dataService;
        this.actionService = actionService;
        this.actionSheetController = actionSheetController;
        this.totalSum = 0;
        this.sortIndex = 0;
        this.setExpenses();
        this.todaysDate = moment__WEBPACK_IMPORTED_MODULE_3__().format();
        this.resetDate();
        this.categories = src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__["ExpenseTypes"];
        this.dataService.getTodaysTotal()
            .subscribe({
            next: (total) => {
                this.totalSum = total;
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
            }
        });
    }
    ngOnInit() { }
    setExpenses() {
        this.dataService.getExpenses().then((expenses) => {
            this.expenses = expenses;
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_7__["AddExpenseComponent"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
            // return await this.dataService.addExpense({ id: 1, amount: 100, description: 'Demo', type: 'Groceries', createdOn: new Date() });
        });
    }
    editExpense(expense) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_7__["AddExpenseComponent"],
                cssClass: 'my-custom-class',
                componentProps: {
                    expense: expense
                }
            });
            return yield modal.present();
        });
    }
    selectedDate(date) {
        this.dateSelected = this.actionService.createDateFromString(date);
        this.dataService.setSelectedDate(this.dateSelected);
        this.setExpenses();
    }
    resetDate() {
        this.dateSelected = moment__WEBPACK_IMPORTED_MODULE_3__(this.todaysDate).toDate();
        this.dataService.setSelectedDate(this.dateSelected);
        this.setExpenses();
    }
    deleteExpense(expense) {
        this.dataService.removeExpense(expense);
    }
    filterActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.sortIndex > 0) {
                this.filterAmount();
                return;
            }
            const actionSheet = yield this.actionSheetController.create({
                header: 'Filter By',
                buttons: [{
                        text: 'Price',
                        icon: 'logo-usd',
                        handler: () => {
                            this.filterAmount();
                        }
                    }, {
                        text: 'Recents',
                        icon: 'server-outline',
                        handler: () => {
                            console.log('Favorite clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            this.setExpenses();
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    filterAmount() {
        this.sortIndex += 1;
        this.expenses.sort((a, b) => {
            if (a.amount > b.amount)
                return this.sortIndex === 1 ? 1 : -1;
            if (a.amount < b.amount)
                return this.sortIndex === 1 ? -1 : 1;
            else
                0;
        });
        if (this.sortIndex > 2) {
            this.sortIndex = 0;
            this.setExpenses();
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: src_app_services_action_action_service__WEBPACK_IMPORTED_MODULE_5__["ActionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pipes_category_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/category.pipe */ "./src/app/pipes/category.pipe.ts");








let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], src_app_pipes_category_pipe__WEBPACK_IMPORTED_MODULE_7__["CategoryPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }])
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhciB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/expense */ "./src/app/model/expense.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");








let SettingsComponent = class SettingsComponent {
    constructor(dataService, alertController, authService, userService, router) {
        this.dataService = dataService;
        this.alertController = alertController;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.email = '';
    }
    ngOnInit() {
        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user;
            this.email = user && user.email;
            console.log(this.currentUser);
        });
    }
    clearData() {
        this.dataService.resetExpenses().then(() => {
            this.presentResetAlert();
        });
    }
    presentResetAlert(handler) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                id: 'appResetAlert',
                header: 'App Reset Successful!',
                buttons: [{
                        text: 'Go To Dashboard',
                        handler
                    }],
            });
            yield alert.present().then(() => {
                this.router.navigateByUrl(src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"].TABS);
            });
        });
    }
    doLogout(handler) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.logout().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    id: 'appResetAlert',
                    header: 'Successfully Logged Out',
                    buttons: [{
                            text: 'Go To Login',
                            handler
                        }],
                });
                yield alert.present().then(() => {
                    this.router.navigateByUrl(src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"].LOGIN);
                });
            }));
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.component.scss */ "./src/app/pages/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let SettingsModule = class SettingsModule {
};
SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] }])
        ]
    })
], SettingsModule);



/***/ }),

/***/ "./src/app/pipes/category.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/category.pipe.ts ***!
  \****************************************/
/*! exports provided: CategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPipe", function() { return CategoryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CategoryPipe = class CategoryPipe {
    transform(value, type) {
        if (type === 'All' || type === undefined) {
            return value;
        }
        else {
            return value.filter(val => val.type === type);
        }
    }
};
CategoryPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'category'
    })
], CategoryPipe);



/***/ }),

/***/ "./src/app/services/data/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var _action_action_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/action.service */ "./src/app/services/action/action.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let DataService = class DataService {
    constructor(storageService, actionService) {
        this.storageService = storageService;
        this.actionService = actionService;
        this._expenses = [];
        this.dateSelected = this.actionService.getCurrentDate();
        this._todayTotalExpense = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
    }
    getExpenses() {
        const key = moment__WEBPACK_IMPORTED_MODULE_4__(this.dateSelected.toISOString()).format('L');
        return this.storageService.getObject(key).then(data => {
            this._expenses = data || [];
            this.calculateTodaysTotal();
            return this._expenses;
        });
    }
    getTodaysTotal() {
        return this._todayTotalExpense;
    }
    calculateTodaysTotal() {
        this.todaysTotal = 0;
        this._expenses && this._expenses.map(expense => this.todaysTotal += expense.amount);
        this._todayTotalExpense.next(this.todaysTotal);
    }
    addExpense(expense) {
        expense.createdOn = this.dateSelected;
        this._expenses.push(expense);
        this.saveExpenses(this._expenses);
        this.calculateTodaysTotal();
    }
    saveExpenses(expenses) {
        this.storageService.setObject(moment__WEBPACK_IMPORTED_MODULE_4__(this.dateSelected.toISOString()).format('L'), expenses);
    }
    saveExpense(newExpense) {
        let expenseIndex = -1;
        for (let [index, expense] of this._expenses.entries()) {
            if (expense.id === newExpense.id) {
                expenseIndex = index;
            }
        }
        if (expenseIndex !== -1) {
            this._expenses[expenseIndex] = newExpense;
            this.saveExpenses(this._expenses);
        }
    }
    setExpenses(expenses) {
        this._expenses = expenses;
        this.calculateTodaysTotal();
    }
    resetExpenses() {
        return this.storageService.clearStorage().then(() => {
            this._expenses.length = 0;
            this.calculateTodaysTotal();
        });
    }
    removeExpense(expense) {
        this._expenses.splice(this._expenses.indexOf(expense), 1);
        this._expenses.length > 0 ? this.saveExpenses(this._expenses) : this.resetExpenses();
        this.calculateTodaysTotal();
    }
    getSelectedDate() {
        return this.dateSelected;
    }
    setSelectedDate(date) {
        this.dateSelected = date;
    }
};
DataService.ctorParameters = () => [
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _action_action_service__WEBPACK_IMPORTED_MODULE_3__["ActionService"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/shared/components/add-expense/add-expense.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/add-expense/add-expense.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkZC1leHBlbnNlL2FkZC1leHBlbnNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/add-expense/add-expense.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/add-expense/add-expense.component.ts ***!
  \************************************************************************/
/*! exports provided: AddExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExpenseComponent", function() { return AddExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/expense */ "./src/app/model/expense.ts");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");






let AddExpenseComponent = class AddExpenseComponent {
    constructor(modalController, dataService) {
        this.modalController = modalController;
        this.dataService = dataService;
        this.addExpenseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            createdOn: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.expenseTypes = src_app_model_expense__WEBPACK_IMPORTED_MODULE_4__["ExpenseTypes"];
    }
    ngOnInit() {
        this.expense && this.addExpenseForm.setValue(this.expense);
    }
    dismissModal() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    addExpense() {
        const expense = this.addExpenseForm.value;
        this.dataService.addExpense(expense);
        this.dismissModal();
    }
    saveExpense() {
        const expense = this.addExpenseForm.value;
        this.dataService.saveExpense(expense);
        this.dismissModal();
    }
};
AddExpenseComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
AddExpenseComponent.propDecorators = {
    expense: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AddExpenseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-expense',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-expense.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/add-expense/add-expense.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-expense.component.scss */ "./src/app/shared/components/add-expense/add-expense.component.scss")).default]
    })
], AddExpenseComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-expense/add-expense.component */ "./src/app/shared/components/add-expense/add-expense.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_3__["AddExpenseComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        entryComponents: [
            _components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_3__["AddExpenseComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            {
                path: 'settings',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(m => m.SettingsModule)
            },
            {
                path: 'budget',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../pages/budget/budget.module */ "./src/app/pages/budget/budget.module.ts")).then(m => m.BudgetModule)
            },
            {
                path: 'activity',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../pages/activity/activity.module */ "./src/app/pages/activity/activity.module.ts")).then(m => m.ActivityModule)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var _pages_settings_settings_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts");
/* harmony import */ var _pages_budget_budget_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/budget/budget.module */ "./src/app/pages/budget/budget.module.ts");
/* harmony import */ var _pages_activity_activity_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/activity/activity.module */ "./src/app/pages/activity/activity.module.ts");











let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"],
            _pages_settings_settings_module__WEBPACK_IMPORTED_MODULE_8__["SettingsModule"],
            _pages_budget_budget_module__WEBPACK_IMPORTED_MODULE_9__["BudgetModule"],
            _pages_activity_activity_module__WEBPACK_IMPORTED_MODULE_10__["ActivityModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map