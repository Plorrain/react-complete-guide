import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>23.9.2022</div>
      <div className='expense-item__description'>
        <h2 className='expense-item h2'>Car Insurance</h2>
        <div className='expense-item__price'>$200</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
