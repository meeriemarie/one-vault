'use client';
import { createContext, useEffect, useState } from 'react';
import { getUser } from '../services/user-service';
import NavBar from './NavBar';

export const UserContext = createContext(null);

export default function ClientView({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(getUser());
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <header className={'mb-12'}>
        <NavBar />
      </header>
      {children}
    </UserContext.Provider>
  );
}
