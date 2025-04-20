import { useGetCoinByCoinId } from "../../service/currencies";
import { CurrencyBitcoin } from "@mui/icons-material";
import { useState } from "react";
import { useWalletProvider } from "../../components/WalletContext";

interface CryptoAssetItemProps {
  coinId: string;
  balance: string;
  value: number;
}

export function CryptoAssetItem({
  coinId,
  balance,
  value,
}: CryptoAssetItemProps) {
  const coin = useGetCoinByCoinId(coinId);
  const [imageError, setImageError] = useState(false);
  const { currency } = useWalletProvider();
  if (!coin) {
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
              src={coin.colorful_image_url}
              alt={coin.name}
              className="w-8 h-8"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div>
          <div className="font-medium text-lg">{coin.name}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-medium">
          {balance} {coin.symbol}
        </div>
        <div className="text-gray-500">
          {currency.symbol}
          {value.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
