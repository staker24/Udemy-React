import React, {useState} from "react"

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //state for click
  const [isDropped, setIsDropped] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
    setIsDropped(false);
  };

  const showFormHandler = () => {
    setIsDropped(true)
  }

  const cancelFormHandler = () => {
    setIsDropped(false)
  }

  return (
    <div className="new-expense">
      {!isDropped && <button type="button" onClick={showFormHandler}>Add New Expense</button>}
      {isDropped && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelFormHandler}/>}
    </div>
  );
}

export default NewExpense