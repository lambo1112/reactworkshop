import './CurrencyConverter.css'

const CurrencyConverter = (props)=>{
    const {currencyChoice,selectCurrency,changeCerrency,amount,onChangeAmount} = props;

    return(
        <div className="currency">
            <select value={selectCurrency} onChange={changeCerrency}>
                {currencyChoice.map((choice)=>{
                    return <option key={choice} value={choice}>{choice}</option>
                })}
            </select>
            <input type="number" value={amount} onChange={onChangeAmount}></input>
        </div>
    )
}

export default CurrencyConverter