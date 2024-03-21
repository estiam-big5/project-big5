import './cryptostat.css'
import CryptoStatCard from './CryptoStatCard'


const coinsData = [
  {
    name: "Bitcoin",
    abrv: "BTC",
    variation: "+n%",
    value: "888.88$",
    logo: "B"
  },
  {
    name: "Doge",
    abrv: "DOGE",
    variation: "+n%",
    value: "888.88$",
    logo: "D"
  },
  {
    name: "Etherum",
    abrv: "ETH",
    variation: "+n%",
    value: "888.88$",
    logo: "E"
  },
  {
    name: "USDT",
    abrv: "USDT",
    variation: "+n%",
    value: "888.88$",
    logo: "USDT"
  }
]

export default function CryptoStat () {

  //TODO: function to retrieve data from web3 api
  let cryptoStatItems = []
  for (let i=0; i<coinsData.length; i++) {
    cryptoStatItems.push(<CryptoStatCard name={coinsData[i].name} abrv={coinsData[i].abrv} variation={coinsData[i].variation} value={coinsData[i].value} logo={coinsData[i].logo} key={`CryptoStatCard${i}`}/>)
  }
  return (
    <div className="crypto-stat">
      {cryptoStatItems}
    </div>
    
  )
}