import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  
  // Check for existing auth on mount
  useEffect(() => {
    const checkAuth = () => {
      const savedAuth = localStorage.getItem('auth');
      
      if (savedAuth) {
        try {
          const parsedAuth = JSON.parse(savedAuth);
          setIsAuthenticated(true);
          setUser(parsedAuth.user);
        } catch (error) {
          console.error('Failed to parse auth data', error);
          localStorage.removeItem('auth');
        }
      }
    };
    
    checkAuth();
  }, []);
  
  const login = () => {
    // Mock user data - in a real app, this would come from an authentication service
    const mockUser = {
      id: '123456',
      name: 'Rahul Sharma',
      phone: '+91 98765 43210',
      email: 'rahul.sharma@example.com',
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    
    // Save to localStorage for persistence
    localStorage.setItem('auth', JSON.stringify({ user: mockUser }));
  };
  
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};