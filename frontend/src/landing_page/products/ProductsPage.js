import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <LeftSection
        imageURL="/media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more."
        tryDemo="/kite-demo"
        learnMore="/kite-learn"
        googlePlay="https://play.google.com"
        appStore="https://apple.com"
      />

      <RightSection
        imageURL="/media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account."
        learnMore="/console-learn"
      />

      <LeftSection
        imageURL="/media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free."
        tryDemo="/coin-demo"
        learnMore="/coin-learn"
        googlePlay="https://play.google.com"
        appStore="https://apple.com"
      />

      <RightSection
        imageURL="/media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms using APIs."
        learnMore="/kite-api"
      />

      <LeftSection
        imageURL="/media/varsity.png"
        productName="Varsity mobile"
        productDescription="Easy stock market learning platform."
        tryDemo="/varsity-demo"
        learnMore="/varsity-learn"
        googlePlay="https://play.google.com"
        appStore="https://apple.com"
      />

      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a
          href="https://zerodha.tech"
          target="_blank"
          rel="noreferrer"
        >
          Zerodha.tech
        </a>{" "}
        blog.
      </p>

      <Universe />

      <Footer />
    </>
  );
}

export default PricingPage;