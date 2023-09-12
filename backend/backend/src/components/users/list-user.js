import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Container } from "reactstrap";

const ListUser = () => {
  // State variable to manage user data
  const [users, setUsers] = useState([]);

  // Function to fetch users from the backend API
  const fetchUsers = async () => {
    console.log('fetched users')
    try {
      const response = await fetch("http://localhost:3001/api/users"); // Update the URL to match your backend endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      
      const data = await response.json();
      console.log('data from the backend', data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Initialize users by fetching data from the backend
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <Fragment>
      <Breadcrumb title="User List" parent="Users" />
      <Container fluid={true}>
        <Card>
          <CardHeader>
            <h5>User Details</h5>
          </CardHeader>
          <CardBody>
            <div className="btn-popup pull-right">
              <Link to="/users/create-user" className="btn btn-secondary">
                Create User
              </Link>
            </div>
            <div className="clearfix"></div>
            <div
              id="batchDelete"
              className="category-table user-list order-table coupon-list-delete"
            >
              <Datatable
                multiSelectOption={true}
                myData={users}
                pageSize={10}
                pagination={true}
                class="-striped -highlight"
              />
            </div>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default ListUser;
