import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expense";

const initialExpenses = [
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4',  title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)}
];

const App = () => {

    const [expenses, setExpenses] = useState(initialExpenses);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    }

    return React.createElement(
        'div',
        {className: 'App'},
        React.createElement(NewExpense, {onAddExpense: addExpenseHandler}),
        React.createElement(Expenses, {items: expenses})
    );
  // return (
  //   <div className="App">
  //     <NewExpense onAddExpense={addExpenseHandler} />
  //     <Expenses items={expenses}/>
  //   </div>
  // );
}

export default App;
