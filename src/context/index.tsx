/* eslint-disable dot-notation */
// context/index.tsx
'use client';

import { wagmiAdapter, projectId } from '@/config';
import {
  defaultShouldDehydrateQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { shibarium, shibariumTestnet } from '@reown/appkit/networks';
import React, { type ReactNode } from 'react';
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi';

// Set up queryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
    dehydrate: {
      // include pending queries in dehydration
      shouldDehydrateQuery: (query) =>
        defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
    },
  },
});

if (!projectId) {
  throw new Error('Project ID is not defined');
}

// Set up metadata
const metadata = {
  name: 'Sharbi',
  description: 'Sharbi',
  url: 'https://sharbi.xyz', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png'],
};

export const modal = createAppKit({
  adapters: [wagmiAdapter],

  projectId,
  networks:
    process.env['NEXT_PUBLIC_CHAIN'] === 'mainnet'
      ? [shibarium]
      : [shibariumTestnet],
  defaultNetwork:
    process.env['NEXT_PUBLIC_CHAIN'] === 'mainnet'
      ? shibarium
      : shibariumTestnet,
  metadata: metadata,
  features: {
    email: false, // default to true
    socials: [],
    // socials: ['google', 'x', 'farcaster'],
    emailShowWallets: true, // default to true
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies
  );

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;
