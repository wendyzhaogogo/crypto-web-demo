import { useState, useEffect } from "react";
import { liveRatesMockData } from "./mockData";

export interface ExchangeRateResult {
  rate: string | null;
  timestamp: number | null;
  isLoading: boolean;
  error: string | null;
}

export const getExchangeRate = (
  fromCurrency: string,
  toCurrency: string
): Omit<ExchangeRateResult, "isLoading"> => {
  try {
    // Find the matching currency pair in mock data
    const rateData = liveRatesMockData.tiers.find(
      (tier) =>
        tier.from_currency === fromCurrency.toUpperCase() &&
        tier.to_currency === toCurrency.toUpperCase()
    );

    if (!rateData || !rateData.rates || rateData.rates.length === 0) {
      return {
        rate: null,
        timestamp: null,
        error: `No exchange rate found for ${fromCurrency} to ${toCurrency}`,
      };
    }

    // Get the first rate (you could implement logic to choose based on amount if needed)
    const firstRate = rateData.rates[0];

    return {
      rate: firstRate.rate,
      timestamp: rateData.time_stamp,
      error: null,
    };
  } catch (err: unknown) {
    console.error(err);
    return {
      rate: null,
      timestamp: null,
      error: "Failed to fetch exchange rate",
    };
  }
};

export const useGetExchangeRate = (
  fromCurrency: string,
  toCurrency: string
): ExchangeRateResult => {
  const [result, setResult] = useState<ExchangeRateResult>({
    rate: null,
    timestamp: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchRate = () => {
      const calculatedResult = getExchangeRate(fromCurrency, toCurrency);
      setResult({
        ...calculatedResult,
        isLoading: false,
      });
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  return result;
};
