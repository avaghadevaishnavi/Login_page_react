import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Start() {
    const {user}=useContext(UserContext)
  if(!user) return 
  return <div className="text-lg font-medium text-black italic mt-4 animate-slide-in">
  {user.username}  logging you in...
</div>
}

export default Start