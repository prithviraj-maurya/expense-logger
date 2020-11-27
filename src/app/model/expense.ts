
export interface Expense {
    id: number;
    amount: number;
    description: string;
    type: string;
    createdOn: Date;
}

export enum StorageKeys {
    INSTALL_DATE = 'INSTALL_DATE',
    ACTIVE_USER = 'ACTIVE_USER',
    ACTIVITY_LOGS = 'ACTIVITY_LOGS'
}

export enum AppRoutes {
    LOGIN = '/auth/login',
    REGISTER = '/auth/register',
    FORGOT_PASSWORD = 'auth/forgot-password',
    TABS = '/tabs',
    AUTH = '/auth'
}

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

export interface User {
    email: string;
    phoneNumber?: string;
    emailVerified?: boolean;
    photoURL?: string;
    refreshToken?: string;
    metadata: {
        creationTime?: string;
        lastSignInTime?: string;
    };
    isAnonymous?: boolean;
    displayName?: string;
}

export interface ActivityLogs {
    datetime: Date,
    category: string,
    actionType: string,
    amount: number
}

export enum ActionTypes {
    ADD_EXPENSE = 'Added Expense',
    DELETE_EXPENSE = 'Removed Expense',
    LOG_IN = 'Logged In',
    EDIT_EXPENSE = 'Edited Expense'
}