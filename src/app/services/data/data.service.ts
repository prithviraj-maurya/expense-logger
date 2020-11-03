import { Injectable } from '@angular/core';
import { Expense } from 'src/app/model/expense';
import { __values } from 'tslib';
import { StorageService } from '../storage/storage.service';

import { expensesKey } from '../../model/expense';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _expenses: Expense[] = [];

  constructor(private storageService: StorageService) { }

  getExpenses(): Expense[] {
    this.storageService.getObject("_cap_" + expensesKey).then(data => {
      if(data) {
        return data;
      }
    });
    return this._expenses;
  }

  setExpenses(expenses: Expense[]) {
    this._expenses = expenses;
  }

  addExpense(expense: Expense) {
    expense.id = this._expenses.length;
    this._expenses.push(expense);
    this.storeExpense(this._expenses);
  }

  storeExpense(expenses: Expense[]) {
    this.storageService.setObject("expenses", expenses);
  }

  clearExpenses() {
    this._expenses = [];
  }
}
