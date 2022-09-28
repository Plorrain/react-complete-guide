import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
const clickHandler = () => {
  title = 'Updated!';
};

let title = props.title;

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2 className='expense-item h2'>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
    </Card>
  );
}

export default ExpenseItem;
