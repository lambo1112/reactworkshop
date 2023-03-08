
import './App_CurrencyConverter.css'
import money from '../images/money.png'
import CurrencyConverter from '../components/CurrencyConverter/CurrencyConverter';
import { useEffect, useState } from 'react';
function App_CurrencyConverter() {
  
  const [currencyChoice,setCurrencyChoice] = useState([])
  const [fromCurrency,setFromCurrency] = useState("USD")
  const [toCurrency,setToCurrency] = useState("THB")
  const [amount,setAmount] = useState(1);
  const [exChangeRate,setExchangeRate]= useState(0);
  const [checkFromCurrency,setCheckFromCurrency] = useState(true)
  let fromAmount,toAmount

  if(checkFromCurrency){
    fromAmount = amount
    toAmount = (amount*exChangeRate).toFixed(2)
  }else{
    toAmount = amount
    fromAmount = (amount/exChangeRate).toFixed(2)
  }

  useEffect(()=>{
    const url =`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
 //     console.log(data.rates)
      setCurrencyChoice([...Object.keys(data.rates)]);
      setExchangeRate(data.rates[toCurrency]);
    },[fromCurrency,toCurrency])
  })

  const amountFromCurrency = (e)=>{
    setAmount(e.target.value)
    setCheckFromCurrency(true)
  }

  const amountToCurrency = (e)=>{
    setAmount(e.target.value)
    setCheckFromCurrency(false)
  }

  return (
    <div>
        <img src={money} alt="Logo" className='money-img'></img>
        <h1>Currency Converter</h1>
        <div className='container'>
            <CurrencyConverter 
            currencyChoice={currencyChoice} 
            selectCurrency={fromCurrency}
            changeCerrency={(e)=>setFromCurrency(e.target.value)}
            amount = {fromAmount}
            onChangeAmount = {amountFromCurrency}
            />
        </div>
        <div className='equal'> = </div>
        <div className='container'>
            <CurrencyConverter 
            currencyChoice={currencyChoice} 
            selectCurrency={toCurrency}
            changeCerrency={(e)=>setToCurrency(e.target.value)}
            amount = {toAmount}
            onChangeAmount = {amountToCurrency}
            />
        </div>
    </div>
  );
}

export default App_CurrencyConverter;
