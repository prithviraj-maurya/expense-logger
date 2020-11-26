import { TestBed } from '@angular/core/testing';
import { Expense } from 'src/app/model/expense';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let expenses: Expense[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
    expenses = [
      {
        id: 1,
        amount: 1000,
        createdOn: new Date(),
        description: "Bought groceries from d-mart",
        type: "Groceries"
      },
      {
        id: 2,
        amount: 500,
        createdOn: new Date(),
        description: "Bought mpbile from d-mart",
        type: "Electronics"
      },
      {
        id: 3,
        amount: 1000,
        createdOn: new Date(),
        description: "Bought groceries from d-mart",
        type: "Groceries"
      },
      {
        id: 4,
        amount: 300,
        createdOn: new Date(),
        description: "Bought charger from d-mart",
        type: "Electronics"
      }
    ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create expense map', () => {
    const categoryMap = service.createCategoryMap(expenses);
    expect([...categoryMap.keys()].length).toEqual(2);
  })
});
