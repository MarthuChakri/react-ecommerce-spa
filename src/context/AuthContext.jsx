import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (storedUser?.email === email && storedUser?.password === password) {
      setUser(storedUser);
      localStorage.setItem("user", JSON.stringify(storedUser));
      return true;
    }
    return false;
  };

  const signup = (userData) => {
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
