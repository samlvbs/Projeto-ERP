import React from "react";
import "./Menu.css"
import { Link } from "react-router-dom";

function Menu(){
    return(      
        <div className="menu">
            <nav>
                <Link style={{textDecoration: 'none'}} to="/">
                    <h3>Home</h3>
                </Link>
                <ul>
                    <li>
                        Sobre
                    </li>
                    <li>
                        Contato
                    </li>
                    <li>
                        <Link to="login"> Login</Link>
                       
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;