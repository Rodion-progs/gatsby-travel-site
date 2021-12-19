import styled from 'styled-components';
import { Link } from "gatsby";
import { DiScala } from "react-icons/di";


export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background: ${({ active }) => (active ? '#ffffff' : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)')};

  @media screen and (max-width: 960px) {
    background-color: ${({ click }) => (click ? '#fff;' : 'transparent;')};
    transition: background-color 0.8s ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`;

export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 999;
`;

export const NavIcon = styled(DiScala)`
  margin: 0 0.5rem 0 2rem;
  position: relative;
  z-index: 999;
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 999;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 0;
    transform: translateY(${({ $click }) => ($click ? "80px" : "-100%")});
    opacity: 1;
    transition: transform 0.2s ease-in-out;
    background-color: #ffffff;
    z-index: 300;
  }
  
`;
export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const NavLink = styled(Link)`
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  transition: color 0.2s ease-in-out;
  font-family: 'Ubuntu', sans-serif;

  &:hover {
    color: #ff4040;
    transition: color 0.2s ease-in-out;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;
