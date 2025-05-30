
  import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
  import GlobalContextsProvider from './components/plasmic/nft_minting_website/PlasmicGlobalContextsProvider'
  import ConnectWalletViewMintingNftDetails from "./components/ConnectWalletViewMintingNftDetails.tsx";

function App() {
  return (<GlobalContextsProvider>
     <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/connect-wallet-view-minting-nft-details" />}
        />
        <Route path="/connect-wallet-view-minting-nft-details" element={<ConnectWalletViewMintingNftDetails />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  </GlobalContextsProvider>);
}

export default App;
  