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
          <ExpenseItem
            title={props.obj[0].title}
            amount={props.obj[0].amount}
            date={props.obj[0].date}
          ></ExpenseItem>

          <ExpenseItem
            title={props.obj[1].title}
            amount={props.obj[1].amount}
            date={props.obj[1].date}
          ></ExpenseItem>

          <ExpenseItem
            title={props.obj[2].title}
            amount={props.obj[2].amount}
            date={props.obj[2].date}
          ></ExpenseItem>

          <ExpenseItem
            title={props.obj[3].title}
            amount={props.obj[3].amount}
            date={props.obj[3].date}
          ></ExpenseItem>
        </Card>
      </div>
    );

}

export default Expenses