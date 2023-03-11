
import './App_DynamicDropdown.css'
import DropdownComponent from '../components/DynamicDropdown/DropdownComponent';
import FoodComponent from '../components/DynamicDropdown/FoodComponent';
import FoodData from '../data/FoodData';
import { useState } from 'react';

function App_DynamicDropdown() {
    const [foods,setFoods] = useState(FoodData);

  return (
    <div className='container'>
        <DropdownComponent/>
        <FoodComponent/>
    </div>
  );
}

export default App_DynamicDropdown;
