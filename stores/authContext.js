//keep track of the authentication state for each user

import { createContext, useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // init netlify identity connection
    netlifyIdentity.init()
  }, [])

  const login = () => {
    netlifyIdentity.open()
  }

  const context = { user, login }

  return (
    //wrap the components that it provides the data to
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext