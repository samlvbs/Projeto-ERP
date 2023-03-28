import React from "react";
import "./Compras.css"
import { FiPlusSquare, FiList } from "react-icons/fi";
import { Link } from "react-router-dom";

function Compras(){
    return(
      <div className="compras">
            <Link to="nova-compra">
                <div className="cardCompras">
                    <span>Nova Compra <FiPlusSquare/></span>
                </div>
            </Link>
            <div className="cardCompras">
                <span>Lista de compras <FiList/></span>
            </div>
      </div>
    )
}

export default Compras;