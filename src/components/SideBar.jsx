import React from "react";
import "./SideBar.css"
import { BiCartDownload, BiCart, BiAddToQueue, BiUserPlus, BiUserCheck, BiDollar, BiDonateHeart, BiListUl } from "react-icons/bi";
import { Link } from "react-router-dom";

function SideBar(){
    return(
            <div className="sideBar">
                <aside>
                    <ul>
                        <li>
                            <Link to= "compras">Compras<BiCartDownload/></Link>
                        </li>
                        <li>
                           <Link to="vendas">Vendas <BiDollar/></Link> 
                        </li>
                        <li>
                           <Link to="estoque">Estoque <BiCart/></Link> 
                        </li>
                        <li>
                            <Link to="saude-financeira">Saude Financeira <BiDonateHeart/></Link>
                        </li>
                        <li>
                            <Link to="cadastrar-produto">Cadastrar Produtos <BiAddToQueue/></Link>
                        </li>
                        <li>
                            <Link to="cadastrar-comprador"> Cadastrar Comprador <BiUserCheck/></Link>
                           
                        </li>
                        <li>
                            <Link to="cadastrar-fornecedor">Cadastrar Fornecedor <BiUserPlus/></Link>
                            
                        </li>
                        <li>
                            <Link to="lista-clientes">Lista de Clientes <BiListUl/></Link>
                            
                        </li>
                        <li>
                            <Link to="lista-fornecedores">Lista de Fornecedores <BiListUl/></Link>
                            
                        </li>
                    </ul>
                </aside> 
            </div> 
           
    )
}

export default SideBar;