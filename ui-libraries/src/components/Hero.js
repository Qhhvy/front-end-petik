import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

const Hero = () => {
  return (
    <Container className='my-5'>
        <Row>
            <Col md={8} className='text-md-left'>
                <h2 className='text-primary'>Title</h2>
                <h3 className='text-primary'>Genre :</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ipsum doloremque, iure dolore facere unde natus sapiente eveniet nemo molestiae consectetur repudiandae, ipsa ex sint.</p>
                <Button color='primary'>Primary</Button>
            </Col>
            <Col md={4}>
                <img src="https://m.media-amazon.com/images/M/MV5BNWRkMjdiOWMtNjc1Mi00NDQ0LThlMTYtNDZkMzg3MjU0N2Y2XkEyXkFqcGdeQXVyNDgwODg4NjI@._V1_.jpg" alt="hero" width={200}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Hero
