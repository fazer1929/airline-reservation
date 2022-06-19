import React, { createContext, useState } from 'react'

const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isUserAdmin, setIsUserAdmin] = useState(false);
    return (
        <UserContext.Provider value={{ user, setUser, isUserAdmin, setIsUserAdmin }} >
            {children}
        </UserContext.Provider>
    )
}
export default UserContext