import axios from "axios";
import { useEffect, useState } from "react";
function Getpas()
{


    const[pass,getPassword]=useState([])
    
    const user=localStorage.getItem("user")
    useEffect(()=>{
        if(!localStorage.getItem("user"))
        {
            alert("have to login first")
            window.location.href="/signin"
        }
    },[])
    useEffect(()=>{
        

            axios.get("http://localhost:2005/getpassword/"+user).then((response)=>{
                let up=response.data.passwords
                if(!up)
                {
                    alert("data not found")
                    window.location.href="/newpas"
                }
                else{
                getPassword(response.data.passwords)
                }
            })
        
    },[])
    const logout=()=>{
        localStorage.removeItem("user")
        window.location.href="/signin"
    }
    const newpas=()=>{
        window.location.href="/newpas"

    }
    const del=(e)=>{

    
        axios.delete("http://localhost:2005/delone/"+e).then((response)=>{
            alert(response.data.msg)
        })

    }
    const edit=(e,a,b,c)=>{
        axios.get("http://localhost:2005/getpassword/"+user).then((res)=>{
            if (res.data.msg=="found")
            {
                localStorage.setItem("id",e)
                localStorage.setItem("app",a)
                localStorage.setItem("pass",b)
                localStorage.setItem("disc",c)

                window.location.href="/edit"
            }
        })
    }
    return(
        <div>
            <button onClick={logout}><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
            <button onClick={newpas}><i class="fa-solid fa-plus"></i></button>
            <center>
            <div  id="">
            {
                pass.map((ele,i)=>{
                    return(
                        <div className="pwd">
                            {ele.application}
                            <br/>
                            {ele.password}
                            <br/>
                            {ele.discription}
                            <br/>
                            <button onClick={()=>edit(ele._id,ele.application,ele.password,ele.discription)}>update</button>
                            
                            <button onClick={()=>del(ele._id)}>delete </button>

                            </div>
                    )
                })
            }
            </div>
            </center>
        </div>
    )
}
export default Getpas