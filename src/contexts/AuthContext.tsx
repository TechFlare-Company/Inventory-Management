import React from 'react';
import { ReactNode, createContext, useEffect, useState } from 'react';

import { AuthDTO } from '@/dtos/AuthDTO';
import { UserDTO } from '@/dtos/UserDTO';

import { api } from '../lib/axios';

interface AuthContextProps {
  isAuthenticated: boolean;
  user: UserDTO;
  signIn: (authData: AuthDTO) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function loadStoredData() {
    const storedToken = localStorage.getItem('@auth:token');

    if (storedToken) {
      api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;

      const { data: user } = await api.get('/profile');

      setIsAuthenticated(true);
      setUser(user);
    }

    setIsLoading(false);
  }

  async function signIn(authData: AuthDTO) {
    const { data } = await api.post('/users/createUser', authData);
    const { user, accessToken } = data;

    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    localStorage.setItem('@auth:token', accessToken);

    setIsAuthenticated(true);
    setUser(user);
  }

  async function signOut() {
    localStorage.removeItem('@auth:token');

    setIsAuthenticated(false);
    setUser({} as UserDTO);
  }

  useEffect(() => {
    loadStoredData();
  }, []);

  if (isLoading) {
    return <h1>Carregando usuário</h1>;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
