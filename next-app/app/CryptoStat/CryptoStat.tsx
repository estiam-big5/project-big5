import './cryptostat.css'
import CryptoStatCard from './CryptoStatCard'


const defaultCoinsData = [
  {
    name: "Bitcoin",
    abrv: "BTC",
    variation: "",
    value: "fetching",
    logo: "B"
  },
  {
    name: "Doge",
    abrv: "DOGE",
    variation: "",
    value: "fetching",
    logo: "D"
  },
  {
    name: "Etherum",
    abrv: "ETH",
    variation: "",
    value: "fetching",
    logo: "E"
  },
  {
    name: "Avalanche",
    abrv: "AVAX",
    variation: "",
    value: "fetching",
    logo: "A"
  }
]

export default function CryptoStat () {
  let cryptoStatItems = []
  for (let i=0; i<defaultCoinsData.length; i++) {
    cryptoStatItems.push(<CryptoStatCard name={defaultCoinsData[i].name} abrv={defaultCoinsData[i].abrv} variation={defaultCoinsData[i].variation} value={defaultCoinsData[i].value} logo={defaultCoinsData[i].logo} key={`CryptoStatCard${i}`}/>)
  }
  return (
    <div className="crypto-stat">
      {cryptoStatItems}
    </div>
    
  )
}