// file: AyesOnAi\backend\backend\src\components\users\tabset-user.js


import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import * as nythingp from "../../utilities/users-api";

const TabsetUser = () => {
  // State variables to store form input data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added state for Confirm Password
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password matching

  // Function to handle form submission
  const handleFormSubmit = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return; // Stop form submission if passwords don't match
    }

    try {
      const response = await nythingp.signUp({
        firstName,
        lastName,
        email,
        password,
      });

      console.log('response', JSON.stringify(response));

      const token = response;
      console.log("JWT token:", token);

      // Clear the input fields on successful save
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPasswordsMatch(true); // Reset password matching status
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Fragment>
      <Tabs>
        <TabList className="nav nav-tabs tab-coupon">
          <Tab className="nav-link">Account</Tab>
          <Tab className="nav-link">Permission</Tab>
        </TabList>
        <TabPanel>
          <Form className="needs-validation user-add" noValidate="">
            <h4>Account Details</h4>
            {!passwordsMatch && (
              <div className="text-danger">Passwords do not match.</div>
            )}
            <FormGroup className="row">
              <Label className="col-xl-3 col-md-4">
                <span>*</span> First Name
              </Label>
              <div className="col-xl-8 col-md-7">
                <Input
                  className="form-control"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-xl-3 col-md-4">
                <span>*</span> Last Name
              </Label>
              <div className="col-xl-8 col-md-7">
                <Input
                  className="form-control"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-xl-3 col-md-4">
                <span>*</span> Email
              </Label>
              <div className="col-xl-8 col-md-7">
                <Input
                  className="form-control"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-xl-3 col-md-4">
                <span>*</span> Password
              </Label>
              <div className="col-xl-8 col-md-7">
                <Input
                  className="form-control"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-xl-3 col-md-4">
                <span>*</span> Confirm Password
              </Label>
              <div className="col-xl-8 col-md-7">
                <Input
                  className="form-control"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </FormGroup>
          </Form>
        </TabPanel>
        <TabPanel>
          <Form className="needs-validation user-add" noValidate="">
            {/* Permission-related form fields */}
          </Form>
        </TabPanel>
      </Tabs>
      <div className="pull-right">
        <Button type="button" color="primary" onClick={handleFormSubmit}>
          Save
        </Button>
      </div>
    </Fragment>
  );
};

export default TabsetUser;
