import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav<{ expendNav: boolean }>`
    background-color: #21325e;
    height: ${(props) => (props.expendNav ? '100vh' : '80px')};

    @media (min-width: 600px) {
        height: 80px;
    }
`;

const HamburgerButton = styled.button`
    cursor: pointer; 
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    margin-top: 15px;
    
    @media (min-width: 600px) {

        display: none;
    }
`;

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    

    @media(max-width: 600px){
        display: none;
    }
`;

const LinkTransition = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 25px;
    margin: 20px;
`

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    display: none;
  }
`;


const Navigation = () => {

    const [expendNav, setExpendNav] = useState(false);

    return (
        <Navbar expendNav={expendNav}>
            <HamburgerButton onClick={() => {
                setExpendNav((prev) => !prev);
            }}>{expendNav ? <>&#10005;</> : <> &#8801;</>}</HamburgerButton>
            <Links>
                <LinkTransition to="/">Home</LinkTransition>
            </Links>
            {expendNav && (
                <NavbarExtendedContainer>

                    <LinkTransition to="/">Home</LinkTransition>
                </NavbarExtendedContainer>
            )}
        </Navbar>
    )
}

export default Navigation;