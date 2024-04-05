import React from 'react'
import {Card,CardBody, CardTitle, CardText, Col, Row, Container} from "reactstrap";
import {NavLink} from "react-router-dom";

const Products = () => {
    const products = [
        {
            name: "Product 1",
            price: "100",
        },
        {
            name: "Product 2",
            price: "200",
        },
        {
            name: "Product 3",
            price: "300",
        },
        {
            name: "Product 4",
            price: "400",
        },
        {
            name: "Product 5",
            price: "500",
        },
        {
            name: "Product 6",
            price: "600",
        },
        {
            name: "Product 7",
            price: "700",
        }
    ];

    return (
        <Container>
            <Row>
                {
                    products.map((product, index) => {
                        return (
                            <Col sm={6} md={4} lg={3} className="mb-4" key={index}>
                                <NavLink to={"/detail"}>
                                    <Card color="light" className='mt-5'>
                                        <img
                                            alt="Sample"
                                            src="https://picsum.photos/300/200"
                                        />
                                        <CardBody className='text-center'>
                                            <CardTitle tag="h5">
                                            {product.name}
                                            </CardTitle>
                                            <CardText>
                                            {product.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
};

export default Products;
