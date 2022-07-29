import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

import React, { useState } from "react";
import ExpensesList from './ExpensesList';


const Expenses = (props) => {
  const [changedFilter, setChangedFilter] = useState('2020');
  
  const filterChangeHandler = (filteredYear) => {
    setChangedFilter(filteredYear);
  }

   const filteredExpense = props.obj.filter((expense) => {
     return expense.date.getFullYear().toString() === changedFilter;
   });

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter 
          selected={changedFilter} 
          onChangeFilter={filterChangeHandler} />
         <ExpensesList obj={filteredExpense}/>
        </Card>
      </div>
    );
}

export default Expenses