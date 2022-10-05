import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../UI/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <div>
      <ExpenseFilter>
        <Card className='expenses'>
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            // something like: date={pickedYear}
            />
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
            />
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
            />
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
            />
        </Card>
      </ExpenseFilter>
    </div>
  );
};


export default Expenses;
