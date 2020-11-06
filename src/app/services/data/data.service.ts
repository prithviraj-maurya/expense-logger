import { Injectable } from '@angular/core';
import { Expense } from 'src/app/model/expense';
import { __values } from 'tslib';
import { StorageService } from '../storage/storage.service';

import { ActionService } from '../action/action.service';
import { installedDate } from '../../model/expense';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _expenses: Expense[] = [];
  dateSelected: Date;

  constructor(private storageService: StorageService, private actionService: ActionService) { 
    this.dateSelected = this.actionService.getCurrentDate();
  }

  getExpenses(): Promise<Expense[]> {
    const key: string = moment(this.dateSelected.toString()).format('L');
    return this.storageService.getObject(key).then(data => {
      this._expenses = data || [];
      return this._expenses;
    });
  }

  addExpense(expense: Expense) {
    expense.createdOn = this.dateSelected;
    this._expenses.push(expense);
    this.setExpenses(this._expenses);
  }

  setExpenses(expenses: Expense[]) {
    this.storageService.setObject(moment(this.dateSelected.toString()).format('L'), expenses);
  }

  getSelectedDate(): Date {
    return this.dateSelected;
  }

  setSelectedDate(date: Date) {
    this.dateSelected = date;
  }
}
