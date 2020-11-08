import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Expense, ExpenseTypes } from 'src/app/model/expense';
import { ActionService } from 'src/app/services/action/action.service';
import { DataService } from 'src/app/services/data/data.service';
import { AddExpenseComponent } from 'src/app/shared/components/add-expense/add-expense.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  expenses: Expense[];
  totalSum: number = 0;
  todaysDate: string;
  dateSelected: Date;
  categories: any;
  constructor(private modalController: ModalController, private dataService: DataService, private actionService: ActionService) {
    this.setExpenses();
    this.todaysDate = moment().format();
    this.resetDate();
    this.categories = ExpenseTypes;
    this.dataService.getTodaysTotal()
      .subscribe({
        next: (total: number) => {
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
    this.dataService.getExpenses().then((expenses: Expense[]) => {
      this.expenses = expenses;
    });
  }

  async presentModal() {
    // TODO: uncomment this
    // const modal = await this.modalController.create({
    //   component: AddExpenseComponent,
    //   cssClass: 'my-custom-class'
    // });
    // return await modal.present();
    return await this.dataService.addExpense({ id: 1, amount: 100, description: 'Demo', type: 'Groceries', createdOn: new Date() });
  }

  selectedDate(date: string) {
    this.dateSelected = this.actionService.createDateFromString(date);
    this.dataService.setSelectedDate(this.dateSelected);
    this.setExpenses();
  }

  resetDate() {
    this.dateSelected = moment(this.todaysDate).toDate();
    this.dataService.setSelectedDate(this.dateSelected);
    this.setExpenses();
  }

  deleteExpense(expense: Expense) {
    this.dataService.removeExpense(expense);
  }
}
