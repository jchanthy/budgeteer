import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
   <div className='header'>
    <div className="logo"></div>
    <h3>Hello World</h3>
    <button>Toggle Dark Mode</button>
   </div>
   <div className="currenBalance">
    <p>Current Balance</p>
    <h1>$921.48</h1>
   </div>
   <div className="income_wrapper">
    <h2>Income</h2>
    <div>
    <input type="text" placeholder='Enter Income' />
    <input type="text" placeholder='Source of Income'/>
    <button>Add Income</button>
    </div>
    
    <div className='income_result'>
      <span>+</span>
      <p>Income</p>
      <p>income_source</p>
    </div>
   </div>
   
   <div className="income_wrapper">
    <h2>Expense</h2>
    <div>
    <input type="text" placeholder='Enter Expense'/> 
    <input type="text" placeholder='Source of Expense' />
    <button>Add Expense</button>
    </div>
   
    <div className="income_result">
      <span> - </span>
      <p>Expense</p>
      <p>expense_source</p>
    </div>
   </div>

   <div className="transaction_history">
    <table border='1'>
      <tr>
        <th>Source</th>
        <th>Type</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>source</td>
        <td>type</td>
        <td>amount</td>
      </tr>
    </table>
   </div>

   <div className="footer">
    &copy; Copyright 2024 Budgeteer 
   </div>
   </>
  )
}

export default App
