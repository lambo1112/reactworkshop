const ListTodolist =({id,title})=>{
    return(
        <div className="list-item">
            <p className="title">{title}</p>
            <div className="button-container">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    )

}

export default ListTodolist