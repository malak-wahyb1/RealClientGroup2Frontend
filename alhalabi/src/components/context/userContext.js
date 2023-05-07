import { useState } from "react";
import { createContext } from "react";
const userContext=createContext();

export function UserProvider({ children }) {
    const [token,setToken]=useState("")
    const [signup,setSigningUp]=useState(false)
    const [user,setUser]=useState([])
    
const addToken=(token)=>{
setToken(token);
console.log(token)
}
const userInfo=(name,phone,email,address)=>{

const userArray={name,phone,email,address}
console.log(userArray)
setUser(userArray)
}
const goSignUp=()=>{
setSigningUp(true)
}

    return(
        <userContext.Provider value={{ token,addToken,signup,goSignUp,user,userInfo  }}>
        {children}
      </userContext.Provider>
    )
}
export default userContext
