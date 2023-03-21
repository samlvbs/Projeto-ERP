import React from "react";
import "./Compras.css"
import { FiPlusSquare, FiList } from "react-icons/fi";

function Compras(){
    return(
      <div className="compras">
            <div className="cardCompras">
                <span>Nova Compra <FiPlusSquare/></span>
            </div>
            <div className="cardCompras">
                <span>Lista de compras <FiList/></span>
            </div>
      </div>
    )
}

export default Compras;