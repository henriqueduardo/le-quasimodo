import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext();
const AuthProvider = ( {children} ) => {

  const { userLogged, userFull, loading, loginUser, logoutUser } = useAuth();
    
    if(loading) {
      return <p>Carregando</p>
    }

  return (
    <AuthContext.Provider value={{userLogged, userFull, loginUser, logoutUser}}>
        { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext };