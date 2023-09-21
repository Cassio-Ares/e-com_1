import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//views
import Login from './views/login/Login'
import Home from "./views/home/Home";
import Details from "./views/details_compra/Details";

//mock(simulação de BD)
import {PRODUCTS_MOCK} from './mock/products.mock'

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login/>,
    // element: <Home data={PRODUCTS_MOCK}/>,
    element: <Details Home data={PRODUCTS_MOCK}/>,
  },
  {
    path: "home",
    // element: <Home/>,
  },

  {
    path: "details",
    // element: <Details Home data={PRODUCTS_MOCK}/>,
  },

  {
    path: "EnvioPedido",
    //  element: <EnvioPedido Home data={PRODUCTS_MOCK}/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
