import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home";
import Category from "../components/Category/Category";
import News from "../components/News/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "news/:id",
        element: <News></News>,
        loader: ({ params }) => `http://localhost:5000/news/${params.id}`,
      },
    ],
  },
  {
    path: "*",
    element: <div>this page is not found . 404 error</div>,
  },
]);
