function Exspense(){
return (
  <>
<div className="income_wrapper">
    <h2>Expense</h2>
    <div>
    <input type="text" placeholder='Enter Expense'/> 
    <input type="text" placeholder='Source of Expense' />
    <button>Add Expense</button>
    </div>
  <div className="income_wrapper"> 
      <ul>
        <li>
          <p>Expense</p>
          <p>expense_source</p>
        </li>
      </ul>
      </div>
      </div>
      </>
)};

export default Exspense;