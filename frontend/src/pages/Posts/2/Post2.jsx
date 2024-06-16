import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import SessaoFinal from "../../../components/SessaoFinal/SessaoFinal";
import Footer from "../../../components/Footer/Footer";
import { api } from "../../../services/axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  text-align: center;
`;
function Post2() {
  const [post, setPost] = useState("");

  useEffect(() => {
    api.get("/trends").then((res) => {
      console.log(res.data[2]);
      setPost(res.data[2].post_content);
    });
  });
  window.scroll(0, 0);
  return (
    <>
      <Breadcrumb post="2" />
      <Container>{parse(post)}</Container>
      <SessaoFinal post="2" />
      <Footer />
    </>
  );
}

export default Post2;
