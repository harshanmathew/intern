'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAppKitAccount } from '@reown/appkit/react';
import * as jose from 'jose';

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { isConnected } = useAppKitAccount();
    const token = localStorage.getItem('token');
    const decodedToken = token ? jose.decodeJwt(token as string) : null;
    const auth = isConnected && decodedToken;
    useEffect(() => {
      if (!auth) {
        return redirect('/start');
      }
    }, []);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
