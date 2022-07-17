//components/ProductList.js

import React, { Component } from 'react';
import ProductRow from './ProductRow';
import Commerce from '@chec/commerce.js';


import Container from 'react-bootstrap/Container';


import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Switch, Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const commerce = new Commerce('pk_test_45152cef84220ec9b84d4eccd8804f0375cc498ed6caa');


class ProductList extends Component {
  constructor(props) {
    super(props);

    commerce.cart.retrieve();
    
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    commerce.products.list({category_slug: [this.props.cat]}).then((result) => {
      this.setState({ products: result.data });
    });
  }

  render() {
    return (
        <Container className="main-content">
<h1 className='pt-5'> Shop </h1>
          


{
             this.state.products.map(product => {
                return <ProductRow key={product.id} image={product.image.url} name={product.name}  price={product.price.formatted_with_code} num={product.id}/>
              })
              
              }
        </Container>
    );
  }
}

export default ProductList;