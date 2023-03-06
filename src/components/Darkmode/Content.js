import { useContext } from "react";
import light from "../../images/light.svg"
import dark from "../../images/dark.svg"
import { ThemeContext } from "../../appDarkmode/AppDarkmode";
const Content = ()=>{
    const {theme} =  useContext(ThemeContext)
    return(
        <main className={theme}>
            <div>
                <h1>Guntz Official</h1>
                <p>Darkmode Workshop</p>
            </div>
            <img src={theme==="dark"? dark:light} alt="Logo"/>
        </main>
    )
}

export default Content