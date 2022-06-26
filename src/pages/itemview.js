import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Switch, Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ItemView() {
  return (
    <div className="App">



      <body>

        <Container fluid className="appBody vh-100">

          <Row className="pt-5">


            <Col>
              <Image fluid className=" my-img" src="https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGF3ZXJ8ZW58MHx8MHx8&w=1000&q=80"></Image>
            </Col>



            <Col className="px-5">

              <h2> ITEM TITLE</h2> <br/>

              <h3>
                300 CAD
                </h3>
              <br/>
                <h4>
                  Product Details
                </h4>
                <br />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed fringilla risus quis condimentum bibendum. 
                  Nullam mollis mauris a erat porttitor, sed ullamcorper libero suscipit.
                  </p>
                  <br/>
                  <Button as={Link} to="/cart" className="col-sm-10 col-lg-10 col-md-10" variant="danger" type="submit">
                  Add to cart
                </Button>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default ItemView;