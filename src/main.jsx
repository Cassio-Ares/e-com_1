import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//views
import Login from './views/login/Login'
import Home from "./views/home/Home";
import Details from "./views/details_compra/Details";
import Pay from "./views/pay/Pay";

//mock(simulação de BD)
import {PRODUCTS_MOCK} from './mock/products.mock'

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    
  },
   {
     path: "/home",
     element: <Home data={PRODUCTS_MOCK}/>,
   },

  {
    path: "/details/:ItemId",
    element: <Details data={PRODUCTS_MOCK}/>,
  },

  {
    path: "/envioPedido/:ItemId",
    element: <Pay data={PRODUCTS_MOCK}/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
