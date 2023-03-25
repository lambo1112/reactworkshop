import { useState } from "react";
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
    const [modalIsOpen,setModalIsOpen] = useState(false);   
 
    function deleteHandler(e){
        setModalIsOpen(true);
    }

    function closeModalHandler(e){
        setModalIsOpen(false);
    }

    return(
        <div className="card">
            <h1>{props.title}</h1>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen &&  <Backdrop onCancel={closeModalHandler}/>}   
        </div>
    )
}

export default Todo;