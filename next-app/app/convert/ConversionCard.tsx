"use client";
import React, { useState, useEffect } from "react";
import "./conversion.css";

type ConversionCardInfo = {
  name: string;
  abrv: string;
  logo: string;
  inputValue: number;
  setInputValue: (value: number) => void;
};

export default function ConversionCard(props: ConversionCardInfo) {
  const [conversionRate, setConversionRate] = useState(0);

  useEffect(() => {
    if (props.abrv === "ETH" || props.abrv === "EUR") {
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur"
      )
        .then((response) => response.json())
        .then((data) => setConversionRate(data.ethereum.eur));
    }
  }, [props.abrv]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    props.setInputValue(newValue);
  };

  return (
    <div className={`conversion-card ${props.name}`}>
      <div className="currency-abrv">{props.abrv}</div>
      <input
        className="currency-input"
        type="number"
        value={props.inputValue}
        onChange={handleInputChange}
      />
      <div className="conversion-rate">
        {props.abrv === "EUR"
          ? (props.inputValue * conversionRate).toFixed(2)
          : (props.inputValue / conversionRate).toFixed(2)}
      </div>
      <div className="currency-logo">{props.logo}</div>
      <div className="currency-name">{props.name}</div>
    </div>
  );
}
