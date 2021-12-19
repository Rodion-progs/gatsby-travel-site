import styled from "styled-components";

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ $primary }) => ($primary ? '#ff4040' : '#0467fb')};
  white-space: nowrap;
  padding: ${({ $big }) => ($big ? '1rem 4rem' : '10px 20px')};
  color: #ffffff;
  font-size: ${({ $bigFont }) => ($bigFont ? '20px' : '16px')};
  border: none;
  cursor: pointer;
  font-family: 'Ubuntu',sans-serif;
  transition: 0.3s ease-in-out;
  
  &:hover, &:focus {
    background: ${({ $primary }) => ($primary ?  '#0467fb' :'#ff4040')};
  }
`;
