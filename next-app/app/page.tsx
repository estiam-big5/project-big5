import './home.css';
import NavBar from "./nav/NavBar";
import CryptoStat from "./CryptoStat/CryptoStat";

export default function Home() {
  return (<>
    <main className='full-height flex-column flex-center center-space-content'>
      <h1 className='page-title'>Home</h1>
      <CryptoStat/>
    </main>
    <NavBar/>
  </>);
}
