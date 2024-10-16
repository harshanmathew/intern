// config/index.tsx

import { cookieStorage, createStorage } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { shibarium, shibariumTestnet } from '@reown/appkit/networks';

// Get projectId from https://cloud.reown.com
export const projectId = '6b99f2b40db55e16dbe0ead3189178ff';

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const networks =
  // eslint-disable-next-line dot-notation
  process.env['NEXT_PUBLIC_CHAIN'] === 'mainnet'
    ? [shibarium]
    : [shibariumTestnet];

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
