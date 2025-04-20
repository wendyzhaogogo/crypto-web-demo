import { createContext, ReactNode, useContext } from "react";

export interface CoinAsset {
  id: string;
}

export interface CurrencyAsset {
  id: string;
  symbol: string;
}

interface WalletContextType {
  showCoins: CoinAsset[];
  currency: CurrencyAsset;
}

const WalletContext = createContext<WalletContextType>({
  showCoins: [],
  currency: {
    id: "",
    symbol: "",
  },
});

interface WalletProviderProps {
  children: ReactNode;
  showCoins: CoinAsset[];
  currency: CurrencyAsset;
}

export function WalletProvider({
  children,
  showCoins,
  currency,
}: WalletProviderProps) {
  return (
    <WalletContext.Provider value={{ showCoins, currency }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWalletProvider() {
  return useContext(WalletContext);
}
