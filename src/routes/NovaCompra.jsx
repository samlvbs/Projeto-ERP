import React from "react";
import './NovaCompra.css';

function NovaCompra(){
    return(
        <div>
            <h1>Cadastrar Compra</h1>
            <form className="formNovaCompra">
                <label for="cliente">Nome Cliente</label>
                <input type="text" placeholder="Cliente" id="cliente"/>
                <label for="ID">ID do produto</label>
                <input type="text" placeholder="ID" id="ID"/>
                <label for="material">Material</label>
                <select id="material" name="material">
                    <option value="Ferro">Ferro</option>
                    <option value="Plastico">Plastico</option>
                    <option value="Papel">Papel</option>
                </select>
                <label for="qtd">Quantidade</label>
                <input type="text" placeholder="Qtd." id="qtd"/>
                <label for="valorKg">Valor unitário</label>
                <input type="text" placeholder="ValorKg" id="total"/>
                Valor Total
                <input type="text" placeholder="Total" id="total"/>
                <input type="button" value="Cadastrar" id="cadastrar" />
            </form>
        </div>
    )
}
export default NovaCompra;