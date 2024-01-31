import { useState } from "react";
function Register(){
    const[ formData , setFormData ] = useState({
        email : "",
        password : "",
    });
    const handleInput=(e)=>{
        let val=e.target.value;
        if(val.includes("@iamneo.ai"))
        {
            console.log("valid email");
        }
    }
    return(
        <div>
            <form>
                <input type="email" name="email" value={formData.email}></input>
                <input type="password" name="password" value={formData.password}></input>
            </form>
        </div>
    );
}
export default Register;