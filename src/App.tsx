import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Wallet from "./pages/Wallet";
import DeFi from "./pages/DeFi";

function App() {
  return (
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
  );
}

export default App;
