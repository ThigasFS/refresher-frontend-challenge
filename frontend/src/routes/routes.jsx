import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Post0 from "../pages/Posts/0/Post0";
import Post1 from "../pages/Posts/1/Post1";
import Post2 from "../pages/Posts/2/Post2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "post",
    children: [
      {
        path: "0",
        element: <Post0 />,
      },
      {
        path: "1",
        element: <Post1 />,
      },
      {
        path: "2",
        element: <Post2 />,
      },
    ],
  },
]);

export default router;
