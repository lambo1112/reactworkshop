import { useContext} from "react";
import { DataContext } from "../../appQuiz/App_Quiz";
import QuestionsData from "../../data/QuestionsData";
const Score = ()=>{
    const {score,setScore,setAppState} = useContext(DataContext)
    const restartApp = ()=>{
        setScore(0);
        setAppState("menu");
    }

    return(
        <div className="score">
            <h1>Quiz Score</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>quiz again</button>
        </div>
    )
}

export default Score;