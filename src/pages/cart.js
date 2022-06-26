import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Switch, Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Cart() {
    return (
        <div className="App">



            <body>

                <Container fluid className="appBody vh-100">

                    <Row className="pt-5">

                        <Col lg={2}>
                            <ListGroup>
                                <ListGroup.Item>

                                    <Col>
                                        <Image style={{ width: '50px' }} fluid className=" my-img" src="https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGF3ZXJ8ZW58MHx8MHx8&w=1000&q=80"></Image>
                                    </Col>
                                    <Col className="px-5">

                                        <h6> ITEM TITLE</h6> <br />

                                        <h6>
                                            300 CAD
                                        </h6>
                                        <br />

                                    </Col>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Col>
                                        <Image style={{ width: '50px' }} fluid className=" my-img" src="https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGF3ZXJ8ZW58MHx8MHx8&w=1000&q=80"></Image>
                                    </Col>
                                    <Col className="px-5">

                                        <h6> ITEM TITLE</h6> <br />

                                        <h6>
                                            300 CAD
                                        </h6>
                                        <br />

                                    </Col>
                                </ListGroup.Item>
                            </ListGroup>


                        </Col>


                        <Col lg={10} className="px-5" style={{width:'70%'}}>

                            <Form>
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Shipping Address (full)</Form.Label>
                                    <Form.Control type="text" placeholder="123 Main St Ottawa ON A1B 2C3" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="cardNum">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="cvv">
                                    <Form.Label>CVV (3 digits on back of card)</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="expiry">
                                    <Form.Label>Expiry Date</Form.Label>
                                    <Form.Control type="date"/>
                                </Form.Group>
                                
                                <h4>
                                    Subtotal: <br/>
                                    600 CAD
                                </h4>
<br/>
                                <Button href="#" variant="danger" type="submit">
                                    Purchase
                                </Button>
                            </Form>

                        </Col>
                    </Row>

                </Container>
            </body>
        </div>
    );
}

export default Cart;