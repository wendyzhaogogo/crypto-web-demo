import { useCallback } from "react";
import { Send, Download } from "@mui/icons-material";
import { WalletButton } from "./WalletButton";
import { CryptoAssetItem } from "./CryptoAssetItem";
import { useGetWalletAssets } from "../../hooks";
import { useWalletProvider } from "../../components/WalletContext";

export default function Wallet() {
  const { currency } = useWalletProvider();
  const { assets, totalCurrencyAmount } = useGetWalletAssets();

  const handleSend = useCallback(() => {
    console.log("send");
  }, []);

  const handleReceive = useCallback(() => {
    console.log("receive");
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#0B1F36]">
      {/* Header */}
      <div className="mt-4 flex items-center justify-center text-xl  p-4 gap-1">
        <span className="text-white flex items-center">crypto.com</span>
      </div>

      {/* Balance display */}
      <div className="text-center mb-8 mt-4 flex items-center justify-center gap-2">
        <div className="text-gray-400 text-lg flex items-center">
          {currency.symbol}
        </div>
        <div className="text-4xl font-bold flex items-center text-white">
          {totalCurrencyAmount.toFixed(2)}
        </div>
        <div className="text-lg font-bold flex items-center text-gray-400">
          {currency.id}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-16 mb-8">
        <WalletButton
          icon={<Send style={{ fontSize: 24 }} />}
          label="Send"
          onClick={handleSend}
        />
        <WalletButton
          icon={<Download style={{ fontSize: 24 }} />}
          label="Receive"
          onClick={handleReceive}
        />
      </div>

      {/* Asset list */}
      <div className="flex-1 bg-white rounded-t-3xl p-4">
        {assets.map((asset) => (
          <CryptoAssetItem
            key={asset.coinId}
            coinId={asset.coinId}
            balance={asset.balance}
            value={asset.currencyAmount}
          />
        ))}
      </div>
    </div>
  );
}
