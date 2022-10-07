import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
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
        {filteredExpenses.length === 0 ?
        (<p>No entries for that year.</p>) : (filteredExpenses.map((expense) => (
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />))
          )}
      </Card>
    </div>
  );
};


export default Expenses;
