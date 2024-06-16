import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import styled from "styled-components";
import Logo from "./logo-blc-1.png";

const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffcd00;
  margin-top: 2em;
`;

const Copy = styled.h1`
  font-family: "Poppins";
  font-size: 1em;
`;

const StyledLogo = styled.img`
  width: 150px;
  height: 25px;
  margin-left: 2em;
`;

const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 2em;
`;

function Footer() {
  return (
    <Container>
      <StyledLogo src={Logo} />
      <CopyrightContainer>
        <Copy>Direitos reservados para Challenge</Copy>
        <FaRegCopyright />
      </CopyrightContainer>
    </Container>
  );
}

export default Footer;
