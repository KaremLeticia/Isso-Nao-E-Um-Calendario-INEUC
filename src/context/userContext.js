import { createContext, useState } from 'react';

export const UserContext = createContext({})

function userProvier({ children }){

    

    return(
        <UserContext.Provider value={{ test: 'test' }}>
            {children}
        </UserContext.Provider>
        
    )
}

export default userProvier