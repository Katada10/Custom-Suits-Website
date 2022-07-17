import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Switch, Route, Link, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Commerce from '@chec/commerce.js';


import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


const commerce = new Commerce('pk_test_45152cef84220ec9b84d4eccd8804f0375cc498ed6caa');


const firebaseConfig = {
    apiKey: "AIzaSyDPdwzK5gm4EmG5aw0RGI9m_FqpjuojLrI",
    authDomain: "project-3708089372598606655.firebaseapp.com",
    projectId: "project-3708089372598606655",
    storageBucket: "project-3708089372598606655.appspot.com",
    messagingSenderId: "1040457624741",
    appId: "1:1040457624741:web:068a8f972ebe1f7db3714c"
  };

  const fbApp = initializeApp(firebaseConfig);

const db = getDatabase(fbApp);


function ItemView() {

  const location = useLocation();

  return (
    <div className="App">



      <body>

        <Container fluid className="appBody vh-100">

          <Row className="pt-5">


            <Col>
              <Image fluid className=" my-img" src={location.state.img}></Image>
            </Col>



            <Col className="px-5">

              <h2>{location.state.title}</h2> <br/>

              <h3>
                {location.state.cost}
                </h3>
              <br/>
                <h4>
                  Product Details
                </h4>
                <br />

                <p> Made of the highest quality materials, you are sure to remain comfortable and
                  stylish!
                  </p>
                  <br/>
                  <Button as={Link} to="/shop" onClick={() => alert("Added to cart")}
                   className="col-sm-10 col-lg-10 col-md-10" variant="danger" type="submit">
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