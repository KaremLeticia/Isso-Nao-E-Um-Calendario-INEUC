import { createContext, useState } from 'react';

export const UserContext = createContext({})

function UserProvider({ children }){

    const [user, setUser] = useState()
    
    const userAuth = (email, password) => {

        console.log(email, password)
        setUser(email)
        alert(email, password)

    }

    return(
        <UserContext.Provider value={{ test: 'test', userAuth, user }}>
            {children}
        </UserContext.Provider>
        
    )
}

export default UserProvider