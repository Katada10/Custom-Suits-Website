import './App.css';

import { useSearchParams } from "react-router-dom";

import React,  { useEffect, useState } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Switch, Route, Link, createSearchParams , useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Commerce from '@chec/commerce.js';
import ProductList from './ProductList';


const ViewShop = () => {

const[searchParam] = useSearchParams();

const navigate = useNavigate();

return(
<>

<div className="App">
<Container fluid className="appBody vh-100" >


<Row className='pt-3'>
          <Col>
              <Button className="btn-danger justify-content-start" as={Link} to="/shop"> Back </Button>
            </Col>
          </Row>

<ProductList cat={searchParam.get("cat")} />

</Container>
</div>
</>

);
}

export default ViewShop;