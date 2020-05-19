import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron/index"
import Container from "../components/Container/index"
import API from "../utils/API"


function Directory() {

    const [search, setSearch] = useState("");

    function loadEmployees() {


    }

    function sortEmployees() {

    }

    function findEmployees() {

    }

    function addEmployee(){
        API.createUsers().then(res => console.log(res))
    }

    return (


        <div>
            <Jumbotron name="Company X" headline="making companies great" />
            <button onClick={addEmployee}> Add New User </button>
            
            <Container />
        </div>

    )
}

export default Directory;






