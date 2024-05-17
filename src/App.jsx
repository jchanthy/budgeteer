import './App.css'
import Exspense from './components/Expense';
import Footer from './components/Footer';
import Income from './components/Income';
import Transaction from './components/Transactions';
import CurrentBalance from './components/CurrentBalance';
import Header from './components/Header';

function App() {  
  
  return (
    <>
<Header />
<CurrentBalance /> 
<Income />
<Exspense />
<Transaction />
<Footer />
</>
)};

export default App;