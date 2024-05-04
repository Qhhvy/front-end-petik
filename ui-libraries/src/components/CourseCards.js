import { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Col, Row, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import axios from 'axios';

const CourseCards = ({id}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        try {
            const response = await axios.get("http://api.sukmax.my.id/course");
            setCourses(response.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    return (
        <Container>
            <Row>
                {courses.map((course, index) => (
                    <Col sm={6} md={4} lg={3} className="mb-4" key={index}>
                        <NavLink to={`course/${id}`}>
                            <Card color="light" className="mt-5">
                                <img
                                    alt="Sample"
                                    src={course.url}
                                />
                                <CardBody className="text-center">
                                    <CardTitle tag="h5">
                                        {course.name}
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </NavLink>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CourseCards;