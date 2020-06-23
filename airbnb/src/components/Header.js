// h1
// nav links
// signup button
// primary red (r255,g56,b92 - #FF385C),
// secondary red (r216,g5,b101 - #D80565),
// white (r255,g255,b255 - #FFFFFF),
// black (r0,g0,b0 - #000000),
// grey (r34, g34, b34 - #222222)

import React from 'react';
import Button from '../styles/Button';
import styled from 'styled-components';
import Logo from '../Logo.png';

const StyledNavBar = styled.nav `
    display: flex;
    background-color: #222222;
    height: 8vh;
    justify-content: space-evenly;
    padding-top: 5px;
`;
const StyledH1 = styled.h1 `
    color: #FF385C;
`;
const StyledLogo = styled.img `
    height: 50px;
    width: 50px;
    margin-top: 8px;
    display: flex;
`;

function Header () {
    return (
    <StyledNavBar>
      <StyledH1>Airbnb Optimal Pricing &nbsp;</StyledH1>
        <StyledLogo src={Logo} alt="logopng"/>
        <Button type='primary-red'>Login</Button>
        <Button type='secondary-red'>Register</Button>
    </StyledNavBar>
    )
}

export default Header;