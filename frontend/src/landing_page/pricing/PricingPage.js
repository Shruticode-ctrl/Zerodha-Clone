import React from 'react';
import PricingHero from './PricingHero';
import Brokerage from './Brokerage';
import OpenAccount from "../OpenAccount";

function PricingPage() {
    return (  
        <>
        <PricingHero/>
        <OpenAccount/>
        <Brokerage/>
        </>
    );
}

export default PricingPage;