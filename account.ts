class BankAccount{
    private _balance : number = 0;

    public get balance():number{
        return this._balance;
    }

    public set balance (newBalance:number){
        if (newBalance < 0){
            throw new Error ("invaled message")
        }
        this._balance = newBalance;
    }
}



const account = new BankAccount();
account.balance = 100000;
console.log(account.balance);

