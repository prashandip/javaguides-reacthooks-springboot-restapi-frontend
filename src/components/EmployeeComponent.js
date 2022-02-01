import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

// import { Component } from 'react';
// export default class EmployeeComponent extends Component {
//     constructor(props){
//         super(props);
//         employees: []; //this is how we create a state and initialize it in a class component
//     }

//     componentDidMount(){
//         //here we make the REST API calls or AJAX calls
//     }
//   render() {
//     return <div></div>;
//   }
// }

function EmployeeComponent() {
  // to use state in a functional component we need to use the "useState" hook
  // initialized with an empty array
  const [employees, setEmployees] = useState([]);

  // "useEffect" hook to call the method for API call
  useEffect(() => {
    getEmployees();
  }, []);

  // method to get the employee data from rest api
  const getEmployees = () => {
    //then method handles the response
    EmployeeService.getEmployees().then((response) => {
      // the logic to set the response to the state
      setEmployees(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">Employee List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeComponent;
