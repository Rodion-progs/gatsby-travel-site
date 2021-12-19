import React from 'react';
import { HeroStyled, HeroButtons, HeroTitle, HeroText } from './styled';
import { Button } from "../Button";
import image from "../../images/background2.jpg"

const Hero = () => {
    return (
        <HeroStyled>
            <HeroTitle>Travel more</HeroTitle>
            <HeroText>Plan your next trip today</HeroText>
            <HeroButtons>
                <Button $bigFont $big $primary>Get Started</Button>
            </HeroButtons>
        </HeroStyled>
    );
};

export default Hero;
