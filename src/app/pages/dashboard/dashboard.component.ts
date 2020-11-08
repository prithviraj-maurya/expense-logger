import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
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
  sortIndex: number = 0;

  constructor(private modalController: ModalController,
    private dataService: DataService,
    private actionService: ActionService,
    private actionSheetController: ActionSheetController) {
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
    const modal = await this.modalController.create({
      component: AddExpenseComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
    // return await this.dataService.addExpense({ id: 1, amount: 100, description: 'Demo', type: 'Groceries', createdOn: new Date() });
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

  async filterActionSheet() {
    if(this.sortIndex > 0){
      this.filterAmount();
      return;
    }
    const actionSheet = await this.actionSheetController.create({
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
    await actionSheet.present();
  }

  filterAmount(): void {
    this.sortIndex += 1;
    this.expenses.sort((a, b) => {
      if (a.amount > b.amount) return this.sortIndex === 1 ? 1 : -1;
      if (a.amount < b.amount) return this.sortIndex === 1 ? -1 : 1;
      else 0;
    });
    if(this.sortIndex > 2) {
      this.sortIndex = 0;
      this.setExpenses();
    }
  }
}
