'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface WalletState {
  isConnected: boolean;
  username: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const initialState: WalletState = {
  isConnected: false,
  username: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
};

const WalletContext = createContext<WalletState>(initialState);

export const useWallet = () => useContext(WalletContext);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const connectWallet = async () => {
    setIsConnected(true);
    try {

      const token = 'your-auth-token'; // Replace with real token
      Cookies.set('authToken', token, { expires: 1, secure: true, sameSite: 'strict' });

      const data = await fetchUserData();
      console.log('User data:', data);
      if (!data.username) router.push('/my-profile/create');
      else setUsername(data.username);
    } catch (error) {
      console.error('Failed to fetch user data', error);
    }
  };

  const disconnectWallet = () => {
    Cookies.remove('authToken'); 
    setIsConnected(false);
    setUsername(null);
  };

  const fetchUserData = async () => {
    try {
      // replace with actual api call
      const response = await fetch('http://localhost:3001/me', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.status === 401) {
        console.error('Unauthorized: Invalid or missing token.');
        return;
      }

      const data = await response.json();
      console.log('User data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  useEffect(() => {
    if (isConnected && !username) connectWallet();
  }, [isConnected, username]);

  return (
    <WalletContext.Provider value={{ isConnected, username, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
