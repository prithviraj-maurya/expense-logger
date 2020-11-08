import { Injectable } from '@angular/core';
import { Expense } from 'src/app/model/expense';
import { __values } from 'tslib';
import { StorageService } from '../storage/storage.service';

import { ActionService } from '../action/action.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _expenses: Expense[] = [];
  dateSelected: Date;

  constructor(private storageService: StorageService, private actionService: ActionService) {
    this.dateSelected = this.actionService.getCurrentDate();
  }

  getExpenses(): Promise<Expense[]> {
    const key: string = moment(this.dateSelected.toISOString()).format('L');
    return this.storageService.getObject(key).then(data => {
      this._expenses = data || [];
      return this._expenses;
    });
  }

  addExpense(expense: Expense) {
    expense.createdOn = this.dateSelected;
    this._expenses.push(expense);
    this.saveExpenses(this._expenses);
  }

  saveExpenses(expenses: Expense[]) {
    this.storageService.setObject(moment(this.dateSelected.toISOString()).format('L'), expenses);
  }

  setExpenses(expenses: Expense[]) {
    this._expenses = expenses;
  }

  resetExpenses() {
    this.storageService.clearStorage().then(() => {
      this._expenses.length = 0;
    })
  }

  removeExpense(expense: Expense) {
    this._expenses.splice(this._expenses.indexOf(expense), 1);
    this._expenses.length > 0 ? this.saveExpenses(this._expenses) : this.resetExpenses();
  }

  getSelectedDate(): Date {
    return this.dateSelected;
  }

  setSelectedDate(date: Date) {
    this.dateSelected = date;
  }
}
