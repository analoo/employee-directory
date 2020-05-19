import React from "react";
import "./container.css"


function Row(props) {
    let element = props.person
    return (
        <div className="row data">
            <div className="col-md image">
            <img src={element.image} alt={element.name}/>
                </div>
            <div className="col-md">
                {element.name}</div>
            <div className="col-md">
                {element.phone}</div>
            <div className="col-md">
                {element.email}</div>
            <div className="col-md">
                {element.dob}</div>
        </div>
    )

}

export default Row;



