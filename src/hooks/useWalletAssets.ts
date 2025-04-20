import { useMemo } from "react";
import { getWalletBalance, getExchangeRate } from "../service";
import {
  CoinAsset,
  CurrencyAsset,
  useWalletProvider,
} from "../components/WalletContext";

export interface WalletAsset {
  coinId: string;
  balance: string;
  currencyAmount: number;
}

export interface GetWalletAssetsResult {
  assets: WalletAsset[];
  totalCurrencyAmount: number;
}

export const getWalletAssets = (
  showCoins: CoinAsset[],
  currency: CurrencyAsset
): GetWalletAssetsResult => {
  const assets = showCoins.map((coin) => {
    const balance = getWalletBalance(coin.id)?.balance || 0;

    const rate = getExchangeRate(coin.id, currency.id);

    return {
      coinId: coin.id,
      balance: String(balance),
      currencyAmount: balance * Number(rate.rate ?? 0),
    };
  });

  const totalCurrencyAmount = assets.reduce(
    (acc, asset) => acc + asset.currencyAmount,
    0
  );

  return { assets, totalCurrencyAmount };
};

export const useGetWalletAssets = (): GetWalletAssetsResult => {
  const { showCoins, currency } = useWalletProvider();

  return useMemo(() => {
    return getWalletAssets(showCoins, currency);
  }, [showCoins, currency]);
};
