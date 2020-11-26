import { Injectable } from '@angular/core';
import { Expense, StorageKeys } from 'src/app/model/expense';
import { __values } from 'tslib';
import { StorageService } from '../storage/storage.service';

import { ActionService } from '../action/action.service';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { chart } from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _expenses: BehaviorSubject<Expense[]>;
  expenses: Expense[];
  dateSelected: Date;
  _todayTotalExpense: BehaviorSubject<number>;
  todaysTotal: number;
  installedDate: string;
  allExpenses: Expense[] = [];
  _allExpenses: BehaviorSubject<Expense[]>;
  allExpenseDates: Array<string> = [];
  id = 0;

  constructor(private storageService: StorageService, private actionService: ActionService) {
    this.dateSelected = this.actionService.getCurrentDate();
    this._todayTotalExpense = new BehaviorSubject<number>(0);
    this._expenses = new BehaviorSubject<Expense[]>([]);
    this.expenses = [];
    this._allExpenses = new BehaviorSubject<Expense[]>([]);
    this.storageService.setObject(StorageKeys.INSTALL_DATE, "11/16/2015");
    this.storageService.setObject("11/26/2015", {
      amount: 1000,
      createdOn: "2015-11-26T07:38:11.000Z",
      description: "Bought groceries from d-mart",
      type: "Groceries"
    });
    this.storageService.setObject("11/15/2019", {
      amount: 4000,
      createdOn: "2019-11-26T07:38:11.000Z",
      description: "Bought groceries from d-mart",
      type: "Mobile"
    });
    this.storageService.setObject("11/15/2018", {
      amount: 500,
      createdOn: "2018-11-26T07:38:11.000Z",
      description: "Bought groceries from d-mart",
      type: "Electronics"
    });
    this.storageService.setObject("11/15/2018", {
      amount: 800,
      createdOn: "2018-11-26T07:38:11.000Z",
      description: "Bought groceries from d-mart",
      type: "Furniture"
    });
    this.storageService.getObject(StorageKeys.INSTALL_DATE).then(result => {
      this.installedDate = result || moment().format('L');
      this.getAllExpenses();
    });
    this.getExpenses();
  }

  getExpenses() {
    const key: string = moment(this.dateSelected.toISOString()).format('L');
    this.storageService.getObject(key).then(data => {
      this.calculateTodaysTotal();
      this.expenses = data || [];
      this._expenses.next(data);
    });
  }

  getExpensesBehaviour(): BehaviorSubject<Expense[]> {
    return this._expenses;
  }

  getAllExpenses() {
    // console.log(this.getDates(new Date(this.installedDate), new Date()));
    this.allExpenseDates = this.getDates(new Date(this.installedDate), new Date(), 'L');
    this.allExpenseDates.map(date => {
      this.storageService.getObject(date).then((expenses: Expense[]) => {
        if (Array.isArray(expenses)) {
          expenses.map(expense => this.allExpenses.push(expense));
        }
        else {
          if (expenses) {
            this.allExpenses.push(expenses);
          }
        }
      });
      this._allExpenses.next(this.allExpenses);
    });
  }

  pushExpense(expense) {
    this.allExpenses.push(expense);
    this._allExpenses.next(this.allExpenses);
  }

  getAllExpensesBehaviour(): BehaviorSubject<Expense[]> {
    return this._allExpenses;
  }

  getDates(startDate, stopDate, format): Array<string> {
    let dateArray = new Array();
    let currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(moment(new Date(currentDate).toISOString()).format(format));
      currentDate = this.addDays(currentDate, 1);
    }
    return dateArray;
  }

  addDays(currDate, days) {
    var date = new Date(currDate);
    date.setDate(date.getDate() + days);
    return date;
  }

  getAllYearsFromExpenses(expenses: Expense[]): Set<string> {
    return new Set(this.getDates(new Date(this.installedDate), new Date(), 'YYYY'));
  }

  getTodaysTotal(): BehaviorSubject<number> {
    return this._todayTotalExpense;
  }

  getInstalledDate() {
    return this.installedDate;
  }

  calculateTodaysTotal() {
    this.todaysTotal = 0;
    this.expenses && this.expenses.map(expense => this.todaysTotal += expense.amount);
    this._todayTotalExpense.next(this.todaysTotal);
  }

  addExpense(expense: Expense) {
    expense.createdOn = this.dateSelected;
    expense.id = this.id;
    this.id++;
    this.expenses.push(expense);
    console.log("Adding expense");
    console.log(expense);
    this.saveExpenses(this.expenses);
    this.calculateTodaysTotal();
    this.pushExpense(expense);
  }

  saveExpenses(expenses: Expense[]) {
    if (!this.installedDate) {
      this.storageService.setObject(StorageKeys.INSTALL_DATE, moment().format('L'));
    }
    this.storageService.setObject(moment(this.dateSelected.toISOString()).format('L'), expenses);
    this.getExpenses();
  }

  saveExpense(newExpense: Expense) {
    let expenseIndex = -1;
    for (let [index, expense] of this.expenses.entries()) {
      if (expense.id === newExpense.id) {
        expenseIndex = index;
      }
    }
    if (expenseIndex !== -1) {
      this.expenses[expenseIndex] = newExpense;
      this.saveExpenses(this.expenses);
      this.pushExpense(newExpense);
    }
  }

  setExpenses(expenses: Expense[]) {
    this.expenses = expenses;
    this.calculateTodaysTotal();
  }

  resetExpenses(): Promise<void> {
    return this.storageService.clearStorage().then(() => {
      this.expenses.length = 0;
      this.calculateTodaysTotal();
    });
  }

  removeExpense(expense: Expense) {
    this.expenses.splice(this.expenses.indexOf(expense), 1);
    this.expenses.length > 0 ? this.saveExpenses(this.expenses) : this.resetExpenses();
    this.calculateTodaysTotal();
  }

  getSelectedDate(): Date {
    return this.dateSelected;
  }

  setSelectedDate(date: Date) {
    this.dateSelected = date;
    this.getExpenses();
  }

  createPieChartData(categorySum: Array<Object>): Array<Object> {
    let chartData: Array<Object> = [];
    categorySum.forEach(category => {
      chartData.push(
        {
          name: category['category'],
          y: category['sum']
        }
      );
    });
    return chartData;
  }

  getCategorySum(expenses: Expense[]) {
    const categoryMap: Map<string, Expense[]> = this.createCategoryMap(expenses);
    const categorySum: Array<Object> = [];
    [...categoryMap.keys()].forEach(key => {
      const expenses = categoryMap.get(key);
      let expenseSum = 0;
      expenses.map((expense: Expense) => expenseSum += expense.amount);
      categorySum.push({ category: key, sum: expenseSum });
    });
    return categorySum;
  }

  createCategoryMap(expenses: Expense[]): Map<string, Expense[]> {
    let categoryMap = new Map<string, Expense[]>();
    expenses.map((expense: Expense) => {
      if (categoryMap.has(expense.type)) {
        categoryMap.get(expense.type).push(expense);
      } else {
        categoryMap.set(expense.type, [expense]);
      }
    })
    return categoryMap;
  }
}
