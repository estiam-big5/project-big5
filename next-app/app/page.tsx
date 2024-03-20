import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
      <main>
        <div className="title"><h1>Home</h1></div>
        <div className="global">
          <div className="container">
            <div className="container-top">
              <div className="BTC"></div>
              <div className="DOGE"></div>
            </div>
            <div className="container-bottom">
              <div className="ETH"></div>
              <div className="USDT"></div>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu-item"><img src="/home.png"/></div>
          <div className="menu-item"><img src="./convert.png"/></div>
          <div className="menu-item"><img src="./wallet.png"/></div>
        </div>
      </main>
  );
}
