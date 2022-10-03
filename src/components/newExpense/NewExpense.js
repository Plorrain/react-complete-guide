import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense() {
  const saveexpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
  };

return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpensedata />
    </div>
  )
};

export default NewExpense;
