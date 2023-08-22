import React, { createContext, useContext, useState } from 'react';



const LoginContext = () =>{   

const [isLoggedIn, setIsLoggedIn] = useState(false);
const login = () => {
  setIsLoggedIn(true);
};

const logout = () => {
  setIsLoggedIn(false);
};

const contextValue = {
  isLoggedIn,
  login,
  logout
};


return (
    <LoginContext.Provider value={ contextValue }>
      {children}
    </LoginContext.Provider>
  );

}


export default LoginContext;
