//components/ProductRow.js

import React from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

const ProductRow = ({image, name, price, num }) => {
  return (
    <Row className="product pt-5">
      <Col>
        <img src={image} alt={name} height="150" />
      </Col>
      <Col className="product-detail">
          <Link className="link-danger" to="/itemview" state={{cost:price, img: image, title: name, number: num, }}>{name}</Link>
      </Col>

      <Col className=" product-price">
        {price}
      </Col>

    </Row>
  );
}

export default ProductRow;