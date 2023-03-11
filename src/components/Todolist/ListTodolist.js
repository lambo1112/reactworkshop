import { BiEdit,BiTrash } from "react-icons/bi";

const ListTodolist =({id,title,removeItem,editItem})=>{
    return(
        <div className="list-item">
            <p className="title">{title}</p>
            <div className="button-container">
                <BiEdit onClick={()=>editItem(id)} className="btn"/>
                <BiTrash onClick={()=>removeItem(id)} className="btn"/>
            </div>
        </div>
    )

}

export default ListTodolist