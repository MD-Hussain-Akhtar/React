import React, { useContext } from 'react'
import UserContext from './UserContex'



function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return <div>Please User</div>

    return <div>Welcome:{user.username}</div>
}

export default Profile