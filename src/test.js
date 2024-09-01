import axios from "axios";
import CryptoJS from "crypto-js";
import { useEffect } from "react";
function Test()
{
    const{data,getdata}=useEffect([]);
    const te=(e)=>{
        e.preventDefault();
const secretKey = "******"; // Replace with your own secret key

const msg="this is rajesh"
const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(msg), secretKey).toString();



// Example usage:


console.log("Encrypted Data:", ciphertext);
const sec={
    seckey:secretKey,
    secdat:ciphertext
}
axios.post("http://localhost:2005/postsec",{sec}).then((res)=>{
    alert(res.data.msg)
})
 
axios.get("http://localhost:2005/getsec").then((rep)=>{
    alert(rep.data.msg)
    try{
        getdata(rep.data.de)
       
        const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      
      
      
      // Example usage:
      
      console.log("Decrypted Data:", decryptedData);

    }
    catch(err)
    {
        alert("error")
    }

})
    }
return(
    <div>
        <button onClick={te}></button>
{
    data.map((ele,i)=>{
        return(
            <div>
                
                </div>
        )
    })
}
    </div>
)
}
export default Test