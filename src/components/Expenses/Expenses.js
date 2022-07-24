import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import React, { useState } from "react";

const Expenses = (props) => {
  const [changedFilter, setChangedFilter] = useState('2020');
  
  const filterChangeHandler = (filter) => {

    console.log(filter);
    setChangedFilter(filter);

  }
    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter selected={changedFilter} onChangeFilter={filterChangeHandler} />
            {props.obj.map(expense => <ExpenseItem key={expense.key} title={expense.title} amount={expense.amount} date={expense.date}/>)}  
        </Card>
      </div>
    );
}

export default Expenses