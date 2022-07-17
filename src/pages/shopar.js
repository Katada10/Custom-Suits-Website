import React,  { useEffect, useState } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Switch, Route, Link, createSearchParams, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Commerce from '@chec/commerce.js';
import ProductList from './ProductList';



function ShopAR() {

const navigate = useNavigate();

  return (
    
    <div className="App" >

      <body>

        <Container fluid className="appBody vh-100">
          
        <Row className='pt-5'>
          
              <Button className="pt-3 btn-danger" onClick=
              {(id) => navigate({pathname:"/viewshop", search:createSearchParams({cat:'jackets'}).toString()})}> 
              
              جاكيتات </Button>
       </Row>  

       <Row className='pt-5'>
          
          <Button className="pt-3 btn-danger" onClick=
          {(id) => navigate({pathname:"/viewshop", search:createSearchParams({cat:'shirts'}).toString()})}> 
          
          قمصان </Button>
   </Row>  

   <Row className='pt-5'>
          
              <Button className="pt-3 btn-danger" onClick=
              {(id) => navigate({pathname:"/viewshop", search:createSearchParams({cat:'pants'}).toString()})}> 
              
              سراويل  </Button>
       </Row>  
          </Container>
      </body>
    </div>
  );
}

export default ShopAR;