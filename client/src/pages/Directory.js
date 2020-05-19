import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron/index"
import Container from "../components/Container/index"
import API from "../utils/API"


function Directory() {

    const [employees, setEmployees] = useState([]);


    function loadEmployees() {
        API.loadUsers().then(res => {
            console.log(res.data)
            setEmployees(res.data)
        })
    }


    useEffect(() => {
        loadEmployees();
    }, [])

    // function sortEmployees() {

    // }

    function makeASearch(search) {
        console.log(search)
        API.findEmployees(search)
        .then(res => {
            console.log(`employees is set at: ${res}`)
        })

    }

    // function addEmployee(){
    //         API.createUsers().then(res => console.log(res))

    // }

    // addEmployee()

    return (


        <div>
            <Jumbotron name="Company X" headline="making companies great" />
            <div className="input-group mb-3">
                <input type="search" className="form-control col-md-9" placeholder="Search for Employee" 
                // value = {search}
                name="search"
                onChange={e => makeASearch(e.target.value)}
                />
            </div>
            <Container employees={employees} />
        </div>

    )
}

export default Directory;






