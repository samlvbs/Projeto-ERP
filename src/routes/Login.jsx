import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

function Login(){
    return (
        <div className="container">
            <header>
                <div className="userPic">
                </div>
            </header>
            <main>
                <div className="registration">
                    <h1>Novo por aqui?</h1>
                    <h2>Crie sua conta e comece agora mesmo!</h2>
                    <input type="button" id="btnReg" value="Cadastre-se"/>
                </div>
                <div className="into">
                    <h1>Bem-vindo</h1>
                    <h2>Entre com sua conta para começar</h2>
                    <input type="text" placeholder="Login" id="login" className="txtName"/>
                    <input type="password" placeholder="Senha" id="password" className="txtPassword"/>
                    <Link to="app">
                        <input type="button" id="btnLogin" value="Entrar"/>
                    </Link>    
                        
                </div>
            </main>
        </div>
    );
}
export default Login;