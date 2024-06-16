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
function Post1() {
  const [post, setPost] = useState("");

  useEffect(() => {
    api.get("/trends").then((res) => {
      console.log(res.data[1]);
      setPost(res.data[1].post_content);
    });
  });
  window.scroll(0, 0);
  return (
    <>
      <Breadcrumb post="1" />
      <Container>{parse(post)}</Container>
      <SessaoFinal post="1" />
      <Footer />
    </>
  );
}

export default Post1;
