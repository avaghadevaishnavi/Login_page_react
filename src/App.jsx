
import Login from "./componenet/Login"

import UserContextProvider from "./context/UserContextProvider"

function App() {
 

  return (
    <UserContextProvider >
    
     <Login/>
     
    </UserContextProvider>
  )
}

export default App
