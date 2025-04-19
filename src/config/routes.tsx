import { ReactNode } from 'react';
import { Wallet as WalletIcon, AccountBalance as DefiIcon } from '@mui/icons-material';

export interface RouteConfig {
  path: string;
  label: string;
  icon: ReactNode;
}

export const routes: RouteConfig[] = [
  {
    path: '/wallet',
    label: 'Wallet',
    icon: <WalletIcon />,
  },
  {
    path: '/defi',
    label: 'DeFi',
    icon: <DefiIcon />,
  },
]; 