import React from "react"

import Layout from "../components/layout"
import Image from "../components/Image"
import Seo from "../components/seo"
import styled from "styled-components";
import image from "../images/background.jpg";

const DestinationsTitle = styled.h1`
    text-align: center;
    background: url(${image}) center center/cover no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
    object-fit: contain;
    margin-top: -80px;

    color: #fff;
    font-size: 100px;
  @media screen and(max-width: 960px){
    .destinations{
      font-size:70px;
    }
  }

  @media screen and(max-width: 768px){
    .destinations{
      font-size:60px;
    }
  }
`;

const Destinations = () => (
    <Layout>
        <Seo title="Destinations" />
        <DestinationsTitle>Destinations</DestinationsTitle>
        <Image />
    </Layout>
)

export default Destinations
