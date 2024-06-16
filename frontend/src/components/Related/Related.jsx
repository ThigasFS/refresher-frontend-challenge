import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

function Related({ post }) {
  if (post === "0") {
    return (
      <>
        <Link to="/post/1" style={{ textDecoration: "none" }}>
          <Card foto="https://refresher-public.s3-sa-east-1.amazonaws.com/wp-content/uploads/2019/12/AAA-1280.webp">
            Maximizando a usabilidade - parte II
          </Card>
        </Link>
        <Link to="/post/2" style={{ textDecoration: "none" }}>
          <Card foto="https://refresher-public.s3-sa-east-1.amazonaws.com/wp-content/uploads/2020/10/01-1-1280.webp">
            ZENNIALS - Série: design conectado com o futuro 3/6
          </Card>
        </Link>
      </>
    );
  }
  if (post === "1") {
    return (
      <>
        <Link to="/post/0" style={{ textDecoration: "none" }}>
          <Card foto="https://refresher-public.s3-sa-east-1.amazonaws.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-12-10-at-10-1280.webp">
            Design para os sentidos - parte II
          </Card>
        </Link>
        <Link to="/post/2" style={{ textDecoration: "none" }}>
          <Card foto="https://refresher-public.s3-sa-east-1.amazonaws.com/wp-content/uploads/2020/10/01-1-1280.webp">
            ZENNIALS - Série: design conectado com o futuro 3/6
          </Card>
        </Link>
      </>
    );
  }
  if (post === "2") {
    return (
      <>
        <Link to="/post/0" style={{ textDecoration: "none" }}>
          <Card foto="https://refresher-public.s3-sa-east-1.amazonaws.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-12-10-at-10-1280.webp">
            Design para os sentidos - parte II
          </Card>
        </Link>
        <Link to="/post/1" style={{ textDecoration: "none" }}>
          <Card foto="https://refresher-public.s3-sa-east-1.amazonaws.com/wp-content/uploads/2019/12/AAA-1280.webp">
            Maximizando a usabilidade - parte II
          </Card>
        </Link>
      </>
    );
  }
}

export default Related;
