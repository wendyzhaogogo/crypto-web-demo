import { useState, useEffect } from "react";
import { walletBalanceMockData } from "./mockData";

export interface WalletBalanceResult {
  balance: number | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Pure function to calculate wallet balance for a specific cryptocurrency
 * @param currency The cryptocurrency code (e.g., 'BTC', 'ETH', 'USDT')
 * @returns Wallet balance information
 */
export const getWalletBalance = (
  currency: string
): Omit<WalletBalanceResult, "isLoading"> => {
  try {
    // Find the matching currency in mock data
    const balanceData = walletBalanceMockData.wallet.find(
      (item) => item.currency === currency.toUpperCase()
    );

    if (!balanceData) {
      return {
        balance: null,
        error: `No balance found for ${currency}`,
      };
    }

    return {
      balance: balanceData.amount,
      error: null,
    };
  } catch (err: unknown) {
    console.error(err);
    return {
      balance: null,
      error: "Failed to fetch wallet balance",
    };
  }
};

/**
 * Hook to get wallet balance for a specific cryptocurrency
 * @param currency The cryptocurrency code (e.g., 'BTC', 'ETH', 'USDT')
 * @returns Wallet balance information and status
 */
export const useGetWalletBalance = (currency: string): WalletBalanceResult => {
  const [result, setResult] = useState<WalletBalanceResult>({
    balance: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchBalance = () => {
      const calculatedResult = getWalletBalance(currency);
      setResult({
        ...calculatedResult,
        isLoading: false,
      });
    };

    fetchBalance();
  }, [currency]);

  return result;
};
