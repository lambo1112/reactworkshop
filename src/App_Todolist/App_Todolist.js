
import { useState } from 'react';
import './App_Todolist.css'
import { v4 as uuidv4 } from 'uuid';
import ListTodolist from '../components/Todolist/ListTodolist';
import Alert from '../components/Todolist/Alert';

function App_Todolist() {
    const [name,setName] = useState("");
    const [list,setList] = useState([]);
    const [alert,setAlert] = useState({show:false,msg:"",type:""});

    const submitData = (e)=>{
        e.preventDefault();
        const newItem ={
            id:uuidv4(),
            title:name
        }
        setList([...list,newItem])
        setName("");
    }

  return (
    <section className='container'>
        <h1>TodiList App</h1>
        {alert.show && <Alert/>}
        <form className='form-group' onSubmit={submitData}>
            <div className='form-control'>
                <input type="text" className='text-input'
                onChange={(e)=>{setName(e.target.value)}}
                value={name}
                />
                <button type='submit' className='submit-btn'>add data</button>
            </div>
        </form>
        <section className='list-container'>
            {list.map((data,index)=>{
                return <ListTodolist key={index} {...data}/>
            })}
        </section>
    </section>
  );
}

export default App_Todolist;
