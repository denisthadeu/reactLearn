import ExpenseItem from './ExpertiseItem';
import React from "react";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {

    const itemList=props.items.map((item,index)=>{
        return <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    })

    return (
      <Card className="expenses">
          {itemList}
      </Card>
    );
}

export default Expenses;