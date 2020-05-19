import React from "react";
import "./mainNav.css";


function MainNav(props){
    return (
        <div className="main-border">
            {props.children}

        </div>
    )
}

export default MainNav;
