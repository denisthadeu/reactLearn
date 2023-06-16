import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    let years = [];
    const oldestYear = 2019;
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= oldestYear; i--) {
        years.push(i);
    }

    const optionYear=years.map((year,index)=>{
        return <option key={index} value={year}>{year}</option>
    })

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {optionYear}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;