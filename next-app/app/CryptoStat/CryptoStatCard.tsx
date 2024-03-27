type CardInfo = {
  name: string,
  abrv: string,
  variation: string,
  value: string,
  logo: string
}
export default function CryptoStatCard(props: CardInfo) {
  return (
    <div className={`crypto-stat-card ${props.name}`}>
      <div className="coin-abrv">{props.abrv}</div>
      <div className="coin-variation">{props.variation}</div>
      <div className="coin-value">{props.value}</div>
      <div className="coin-brand horizontal-flex">
        <div className="coin-logo">{props.logo}</div>
        <div className="coin-name">{props.name}</div>
      </div>
    </div>
  )
}