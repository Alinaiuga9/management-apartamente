import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  const loginAs = (role) => {
    localStorage.setItem('userRole', role);
    setUserRole(role);
  };

  const logout = () => {
    localStorage.removeItem('userRole');
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ userRole, loginAs, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
