import React, { useState } from "react";
import header_img from "../images/img-hero-img-home-2.png";
import { ConnectWallet } from "@thirdweb-dev/react";

function Header() {

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
                  Don’t Trust, Verify Notional is fully public,
                  open source, and on-chain. Anyone can audit Notional’s 
                  code and balances to ensure funds are secure.
                </p>
                <p className="desc heading-L">
                  What is Notional?
                  Notional is a protocol on Ethereum that facilitates fixed-rate, 
                  fixed-term crypto asset lending and borrowing through a 
                  novel financial instrument called fCash.
                </p>
                
                  <a href="https://docs.notional.finance/notional-v3" target="_blank">
                  <Button>View Docs</Button>
                  </a>
                
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
