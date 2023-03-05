import './Formcomponent.css'
import {useState} from "react"

const FormComponent = ()=>{
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repassword,setRePassword] = useState("");

    const [errorUserName,setErrorUserName] = useState("");
    const [errorEmail,setErroEmail] = useState("");
    const [errorPassword,setErrorPassword] = useState("");
    const [errorRePassword,setErrorRePassword] = useState("");

    const [userNameColor,setUserNameColor] = useState("");
    const [emailColor,setEmailColor] = useState("");
    const [passwordColor,setPasswordColor] = useState("");
    const [rePasswordColor,setRePasswordColor] = useState("");

    const validateForm = (e)=>{
        e.preventDefault();
        if(username.length>=8){
            setErrorUserName("");
            setUserNameColor("green");
        }else{
            setErrorUserName("at least 8 characters");
            setUserNameColor("red");
        }

        if(email.includes("@")){
            setErroEmail("")
            setEmailColor("green");
        }else{
            setErroEmail("invalid format email");
            setEmailColor("red");
        }

        if(password.length >= 8){
            setErrorPassword("");
            setPasswordColor("green");

        }else{
            setErrorPassword("at least 8 characters")
            setPasswordColor("red");
        }

        if(repassword != "" && repassword === password){
            setErrorRePassword("");
            setRePasswordColor("green");
        }else{
            setErrorRePassword("password not match");
            setRePasswordColor("red");
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Register Form</h2>
                <div className="form-control">
                    <label>username</label>
                    <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>emaill</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>confirm password</label>
                    <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:rePasswordColor}}/>
                    <small style={{color:rePasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">register</button>
            </form>
        </div>
    )
}

export default FormComponent