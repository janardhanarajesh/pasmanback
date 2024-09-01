import axios from "axios";
function Signin()
{
    const signin=(e)=>{
        e.preventDefault();
        let name=document.getElementById("name").value;
        let pass=document.getElementById("password").value;
        axios.get("http://localhost:2005/loguser/"+name).then((response)=>{
            if (response.data.msg=="found")
            {
                if (response.data.pw==pass)
                {
                    alert("logged in as "+name)
                    localStorage.setItem("user",name)
                    window.location.href="/getpas"
                }
                else{
                    alert("invalid password")
                }
            }
            else
            {
                alert("user not found")
            }
        })
    }
    return(
        <center>

        <div id="signin">
            <form onSubmit={signin}>
                <input type="text" placeholder="username" id="name" name="name" required/>
                <br/>
                <input type="password" placeholder="password" id="password" name="password" required/>
                <br/>
                <input type="submit" value="sign in"/>
            </form>
        </div>
        </center>
    )
}
export default Signin