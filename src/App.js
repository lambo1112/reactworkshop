import {createContext, useState} from "react";
import Menu from "./components/QuizApp/Menu"
import Quiz from "./components/QuizApp/Quiz"
import Score from "./components/QuizApp/Score"
import './App.css'

export const DataContext = createContext();

function App() {
  const [appState,setAppState] = useState("menu")
  return (
    <DataContext.Provider value={{appState,setAppState}}>
      <div className="App">
          {appState === "menu" && <Menu/>}
          {appState === "quiz" && <Quiz/>}
          {appState === "score" && <Score/>}
      </div>
    </DataContext.Provider>

  );
}

export default App;
