import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user}=useContext(UserContext)
  if(!user) return <div className="text-xl font-semibold text-gray-700 italic animate-pulse">
  Please Login
</div>

return (
  <div className="text-2xl font-bold text-black  animate-pulse mt-4 animate-fade-in">
    Welcome {user.username}
  </div>
);
}

export default Profile