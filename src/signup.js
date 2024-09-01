import axios from "axios"
import { Link } from "react-router-dom";
function Signup()
{
    const signup=(e)=>{
        e.preventDefault();
        let name=document.getElementById("username").value;
        let mail=document.getElementById("mail").value;
        let pass=document.getElementById("password").value;
        const user={
            username:name,
            usermail:mail,
            password:pass
        }
        axios.get("https://pasmanfront.onrender.com/checkuser/"+name).then((response)=>{
            if (response.data.msg=="found")
            {
                alert("This Username Is Not Avalible")
                window.location.href=""

            }
            else{
                axios.post("https://pasmanfront.onrender.com/signup",{user}).then((response1)=>{
                    alert(response1.data.msg)
                    window.location.href="/signin"
                })
            }
        })
    }

    return(
        <center>  
            <div id="signup">
            
            <form onSubmit={signup}>
<input type="text" id="username" name="username" required placeholder="user name"/>
<br/>
<input type="email" id="mail" name="usermail" required placeholder="gmail"/>
<br/>
<input type="password" id="password" required placeholder="password"/>
<br/>
<input type="submit" value="sign up"/>

            </form>
            <Link to="/signin">already have a account ?</Link>

        </div>
        </center>
    )
}
export default Signup
