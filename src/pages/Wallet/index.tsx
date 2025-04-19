import { ReactNode, useCallback, useState } from "react";
import { CurrencyBitcoin, Send, Download } from "@mui/icons-material";
import { WalletButton } from "./WalletButton";

interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  balance: string;
  value: number;
  Icon: () => ReactNode;
}

export default function Wallet() {
  const [totalBalance] = useState(36.68);

  const assets: CryptoAsset[] = [
    {
      id: "bat",
      name: "Basic Attention Token",
      symbol: "BAT",
      balance: "1",
      value: 1,
      Icon: () => <CurrencyBitcoin />,
    },
    {
      id: "eth",
      name: "Ethereum",
      symbol: "ETH",
      balance: "1",
      value: 1,
      Icon: () => <CurrencyBitcoin />,
    },
    {
      id: "usdt",
      name: "Tether",
      symbol: "USDT",
      balance: "1",
      value: 1,
      Icon: () => <CurrencyBitcoin />,
    },
    {
      id: "btc",
      name: "Bitcoin",
      symbol: "BTC",
      balance: "0",
      value: 0,
      Icon: () => <CurrencyBitcoin />,
    },
    {
      id: "cro",
      name: "Crypto.com Coin",
      symbol: "CRO",
      balance: "0",
      value: 0,
      Icon: () => <CurrencyBitcoin />,
    },
  ];

  const handleSend = useCallback(() => {
    console.log("send");
  }, []);

  const handleReceive = useCallback(() => {
    console.log("receive");
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#0B1F36]">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-medium">crypto.com | DeFi Wallet</div>
      </div>

      {/* Balance display */}
      <div className="text-center mb-8 mt-4 flex items-center justify-center gap-2">
        <div className="text-gray-400 text-lg flex items-center">$</div>
        <div className="text-4xl font-bold flex items-center">
          {totalBalance.toFixed(2)}
        </div>
        <div className="text-lg font-bold flex items-center">USD</div>
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
          <div
            key={asset.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3 flex items-center justify-center">
                <asset.Icon />
              </div>
              <div>
                <div className="font-medium text-lg">{asset.name}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">
                {asset.balance} {asset.symbol}
              </div>
              <div className="text-gray-500">${asset.value.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
