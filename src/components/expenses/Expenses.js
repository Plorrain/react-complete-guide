import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [pickedyear, setPickedYear] = useState('2020');

  const filterChangeHandler = (filteredYear) => {
    setPickedYear(filteredYear);
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={pickedyear}
        onChangeFilter={filterChangeHandler}
        />
        {props.items.map(expense =>
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
        )}
      </Card>
    </div>
  );
};


export default Expenses;
