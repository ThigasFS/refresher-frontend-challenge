import styled from "styled-components";
import Logo from "./logo-blc-1.png";
import { FaSearch } from "react-icons/fa";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`;

const StyledLogo = styled.img`
  height: 35px;
  margin-left: 25px;
`;

const StyledInput = styled.input`
  width: 250px;
  height: 25px;
  border-radius: 1em;
  border: 1px solid black;
  padding: 0 10px;
  background-color: #eee;
  &:hover {
    border: 2px solid #ffcd00;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerSearchIcon = styled.span`
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 0 1em 1em 0;
  transition: 0.5s;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: #ffcd00;
  }
`;

function Header() {
  return (
    <header>
      <StyledDiv>
        <StyledLogo src={Logo} alt="" />
        <ContainerInput>
          <StyledInput />
          <ContainerSearchIcon>
            <FaSearch />
          </ContainerSearchIcon>
        </ContainerInput>
      </StyledDiv>
    </header>
  );
}

export default Header;
