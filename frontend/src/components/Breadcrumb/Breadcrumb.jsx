import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Lista = styled.ul`
  border: 1px solid #cbd2d9;
  border-radius: 0.3rem;
  display: inline-flex;
  overflow: hidden;
  padding: 0;
  margin-left: 2em;
`;

const Item = styled.li`
  font-family: "Poppins";
  background: #fff;
  color: #333;
  outline: none;
  padding: 0.75em 0.75em 0.75em 1.25em;
  position: relative;
  list-style: none;
  transition: 0.2s linear;
  &:after,
  &:before {
    background: white;
    bottom: 0;
    clip-path: polygon(50% 50%, -50% -50%, 0 100%);
    content: "";
    left: 100%;
    position: absolute;
    top: 0;
    transition: 0.2s linear;
    width: 1em;
    z-index: 1;
  }
  &:before {
    background: #cbd2d9;
    margin-left: 1px;
  }
  &:hover {
    background: #ffcd00;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2em;
`;

const Anchor = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: #ffcd00;
  }
`;

function Breadcrumb({ post }) {
  if (post === "0") {
    return (
      <Container>
        <Lista>
          <Item>Design</Item>
          <Item>Design para Sentidos</Item>
          <Item>Parte II</Item>
        </Lista>
        <Link to="/" style={{ color: "black" }}>
          <Anchor>
            <FaHome size="2em" />
          </Anchor>
        </Link>
      </Container>
    );
  }
  if (post === "1") {
    return (
      <Container>
        <Lista>
          <Item>Design</Item>
          <Item>Maximizando a usabilidade</Item>
          <Item>Parte II</Item>
        </Lista>
        <Link to="/" style={{ color: "black" }}>
          <Anchor>
            <FaHome size="2em" />
          </Anchor>
        </Link>
      </Container>
    );
  }
  if (post === "2") {
    return (
      <Container>
        <Lista>
          <Item>Design</Item>
          <Item>Zennials - Série</Item>
          <Item>Parte II</Item>
        </Lista>
        <Link to="/" style={{ color: "black" }}>
          <Anchor>
            <FaHome size="2em" />
          </Anchor>
        </Link>
      </Container>
    );
  }
}

export default Breadcrumb;
