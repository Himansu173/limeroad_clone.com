import { useState } from 'react'
import { createContext } from 'react'
import PropTypes from 'prop-types'


export const UserContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState('')
    return (
        <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider

UserContextProvider.propTypes = {
    children: PropTypes.object
}