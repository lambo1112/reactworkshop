
import { useState } from 'react';
import './App_Todolist.css'
import { v4 as uuidv4 } from 'uuid';
import ListTodolist from '../components/Todolist/ListTodolist';
import Alert from '../components/Todolist/Alert';

function App_Todolist() {
    const [name,setName] = useState("");
    const [list,setList] = useState([]);
    const [alert,setAlert] = useState({show:false,msg:"",type:""});
    const [checkEditItem,setCheckEditItem] = useState(false);
    const [editId,setEditId] = useState(null);

    const submitData = (e)=>{
        e.preventDefault();
        if(!name){
            setAlert({show:true,msg:"Please input data",type:"error"})
        }else if(checkEditItem && name){
            const result = list.map((item)=>{
                if(item.id === editId){
                    return {...item,title:name}
                }
                return item
            })

            setList(result);
            setName("");
            setCheckEditItem(false)
            setEditId(null)
            setAlert({show:true,msg:"Edit Complete",type:"success"})
        }else{
            const newItem ={
                id:uuidv4(),
                title:name
            }
            setList([...list,newItem])
            setName("");
            setAlert({show:true,msg:"Add Complete",type:"success"})
        }
    }

    const removeItem=(id)=>{
        const newList = list.filter((item)=> item.id !== id)
        setList(newList)
        setAlert({show:true,msg:"Delete Complete",type:"success"})
    }

    const editItem=(id)=>{
        setCheckEditItem(true)
        setEditId(id);
        const searchItem = list.find((item)=>item.id === id);
        setName(searchItem.title);
    }

  return (
    <section className='container'>
        <h1>TodiList App</h1>
        {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
        <form className='form-group' onSubmit={submitData}>
            <div className='form-control'>
                <input type="text" className='text-input'
                onChange={(e)=>{setName(e.target.value)}}
                value={name}
                />
                <button type='submit' className='submit-btn'>
                        {checkEditItem ? "Edit Data" : "Add Data"}
                </button>
            </div>
        </form>
        <section className='list-container'>
            {list.map((data,index)=>{
                return <ListTodolist key={index} {...data} removeItem={removeItem} editItem={editItem}/>
            })}
        </section>
    </section>
  );
}

export default App_Todolist;
