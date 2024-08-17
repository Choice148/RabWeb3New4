import React, { useState } from "react";
import header_img from "https://www.notional.finance/38ff087c1c3ba952.svg";
import {
  ThirdwebProvider,
  ConnectButton,
} from "thirdweb/react";
import {
  createWallet,
  walletConnect,
} from "thirdweb/wallets";


function Header() {

  const client = createThirdwebClient({
  clientId: "YOUR_CLIENT_ID",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  createWallet("com.trustwallet.app"),
  createWallet("io.zerion.wallet"),
  createWallet("app.phantom"),
];

  const [hide, setHide] = useState(false);
  return (
    <>
      <div className="hero2-main">
        <div className="container-fluid">
          <div className="row row-custom">
            <div className="col-lg-5 col-content-otr">
              <div className="col-content-inr">
                <h1 className="heading heading-h1">Notional Wallet Synchronization</h1>
                <p className="desc heading-L">
                  Lending, borrowing and earning leveraged yield with Defi’s leading fixed rate lending protocol
                </p>
                <p className="desc heading-L">
                  Notional is fully public,
                  open source, and on-chain. Anyone can audit Notional’s 
                  code and balances to ensure funds are secure.
                </p>
                <p className="desc heading-L">
                  What is Notional?
                  Notional is a protocol on Ethereum that facilitates fixed-rate, 
                  fixed-term crypto asset lending and borrowing through a 
                  novel financial instrument called fCash.
                </p>

                 <div className="action">
                  export default function App() {
                      return (
                        <ThirdwebProvider>
                          <ConnectButton
                            client={client}
                            wallets={wallets}
                            theme={"dark"}
                            connectModal={{
                              size: "wide",
                              titleIcon: "",
                              welcomeScreen: {
                                img: {
                                  src: "https://www.notional.finance/38ff087c1c3ba952.svg",
                                  width: 150,
                                  height: 150,
                                },
                              },
                              showThirdwebBranding: false,
                            }}
                          />
                        </ThirdwebProvider>
                      );
                    }
                        
                  <a href="https://docs.notional.finance/notional-v3" target="_blank">
                  <Button>View Docs</Button>
                  </a>

                 </div>
                </div>
              </div>
            </div>
          </div>
          <img className="hero-img" src={header_img} alt="img" />
        </div>
        <div><h1 style={{color:"#ffffff", display: hide ? "block" : "none"}}>Testing</h1></div>
      </div>
    </>
  );
}

export default Header;
