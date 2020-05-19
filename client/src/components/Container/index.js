import React from "react";
import "./container.css"
import Row from "../Container/Row"



function Container(props) {
    let person = {
        name: "Sar",
        phone: "1234567890",
        email: "email@email.com",
        dob: "10/10/1990"

    }


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
            <Row person = {person}/>
            
        </div>)
};


export default Container;




