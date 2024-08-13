## React-Typescript-ATM-machine

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/857dd1f9-617a-4216-8e15-fcab76fbd427"><td>
    <td><img src="https://github.com/user-attachments/assets/4699bca1-5cae-4c3f-95c3-24825d619dfc"><td>
  </tr>
</table>

- This project implements the core logic of an ATM machine using React and TypeScript. It provides functionalities for depositing, withdrawing, and checking the balance, with a transaction history feature that records all actions.


### Features:

- Deposit Funds: Users can deposit money into their account. The balance updates in real-time, and the transaction is recorded in the history with a timestamp.

- Withdraw Funds: Users can withdraw money from their account. The system checks for sufficient funds before completing the transaction, and the withdrawal is logged in the transaction history.

- Check Balance: Users can check their current balance at any time. The balance check is also recorded in the transaction history.

- Transaction History: All actions, including deposits, withdrawals, and balance checks, are recorded with timestamps, allowing users to review their transaction history.

- Real-time Feedback: Users receive immediate feedback through toast notifications for successful transactions, errors (e.g., insufficient funds), and warnings (e.g., balance reaching $0).


##### Check out the live site here: https://americanoame.github.io/React-Typescript-ATM-machine/

#### Steps to run the application

```
npm init -y
```

```
npm i
```

```
npm run dev
```