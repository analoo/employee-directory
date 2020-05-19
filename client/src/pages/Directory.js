import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron/index"
import Container from "../components/Container/index"
import "./directory.css"
import API from "../utils/API"


function Directory() {

    const [employees, setEmployees] = useState([]);
    const [filteredEE, setFilteredEE] = useState([]);
    const [isFilter, setIsFilter] = useState(false)
    const [sorted, setSorted] = useState(0)


    function loadEmployees(ordering) {
        API.loadUsers().then(res => {
            if (ordering % 2 === 0) {
                let desc = res.data.sort((a, b) =>
                    a.name.localeCompare(b.name))
                setSorted(sorted+1)
                setEmployees(desc)
            }
            else {
                let asc = res.data.sort((a, b) =>
                    b.name.localeCompare(a.name))
                setEmployees(asc)
                setSorted(sorted+1)
            }
        })
    }


    useEffect(() => {
        loadEmployees(sorted);
    }, [])

    function filterEmployees(search) {
        setIsFilter(true);
        search.toLowerCase()
        setFilteredEE(employees.filter(ee => {
            let name = ee.name.toLowerCase();
            return name.indexOf(search) >= 0
        }))
    }

    // function sortEmployees(ordering,data) {
    //     if (ordering % 2 === 0) {
    //         let desc = data.sort((a, b) =>
    //             a.name.localeCompare(b.name))
    //         setSorted(sorted+1)
    //         console.log(desc)
    //     }
    //     else {
    //         let asc = data.sort((a, b) =>
    //             b.name.localeCompare(a.name))
    //         setEmployees(asc)
    //         setSorted(sorted+1)
    //     }




    // }

    return (


        <div>
            <Jumbotron name="Company XZYLMP" headline="making companies great" />
            <div className="input-group mb-3">
                <input type="search" className="form-control search col-md-9" placeholder="Search for Employee"
                    name="search"
                    onChange={e => filterEmployees(e.target.value)}
                />
            </div>
            {isFilter
                ? <Container employees={filteredEE} sort={() => loadEmployees(sorted)} />
                : <Container employees={employees} sort={() => loadEmployees(sorted)} />
            }
        </div>

    )
}

export default Directory;






