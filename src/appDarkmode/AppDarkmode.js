import './AppDarkmode.css'
import Content from '../components/Darkmode/Content';
import Title from '../components/Darkmode/Title';
import { createContext, useState } from 'react';

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="App">
        <Title/>
        <Content/>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
