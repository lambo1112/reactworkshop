
import './App_Pagination.css'
import FoodComponent from '../components/Pagination/FoodComponent';
import { useEffect, useState } from 'react';
import PaginationFoodData from '../data/PaginationFoodData';

function App_Pagination() {
    const [foodData,setFoodData] = useState(PaginationFoodData);
    const [dataInPage,setDataInPage] = useState([]);
    const [page,setPage] = useState(0);

    //ข้อมูลทั้งหมด /จำนวนแต่ละหน้า = จำนวนหน้า

    const pagination = ()=>{
        const foodPerPage = 3; // show menu 3 item : 1 page
        const pages = Math.ceil(PaginationFoodData.length / foodPerPage);
        console.log("result pages "+pages);

        const newFood = Array.from({length:pages},(data,index)=>{
            const start = index * foodPerPage; //index start = 0
            return PaginationFoodData.slice(start,start+foodPerPage)
        })

        return newFood;
    }

    const handlepage = (index)=>{
        setPage(index)
    }

    useEffect(()=>{
        const paginate = pagination();
        setDataInPage(paginate);
        setFoodData(paginate[page])
    },[page])

  return (
    <div className='App'>
        <h1>FoodCard | Pagination</h1>
        <div className='container'>
            {foodData.map((data,index)=>{
                return <FoodComponent key={index} {...data}/>
            })}
        </div>
            <div className='pagination-container'>
                {dataInPage.map((data,index)=>{
                    return(
                        <button key={index} 
                        onClick={()=>handlepage(index)} 
                        className={`page-btn ${index === page? "active-btn": null}`}>
                            {index+1}
                        </button>
                    )
                })}
            </div>
    </div>
  );
}

export default App_Pagination;
