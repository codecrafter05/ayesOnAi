import React, { Fragment } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Row } from "reactstrap";
import Spacing from '../Spacing'

const Create_menu = () => {
  return (

    <Fragment>
      <Spacing lg='25' md='25' />
      <Spacing lg='25' md='25' />
      <Spacing lg='25' md='25' />
      <Spacing lg='25' md='25' />
      <Spacing lg='25' md='25' />
      <Spacing lg='25' md='25' />
      <Spacing lg='25' md='25' />
      <Spacing lg='25' md='25' />
      <Spacing lg='25' md='25' />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5 style={{ color: 'black' }}>Add Carde</h5>
              </CardHeader>
              <CardBody>
                <Form className="needs-validation">
                  <div className="form-group">
                    <Label style={{ color: 'black' }}>
                      <span>*</span> Package Name
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom0"
                      type="text"
                      required=""
                      placeholder="Field 1"
                    />
                  </div>
                  <div className="form-group">
                    <Label style={{ color: 'black' }}>
                      <span>*</span> price
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom1"
                      type="text"
                      required=""
                      placeholder="Field 2"
                    />
                  </div>
                  <div className="form-group">
                    <Label style={{ color: 'black' }}>
                      <span>*</span> Category
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom2"
                      type="text"
                      required=""
                      placeholder="Field 3"
                    />
                  </div>
                  <div className="form-group">
                    <Label style={{ color: 'black' }}>
                      <span>*</span>  Description
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom2"
                      type="text"
                      required=""
                      placeholder="Field 4"
                    />
                  </div>
                  <div className="form-group">
                    <Label style={{ color: 'black' }}>
                      Status
                    </Label>
                    <Label className="d-block">
                      <Input
                        className="checkbox_animated"
                        id="chk-ani2"
                        type="checkbox"
                      />
                      <span style={{ color: 'black' }}>Enable the Coupon</span>
                    </Label>
                  </div>
                  <Button type="button" color="primary">
                    Save
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Spacing lg='25' md='25' />
          <Spacing lg='25' md='25' />
          <Spacing lg='25' md='25' />
          <Spacing lg='25' md='25' />
          <Col sm="12">
          <Card>
            <CardHeader>
              <h5 style={{ color: 'black' }}>Add person</h5>
            </CardHeader>
            <CardBody>
              <Form className="needs-validation">
                <div className="form-group">
                  <Label style={{ color: 'black' }}>
                    <span>*</span> Name
                  </Label>
                  <Input
                    className="form-control"
                    id="validationCustom0"
                    type="text"
                    required=""
                    placeholder="Field 1"
                  />
                </div>
                <div className="form-group">
                  <Label style={{ color: 'black' }}>
                    <span>*</span> Email
                  </Label>
                  <Input
                    className="form-control"
                    id="validationCustom1"
                    type="text"
                    required=""
                    placeholder="Field 2"
                  />
                </div>
                <div className="form-group">
                  <Label style={{ color: 'black' }}>
                    <span>*</span> Pasworde
                  </Label>
                  <Input
                    className="form-control"
                    id="validationCustom2"
                    type="text"
                    required=""
                    placeholder="Field 3"
                  />
                </div>
                <div className="form-group">
                  <Label style={{ color: 'black' }}>
                    <span>*</span> Gendar
                  </Label>
                  <Input
                    className="form-control"
                    id="validationCustom2"
                    type="text"
                    required=""
                    placeholder="Field 3"
                  />
                </div>
                <div className="form-group">
                  <Label style={{ color: 'black' }}>
                    Status
                  </Label>
                  <Label className="d-block">
                    <Input
                      className="checkbox_animated"
                      id="chk-ani2"
                      type="checkbox"
                    />
                    <span style={{ color: 'black' }}>Enable the Coupon</span>
                  </Label>
                </div>
                <Button type="button" color="primary">
                  Add
                </Button>
              </Form>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>



    </Fragment>
  );
};

export default Create_menu;
