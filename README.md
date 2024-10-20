---

### Bank Account Class with Getters and Setters

This TypeScript class, `BankAccount`, models a simple bank account with a private balance property and provides controlled access through getter and setter methods. The `balance` getter allows retrieving the current balance, while the setter allows modifying it under a condition. Specifically, the setter ensures that negative balances are not allowed, throwing an error if an invalid balance is set.

#### Code Explanation:
- **Private Property**: The balance is stored in the private variable `_balance`, ensuring it cannot be accessed directly outside the class.
- **Getter Method**: The `balance` getter retrieves the current balance value.
- **Setter Method**: The `balance` setter ensures that only valid (non-negative) balances can be set, throwing an error if an invalid balance (negative value) is provided.
  
#### Example Usage:
```typescript
const account = new BankAccount();
account.balance = 100000; // Setting balance
console.log(account.balance); // Retrieving and displaying the balance
```

#### Features:
- Encapsulation using private property `_balance`
- Controlled data access using getters and setters
- Error handling for invalid balance updates

---
