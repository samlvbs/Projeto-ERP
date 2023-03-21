import React from "react";
import "./Container.css"
import Menu from "./Menu";
import SideBar from "./SideBar";


function Container(){
    return (
        <div className='container'> 
            <Menu />
            <SideBar />
           
        </div>
    )
  
}

export default Container;