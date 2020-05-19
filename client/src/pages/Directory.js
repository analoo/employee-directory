import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron/index"
import Container from "../components/Container/index"
import "./directory.css"
import API from "../utils/API"


function Directory() {

    const [employees, setEmployees] = useState([]);
    const [filteredEE, setFilteredEE] = useState([]);
    const [isFilter, setIsFilter] = useState(false)
    const [sorted, setSorted] = useState("asc")


    function loadEmployees() {
        API.loadUsers().then(res => {
            setEmployees(res.data)
        })
    }


    useEffect(() => {
        loadEmployees();
        console.log("use Effects")
    }, [])

    function filterEmployees(search) {
        setIsFilter(true);
        search.toLowerCase()
        setFilteredEE(employees.filter(ee => {
            let name = ee.name.toLowerCase();
            return name.indexOf(search) >= 0
        }))
    }

    function sortEmployees(ordering) {
        if (ordering === "desc") {
            let desc = employees.sort((b, a) =>
                a.name.localeCompare(b.name))
            let descF = filteredEE.sort((b, a) =>
                a.name.localeCompare(b.name))
            setEmployees(desc)
            setFilteredEE(descF)
            setSorted("asc")
        }
        else if (ordering === "asc") {
            let asc = employees.sort((b, a) =>
                b.name.localeCompare(a.name))
            let ascF = filteredEE.sort((b, a) =>
                a.name.localeCompare(b.name))
            setEmployees(asc)
            setFilteredEE(ascF)
            setSorted("desc")
        }
    }

    console.log(sorted)

    return (


        <div>
            <Jumbotron name="Medrano Industries" headline="Where homework is always done." />
            <div className="input-group mb-3">
                <input type="search" className="form-control search col-md-9" placeholder="Search for Employee"
                    name="search"
                    onChange={e => filterEmployees(e.target.value)}
                />
            </div>
            {isFilter
                ? <Container employees={filteredEE} sort={() => sortEmployees(sorted)} />
                : <Container employees={employees} sort={() => sortEmployees(sorted)} />
            }
        </div>

    )
}

export default Directory;






