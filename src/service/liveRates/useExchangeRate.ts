import { useState, useEffect } from "react";
import { liveRatesMockData } from "./mockData";

export interface ExchangeRateResult {
  rate: string | null;
  amount: string | null;
  timestamp: number | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook to get exchange rate from cryptocurrency to fiat currency
 * @param fromCurrency The source cryptocurrency (e.g., 'BTC', 'ETH')
 * @param toCurrency The target fiat currency (e.g., 'USD', 'GBP')
 * @returns Exchange rate information and status
 */
export const useExchangeRate = (
  fromCurrency: string,
  toCurrency: string
): ExchangeRateResult => {
  const [result, setResult] = useState<ExchangeRateResult>({
    rate: null,
    amount: null,
    timestamp: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchRate = () => {
      try {
        // Find the matching currency pair in mock data
        const rateData = liveRatesMockData.tiers.find(
          (tier) =>
            tier.from_currency === fromCurrency.toUpperCase() &&
            tier.to_currency === toCurrency.toUpperCase()
        );

        if (!rateData || !rateData.rates || rateData.rates.length === 0) {
          setResult({
            rate: null,
            amount: null,
            timestamp: null,
            isLoading: false,
            error: `No exchange rate found for ${fromCurrency} to ${toCurrency}`,
          });
          return;
        }

        // Get the first rate (you could implement logic to choose based on amount if needed)
        const firstRate = rateData.rates[0];

        setResult({
          rate: firstRate.rate,
          amount: firstRate.amount,
          timestamp: rateData.time_stamp,
          isLoading: false,
          error: null,
        });
      } catch (err: unknown) {
        console.error(err);
        setResult({
          rate: null,
          amount: null,
          timestamp: null,
          isLoading: false,
          error: "Failed to fetch exchange rate",
        });
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  return result;
};
