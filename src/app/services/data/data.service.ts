import { Injectable } from '@angular/core';
import { Expense } from 'src/app/model/expense';
import { __values } from 'tslib';
import { StorageService } from '../storage/storage.service';

import { ActionService } from '../action/action.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _expenses: Expense[] = [];

  constructor(private storageService: StorageService, private actionService: ActionService) { }

  getExpenses(): Promise<Expense[]> {
    const key: string = this.actionService.getCurrentDate();
    return this.storageService.getObject(key).then(data => {
      this._expenses = data || [];
      return this._expenses;
    });
  }

  addExpense(expense: Expense) {
    this._expenses.push(expense);
    this.setExpenses(this._expenses);
  }

  setExpenses(expenses: Expense[]) {
    this.storageService.setObject(this.actionService.getCurrentDate(), expenses);
  }
}
