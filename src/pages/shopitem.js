
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';

import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Switch, Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class ShopItem extends React.Component{

  render() {
    return (<Card  bg='dark' style={{ width: '80%', height: '60%'}}>
    <Card.Img style={{height: '60%'}} className="pt-1" variant="top" src="https://www.bethisraelvan.ca/wp-content/uploads/2017/05/placeholder.png" />
    <Card.Body>
      <Card.Text >
        <Button className='txt' variant="dark" as={Link} to="/itemview">
          Item Name 
        </Button>
        <br/>
        
        <h5 className="mb-5">
           300 CAD 
          
          </h5>
      </Card.Text>
    </Card.Body>
    </Card>);
  }
}


export default ShopItem;