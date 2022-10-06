import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const pickYearHandler = (event) => {
    props.onChangeFilter(event.target.value).filter(
      expenses => props.expense.year
    )};

  // const FilterByYear = () => {
  //  return expenses.filter( );
  // };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className='expenses-filter label'>
          Filter by year
        </label>
        <select value={props.selected}
        onChange={pickYearHandler}
        className='expenses-filter select'
        >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
