import { useState } from "react";
import { createContext } from "react";
const userContext=createContext();

export function UserProvider({ children }) {
    const [token,setToken]=useState("")
    const [signup,setSigningUp]=useState(false)
    
const addToken=(token)=>{
setToken(token);
console.log(token)
}
const goSignUp=()=>{
setSigningUp(true)
}

    return(
        <userContext.Provider value={{ token,addToken,signup,goSignUp  }}>
        {children}
      </userContext.Provider>
    )
}
export default userContext
