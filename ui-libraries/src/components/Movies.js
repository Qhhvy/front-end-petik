import React from 'react'
import {Card,CardBody, CardTitle, CardText, Col, Row, Container} from "reactstrap";

const Movies = () => {
    const movies = [
        {
            title: 'The Shawshank Redemption',
            year: 1994
        },
        {
            title: 'The Godfather',
            year: 1972
        },
        {
            title: 'The Godfather: Part II',
            year: 1974
        },
        {
            title: 'The Dark Knight',
            year: 2008
        },
        {
            title: '12 Angry Men',
            year: 1957
        },
        {
            title: 'Schindler\'s List',
            year: 1993
        },
    ];

    return (
        <Container>
            <Row>
                {
                    movies.map((movie) => {
                        return (
                            <Col>
                                <Card color="light" className='mt-5'>
                                    <img
                                        alt="Sample"
                                        src="https://picsum.photos/300/200"
                                    />
                                    <CardBody className='text-center'>
                                        <CardTitle tag="h5">
                                        {movie.title}
                                        </CardTitle>
                                        <CardText>
                                        {movie.year}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Movies
