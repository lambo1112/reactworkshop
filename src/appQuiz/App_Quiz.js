import {createContext, useState} from "react";
import Menu from "../components/QuizApp/Menu"
import Quiz from "../components/QuizApp/Quiz"
import Score from "../components/QuizApp/Score"
import './App_Quiz.css'

export const DataContext = createContext();

function App() {
  const [appState,setAppState] = useState("menu")
  const [score,setScore] = useState(0);
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className="App">
        <h1>Quiz Application </h1>
          {appState === "menu" && <Menu/>}
          {appState === "quiz" && <Quiz/>}
          {appState === "score" && <Score/>}
      </div>
    </DataContext.Provider>

  );
}

export default App;
