import { useMemo } from "react";
import { currenciesMockData } from "./mockData";

export interface Currency {
  coin_id: string;
  name: string;
  symbol: string;
  token_decimal: number;
  contract_address: string;
  withdrawal_eta: string[];
  colorful_image_url: string;
  gray_image_url: string;
  has_deposit_address_tag: boolean;
  min_balance: number;
  blockchain_symbol: string;
  trading_symbol: string;
  code: string;
  explorer: string;
  is_erc20: boolean;
  gas_limit: number;
  token_decimal_value: string;
  display_decimal: number;
  supports_legacy_address: boolean;
  deposit_address_tag_name: string;
  deposit_address_tag_type: string;
  num_confirmation_required: number;
}

export const getCurrencyByCoinId = (coinId: string): Currency | undefined => {
  return currenciesMockData.currencies.find(
    (currency) => currency.coin_id.toLowerCase() === coinId.toLowerCase()
  );
};

export const useGetCurrencyByCoinId = (coinId: string) => {
  return useMemo(() => getCurrencyByCoinId(coinId), [coinId]);
};
