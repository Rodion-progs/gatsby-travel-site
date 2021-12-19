import styled from 'styled-components';
import Img from 'gatsby-image';

export const ImagesStyled = styled.section`
  text-align: center;
  margin: 150px 0;
`;
export const ImagesTitle = styled.h2`
  margin-bottom: 4rem;
`;
export const ImagesGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 2rem;
`;
export const ImageItem = styled(Img)`
  &:nth-child(5) {
    grid-column-end: span 2;
  }
  &:nth-child(9) {
    grid-row-start: 4;
    grid-column-end: span 2;
  }
  cursor: pointer;
  
  & img {
    transition: transform 0.6s ease !important;
  }
  & img:hover {
    transition: transform 0.6s ease !important;
    transform: scale(1.05);
  }
`;
