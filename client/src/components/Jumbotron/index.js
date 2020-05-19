import React from "react";
import "./jumbotron.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div>
            <h1 className="display-4">{props.name}&trade;</h1>
            <p className="lead">{props.headline}</p>
            </div>
        </div>)

}

export default Jumbotron;