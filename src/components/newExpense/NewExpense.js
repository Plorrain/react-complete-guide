import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense() {
  // function below helps us pass props from expenseform(child)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
  };

return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpensedata={saveExpenseDataHandler} />
    </div>
  )
};

export default NewExpense;
