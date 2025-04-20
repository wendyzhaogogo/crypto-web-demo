import { useGetCurrencyByCoinId } from "../../service/currencies";
import { CurrencyBitcoin } from "@mui/icons-material";
import { useState } from "react";

interface CryptoAssetItemProps {
  coinId: string;
  balance: string;
  value: number;
}

export function CryptoAssetItem({ coinId, balance, value }: CryptoAssetItemProps) {
  const currency = useGetCurrencyByCoinId(coinId);
  const [imageError, setImageError] = useState(false);

  if (!currency) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <div className="w-10 h-10 mr-3 flex items-center justify-center">
          {imageError ? (
            <CurrencyBitcoin style={{ fontSize: 32, color: "#666" }} />
          ) : (
            <img
              src={currency.colorful_image_url}
              alt={currency.name}
              className="w-8 h-8"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div>
          <div className="font-medium text-lg">{currency.name}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-medium">
          {balance} {currency.symbol}
        </div>
        <div className="text-gray-500">${value.toFixed(2)}</div>
      </div>
    </div>
  );
} 