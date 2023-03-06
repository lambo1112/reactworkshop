import { useContext } from "react";
import { DataContext } from "../../appQuiz/App_Quiz";


const Menu = ()=>{
    const {setAppState} = useContext(DataContext)
    return(
        <div className="menu">
            <h1>Menu Component</h1>
            <button onClick={()=>setAppState("quiz")}>quiz start</button>
        </div>
    )
}

export default Menu;