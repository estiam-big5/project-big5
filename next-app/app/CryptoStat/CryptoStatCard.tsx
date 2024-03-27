'use client'
import { useEffect, useState } from "react";

type CardInfo = {
  name: string,
  abrv: string,
  variation: string,
  value: string,
  logo: string
}

export default function CryptoStatCard(props: CardInfo) {
  const [info, setInfo] = useState({ ...props })
  const [isLoading, setIsLoading] = useState(true)
  const setValue = (newValue: string) => {
    let newInfo = info;
    newInfo.value = String(Number(newValue)) + "$";
    setInfo(newInfo)
  }
  useEffect(() => {
    fetch(
      `https://api.api-ninjas.com/v1/cryptoprice?symbol=${info.abrv}USDC`,
      {
        "headers": {
          "X-Api-Key": "z8qtosqrqsAxTLnGx7DQfQ==9uaFTWWvRsYBFc41"
        }
      }).then((response) => {
        return response.json()
      }).then((data) => {
        let newInfo = info;
        setValue(data.price)
        setIsLoading(false)
        console.log(info, newInfo)
      });
  }, [])

  return (
    <div className={`crypto-stat-card ${info.name}`}>
      <div className="coin-abrv">{info.abrv}</div>
      <div className="coin-variation">{info.variation}</div>
      <div className="coin-value">{info.value}</div>
      <div className="coin-brand horizontal-flex">
        <div className="coin-logo">{info.logo}</div>
        <div className="coin-name">{info.name}</div>
      </div>
    </div>
  )
}