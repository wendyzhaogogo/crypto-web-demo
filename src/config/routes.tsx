import { ReactNode } from 'react';
import WalletIcon from '../components/icons/WalletIcon';
import DefiIcon from '../components/icons/DefiIcon';

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