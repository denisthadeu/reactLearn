import './ExpenseDate.css';
import React from "react";

const ExpenseDate = (props) => {

    const lang = 'en-US';
    const month = props.date.toLocaleString(lang, { month: 'long'});
    const day = props.date.toLocaleString(lang, { day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;