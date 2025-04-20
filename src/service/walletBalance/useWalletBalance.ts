import { useState, useEffect } from "react";
import { walletBalanceMockData } from "./mockData";

export interface WalletBalanceResult {
  balance: number | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook to get wallet balance for a specific cryptocurrency
 * @param currency The cryptocurrency code (e.g., 'BTC', 'ETH', 'USDT')
 * @returns Wallet balance information and status
 */
export const useWalletBalance = (currency: string): WalletBalanceResult => {
  const [result, setResult] = useState<WalletBalanceResult>({
    balance: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchBalance = () => {
      try {
        // Find the matching currency in mock data
        const balanceData = walletBalanceMockData.wallet.find(
          (item) => item.currency === currency.toUpperCase()
        );

        if (!balanceData) {
          setResult({
            balance: null,
            isLoading: false,
            error: `No balance found for ${currency}`,
          });
          return;
        }

        setResult({
          balance: balanceData.amount,
          isLoading: false,
          error: null,
        });
      } catch (err: unknown) {
        console.error(err);
        setResult({
          balance: null,
          isLoading: false,
          error: "Failed to fetch wallet balance",
        });
      }
    };

    fetchBalance();
  }, [currency]);

  return result;
};
