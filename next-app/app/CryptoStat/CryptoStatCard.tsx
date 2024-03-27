'use client'
import { useState } from "react";

type CardInfo = {
  name: string,
  abrv: string,
  variation: string,
  value: string,
  logo: string
}

export default async function CryptoStatCard(props: CardInfo) {

  const [info, updateInfo] = useState({...props})

  const data = await fetch(
    `https://api.api-ninjas.com/v1/cryptoprice?symbol=${info.abrv}USDT`,
    {
      "headers": {
        "X-Api-Key": "z8qtosqrqsAxTLnGx7DQfQ==9uaFTWWvRsYBFc41"
      }
    }).then((response)=>{
      return response.json()
    }).then((data) => {
      let newInfo = info;
      newInfo.value = String(Number(data.price)) + "$";
      return newInfo
    });
  
  updateInfo(data)

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