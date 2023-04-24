import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import React from "react";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News";
import Login from "../../Pages/Login/Loing";
import Register from "../../Pages/Login/Register";
import TermsAndContions from "../../Pages/Others/TermsAndContions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../Pages/Profile/Profile";
export const routes = createBrowserRouter([
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
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndContions></TermsAndContions>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
