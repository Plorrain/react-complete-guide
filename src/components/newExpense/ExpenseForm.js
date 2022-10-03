import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Another way of writing states below

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // --> new way for state below:

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // --> code above would work but not as efficiently.
    // Code below would be best practice (keeps the latest input):

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // -->new way for state below

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
    // --> code above would work but not as efficiently.
    // Code below would be best practice

    // setUserInput etc.
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // -->new way for state below
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
  };

  const submitHandler = (event) => {
    // prevents browser to reload the page everytime
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    console.log(expenseData);
    // below to clear the input fields when bounced back and stored data
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  };

  return (
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={enteredTitle} //->2 way binding state
            onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01'
            value={enteredAmount} //->2 way binding state
            onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2022-01-01' max='2024-01-01'
            value={enteredDate} //->2 way binding state
            onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
  )
};

export default ExpenseForm;
