import { Injectable } from '@angular/core';
import { Expense } from 'src/app/model/expense';
import { __values } from 'tslib';
import { StorageService } from '../storage/storage.service';

import { ActionService } from '../action/action.service';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _expenses: Expense[] = [];
  dateSelected: Date;
  _todayTotalExpense: BehaviorSubject<number>;
  todaysTotal: number;

  constructor(private storageService: StorageService, private actionService: ActionService) {
    this.dateSelected = this.actionService.getCurrentDate();
    this._todayTotalExpense = new BehaviorSubject<number>(0);
  }

  getExpenses(): Promise<Expense[]> {
    const key: string = moment(this.dateSelected.toISOString()).format('L');
    return this.storageService.getObject(key).then(data => {
      this._expenses = data || [];
      this.calculateTodaysTotal();
      return this._expenses;
    });
  }

  getTodaysTotal(): BehaviorSubject<number> {
    return this._todayTotalExpense;
  }

  calculateTodaysTotal() {
    this.todaysTotal = 0;
    this._expenses && this._expenses.map(expense => this.todaysTotal += expense.amount);
    this._todayTotalExpense.next(this.todaysTotal);
  }

  addExpense(expense: Expense) {
    expense.createdOn = this.dateSelected;
    this._expenses.push(expense);
    this.saveExpenses(this._expenses);
    this.calculateTodaysTotal();
  }

  saveExpenses(expenses: Expense[]) {
    this.storageService.setObject(moment(this.dateSelected.toISOString()).format('L'), expenses);
  }

  setExpenses(expenses: Expense[]) {
    this._expenses = expenses;
    this.calculateTodaysTotal();
  }

  resetExpenses() {
    this.storageService.clearStorage().then(() => {
      this._expenses.length = 0;
    });
    this.calculateTodaysTotal();
  }

  removeExpense(expense: Expense) {
    this._expenses.splice(this._expenses.indexOf(expense), 1);
    this._expenses.length > 0 ? this.saveExpenses(this._expenses) : this.resetExpenses();
    this.calculateTodaysTotal();
  }

  getSelectedDate(): Date {
    return this.dateSelected;
  }

  setSelectedDate(date: Date) {
    this.dateSelected = date;
  }
}
