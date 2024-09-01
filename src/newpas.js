import axios from "axios";
import { useEffect } from "react";
import CryptoJS from "crypto-js"
function Pswd()
{
    const user=localStorage.getItem("user")
    useEffect(()=>{
        if(!localStorage.getItem("user"))
        {
            alert("have to signin fisrt")
            window.location.href="/signin"
        }
    },[])

    const add=(e)=>{
        
        e.preventDefault();
        let us=document.getElementById("username").value;
        let app=document.getElementById("app").value;
        let pass=document.getElementById("pass").value;
        let disc=document.getElementById("disc").value;
        const paswrd={
            username:us,
            application:app,
            password:pass,
            discription:disc,
        }
       
          

        axios.get("http://localhost:2005/getpas/"+app+"/"+user).then((response)=>{
            if (response.data.msg==="found")
            {
                alert("password already found")
            }
            else{
                axios.post("http://localhost:2005/postpassword",{paswrd}).then((res)=>{
                    alert(res.data.msg)
                })
            }
        })
    }
    return(
        <center>
        <div id="new">
            <form onSubmit={add}>
                <input type="text" id="username" value={localStorage.getItem("user")} required readOnly/>
                <br/>
                <input type="text" id="app" required placeholder="application name"/>
                <br/>
                <input type="password" id="pass" required placeholder="password"/>
                <br/>
                <input type="text" id="disc" required placeholder="discription"/>
                <br/>
                <input type="submit" value="ADD"/>
            </form>
        </div>
        </center>
    )
}
export default Pswd