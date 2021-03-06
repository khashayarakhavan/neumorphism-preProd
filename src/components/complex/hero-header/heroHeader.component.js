import React from 'react';
import logo from '../../../assets/icon/logo.png';
import {Orange_White, Accent_fireOrange ,LightBlue_DarkBlue, Accent_mateBlue} from '../../Sections/header/header.styles';
import Lottie from "react-lottie";
import * as buildProduct from "../../complex/loading/buildProduct";
import { TeaOrCoffee, Button, TEXT, H1, HeroHeader ,HeroHeaderLeft, OnHover_palePink, OnHover_paleYellow, OnHover_Green } from "./heroHeader.styles";


const Template = () => {
    const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: buildProduct.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <HeroHeader className="header:NOT ROBOT" id="header">
        {/* <div className="header__logo-box">
          <img src={logo} alt="logo" className="header__logo" />
        </div> */}
        <HeroHeaderLeft className="header__text-box">
          <H1 className="heading-primary--main:NOT">
            Hi
            <Accent_fireOrange>.</Accent_fireOrange>
            <br />I<Accent_mateBlue>’</Accent_mateBlue>m
            <Accent_fireOrange>K</Accent_fireOrange>hashi
          </H1>
          <TEXT className="heading-primary--sub:NOT TEXT:NOT">
            a full stack web developer and I love&nbsp;
            <OnHover_palePink>coding</OnHover_palePink>,&nbsp;
            <OnHover_paleYellow>science</OnHover_paleYellow> &
            <OnHover_Green>French</OnHover_Green>language!
          </TEXT>
          <Button>
            Pleased to meet you 😊 <br />
            <span>tea or coffee ? </span>
          </Button>
        </HeroHeaderLeft>
        <Lottie options={defaultOptions2} height={440} width={440} />
      </HeroHeader>
    );
};

export default Template;