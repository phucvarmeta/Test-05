import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWalletViewMintingNftDetails from "./components/ConnectWalletViewMintingNftDetails.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/connect-wallet-view-minting-nft-details" element={<ConnectWalletViewMintingNftDetails />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
