import React from "react";
import styled from "styled-components";
import Related from "../Related/Related";

const SessaoFinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffcd00;
  padding: 2em;
  margin-bottom: 2.5em;
`;

const ContainerComentarios = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 25px;
`;

const Titulo = styled.h1`
  font-family: "Poppins";
  font-size: 2em;
  text-align: center;
  margin: 0;
`;

const Body = styled.p`
  font-family: "Poppins";
  font-size: 1.25em;
  text-align: center;
  margin: 0;
  margin-bottom: 2em;
`;

const CommentBox = styled.textarea`
  width: 500px;
  height: 100px;
  resize: none;
  padding: 10px;
  font-size: 1em;
  font-family: "Poppins";
`;

const ShareBtn = styled.button`
  background-color: #dc3545;
  cursor: pointer;
  color: #fff;
  border-radius: 1em;
  border: 0;
  padding: 1em;
  &:hover {
    background-color: #a51a1aef;
  }
`;

const ContainerRelated = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5em;
`;

function SessaoFinal({ post }) {
  return (
    <>
      <SessaoFinalContainer>
        <Titulo>O que achou?</Titulo>
        <Body>Deixe seu comentário logo abaixo</Body>
        <ContainerComentarios>
          <CommentBox />
          <ShareBtn>Compartilhar</ShareBtn>
        </ContainerComentarios>
      </SessaoFinalContainer>
      <div>
        <Titulo>Posts relacionados</Titulo>
        <ContainerRelated>
          <Related post={post} />
        </ContainerRelated>
      </div>
    </>
  );
}

export default SessaoFinal;
