import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Wallet from "./pages/Wallet";
import DeFi from "./pages/DeFi";
import { CoinAsset, WalletProvider } from "./components/WalletContext";
import { useState } from "react";

function App() {
  const [userRelatedCoins] = useState<CoinAsset[]>([
    {
      id: "BTC",
    },
    {
      id: "ETH",
    },
    {
      id: "CRO",
    },
  ]);
  return (
    <WalletProvider showCoins={userRelatedCoins}>
      <Router>
        <div className="h-screen bg-[#0B1F36] pb-16 flex flex-col w-screen">
          <Routes>
            <Route path="/" element={<Navigate to="/wallet" replace />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/defi" element={<DeFi />} />
          </Routes>
          <Navbar />
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
