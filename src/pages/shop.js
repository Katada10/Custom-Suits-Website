import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Switch, Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ShopItem from './shopitem';


function Shop() {
  return (
    <div className="App">



      <body>

        <Container fluid className="appBody vh-100">
          <h1 className='pt-5'> Shop </h1>

          <Row className='pt-3'>

            <Col sm={1} lg={1}>
              <Dropdown className='px-1'>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Pants
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Slim fit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Classic Fit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col sm={1} lg={1}>
              <Dropdown className='px-1'>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Shirts
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Slim fit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Classic Fit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col sm={1} lg={1}>
              <Dropdown className='px-1'>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Jackets
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Notch Lapel</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Peak Lapel</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>


            <Col>
              <Dropdown className='px-4 d-flex justify-content-end'>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Sort By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Price: Lowest to highest</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Rating: Highest to lowest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>


          <Row className="px-4 pt-5 d-flex justify-content-left">

            <Col>
              <ShopItem />
            </Col>

            <Col>
              <ShopItem />
            </Col>

            <Col>
              <ShopItem />
            </Col>

            <Col>
              <ShopItem />
            </Col>

          </Row>
        </Container>
      </body>
    </div>
  );
}

export default Shop;