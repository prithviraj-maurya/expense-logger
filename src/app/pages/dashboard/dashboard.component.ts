import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Expense } from 'src/app/model/expense';
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
  constructor(private modalController: ModalController, private dataService: DataService) {
    this.expenses = this.dataService.getExpenses();
    this.calculateTotal();
   }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddExpenseComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  calculateTotal() {
    this.totalSum = 0;
    this.expenses.map(expense => this.totalSum += expense.amount);
  }
}
