import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Expansion } from '@angular/compiler';
import { Expense } from 'src/app/model/expense';
import * as moment from 'moment';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {

  addExpenseForm = new FormGroup({
    amount: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    description: new FormControl(''),
    createdOn: new FormControl('')
  });

  constructor(private modalController: ModalController, private dataService: DataService) { }

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
