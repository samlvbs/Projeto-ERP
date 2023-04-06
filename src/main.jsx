import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './routes/Home';
import Compras from './routes/Compras';
import ErrorPage from './routes/Error';
import Estoque from './routes/Estoque';
import Vendas from './routes/Vendas';
import CadProd from './routes/CadProd';
import CadForn from './routes/CadForn';
import SaudeFinanceira from './routes/SaudeFinanceira'
import CadComp from './routes/CadComp';
import ListForn from './routes/ListForn';
import ListClientes from './routes/ListClientes';
import NovaCompra from './routes/NovaCompra';
import Login from './routes/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "app",
        element: <App/>,
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "compras",
        element: <Compras/>,
      },
      {
        path: "compras/nova-compra",
        element: <NovaCompra/>,
      },
      {
        path: "vendas",
        element: <Vendas/>,
      },
      {
        path: "estoque",
        element: <Estoque/>,
      },
      {
        path: "cadastrar-produto",
        element: <CadProd/>,
      },
      {
        path: "cadastrar-fornecedor",
        element: <CadForn/>,
      },
      {
        path: "saude-financeira",
        element: <SaudeFinanceira/>,
      },
      {
        path: "cadastrar-comprador",
        element: <CadComp/>,
      },
      {
        path: "lista-clientes",
        element: <ListClientes/>,
      },
      {
        path: "lista-fornecedores",
        element: <ListForn/>,
      },

    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>,
  </React.StrictMode>,
)
