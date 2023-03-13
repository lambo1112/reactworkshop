
import { useEffect, useState } from 'react';
import './App_Weather.css'

function App_Weather() {
    const name = "Bangkok";
    const apiKey = "2ce12c44fc37e895cfd7ee8dc62fe843"
    const [city,setCity] = useState({});
    const [isLoading,setIsloading] = useState(false);

    useEffect(()=>{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setCity(data)
            setIsloading(true) 
        })
    },[name])

    const convestTemp =(k)=>{
        return (k-273).toFixed();
    }

  return (
    (isLoading && <div className='App'>
        <section>
            <div className='location'>
                <h1 className='city'>{city.name}</h1>
                <p className='state'>{city.sys.country}</p>
            </div>
            <div className='card'>
                <div className='weather'>
                    <h1>{convestTemp(city.main.temp)}&deg;C</h1>
                    <small>max: {convestTemp(city.main.temp_max)}&deg;C, min : {convestTemp(city.main.temp_min)}&deg;C</small>
                </div>
                <div className='info'>
                    <div className='status'> {city.weather[0].main}</div>
                    <div className='humidity'>Humidity: {city.main.humidity}</div>
                    <div className='wind'>Wind: {city.wind.speed}</div>
                </div>
            </div>
        </section>
    </div>
    )
  );
}

export default App_Weather;
