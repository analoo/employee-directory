import React from "react";


function Row(props) {
    return (
        <div className="row data">
            <div className="col-md">
                {props.person.image}</div>
            <div className="col-md">
                {props.person.name}</div>
            <div className="col-md">
                {props.person.phone}</div>
            <div className="col-md">
                {props.person.email}</div>
            <div className="col-md">
                {props.person.dob}</div>
        </div>
    )
}

export default Row;



