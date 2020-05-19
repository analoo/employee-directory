import React from "react";
import "./container.css"
import Row from "../Container/Row"



function Container(props) {
   


    return (
        <div className="container col-md-11 col-sm-12">
            <div className="row header">
                <div className="col-md">
                    Image
                </div>
                <div className="col-md">
                    Name
                </div>
                <div className="col-md">
                    Phone
                </div>
                <div className="col-md">
                    Email
                </div>
                <div className="col-md">
                    DOB
                </div>
            </div>
            
            {props.employees.map(element => (
                <Row person={element} key={element._id}/> ))}

        </div>)
};


export default Container;




