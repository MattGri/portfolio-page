import React from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Container = styled.div`
  height: 200px; 
  background: #21325e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  margin-top: 200px;
`

const Wrapper = styled.div`

`;

const Copyright = styled.p`
    color: #fff;
`;

const Links = styled.a``

const LinkLinkedin = styled(BsLinkedin)`
    color: #fff;
    cursor: pointer;
    font-size: 60px;
    margin: 20px;

    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

const LinkGithub = styled(BsGithub)`
    color: #fff;
    cursor: pointer;
    font-size: 60px;
    margin: 20px;

    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Links href='https://www.linkedin.com/in/mateusz-grzybowski-1685a5183/' target='_blank'> <LinkLinkedin /></Links>
                <Links href='https://github.com/MattGri/' target='_blank'> <LinkGithub /></Links>
            </Wrapper>

            <Copyright> &copy; 2022 MattGri</Copyright>

        </Container>
    )
}

export default Footer;