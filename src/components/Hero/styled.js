import styled from "styled-components";
import image from "../../images/background2.jpg"

export const HeroStyled = styled.section`
  background: url(${image}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;
`;
export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 6rem;
  margin-top: 0;
  
  @media screen and (max-width: 960px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;
export const HeroText = styled.p`
  margin-top: 0.5rem;
  color: #ffffff;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`
export const HeroButtons = styled.footer`
  margin-top: 2rem;
`;
    {/*    <button*/}


