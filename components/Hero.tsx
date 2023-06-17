"use client";

import Image from "next/image";
import { CustomButton } from "./";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Automate Your Trades with the dYdX Connector Trading Bot
        </h1>

        <p className="hero__subtitle">
          Streamline Your Trading with the dYdX Connector Trading Bot.
        </p>

        <CustomButton
          title="Connect to dYdX"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src='/hero.svg' alt="hero" fill className="object-contain"/>
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
