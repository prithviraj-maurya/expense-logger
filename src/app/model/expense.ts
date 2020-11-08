
export interface Expense {
    id: number;
    amount: number;
    description: string;
    type: string;
    createdOn: Date;
}

export const installedDate = "InstalledDate";

export enum ExpenseTypes {
    All,
    Games,
    Movies,
    Sports,
    DiningOut,
    Groceries,
    Electronics,
    Furniture,
    Maintenance,
    Mortgage,
    Pets,
    Rent,
    Services,
    Clothing,
    Gifts,
    Insurance,
    Medical,
    Taxes,
    General,
    Cleaning,
    Electricity,
    Gas,
    Internet,
    Mobile,
    Water,
    Others
}