import React from "react";
import "./container.css"
import Row from "../Container/Row"



function Container(props) {


    return (
        <div className="container col-md-11 col-sm-12">
            <div className="row header">
                <div className="col-md-2">
                    Image
                </div>
                <div className="col-md-3">
                    Name <span id="sort"><a onClick={props.sort} href="">^</a></span>
                </div>
                <div className="col-md-2">
                    Phone
                </div>
                <div className="col-md-3">
                    Email
                </div>
                <div className="col-md-2">
                    DOB
                </div>
            </div>
            
            {props.employees.map(element => (
                <Row person={element} key={element._id}/> ))}

        </div>)
};


export default Container;




