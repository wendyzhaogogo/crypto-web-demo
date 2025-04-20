import { createContext, ReactNode, useContext } from "react";

export interface CoinAsset {
  id: string;
}

interface WalletContextType {
  showCoins: CoinAsset[];
}

const WalletContext = createContext<WalletContextType>({
  showCoins: [],
});

interface WalletProviderProps {
  children: ReactNode;
  showCoins: CoinAsset[];
}

export function WalletProvider({ children, showCoins }: WalletProviderProps) {
  return (
    <WalletContext.Provider value={{ showCoins }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWalletProvider() {
  return useContext(WalletContext);
}
