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
                            <Link to= "compras">
                                Compras<BiCartDownload/>
                            </Link>
                            
                           
                        </li>
                        <li>
                            Vendas <BiDollar/>
                        </li>
                        <li>
                            Estoque <BiCart/>
                        </li>
                        <li>
                            Saude Financeira <BiDonateHeart/>
                        </li>
                        <li>
                            Cadastrar Produtos <BiAddToQueue/>
                        </li>
                        <li>
                            Cadastrar Comprador <BiUserCheck/>
                        </li>
                        <li>
                            Cadastrar Fornecedor <BiUserPlus/>
                        </li>
                        <li>
                            Lista de Clientes <BiListUl/>
                        </li>
                        <li>
                            Lista de Fornecedores <BiListUl/>
                        </li>
                    </ul>
                </aside> 
            </div> 
           
    )
}

export default SideBar;