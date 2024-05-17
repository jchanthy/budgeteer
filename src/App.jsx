import './App.css'
import Exspense from './components/Expense';
import Footer from './components/Footer';
import Income from './components/Income';
import Transaction from './components/Transactions';

function App() {  
  
  return (
    <>
   <div className='header'>
    
    <h3>Budgeteer</h3>
    <button>Toggle Dark Mode</button>
   </div>
   <div className="currenBalance">
    <p>Current Balance</p>
    <h1>$921.48</h1>
   </div>

<Income />
<Exspense />
<Transaction />
   
   </>
)};
<Footer />
export default App;
