import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          { path: "/:id", element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
