import React from "react";
import "./jumbotron.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">{props.name}</h1>
            <p className="lead">{props.headline}</p>
        </div>)

}

export default Jumbotron;