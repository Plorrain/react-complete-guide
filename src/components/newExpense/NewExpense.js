import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  // function below helps us pass props from expenseform(child)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpensedata={saveExpenseDataHandler} />
    </div>
  )
};

export default NewExpense;
