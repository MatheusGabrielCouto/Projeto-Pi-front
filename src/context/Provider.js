import React, {useState} from 'react';

// import { Container } from './styles';
import UserContext from './UserContext';

function UserProvider({children}) {
  const [loading, setLoading] = useState(false)

  return (
    <UserContext.Provider value={{loading, setLoading}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;