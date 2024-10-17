'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppKitAccount } from '@reown/appkit/react';
import * as jose from 'jose';

export default function withAuth<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithAuth(props: P) {
    const { isConnected } = useAppKitAccount();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
      null
    );

    useEffect(() => {
      const token = localStorage.getItem('token');
      const decodedToken = token ? jose.decodeJwt(token) : null;
      const auth = decodedToken;
      setIsAuthenticated(!!auth);

      if (!auth) {
        router.push('/start');
      }
    }, [isConnected, router]);

    if (isAuthenticated === null) {
      return null; // or a loading indicator
    }

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}
