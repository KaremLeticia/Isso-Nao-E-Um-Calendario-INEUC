import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({})

function UserProvider({ children }){
    
    const userAuth = (email, password) => {

        console.log(email, password)
        alert(email, password)

    }

    return(
        <UserContext.Provider value={{ test: 'test', userAuth }}>
            {children}
        </UserContext.Provider>
        
    )
}

export default UserProvider