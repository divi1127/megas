import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock persistent login
    const savedUser = localStorage.getItem('megas_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login logic
    const mockUser = { id: 1, name: 'Guest User', email: email };
    setUser(mockUser);
    localStorage.setItem('megas_user', JSON.stringify(mockUser));
    return true;
  };

  const signup = (userData) => {
    // Mock signup logic
    const newUser = { id: Date.now(), ...userData };
    setUser(newUser);
    localStorage.setItem('megas_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('megas_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
