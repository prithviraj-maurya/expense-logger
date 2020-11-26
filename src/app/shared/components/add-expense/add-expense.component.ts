import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Expense, ExpenseTypes } from 'src/app/model/expense';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {
  expenseTypes: any;
  @Input() expense: Expense;

  addExpenseForm = new FormGroup({
    id: new FormControl(''),
    amount: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    description: new FormControl(''),
    createdOn: new FormControl('')
  });

  constructor(private modalController: ModalController, private dataService: DataService) {
    this.expenseTypes = ExpenseTypes;
   }

  ngOnInit() {
    this.expense && this.addExpenseForm.setValue(this.expense);
  }

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

  saveExpense() {
    const expense: Expense = this.addExpenseForm.value;
    if(this.expense) {
      expense.id = this.expense.id;
    }
    this.dataService.saveExpense(expense);
    this.dismissModal();
  }
}
