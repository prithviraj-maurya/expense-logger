
export interface Expense {
    id: number;
    amount: number;
    description: string;
    type: string;
    createdOn: Date;
}

export const expensesKey = "expenses";