import React from "react";
import './NovaCompra.css';

function NovaCompra(){
    return(
        <div className="containerForm">
            <h1>Cadastrar Compra</h1>
            <form className="formNovaCompra">
                <div className="divInput">
                    <label for="cliente">Nome Cliente</label>
                    <input type="text" placeholder="Cliente" id="cliente"/>
                </div>
                <div className="divInput">
                    <label for="ID">ID do produto</label>
                    <input type="text" placeholder="ID" id="ID"/>
                </div>
                <div className="divInput">
                    <label for="material">Material</label>
                    <select id="material" name="material">
                        <option value="Ferro">Ferro</option>
                        <option value="Plastico">Plastico</option>
                        <option value="Papel">Papel</option>
                    </select>
                </div>
                <div className="divInput">
                    <label for="qtd">Quantidade</label>
                    <input type="text" placeholder="Qtd." id="qtd"/>
                </div>
                <div className="divInput">
                    <label for="valorKg">Valor unitário</label>
                    <input type="text" placeholder="ValorKg" id="total"/>
                </div>
                <div className="divInput">
                    <label for="Total">Valor Total</label>
                    <input type="text" placeholder="Total" id="total"/>
                </div>
                <div className="divInput">
                    <button id="btnCad">Cadastrar</button>
                    <button id="btnAdd">+</button>
                </div>
                
            </form>
        </div>
    )
}
export default NovaCompra;