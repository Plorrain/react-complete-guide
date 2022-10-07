import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [pickedYear, setPickedYear] = useState('2020');

  const filterChangeHandler = (filteredYear) => {
    setPickedYear(filteredYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={pickedYear}
        onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};


export default Expenses;
