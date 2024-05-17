import './App.css'
import Exspense from './components/Expense';
import Footer from './components/Footer';
import Income from './components/Income';
import Transaction from './components/Transactions';
import CurrentBalance from './components/CurrentBalance';
import Header from './components/Header';
import { useState } from 'react';

function App() {  
const [darkMode, setDarkMode] = useState(false);
const handleClick = () => {
  setDarkMode(!darkMode);
}
  return (
    <>
<Header title={'Budgeteer'} darkMode={darkMode} handleClick={handleClick} />
<CurrentBalance /> 
<Income />
<Exspense />
<Transaction />
<Footer />
</>
)};

export default App;