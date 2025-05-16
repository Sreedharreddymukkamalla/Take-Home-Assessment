export interface Client {
    id: number;
    name: string;
    birthday: string;
    accountType: 'Checking' | 'Savings';
    accountNumber: string;
    balance: number;
    currency: string;
}