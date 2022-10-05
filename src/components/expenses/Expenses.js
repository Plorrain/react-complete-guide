import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [pickedyear, setPickedYear] = useState('');
  const filterChangeHandler = (pickedYear) => {
    console.log('Expenses.js');
    console.log(pickedYear);
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            // date={props.pickedYear}
            />
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
            // something like: date={pickedYear}
            />
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
            // something like: date={pickedYear}
            />
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
            // something like: date={pickedYear}
            />
      </Card>
    </div>
  );
};


export default Expenses;
