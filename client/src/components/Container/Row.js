import React from "react";
import "./container.css"


function Row(props) {
    let element = props.person
    return (
        <div className="row data">
            <div className="col-md-2 image">
            <img src={element.image} alt={element.name}/>
                </div>
            <div className="col-md-3">
                {element.name}</div>
            <div className="col-md-2">
                {element.phone}</div>
            <div className="col-md-3">
                {element.email}</div>
            <div className="col-md-2">
                {element.dob}</div>
        </div>
    )

}

export default Row;



