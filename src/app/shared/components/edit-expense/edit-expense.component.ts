import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Expense, ExpenseTypes } from 'src/app/model/expense';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss'],
})
export class EditExpenseComponent implements OnInit {

  expenseTypes: any;

  addExpenseForm = new FormGroup({
    amount: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    description: new FormControl(''),
    createdOn: new FormControl('')
  });

  constructor(private modalController: ModalController, private dataService: DataService) {
    this.expenseTypes = ExpenseTypes;
   }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  addExpense() {
    const expense: Expense = this.addExpenseForm.value;
    this.dataService.addExpense(expense);
    this.dismissModal();
  }

}
