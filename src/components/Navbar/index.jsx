import React, {useCallback, useEffect, useState} from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavIcon, MobileIcon, NavLogo, NavLink, NavMenu, NavItem } from './styled';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);
    const changeNav = useCallback(() => {
        if (window.scrollY >= 80) {
            setScroll(true);
            return
        }
        setScroll(false)
    }, []);

    useEffect(() => {
        changeNav();
        window.addEventListener('scroll', changeNav)
        return () => window.removeEventListener('scroll', changeNav);
    }, [changeNav])

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <IconContext.Provider value={{ color: '#141414' }}>
            <Nav active={scroll} click={click}>
                <NavbarContainer>
                    <NavLogo to={'/'}>
                        <NavIcon />
                        EXPLOR
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu $click={click}>
                        <NavItem>
                            <NavLink to={'/'}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={'/images/'}>Images</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={'/destinations'}>Destinations</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar;
