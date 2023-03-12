
import './App_DynamicDropdown.css'
import DropdownComponent from '../components/DynamicDropdown/DropdownComponent';
import FoodComponent from '../components/DynamicDropdown/FoodComponent';
import FoodData from '../data/FoodData';
import { useState } from 'react';

function App_DynamicDropdown() {
    const [foods,setFoods] = useState(FoodData);

    const changeFoodData =(e)=>{
      const category = e.target.value;
      if(category === "all"){
        setFoods(FoodData);
      }else{
        const result = FoodData.filter((ele)=>{
          return ele.menu === category
        })
        setFoods(result);
      }
      
    }

  return (
    <div className='container'>
        <DropdownComponent changeFoodData={changeFoodData}/>
        <div className='content'>
          {foods.map((data,index)=>{
              return <FoodComponent key={index} {...data}/>
          })}
        </div>
        
        
    </div>
  );
}

export default App_DynamicDropdown;
