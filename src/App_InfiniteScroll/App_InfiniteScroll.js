
import './App_InfiniteScroll.css'
import PhotoComponent from '../components/InfiniteScroll/PhotoComponent';
import { useEffect, useState } from 'react';

function App_InfiniteScroll() {
    const apiKey = `eT_PdqHuaL9dKZdTmCYjIvxbGIeU1Bmqin9g1yE8v9g`
    
    const [photos,setPhotos] = useState([]);
    const [page,setPage] = useState(1)
    const [isLoading,setIsLoading] = useState(false);

    const fetchImage=async()=>{
        setIsLoading(true)
        try{
            const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
            const response = await fetch(apiUrl)
            const data = await response.json()
            setPhotos((olddata)=>{
                return [...olddata,...data]
            })
        }catch(error){
            console.log(error)
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        fetchImage();
        // eslint-disable-next-line
    },[page])

    useEffect(()=>{
        const event = window.addEventListener('scroll',()=>{
            //window.innerHeight=ความสูงของเว็ปมากสุดที่แสดงผลให้เราเห็น  window.scrollY= ความสูงของส่วนหน้าจอณตอนนั้น  document.body.offsetHeight = ความสูงทั้งหมดของเนื้อหาของเว็ปทั้งหมด
            if(window.innerHeight + window.scrollY > document.body.offsetHeight-500 && !isLoading){
                setPage((oldPage)=>{
                    return oldPage+1
                })
            }
        })
        return ()=>window.removeEventListener('scroll',event)
    },[])

  return (
    <div>
        <h1>Infinite Scroll Photo | Unsplash API</h1>
        <section className='photos'>
            <div className='display-photo'>
                {photos.map((data,index)=>{
                    return <PhotoComponent key={index} {...data}/>
                })}
            </div>
        </section>
    </div>
  );
}

export default App_InfiniteScroll;
