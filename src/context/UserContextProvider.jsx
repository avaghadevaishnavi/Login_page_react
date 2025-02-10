import React from "react";
import UserContext from "./UserContext";


const  UserContextProvider=({children})=>{

    const [user,setUser]=React.useState(null)
   return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
    {/* that means jya pn component made kahi pass karyvha asel kru shakto */}
    </UserContext.Provider>
   )
}

export default UserContextProvider