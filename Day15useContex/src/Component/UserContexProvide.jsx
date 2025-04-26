import React from 'react'
import UserContext from './UserContex'


function UserContexProvide({children}) {
    const [user, setUser] = React.useState(null)
  return(
      <UserContext.Provider value={{user, setUser}}>
            {children}

        </UserContext.Provider>
  )
  }

//step 2:
export default UserContexProvide