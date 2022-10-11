import React, { useState } from 'react';
import './ExpenseForm';
import './NewExpense.css'

function AddNewExpense() {
const [addExpense, setAddExpense] = useState('');

const addNewExpenseHandler = (event) => {
  setAddExpense(event.target.value);
};

  return (
  <div className='new-expense'>
    <button className='new-expense button'
    value={addExpense}
    onClick={addNewExpenseHandler}
    >
      Add New Expense
    </button>
  </div>
  )
}
export default AddNewExpense;
