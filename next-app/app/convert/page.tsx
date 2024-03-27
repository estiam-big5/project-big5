"use client";

import NavBar from "../nav/NavBar";
import "./conversion.css";
import ConversionCard from "./ConversionCard";
import React, { useState } from "react";

const currenciesData = [
  {
    name: "Euro",
    abrv: "EUR",
    logo: "€",
  },
  {
    name: "Ether",
    abrv: "ETH",
    logo: "E",
  },
];

export default function ConversionPage() {
  const [inputValueEUR, setInputValueEUR] = useState(0);
  const [inputValueETH, setInputValueETH] = useState(0);

  return (
    <>
      <main className="full-height flex-column flex-center center-space-content">
        <h1 className="page-title">Convert</h1>
        <div className="conversion-page">
          <ConversionCard
            name="E en Euro"
            abrv={currenciesData[0].abrv}
            logo={currenciesData[0].logo}
            inputValue={inputValueEUR}
            setInputValue={setInputValueEUR}
            key={`ConversionCard0`}
          />
          <div className="arrow">⇆</div>
          <ConversionCard
            name="€ en Ether"
            abrv={currenciesData[1].abrv}
            logo={currenciesData[1].logo}
            inputValue={inputValueETH}
            setInputValue={setInputValueETH}
            key={`ConversionCard1`}
          />
        </div>
      </main>
      <NavBar />
    </>
  );
}
