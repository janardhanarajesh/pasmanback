import axios from "axios";
import { useEffect } from "react";
function Edit()
{
    const user=localStorage.getItem("user")
    const id=localStorage.getItem("id")
    useEffect(()=>{
        if (!localStorage.getItem("user"))
            {
                alert("have to login")
                window.location.href="/signin"
            }
    })
    useEffect(()=>{
       
    
        document.getElementById("app").value=localStorage.getItem("app")
        document.getElementById("pass").value=localStorage.getItem("pass")
        document.getElementById("disc").value=localStorage.getItem("disc")
        
    },[])
    const update=(e)=>{
        let app=document.getElementById("app").value;
        let pas=document.getElementById("pass").value;
        let disc=document.getElementById("disc").value;
        e.preventDefault();
        const pass={
            username:user,
            password:pas,
            application:app,
            discription:disc,
        }
        axios.put("https://pasmanfront.onrender.com/edituser/"+id,{pass}).then((res)=>{
            alert(res.data.msg)
            localStorage.removeItem("id")
                localStorage.removeItem("app")
                localStorage.removeItem("pass")
                localStorage.removeItem("disc")
                if (res.data.msg=="success"){
        window.location.href="/getpas"

                }
        })


    }
    return(
        <center>    
        <div id="update">

            <form onSubmit={update}>
            <input type="text" id="app"  placeholder="application name" required/>
            <br/>
            <input type="password" id="pass"  placeholder="password" required/>
            <br/>
            <input type="text" id="disc" placeholder="discription" required/>
            <br/>
            <input type="submit" value="update"/>
            </form>
        </div>
        </center>
    )
}
export default Edit
