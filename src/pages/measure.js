import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Switch, Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Measure() {
  return (
    <div className="App">



      <body>

        <Container fluid className="appBody vh-100">
          <h1 className="pt-5"> Measure </h1>

          <Row className="pt-5">
            <Col className="px-5">

              <Form>

                <Form.Group inline className="mb-3 " controlId="neck">
                  <Row>
                    <Form.Label className="mb-3" column="lg" lg={2}>Neck</Form.Label>

                    <Col>
                      <Form.Control className="mt-2" type="text" />

                    </Col>
                  </Row>
                </Form.Group>


                <Form.Group inline className="mb-3 " controlId="chest">
                  <Row>
                    <Form.Label className="mb-3" column="lg" lg={2}>Chest</Form.Label>

                    <Col>
                      <Form.Control className="mt-2" type="text" />

                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group inline className="mb-3 " controlId="waist">
                  <Row>
                    <Form.Label className="mb-3" column="lg" lg={2}>Waist</Form.Label>

                    <Col>
                      <Form.Control className="mt-2" type="text" />

                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group inline className="mb-3 " controlId="Inseam">
                  <Row>
                    <Form.Label className="mb-3" column="lg" lg={2}>Inseam</Form.Label>

                    <Col>
                      <Form.Control className="mt-2" type="text" />

                    </Col>
                  </Row>
                </Form.Group>

<Row className="d-flex justify-content-end px-5 pt-4">
                <Button as={Link} to="/shop" className="col-sm-10 col-lg-10 col-md-10" variant="danger" type="submit">
                  Submit
                </Button>
</Row>
              </Form>
            </Col>

            <Col>
              <Image fluid className=" my-img" src="https://i.pinimg.com/originals/04/82/29/0482299bf6d0e84b59f3fcc8c2510079.jpg"></Image>
            </Col>


          </Row>
        </Container>
      </body>
    </div>
  );
}

export default Measure;