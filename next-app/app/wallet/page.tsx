"use client" // fixes a huge problem
import { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Web3Provider } from '@ethersproject/providers';
import NavBar from '../nav/NavBar';
import "./wallet.css";
import WalletCardInfo from './WalletCard';
import Web3 from "web3";

export default function Wallet() {
  const [account, setAccount] = useState('');
  const [balanceInDollars, setBalanceInDollars] = useState('');

  useEffect(() => {
    if (account) {
      const web3 = new Web3(window.ethereum);
      web3.eth.getBalance(account)
        .then((balance) => {
          const balanceInEther = web3.utils.fromWei(balance, 'ether');
          const ethToUsdRate = 2000; // 1 ether is barely 2000 dollars
          const balanceInDollars = parseFloat(balanceInEther) * ethToUsdRate;
          setBalanceInDollars(balanceInDollars.toFixed(2));
        })
        .catch((error) => {
          console.error('Cannot get balance :', error);
        });
    }
  }, [account]);

  async function connect() {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: '0xE2dcCC10f7136AB79479B849A6c7fa94D975CaF8'
            },
          },
        },
      });

      const connection = await web3Modal.connect();
      const provider = new Web3Provider(connection);
      const accounts = await provider.listAccounts();
      setAccount(accounts[0]);
    } catch (err) {
      console.error('Cannot connect to the wallet:', err);
    }
  }

  return (
    <div>
      {
        !account ? (
          <div className="button-container">
            <button onClick={connect} className='button-connection'>Connect</button>
          </div>
        ) : (
          <div className="main-container">
            <h1 className='page-title'>Wallet</h1>
            <WalletCardInfo name="John Doe" code="4437 : 03/26" />
            <div className="bottom-card">
              <p className='wallet-adress'>Adress : {account}</p>
              <p>Current balance :</p>
              <p>${balanceInDollars}</p>
              <div className="bottom-buttons">
                <button className='button-send'>Send</button>
                <button className='button-invest'>Invest</button>
              </div>
            </div>
          </div>
        )
      }
      <NavBar />
    </div>
  );
}
