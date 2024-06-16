import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DivEstilizada = styled.div`
  position: relative;
  width: 350px;
  height: 275px;
  margin: 15px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  background: #ffcd00;
  border-radius: 15px;
  transition: all 0.8s ease-in-out;
  &:hover {
    opacity: 50%;
  }
`;

const ImgEstilizada = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin: 0;
`;

const Titulo = styled.h1`
  font-family: "Poppins";
  font-size: 1em;
  text-align: center;
  margin: 0;
`;

const TextContainer = styled.div`
  padding: 10px;
  text-align: center;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Card({ foto, children, data }) {
  return (
    <Container>
      <DivEstilizada>
        <ImgContainer>
          <ImgEstilizada src={foto} alt="" />
        </ImgContainer>
        <TextContainer>
          <Titulo>{children}</Titulo>
        </TextContainer>
      </DivEstilizada>
    </Container>
  );
}

export default Card;
