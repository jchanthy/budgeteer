function Income(){

return (
    <>
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
</>
)};
export default Income;