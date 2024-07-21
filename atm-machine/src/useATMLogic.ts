import { useState } from 'react';

export const useATMLogic = () => {
    // initializes three pieces of state in a React component using the useState hook
    const [balance, setBalance] = useState<number>(0);
    const [amount, setAmount] = useState<number | ''>('');
    const [history, setHistory] = useState<string[]>([]);

    // getCurrentTime that returns the current date and time as a formatted string.
    // const now = new Date(); creates a new Date object representing the current date and time.
    // return now.toLocaleString(); converts the Date object to a string formatted according to the local date and time conventions.
    const getCurrentTime = (): string => {
        const now = new Date();
        return now.toLocaleString();
    };

    // addHistory adds a new transaction to the transaction history with a timestamp:
    // const timestamp = getCurrentTime(); gets the current date and time as a formatted string.
    // setHistory(prevHistory => [...prevHistory, ${timestamp}: ${transaction}]); updates the history 
    // state by appending the new transaction, prefixed with the timestamp, to the existing history array.
    const addHistory = (transaction: string): void => {
        const timestamp = getCurrentTime();
        setHistory(prevHistory => [...prevHistory, `${timestamp}: ${transaction}`]);
    };

    // It checks if the amount is a valid number and greater than 0. If not, it alerts the user with an error message and exits the function.
    // If the amount is valid, it updates the balance state by adding the amount to the previous balance.
    // It then calls the addHistory function to record the deposit transaction with a timestamp.
    // Finally, it resets the amount input field to an empty string.
    const deposit = (): void => {
        if (typeof amount !== 'number' || amount <= 0) {
            alert('Invalid amount. Please enter a positive number.');
            return;
        }
        setBalance(prevBalance => prevBalance + amount);
        addHistory(`You deposited $${amount}`);
        setAmount('');
    };


    // It first validates that the amount is a positive number. If not, it alerts the user and exits.
    // It then checks if the amount is greater than the current balance. If so, it alerts the user about insufficient funds and exits.
    // If both checks pass, it updates the balance by subtracting the amount.
    // It adds a record of the withdrawal to the transaction history.
    // Finally, it clears the input field for the next transaction.
    const withdraw = (): void => {
        if (typeof amount !== 'number' || amount <= 0) {
            alert('Invalid amount. Please enter a positive number.');
            return;
        }
        if (amount > balance) {
            alert('Insufficient funds.');
            return;
        }
        setBalance(prevBalance => prevBalance - amount);
        addHistory(`You withdrew $${amount}`);
        setAmount('');
    };

    // checkBalance function adds an entry to the transaction history 
    // indicating that the balance was checked. It does not alter the balance or perform any other actions.
    const checkBalance = (): void => {
        addHistory(`Checked balance: $${balance}`);
    };

    // returns an object containing the current state variables
    // This object can be used to access and manipulate the state and functions from outside the component or hook.
    return { balance, amount, history, setAmount, deposit, withdraw, checkBalance };
};
